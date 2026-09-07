import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

function loadModule(path, globals = {}, dependencies = {}) {
  const source = readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX }
  });
  const loadedModule = { exports: {} };
  runInNewContext(outputText, {
    module: loadedModule,
    exports: loadedModule.exports,
    process: { env: { NODE_ENV: "production" } },
    require(name) {
      assert.ok(name in dependencies, `Unexpected dependency: ${name}`);
      return dependencies[name];
    },
    ...globals
  }, { filename: path });
  return loadedModule.exports;
}

function storage() {
  const values = new Map();
  return {
    blocked: false,
    getItem(key) { if (this.blocked) throw new Error("Storage unavailable"); return values.get(key) ?? null; },
    setItem(key, value) { if (this.blocked) throw new Error("Storage unavailable"); values.set(key, value); }
  };
}

function setup() {
  const scripts = new Map();
  const calls = [];
  const listeners = new Map();
  const localStorage = storage();
  const sessionStorage = storage();
  const window = {
    localStorage,
    sessionStorage,
    addEventListener(type, callback) { listeners.set(type, callback); },
    removeEventListener(type) { listeners.delete(type); },
    dispatchEvent(event) { listeners.get(event.type)?.(event); },
    setTimeout(callback) { callback(); }
  };
  const document = {
    getElementById(id) { return scripts.get(id); },
    createElement() { return { remove() { scripts.delete(this.id); } }; },
    head: { appendChild(script) { scripts.set(script.id, script); } }
  };
  const globals = { window, document, CustomEvent, Event };
  const pixel = loadModule("lib/chatgpt-ads.ts", globals);
  const consent = loadModule("lib/cookie-consent.ts", globals);
  function setConsent(marketing, version = consent.COOKIE_CONSENT_VERSION) {
    localStorage.setItem(consent.COOKIE_CONSENT_STORAGE_KEY, JSON.stringify({ necessary: true, analytics: false, marketing, version }));
    window.dispatchEvent(new CustomEvent("veytra:consent-updated", { detail: { necessary: true, analytics: false, marketing } }));
  }
  function loadSdk() {
    const script = scripts.get("veytra-chatgpt-ads-pixel");
    assert.ok(script);
    const queued = window.oaiq.q || [];
    window.oaiq = (...args) => calls.push(args);
    queued.forEach((args) => window.oaiq(...args));
    script.onload();
  }
  function mountTracking() {
    const tracking = loadModule("components/TrackingManager.tsx", globals, {
      react: { useEffect(effect) { effect(); } },
      "@/lib/chatgpt-ads": pixel,
      "@/lib/cookie-consent": consent
    });
    tracking.TrackingManager();
  }
  return { window, globals, scripts, calls, pixel, consent, setConsent, loadSdk, mountTracking,
    measurements: () => calls.filter(([command]) => command === "measure") };
}

const validFields = {
  firstName: "Test", lastName: "Person", name: "Test Person", email: "lead@example.test",
  phone: "+49 123 456789", company: "Example", audience: "Gründer", message: "Test inquiry",
  privacyAccepted: "on", privacy: "on", website: ""
};

function contactApi({ fail = false } = {}) {
  const sent = [];
  const validations = loadModule("lib/validations.ts");
  const api = loadModule("app/api/contact/route.ts", {
    process: { env: { RESEND_API_KEY: "test-placeholder", CONTACT_TO_EMAIL: "recipient@example.test", CONTACT_FROM_EMAIL: "sender@example.test" } }
  }, {
    "node:crypto": { randomUUID },
    "next/server": { NextResponse: { json(body, init) { return new Response(JSON.stringify(body), init); } } },
    resend: { Resend: class { emails = { send: async (message) => { sent.push(message); return fail ? { error: { message: "Simulated delivery failure" } } : { data: { id: "test-mail-id" }, error: null }; } }; } },
    "@/lib/contact": { createContactEmailHtml: () => "Test", createContactEmailText: () => "Test" },
    "@/lib/validations": validations
  });
  return { sent, fetch: (_url, init) => api.POST(new Request("https://example.test/api/contact", init)) };
}

