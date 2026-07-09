import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

const pricingSeo = {
  title: "Venture Studio Preise: Equity, Build-Fee & Audit | Veytra",
  description:
    "Venture Studio Preise bei Veytra: 3.500 € Venture-Audit, Equity-Modell, Hybrid mit 3.000-8.000 €+ Build-Fee und Corporate-Modell ab 8.000 €+.",
  path: "/preise"
};

export const metadata: Metadata = createMetadata(pricingSeo);

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Venture Studio Preise und Modelle",
  description: pricingSeo.description,
  url: absoluteUrl(pricingSeo.path),
  provider: {
    "@type": "Organization",
    name: "Veytra",
    url: absoluteUrl("/")
  },
  serviceType: [
    "Venture Studio",
    "Venture-Audit",
    "Equity-Modell",
    "Hybrid-Modell",
    "Corporate Venture Building"
  ],
  offers: {
    "@type": "OfferCatalog",
    name: "Veytra Build-Modelle",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Venture-Audit",
        price: "3500",
        priceCurrency: "EUR",
        description: "Fixpreis vor jedem operativen Venture-Build."
      },
      {
        "@type": "Offer",
        name: "Reines Equity-Modell",
        description: "Keine laufende Build-Fee; Beteiligung mind. 30 %, max. 40 %."
      },
      {
        "@type": "Offer",
        name: "Hybrid-Modell",
        description: "3.000 € bis 8.000 €+ monatliche Build-Fee plus reduzierte Beteiligung."
      },
      {
        "@type": "Offer",
        name: "Corporate-Modell",
        description: "8.000 € bis 25.000 €+ monatliches Build-Budget, 0 % Equity und optionale Erfolgsbeteiligung."
      }
    ]
  },
  areaServed: ["Deutschland", "DACH"]
};

const heroLinks = [
  { label: "Build-Modelle", href: "#build-modelle" },
  { label: "Preislogik", href: "#preislogik" },
  { label: "Venture-Audit", href: "#venture-audit" },
  { label: "Stop-Logik", href: "#stop-logik" }
];

const buildModels = [
  {
    number: "01",
    title: "Reines Equity-Modell",
    subtitle: "Für Gründer ohne großes Startkapital, aber mit starker Marktnähe.",
    body: "Veytra bringt Produkt, Design, Tech und Launch operativ ein. Statt einer laufenden Build-Fee wird eine Beteiligung am Venture vorher vertraglich vereinbart.",
    facts: [
      ["Kosten", "keine laufende Build-Fee"],
      ["Beteiligung", "mind. 30 %, max. 40 %"]
    ]
  },
  {
    number: "02",
    title: "Hybrid-Modell",
    subtitle: "Für finanzierte Teams, die schneller bauen wollen und Equity schonen möchten.",
    body: "Eine monatliche Build-Fee deckt einen Teil der laufenden Ressourcen. Dadurch sinkt die Beteiligung von Veytra und der Build kann mit klarer Geschwindigkeit starten.",
    facts: [
      ["Kosten", "3.000 € bis 8.000 €+ / Monat"],
      ["Beteiligung", "mind. 10 %, max. 20 %"]
    ]
  },
  {
    number: "03",
    title: "Corporate-Modell",
    subtitle: "Am besten geeignet für Unternehmen, die eine neue Marktchance außerhalb der Linienlogik testen wollen.",
    body: "Das Unternehmen finanziert den Venture-Build. Veytra baut operativ mit. Statt klassischer Equity kann eine optionale Erfolgsbeteiligung am neuen Geschäftsmodell vereinbart werden.",
    facts: [
      ["Kosten", "8.000 € bis 25.000 €+ / Monat"],
      ["Beteiligung", "0 % Equity, optionale Erfolgsbeteiligung"]
    ]
  }
];

