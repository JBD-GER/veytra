import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { ScrollFadingProcessCards, type ScrollFadingProcessCard } from "@/components/ScrollFadingProcessCards";
import { SectionIntro } from "@/components/SectionIntro";
import { StructuredData } from "@/components/StructuredData";
import { pageSeo } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = createMetadata(pageSeo.services);

const directServices = [
  {
    label: "01",
    title: "Ideenfindung",
    body: "Wir suchen Marktprobleme, Zielgruppen, Nischen und digitale Hebel, aus denen ein Venture entstehen kann."
  },
  {
    label: "02",
    title: "Venture-Audit",
    body: "Wir prüfen Idee, Markt, Angebot, Risiko, Timing und wirtschaftliche Logik, bevor unnötig gebaut wird."
  },
  {
    label: "03",
    title: "Validierung",
    body: "Wir testen Nachfrage, Kaufabsicht, Zielgruppe, Wettbewerb und Zahlungsbereitschaft mit echten Marktsignalen."
  },
  {
    label: "04",
    title: "MVP bauen",
    body: "Wir entwickeln den Produktkern: UX, Design, Software, App, AI-Logik, Plattform oder Automatisierung."
  },
  {
    label: "05",
    title: "Tech & Infrastruktur",
    body: "Wir setzen Architektur, Daten, Hosting, Tracking, Automationen, Integrationen und technische Basis auf."
  },
  {
    label: "06",
    title: "Launch & Marketing",
    body: "Wir bringen das Angebot in den Markt: Positionierung, Funnel, Google Ads, Meta Ads, Sales und Reporting."
  },
  {
    label: "07",
    title: "Company Build",
    body: "Wir bereiten Rollen, Gesellschaft, operative Geschäftsführung, Kapitalpfad und weiteren Ausbau vor."
  }
];

const serviceFlowCards: ScrollFadingProcessCard[] = [
  {
    label: "01",
    eyebrow: "Find",
    title: "Wir finden die Chance hinter der Idee.",
    body: "Aus Beobachtungen, Branchenwissen, Kundenzugang oder Daten entsteht eine klare Venture-These mit Zielgruppe, Problem, Angebot und erster Erlöslogik.",
    meta: ["Problem", "Zielgruppe", "These"]
  },
  {
    label: "02",
    eyebrow: "Audit",
    title: "Wir machen die Idee entscheidbar.",
    body: "Im Audit werden Annahmen, Marktlogik, Risiken, Wettbewerb, Ressourcen und Umsetzbarkeit geprüft. Danach ist klar, ob ein Build sinnvoll ist.",
    meta: ["Risiko", "Timing", "Blueprint"]
  },
  {
    label: "03",
    eyebrow: "Validate",
    title: "Wir prüfen den Markt, bevor zu viel gebaut wird.",
    body: "Interviews, Smoke-Tests, Landingpages, Ads, Sales-Gespräche und erste Angebotslogik zeigen, ob echte Nachfrage vorhanden ist.",
    meta: ["Nachfrage", "Kaufabsicht", "Signal"]
  },
  {
    label: "04",
    eyebrow: "Build",
    title: "Wir bauen den Produktkern und die technische Basis.",
    body: "Unser Build verbindet Produktstrategie, UI/UX, Engineering, AI, Daten, Tracking, Automatisierung und Infrastruktur zu einem testbaren MVP.",
    meta: ["MVP", "Tech", "Tracking"]
  },
  {
    label: "05",
    eyebrow: "Launch",
    title: "Wir erzeugen reale Marktdaten.",
    body: "Go-to-Market, Kampagnen, Funnel, Content, Sales-Strecken und Reporting liefern Zahlen, die zeigen, ob das Venture stärker gebaut werden sollte.",
    meta: ["Funnel", "Ads", "Sales"]
  },
  {
    label: "06",
    eyebrow: "Company",
    title: "Wir bereiten aus dem MVP ein Unternehmen vor.",
    body: "Wenn die Signale stark sind, strukturieren wir Rollen, operative Geschäftsführung, Gesellschaft, Beteiligung, Prozesse und Kapitalpfad.",
    meta: ["Rollen", "Setup", "Kapital"]
  }
];

