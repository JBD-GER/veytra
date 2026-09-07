// OpenAI Measurement Pixel: https://developers.openai.com/ads/measurement-pixel
const PIXEL_ID = "PQF8w1AJthqXZf5zVV25vn";
const SCRIPT_ID = "veytra-chatgpt-ads-pixel";
const SDK_URL = "https://bzrcdn.openai.com/sdk/oaiq.min.js";
const SENT_EVENTS_KEY = "veytra-chatgpt-leads-sent";
const MAX_EVENTS = 100;

type PixelCommand =
  | ["consent", boolean]
  | ["init", { pixelId: string; debug: boolean }]
  | ["measure", "lead_created", { type: "customer_action" }, { event_id: string }];

type PixelQueue = ((...args: PixelCommand) => void) & { q?: PixelCommand[] };

declare global {
  interface Window {
    oaiq?: PixelQueue;
  }
}

let consentGranted = false;
let initialized = false;
let sdkReady = false;
const pendingEvents = new Set<string>();
const sentEvents = new Set<string>();

export function syncChatGptAdsConsent(granted: boolean) {
  consentGranted = granted === true;

  if (!consentGranted) {
    pendingEvents.clear();
    callPixel("consent", false);
    return;
  }

  ensurePixel();
  callPixel("consent", true);
  flushPendingEvents();
}

export function trackChatGptLead(eventId: string) {
  // Only accept opaque IDs returned by the successful contact API response.
  if (!consentGranted || !/^[a-zA-Z0-9_-]{1,128}$/.test(eventId) || wasSent(eventId)) return;
  if (pendingEvents.size >= MAX_EVENTS) return;

  pendingEvents.add(eventId);
  ensurePixel();
  flushPendingEvents();
}

function ensurePixel() {
  try {
    if (!window.oaiq) {
      const queue: PixelQueue = (...args) => { queue.q?.push(args); };
      queue.q = [];
      window.oaiq = queue;
    }

    if (!initialized) {
      // Set a denial before init because the SDK defaults to granted consent.
      window.oaiq("consent", false);
      window.oaiq("init", { pixelId: PIXEL_ID, debug: process.env.NODE_ENV !== "production" });
      initialized = true;
    }

    if (sdkReady || document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = SDK_URL;
    script.onload = () => {
      sdkReady = true;
      callPixel("consent", consentGranted);
      flushPendingEvents();
    };
    script.onerror = () => {
      // Allow a later successful submission or consent update to retry loading.
      script.remove();
      sdkReady = false;
    };
    document.head.appendChild(script);
  } catch {
    // Measurement must never interrupt the inquiry or its confirmation.
  }
}

function callPixel(...args: PixelCommand) {
  try {
    window.oaiq?.(...args);
  } catch {
    // Ad blockers and third-party SDK failures must not affect the form.
  }
}

function flushPendingEvents() {
  if (!sdkReady || !consentGranted || !window.oaiq) return;

  for (const eventId of pendingEvents) {
    if (wasSent(eventId)) {
      pendingEvents.delete(eventId);
      continue;
    }

    try {
      window.oaiq("measure", "lead_created", { type: "customer_action" }, { event_id: eventId });
      pendingEvents.delete(eventId);
      rememberSent(eventId);
    } catch {
      // Keep the event pending while consent is granted; revoke clears it.
      return;
    }
  }
}

function storedEventIds(): string[] {
  try {
    const value: unknown = JSON.parse(window.sessionStorage.getItem(SENT_EVENTS_KEY) || "[]");
    return Array.isArray(value)
      ? value.filter((item): item is string => typeof item === "string").slice(-MAX_EVENTS)
      : [];
  } catch {
    return [];
  }
}

function wasSent(eventId: string) {
  return sentEvents.has(eventId) || storedEventIds().includes(eventId);
}

function rememberSent(eventId: string) {
  sentEvents.add(eventId);
  try {
    const events = [...new Set([...storedEventIds(), eventId])].slice(-MAX_EVENTS);
    window.sessionStorage.setItem(SENT_EVENTS_KEY, JSON.stringify(events));
  } catch {
    // The in-memory set still deduplicates when session storage is unavailable.
  }
}