const pricingPrinciples = [
  {
    number: "01",
    eyebrow: "Keine Agenturlogik",
    title: "Nicht an Stunden gebunden. Sondern an eine Idee.",
    body: "Wir starten keinen Retainer, nur damit Arbeit entsteht. Vor dem Build wird festgelegt, welche Venture-These verfolgt wird, welche Verantwortung Veytra übernimmt und woran Fortschritt gemessen wird."
  },
  {
    number: "02",
    eyebrow: "Schriftliche Regeln",
    title: "Der Deal wird geklärt, bevor Geschwindigkeit entsteht.",
    body: "Rollen, Rechte, Kosten, Beteiligung, externe Ausgaben und Stop-Kriterien werden vorher schriftlich vereinbart. Nicht irgendwann, nicht nebenbei, sondern vor dem operativen Aufbau."
  },
  {
    number: "03",
    eyebrow: "Gate statt Dauerlauf",
    title: "Weitergebaut wird nur, wenn neue Signale entstehen.",
    body: "Ein Venture läuft nicht automatisch monatelang weiter. Nach Audit, Validierung, MVP und Launch wird entschieden: ausbauen, anpassen oder sauber stoppen."
  },
  {
    number: "04",
    eyebrow: "Risiko entscheidet",
    title: "Je weniger Build-Fee, desto mehr geteiltes Risiko.",
    body: "Wenn Veytra stärker über operative Leistung und Risiko investiert, steigt die Beteiligung. Wenn Budget vorhanden ist, kann die Beteiligung kleiner oder anders strukturiert werden."
  },
  {
    number: "05",
    eyebrow: "Transparenz",
    title: "Externe Kosten werden nicht versteckt.",
    body: "Ads, Tools, Hosting, Legal, Buchhaltung oder weitere Spezialkosten werden separat geklärt. So bleibt sichtbar, was in den Build fließt und was echte Drittleistung ist."
  },
  {
    number: "06",
    eyebrow: "Pflicht vor dem Start",
    title: "Jeder Build beginnt mit dem Venture-Audit.",
    body: "Erst wenn Idee, Markt, Produktlogik, Scope und Deal-Modell geprüft sind, entscheiden wir über Equity, Hybrid oder Corporate-Aufbau.",
    cta: "Zum Venture-Audit"
  }
];

const stopRules = [
  "Kampagnen, Smoke-Test und MVP werden gestoppt oder offline gestellt.",
  "Es entstehen keine endlosen Monatskosten, wenn die Marktsignale ausbleiben.",
  "Assets, Daten, Zugänge und Learnings werden sauber übergeben oder archiviert.",
  "Offene externe Tool-, Ads- oder Hosting-Kosten werden nach Vereinbarung abgerechnet."
];