const capabilityGroups = [
  {
    title: "Research & Venture-These",
    body: "Marktanalyse, Zielgruppenlogik, Pain-Point-Schärfung, Angebotsarchitektur, Wettbewerbsbild und erstes Geschäftsmodell.",
    output: "klare These statt Bauchgefühl"
  },
  {
    title: "Validation & Audit",
    body: "Venture-Audit, Customer Discovery, Smoke-Test, Pricing-Check, Nachfrageprüfung und Go/No-Go-Kriterien.",
    output: "Entscheidung, ob gebaut wird"
  },
  {
    title: "Product & Engineering",
    body: "MVP-Scope, UI/UX, Softwareentwicklung, Apps, SaaS, AI-Logik, Datenstruktur, Integrationen und Infrastruktur.",
    output: "testbarer Produktkern"
  },
  {
    title: "Growth & Launch",
    body: "Positionierung, Funnel, Landingpages, Google Ads, Meta Ads, Sales, Content, Tracking und Auswertung.",
    output: "erste Nachfrage und Zahlen"
  },
  {
    title: "Operations & Automation",
    body: "CRM, Reporting, Automatisierungen, AI-Workflows, interne Tools, Rollenlogik und wiederholbare Prozesse.",
    output: "operativ belastbares System"
  },
  {
    title: "Company Build & Capital",
    body: "Geschäftsführung, Team, Gesellschaftsstruktur, Beteiligungslogik, Datenraum, Investor Story und Kapitalpfad.",
    output: "nächster Unternehmensschritt"
  }
];

const finalOutputs = [
  "validierte Venture-These",
  "geprüfte Markt- und Nachfrageannahmen",
  "MVP oder technischer Produktkern",
  "Tracking, Funnel und erste Launch-Zahlen",
  "operative Rollen und Verantwortlichkeiten",
  "Entscheidung: stoppen, anpassen, ausbauen oder ausgründen"
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Veytra Leistungen: Venture Building, MVP, Validierung und Company Build",
  serviceType: "Venture Building, Venture-Audit, MVP-Entwicklung, Marktvalidierung, Go-to-Market und Company Build",
  url: absoluteUrl("/leistungen"),
  provider: {
    "@type": "Organization",
    name: "Veytra",
    url: absoluteUrl("/")
  },
  areaServed: ["Deutschland", "DACH"],
  audience: [
    {
      "@type": "Audience",
      audienceType: "Gründer"
    },
    {
      "@type": "Audience",
      audienceType: "Startups"
    },
    {
      "@type": "Audience",
      audienceType: "Unternehmen"
    }
  ],
  description:
    "Veytra übernimmt Ideenfindung, Venture-Audit, Marktvalidierung, MVP-Bau, technische Infrastruktur, Launch, Marketing und Company Build für neue digitale Geschäftsmodelle.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Veytra Leistungen",
    itemListElement: directServices.map((service) => ({
      "@type": "Offer",
      name: service.title,
      description: service.body
    }))
  }
};