async function submitForm(ctx, name, api, overrides = {}) {
  const states = [];
  const redirects = [];
  const form = { reset() {}, fields: { ...validFields, ...overrides } };
  const jsx = (type, props) => ({ type, props });
  const componentModule = loadModule(`components/${name}.tsx`, {
    ...ctx.globals,
    fetch: api.fetch,
    FormData: class { constructor(form) { this.form = form; } get(key) { return this.form.fields[key] ?? null; } }
  }, {
    "next/navigation": { useRouter: () => ({ push: (url) => redirects.push(url) }) },
    react: { useState: (initial) => [initial, (state) => states.push(state)] },
    "react/jsx-runtime": { jsx, jsxs: jsx }
  });
  const element = componentModule[name]({ idPrefix: "test" });
  await element.props.onSubmit({ preventDefault() {}, currentTarget: form });
  return { states, redirects };
}

test("no script or conversion without marketing consent, including legacy consent", () => {
  for (const version of [1, 2]) {
    const ctx = setup();
    ctx.setConsent(version === 1, version);
    ctx.mountTracking();
    ctx.window.dispatchEvent(new CustomEvent("veytra:lead-conversion", { detail: { eventId: "test-lead" } }));
    assert.equal(ctx.scripts.size, 0);
    assert.equal(ctx.measurements().length, 0);
  }
});

test("initializes the supplied pixel once, with consent before init and debug off in production", () => {
  const ctx = setup();
  ctx.pixel.syncChatGptAdsConsent(true);
  ctx.pixel.syncChatGptAdsConsent(true);
  assert.equal(ctx.scripts.size, 1);
  assert.equal([...ctx.scripts.values()][0].src, "https://bzrcdn.openai.com/sdk/oaiq.min.js");
  ctx.loadSdk();
  assert.equal(ctx.calls[0][0], "consent");
  assert.equal(ctx.calls[0][1], false);
  const inits = ctx.calls.filter(([command]) => command === "init");
  assert.equal(inits.length, 1);
  assert.equal(inits[0][1].pixelId, "PQF8w1AJthqXZf5zVV25vn");
  assert.equal(inits[0][1].debug, false);
  assert.equal(ctx.measurements().length, 0);
});

for (const name of ["ContactForm", "InvestorForm"]) {
  test(`${name}: a delivered request emits one lead_created with the server event ID`, async () => {
    const ctx = setup();
    ctx.setConsent(true); ctx.mountTracking(); ctx.loadSdk();
    const api = contactApi();
    const result = await submitForm(ctx, name, api);
    assert.equal(api.sent.length, 1);
    assert.equal(result.states.at(-1).status, "success");
    assert.deepEqual(result.redirects, ["/anfrage-bestaetigt"]);
    assert.equal(ctx.measurements().length, 1);
    const [, event, data, options] = ctx.measurements()[0];
    assert.equal(event, "lead_created");
    assert.deepEqual(JSON.parse(JSON.stringify(data)), { type: "customer_action" });
    assert.match(options.event_id, /^[a-f0-9-]{36}$/);
    assert.equal(JSON.stringify(ctx.measurements()).includes(validFields.email), false);
    ctx.window.dispatchEvent(new CustomEvent("veytra:lead-conversion", { detail: { eventId: options.event_id } }));
    assert.equal(ctx.measurements().length, 1);
    await submitForm(ctx, name, api);
    assert.equal(ctx.measurements().length, 2, "another delivered inquiry must count separately");
  });

  test(`${name}: validation and delivery errors do not emit conversions`, async () => {
    for (const failure of ["validation", "delivery"]) {
      const ctx = setup(); ctx.setConsent(true); ctx.mountTracking(); ctx.loadSdk();
      const api = contactApi({ fail: failure === "delivery" });
      const result = await submitForm(ctx, name, api, failure === "validation" ? { email: "invalid" } : {});
      assert.equal(result.states.at(-1).status, "error");
      assert.equal(ctx.measurements().length, 0);
      assert.equal(result.redirects.length, 0);
    }
  });
}

