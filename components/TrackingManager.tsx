"use client";

import { useEffect } from "react";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    veytraGoogleTagLoaded?: boolean;
    veytraGoogleTagManagerLoaded?: boolean;
    veytraTrackConversion?: (eventName?: string) => void;
  }
}

const STORAGE_KEY = "veytra-cookie-consent";
const LEAD_CONVERSION_KEY = "veytra-lead-conversion-sent";
const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "";
const googleTagManagerId =
  process.env.NEXT_PUBLIC_GTM_ID || (googleTagId.startsWith("GTM-") ? googleTagId : "");
const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || (googleTagId.startsWith("G-") ? googleTagId : "");
const googleAdsId =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ||
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID ||
  (googleTagId.startsWith("AW-") ? googleTagId : "");
const googleAdsConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || "";

export function TrackingManager() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    const storedConsent = readConsent();
    if (storedConsent) applyConsent(storedConsent);

    window.veytraTrackConversion = (eventName = "lead_form_submit") => {
      const consent = readConsent();
      if (!consent?.marketing) return;
      sendLeadConversion(eventName);
    };

    function handleConsentUpdate(event: Event) {
      const consent = (event as CustomEvent<Consent>).detail;
      applyConsent(consent);
    }

    function handleLeadConversion() {
      window.veytraTrackConversion?.();
    }

    window.addEventListener("veytra:consent-updated", handleConsentUpdate);
    window.addEventListener("veytra:lead-conversion", handleLeadConversion);

    return () => {
      window.removeEventListener("veytra:consent-updated", handleConsentUpdate);
      window.removeEventListener("veytra:lead-conversion", handleLeadConversion);
      delete window.veytraTrackConversion;
    };
  }, []);

  return null;
}

function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function applyConsent(consent: Consent) {
  window.dataLayer = window.dataLayer || [];
  window.gtag?.("consent", "update", {
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    analytics_storage: consent.analytics ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted"
  });
  window.dataLayer.push({
    event: "veytra_consent_update",
    analytics: consent.analytics,
    marketing: consent.marketing
  });

  if ((consent.analytics || consent.marketing) && googleTagManagerId) {
    ensureGoogleTagManager(googleTagManagerId);
  }
  if (consent.analytics) loadAnalyticsTracking();
  if (consent.marketing) loadMarketingTracking();
}

function loadAnalyticsTracking() {
  if (!gaMeasurementId) return;
  ensureGoogleTag(gaMeasurementId);
  window.gtag?.("config", gaMeasurementId, {
    anonymize_ip: true
  });
}

function loadMarketingTracking() {
  if (googleTagManagerId) ensureGoogleTagManager(googleTagManagerId);
  if (!googleAdsId) return;
  ensureGoogleTag(googleAdsId);
  window.gtag?.("config", googleAdsId);
}

function sendLeadConversion(eventName: string) {
  if (window.sessionStorage.getItem(LEAD_CONVERSION_KEY) === "true") return;

  loadMarketingTracking();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    google_ads_id: googleAdsId,
    google_ads_conversion_label: googleAdsConversionLabel
  });

  if (googleAdsId && googleAdsConversionLabel) {
    window.gtag?.("event", "conversion", {
      send_to: `${googleAdsId}/${googleAdsConversionLabel}`
    });
  } else {
    window.gtag?.("event", eventName);
  }

  window.sessionStorage.setItem(LEAD_CONVERSION_KEY, "true");
}

function ensureGoogleTag(tagId: string) {
  if (!tagId || window.veytraGoogleTagLoaded) return;
  window.veytraGoogleTagLoaded = true;
  injectScript("veytra-google-tag", `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(tagId)}`, {
    async: true,
    onload: () => window.gtag?.("js", new Date())
  });
}

function ensureGoogleTagManager(containerId: string) {
  if (!containerId || window.veytraGoogleTagManagerLoaded) return;
  window.veytraGoogleTagManagerLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  injectScript(
    "veytra-google-tag-manager",
    `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(containerId)}`,
    { async: true }
  );
}

function injectScript(
  id: string,
  src: string,
  options: {
    async?: boolean;
    defer?: boolean;
    onload?: () => void;
  } = {}
) {
  if (document.getElementById(id)) {
    options.onload?.();
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.async = options.async ?? false;
  script.defer = options.defer ?? false;
  script.src = src;
  if (options.onload) script.onload = options.onload;
  document.head.appendChild(script);
}
