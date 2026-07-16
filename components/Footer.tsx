import Link from "next/link";

import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { LogoWordmark } from "@/components/LogoWordmark";
import { legalNavigationItems } from "@/content/navigation";
import { site } from "@/lib/site";

const footerPageItems = [
  { label: "Venture Studio", href: "/venture-studio" },
  { label: "AI Venture Studio", href: "/ai-venture-studio" },
  { label: "Inkubator Hannover", href: "/inkubator-hannover" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Studio OS", href: "/studio-os" },
  { label: "Prozess", href: "/prozess" },
  { label: "Preise", href: "/preise" },
  { label: "Ratgeber", href: "/ratgeber" }
];

const footerAudienceItems = [
  { label: "Für Unternehmen", href: "/fuer-unternehmen" },
  { label: "Für Gründer", href: "/fuer-gruender" },
  { label: "Für Startups", href: "/fuer-startups" },
  { label: "Für Investoren", href: "/fuer-investoren" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Geschichte", href: "/geschichte" },
  { label: "Kontakt", href: "/kontakt" }
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <LogoWordmark />
            <p className="mt-5 text-sm leading-7 text-neutral-600">
              Veytra entwickelt, validiert und baut technologiegetriebene Ventures:
              SaaS, Apps, AI-Produkte, Plattformen und neue digitale Geschäftsmodelle.
              Nicht als Dienstleister, sondern als operativer Geschäftspartner.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Seiten
              </p>
              <ul className="mt-4 grid gap-3">
                {footerPageItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-neutral-600 transition hover:text-neutral-950">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Zielgruppen
              </p>
              <ul className="mt-4 grid gap-3">
                {footerAudienceItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-neutral-600 transition hover:text-neutral-950">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Rechtliches
              </p>
              <ul className="mt-4 grid gap-3">
                {legalNavigationItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-neutral-600 transition hover:text-neutral-950">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <CookieSettingsButton />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.company.name}. Alle Rechte vorbehalten.</p>
          <Link href="/kontakt" className="text-neutral-700 transition hover:text-neutral-950">
            Venture anfragen
          </Link>
        </div>
      </div>
    </footer>
  );
}