function ServicesConsole() {
  const rows = ["Idee", "Audit", "Validierung", "MVP", "Launch", "Company Build"];

  return (
    <div className="services-hero-console relative overflow-hidden border border-white/12 bg-white/[0.04] p-4 md:p-7">
      <div className="relative z-10 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 md:text-xs">
            Leistungssystem
          </p>
          <h2 className="mt-3 text-xl font-semibold leading-tight text-white md:text-3xl">
            Was aus einer Chance operativ wird.
          </h2>
        </div>
        <div className="inline-flex w-fit items-center gap-3 border border-white/10 px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-300 md:px-4 md:py-3 md:text-xs">
          <span className="services-live-dot" />
          Build Team aktiv
        </div>
      </div>

      <div className="relative z-10 mt-5 grid gap-3 md:mt-7">
        {rows.map((row, index) => (
          <div
            key={row}
            data-reveal="slide"
            data-reveal-delay={`${index * 55}ms`}
            className="services-console-row relative overflow-hidden border border-white/10 bg-neutral-950/58 p-3 md:grid md:grid-cols-[70px_0.65fr_1fr] md:items-center md:gap-4 md:p-4"
          >
            <span className="text-xs font-semibold text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
            <strong className="mt-2 block text-base font-semibold text-white md:mt-0">{row}</strong>
            <span className="mt-3 block h-2 overflow-hidden bg-white/10 md:mt-0">
              <span
                className="block h-full bg-white/80"
                style={{ width: `${36 + index * 10}%` }}
              />
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-3 md:mt-7">
        {["Produkt", "Markt", "Firma"].map((item) => (
          <div
            key={item}
            className="border border-white/10 bg-white/[0.03] px-4 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LeistungenPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />

      <section className="border-b border-neutral-800 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-[1440px] gap-9 px-5 py-14 md:px-8 md:py-24 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[0.86fr_1fr] lg:items-center">
          <div data-reveal="slide" className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 md:mb-6">
              Leistungen
            </p>
            <h1 className="text-3xl font-semibold leading-[1.08] md:text-6xl">
              Leistungen für Venture Building: Idee, MVP, Launch und Company Build.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 md:mt-7 md:text-lg md:leading-9">
              Veytra übernimmt die operative Frühphase neuer digitaler Geschäftsmodelle:
              Ideen finden, auditieren, mit dem Markt validieren, MVP bauen,
              technische Infrastruktur aufsetzen, Nachfrage testen und den nächsten
              Unternehmensschritt vorbereiten.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-9">
              <Link
                href="/kontakt"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white bg-white px-5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
              >
                Leistung anfragen
              </Link>
              <Link
                href="#leistungen"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white/20 px-5 text-sm font-medium text-white transition hover:border-white"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>

          <div data-reveal="scale" data-reveal-delay="120ms">
            <ServicesConsole />
          </div>
        </div>
      </section>

      <section id="leistungen" className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Kurz und klar"
            title="Was wir konkret übernehmen."
            description="Wir bauen kein einzelnes Gewerk isoliert. Wir übernehmen die Strecke von der Idee bis zur belastbaren Venture-Entscheidung."
          />

          <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
            {directServices.map((service, index) => (
              <article
                key={service.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 45}ms`}
                className="services-snapshot-card relative overflow-hidden border border-neutral-200 bg-white p-5 transition hover:border-neutral-950 md:p-6"
              >
                <span className="relative z-10 text-sm font-semibold text-neutral-400">{service.label}</span>
                <h2 className="relative z-10 mt-5 text-xl font-semibold text-neutral-950">{service.title}</h2>
                <p className="relative z-10 mt-4 text-sm leading-7 text-neutral-600">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-14 md:gap-12 md:px-8 md:py-24 lg:grid-cols-[0.72fr_1.28fr]">
          <div data-reveal="slide" className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Leistungsfluss
            </p>
            <h2 className="text-2xl font-semibold leading-tight md:text-5xl">
              Jede Leistung muss eine Entscheidung besser machen.
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-300">
              Der Prozess ist bewusst operativ: Wir liefern nicht nur Analyse,
              sondern bauen, testen, messen und schaffen die Grundlage für Stop,
              Anpassung, Ausbau oder Ausgründung.
            </p>
          </div>
          <ScrollFadingProcessCards cards={serviceFlowCards} tone="dark" />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-9 px-5 py-14 md:gap-12 md:px-8 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div data-reveal="clip" className="services-image-panel relative overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/studio-workbench.png"
              alt="Venture Studio Workbench mit Research, Produktentwicklung, Infrastruktur und Launch-Artefakten"
              width={900}
              height={680}
              className="h-full min-h-[280px] w-full object-cover contrast-[1.04] md:min-h-[520px]"
              priority={false}
            />
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 border border-white/65 bg-white/[0.86] p-4 backdrop-blur md:bottom-6 md:left-6 md:right-6 md:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Shared Services
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-neutral-950 md:text-base">
                Produkt, Tech, Growth, Operations und Company Setup werden als ein System gebaut.
              </p>
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="Module"
              title="Die operativen Bausteine hinter der Leistung."
              description="Je nach Idee, Zielgruppe und Kapitalmodell setzen wir die Module anders zusammen. Entscheidend ist nicht die Methode, sondern der nächste belastbare Output."
            />
            <div className="mt-8 grid gap-3 md:mt-10">
              {capabilityGroups.map((item, index) => (
                <article
                  key={item.title}
                  data-reveal="fade"
                  data-reveal-delay={`${index * 55}ms`}
                  className="services-capability-row relative overflow-hidden border border-neutral-200 bg-white p-5 md:grid md:grid-cols-[0.42fr_0.58fr] md:gap-7"
                >
                  <div className="relative z-10">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      {String(index + 1).padStart(2, "0")} / {item.output}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-neutral-950 md:text-xl">{item.title}</h3>
                  </div>
                  <p className="relative z-10 mt-4 text-sm leading-7 text-neutral-600 md:mt-0">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Output"
            title="Was nach der Zusammenarbeit klar sein muss."
            description="Eine gute Leistung endet nicht mit einem fertigen Screen. Sie endet mit einer besseren Entscheidung über das Venture."
          />
          <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {finalOutputs.map((output, index) => (
              <div
                key={output}
                data-reveal="slide"
                data-reveal-delay={`${index * 45}ms`}
                className="services-output-card relative overflow-hidden border border-neutral-200 bg-white p-5 md:p-6"
              >
                <span className="relative z-10 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Ergebnis {String(index + 1).padStart(2, "0")}
                </span>
                <p className="relative z-10 mt-5 text-lg font-semibold leading-7 text-neutral-950">
                  {output}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Welche Leistung braucht eure Idee als Nächstes?"
        description="Wir prüfen Idee, Markt, MVP-Status, Tech-Bedarf, Go-to-Market und Company-Setup. Danach ist klar, welcher Build sinnvoll ist."
        primaryLabel="Leistung anfragen"
        secondaryLabel="Preise ansehen"
        secondaryHref="/preise"
      />
    </>
  );
}