test("a successful form submission waits for a slow SDK, then emits once", async () => {
  const ctx = setup(); ctx.setConsent(true); ctx.mountTracking();
  const result = await submitForm(ctx, "ContactForm", contactApi());
  assert.equal(result.states.at(-1).status, "success");
  assert.equal(ctx.measurements().length, 0);
  ctx.loadSdk();
  assert.equal(ctx.measurements().length, 1);
});

test("withdrawal discards pending conversions and re-consent does not replay them", () => {
  const ctx = setup();
  ctx.pixel.syncChatGptAdsConsent(true);
  ctx.pixel.trackChatGptLead("pending-lead");
  ctx.pixel.syncChatGptAdsConsent(false);
  ctx.loadSdk();
  ctx.pixel.syncChatGptAdsConsent(true);
  assert.equal(ctx.measurements().length, 0);
  ctx.pixel.trackChatGptLead("new-lead");
  assert.equal(ctx.measurements().length, 1);
});

test("withdrawal in another tab disables subsequent measurement", () => {
  const ctx = setup(); ctx.setConsent(true); ctx.mountTracking(); ctx.loadSdk();
  ctx.window.localStorage.setItem(ctx.consent.COOKIE_CONSENT_STORAGE_KEY, JSON.stringify({ necessary: true, analytics: false, marketing: false, version: 2 }));
  ctx.window.dispatchEvent({ type: "storage", key: ctx.consent.COOKIE_CONSENT_STORAGE_KEY });
  ctx.pixel.trackChatGptLead("after-revocation");
  assert.equal(ctx.measurements().length, 0);
  assert.equal(ctx.calls.at(-1)[1], false);
});

test("SDK loading failures can retry and do not interrupt a successful form submission", async () => {
  const ctx = setup(); ctx.setConsent(true); ctx.mountTracking();
  [...ctx.scripts.values()][0].onerror();
  const result = await submitForm(ctx, "ContactForm", contactApi());
  assert.equal(result.states.at(-1).status, "success");
  assert.equal(ctx.scripts.size, 1);
  ctx.loadSdk();
  assert.equal(ctx.measurements().length, 1);
});

test("deduplication still works when browser storage is unavailable", () => {
  const ctx = setup(); ctx.window.sessionStorage.blocked = true;
  ctx.pixel.syncChatGptAdsConsent(true); ctx.loadSdk();
  assert.doesNotThrow(() => { ctx.pixel.trackChatGptLead("lead-one"); ctx.pixel.trackChatGptLead("lead-one"); });
  assert.equal(ctx.measurements().length, 1);
});

test("a reload remembers event IDs without treating the confirmation page as a new lead", () => {
  const ctx = setup(); ctx.pixel.syncChatGptAdsConsent(true); ctx.loadSdk();
  ctx.pixel.trackChatGptLead("existing-lead");
  const reloaded = setup();
  reloaded.window.sessionStorage.setItem("veytra-chatgpt-leads-sent", ctx.window.sessionStorage.getItem("veytra-chatgpt-leads-sent"));
  reloaded.pixel.syncChatGptAdsConsent(true); reloaded.loadSdk();
  assert.equal(reloaded.measurements().length, 0);
  reloaded.pixel.trackChatGptLead("existing-lead");
  assert.equal(reloaded.measurements().length, 0);
});

test("malformed or stale cookie choices never grant tracking consent", () => {
  const ctx = setup();
  for (const value of ['broken json', 'null', '{"version":2,"necessary":true,"analytics":false,"marketing":"true"}', '{"version":1,"necessary":true,"analytics":true,"marketing":true}']) {
    ctx.window.localStorage.setItem(ctx.consent.COOKIE_CONSENT_STORAGE_KEY, value);
    assert.equal(ctx.consent.readCookieConsent(), null);
  }
});