export default function PricingPage() {
  return (
    <>
      <StructuredData data={pricingSchema} />
      <section className="relative overflow-hidden border-b border-neutral-200 bg-neutral-50">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,23,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(23,23,23,0.035)_1px,transparent_1px)] bg-[size:112px_112px] opacity-70" />
        <div className="relative mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-28">
          <div data-reveal="slide" className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Preis & Modelle
            </p>
            <h1 className="mt-6 text-3xl font-semibold leading-tight text-neutral-950 md:text-5xl">
              Venture Studio Preise: ohne volles Startkapital starten, aber mit klarer Deal-Logik.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600 md:mt-7 md:text-xl md:leading-9">
              Du musst nicht alles vorfinanzieren, um mit Veytra zu starten. Je nach Idee,
              Marktchance und Ausgangslage arbeiten wir mit Equity, Build-Fee, Asset Share oder
              Revenue Share.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontakt"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-950 bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
              >
                Modell klären
              </Link>
              <Link
                href="/prozess"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-950 transition hover:border-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
              >
                Prozess ansehen
              </Link>
            </div>
            <div data-reveal="slide" data-reveal-delay="120ms" className="mt-7 grid gap-2 sm:grid-cols-2">
              {heroLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border border-neutral-200 bg-white/80 px-4 py-3 text-sm font-semibold text-neutral-800 shadow-[0_12px_40px_rgba(23,23,23,0.04)] transition hover:border-neutral-950"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-3 md:mt-12 md:grid-cols-3 md:gap-4">
            {[
              ["Build-Fee", "0 € bis 25.000 €+ / Monat"],
              ["Beteiligung", "abhängig von Risiko und Beitrag"],
              ["Externe Kosten", "Ads, Tools, Legal separat klären"]
            ].map(([label, value], index) => (
              <div
                key={label}
                data-reveal="slide"
                data-reveal-delay={`${index * 70}ms`}
                className="border border-neutral-200 bg-white p-5"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  {label}
                </p>
                <p className="mt-4 text-lg font-semibold leading-tight text-neutral-950 md:text-xl">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="build-modelle" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <div data-reveal="slide" className="border-b border-neutral-200 pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Build-Modelle
            </p>
            <h2 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Drei Wege, wie ein Venture mit Veytra finanziert und gebaut werden kann.
            </h2>
            <p className="mt-6 max-w-5xl text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
              Links steht das Produkt. Rechts siehst du, wie Kosten, Beteiligung und Risiko
              grundsätzlich verteilt werden. Der konkrete Deal wird immer vor dem Start
              schriftlich vereinbart.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {buildModels.map((model, index) => (
              <article
                key={model.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 70}ms`}
                className="grid gap-6 border border-neutral-200 bg-white p-5 transition hover:border-neutral-950 md:grid-cols-[0.38fr_0.62fr] md:gap-7 md:p-8"
              >
                <div>
                  <p className="text-sm font-semibold tabular-nums text-neutral-500">{model.number}</p>
                  <h3 className="mt-5 text-xl font-semibold leading-tight text-neutral-950 md:mt-6 md:text-3xl">
                    {model.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base md:leading-8">{model.subtitle}</p>
                </div>
                <div>
                  <p className="text-sm leading-7 text-neutral-600 md:text-lg md:leading-9">
                    {model.body}
                  </p>
                  <div className="mt-6 grid gap-3 md:mt-7 md:grid-cols-2">
                    {model.facts.map(([label, value]) => (
                      <div key={label} className="border border-neutral-200 bg-neutral-50 p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                          {label}
                        </p>
                        <p className="mt-3 text-sm font-semibold leading-6 text-neutral-800">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="preislogik" className="scroll-mt-20 overflow-hidden border-y border-neutral-200 bg-neutral-950 text-white">
        <div className="relative mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:92px_92px] opacity-30" />
          <div className="relative">
            <div data-reveal="slide" className="border-b border-neutral-800 pb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Preislogik
              </p>
              <h2 className="mt-5 max-w-5xl text-2xl font-semibold leading-tight md:text-4xl">
                Der Preis entsteht aus Risiko, nicht aus Stunden.
              </h2>
              <p className="mt-6 max-w-5xl text-base leading-8 text-neutral-300 md:text-lg md:leading-9">
                Wichtig ist nicht nur, was ein Build kostet. Wichtig ist, wie Verantwortung,
                Beteiligung und Stop-Punkte geregelt sind, bevor aus einer Idee ein echtes Venture
                wird.
              </p>
            </div>

            <div className="mt-10 grid gap-3">
              {pricingPrinciples.map((item, index) => (
                <article
                  key={item.title}
                  data-reveal="slide"
                  data-reveal-delay={`${index * 70}ms`}
                  className="pricing-principle-card relative overflow-hidden border border-white/10 bg-white/[0.035] p-5 transition hover:border-white/25 md:p-6"
                >
                  <div className="relative grid gap-4 md:gap-5 lg:grid-cols-[72px_190px_1fr_auto] lg:items-center">
                    <div className="flex items-center justify-between gap-4 lg:block">
                      <p className="text-sm font-semibold tabular-nums text-neutral-500">
                        {item.number}
                      </p>
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      {item.eyebrow}
                    </p>
                    <div>
                      <h3 className="text-lg font-semibold leading-tight text-white md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-neutral-400 md:text-base md:leading-8">
                        {item.body}
                      </p>
                    </div>
                    {"cta" in item ? (
                      <a
                        href="#venture-audit"
                        className="inline-flex min-h-11 items-center justify-center rounded-[6px] border border-white bg-white px-4 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
                      >
                        {item.cta}
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="venture-audit" className="scroll-mt-20 border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div data-reveal="slide" className="lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Venture-Audit
              </p>
              <h2 className="mt-5 text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
                Erst prüfen wir die Idee. Dann entscheiden wir über den Build.
              </h2>
              <p className="mt-6 text-base leading-8 text-neutral-600 md:text-lg">
                Das Audit schützt vor falschem Tempo. Wir validieren Problem, Markt,
                Zielgruppe, Produktlogik und wirtschaftliches Potenzial, bevor unnötig Zeit,
                Budget und weitere Kosten in einen Build fließen. Zusätzlich holen wir
                Experteneinschätzungen ein, damit die Chance nicht nur gut klingt, sondern
                belastbar geprüft ist.
              </p>
            </div>

            <div className="grid gap-4">
              <article data-reveal="scale" className="relative overflow-hidden border border-neutral-200 bg-white p-6 shadow-[0_24px_80px_rgba(23,23,23,0.06)] md:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,23,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(23,23,23,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
                <div className="relative grid gap-8 md:grid-cols-[0.42fr_0.58fr] md:items-end">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      Fixpreis vor dem Build
                    </p>
                    <p className="mt-5 text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">3.500 €</p>
                    <p className="mt-3 text-base font-semibold text-neutral-950">100 % Vorkasse</p>
                  </div>
                  <p className="text-base leading-8 text-neutral-600">
                    Ergebnis: ein validierter Bauplan mit Positionierung, Produktlogik,
                    Kostenrahmen, Risiko-Einschätzung und Empfehlung für Equity-, Hybrid- oder
                    Corporate-Modell.
                  </p>
                </div>
              </article>

              <div className="grid gap-3 md:grid-cols-3 md:gap-4">
                {[
                  ["Prüfen", "Problem, Markt, Zielgruppe, Wettbewerb und wirtschaftliche Plausibilität."],
                  ["Bestätigen", "Potenzial, Schwachstellen und Annahmen werden mit Expertenblick eingeordnet."],
                  ["Entscheiden", "Erst danach wird gebaut, angepasst oder bewusst nicht weiter investiert."]
                ].map(([title, body], index) => (
                  <article
                    key={title}
                    data-reveal="slide"
                    data-reveal-delay={`${index * 70}ms`}
                    className="border border-neutral-200 bg-white p-5"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      Schritt {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-5 text-lg font-semibold text-neutral-950">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-neutral-600">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stop-logik" className="scroll-mt-20 bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-14 md:gap-10 md:px-8 md:py-24 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div data-reveal="slide">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Stop-Logik
            </p>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Wenn der MVP keine Signale liefert, wird sauber gestoppt.
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-600 md:text-lg">
              Wir bauen nicht weiter, nur weil schon angefangen wurde. Wenn Nachfrage, Conversion,
              Zahlungsbereitschaft oder Akquisekosten nicht passen, wird das Vorhaben geordnet
              beendet.
            </p>
          </div>

          <div className="grid gap-3">
            {stopRules.map((item, index) => (
              <div
                key={item}
                data-reveal="slide"
                data-reveal-delay={`${index * 60}ms`}
                className="grid gap-3 border border-neutral-200 bg-neutral-50 p-5 md:grid-cols-[64px_1fr] md:gap-4"
              >
                <p className="text-sm font-semibold tabular-nums text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-base leading-8 text-neutral-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Willst du wissen, welches Modell für deine Idee passt?"
        description="Wir prüfen Idee, Marktchance, MVP-Scope, Risiko, Budget und Beteiligungslogik. Danach weißt du, welches Modell realistisch ist."
        primaryLabel="Modell klären"
        secondaryLabel="Prozess ansehen"
        secondaryHref="/prozess"
      />
    </>
  );
}
