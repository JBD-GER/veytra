"use client";

type CookieSettingsButtonProps = {
  className?: string;
};

export function CookieSettingsButton({ className }: CookieSettingsButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("veytra:cookie-settings"))}
      className={className ?? "text-sm text-neutral-600 transition hover:text-neutral-950"}
    >
      Cookie-Einstellungen
    </button>
  );
}
