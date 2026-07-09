"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "veytra-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const existing = readStoredConsent();
      if (existing) {
        setAnalytics(existing.analytics);
        setMarketing(existing.marketing);
      } else {
        setVisible(true);
      }
    });

    function openSettings() {
      const current = readStoredConsent();
      setAnalytics(Boolean(current?.analytics));
      setMarketing(Boolean(current?.marketing));
      setSettingsOpen(true);
      setVisible(true);
    }

    window.addEventListener("veytra:cookie-settings", openSettings);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("veytra:cookie-settings", openSettings);
    };
  }, []);

  function saveConsent(consent: Consent) {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        ...consent,
        version: 1,
        savedAt: new Date().toISOString()
      })
    );
    window.dispatchEvent(new CustomEvent("veytra:consent-updated", { detail: consent }));
    setAnalytics(consent.analytics);
    setMarketing(consent.marketing);
    setVisible(false);
    setSettingsOpen(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-end bg-neutral-950/55 p-3 backdrop-blur-sm sm:items-center sm:justify-center md:p-5">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
        className="w-full max-w-3xl overflow-hidden rounded-[8px] border border-neutral-200 bg-white shadow-[0_28px_120px_rgba(0,0,0,0.26)]"
      >
        <div className="border-b border-neutral-200 p-5 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Datenschutz & Tracking
          </p>
          <h2 id="cookie-banner-title" className="mt-3 text-xl font-semibold leading-tight text-neutral-950 md:text-2xl">
            Cookie-Einstellungen für Veytra
          </h2>
          <p className="mt-4 text-sm leading-7 text-neutral-600">
            Wir nutzen notwendige Speicherungen für den Betrieb der Website. Google Analytics,
            Google Ads oder Google Tag Manager werden erst nach deiner Einwilligung aktiviert.
            Details findest du in der{" "}
            <Link href="/datenschutz" className="font-medium text-neutral-950 underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>

        {settingsOpen ? (
          <div className="grid gap-3 border-b border-neutral-200 bg-neutral-50 p-5 md:grid-cols-3 md:p-6">
            <ConsentOption
              title="Notwendig"
              description="Website-Betrieb und Speicherung deiner Auswahl."
              checked
              disabled
            />
            <ConsentOption
              title="Analyse"
              description="Google Analytics zur Auswertung der Website-Nutzung."
              checked={analytics}
              onChange={setAnalytics}
            />
            <ConsentOption
              title="Marketing"
              description="Google Ads, Conversion-Messung und Kampagnenauswertung."
              checked={marketing}
              onChange={setMarketing}
            />
          </div>
        ) : null}

        <div className="grid gap-2 p-5 sm:grid-cols-3 md:p-6">
          <button
            type="button"
            onClick={() => saveConsent({ necessary: true, analytics: true, marketing: true })}
            className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-950 bg-neutral-950 px-4 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
          >
            Alle akzeptieren
          </button>
          <button
            type="button"
            onClick={() =>
              settingsOpen
                ? saveConsent({ necessary: true, analytics, marketing })
                : setSettingsOpen(true)
            }
            className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-300 bg-white px-4 text-sm font-medium text-neutral-950 transition hover:border-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
          >
            {settingsOpen ? "Auswahl speichern" : "Auswahl anpassen"}
          </button>
          <button
            type="button"
            onClick={() => saveConsent({ necessary: true, analytics: false, marketing: false })}
            className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-200 bg-neutral-50 px-4 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
          >
            Nur notwendige
          </button>
        </div>
      </section>
    </div>
  );
}

function readStoredConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

type ConsentOptionProps = {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

function ConsentOption({ title, description, checked, disabled = false, onChange }: ConsentOptionProps) {
  return (
    <label className="grid min-h-36 cursor-pointer content-between rounded-[6px] border border-neutral-200 bg-white p-4 text-sm">
      <span>
        <span className="flex items-start justify-between gap-4">
          <span className="font-semibold text-neutral-950">{title}</span>
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={(event) => onChange?.(event.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-neutral-950"
          />
        </span>
        <span className="mt-4 block leading-6 text-neutral-600">{description}</span>
      </span>
    </label>
  );
}
