export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export const COOKIE_CONSENT_STORAGE_KEY = "veytra-cookie-consent";
// Ask again when the disclosed providers change (v2 adds ChatGPT Ads).
export const COOKIE_CONSENT_VERSION = 2;

export function readCookieConsent(): CookieConsent | null {
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const consent: unknown = JSON.parse(raw);
    if (!consent || typeof consent !== "object") return null;
    const value = consent as Record<string, unknown>;
    if (
      value.version !== COOKIE_CONSENT_VERSION ||
      value.necessary !== true ||
      typeof value.analytics !== "boolean" ||
      typeof value.marketing !== "boolean"
    ) return null;
    return { necessary: true, analytics: value.analytics, marketing: value.marketing };
  } catch {
    return null;
  }
}
