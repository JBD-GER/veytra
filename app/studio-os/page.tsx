import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { StructuredData } from "@/components/StructuredData";
import { pageSeo, resultArtifacts } from "@/content/pages";
import { serviceModules } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = createMetadata(pageSeo.studioOs);

const osLayers = [
  {
    label: "Layer 01",
    title: "Strategy & Thesis",
    body: "Problem, Zielkunde, Marktlogik, Timing, Differenzierung und wirtschaftliche These."
  },
  {
    label: "Layer 02",
    title: "Validation Engine",
    body: "Interviews, Angebote, Smoke-Tests, Landingpages, Nachfrage, Kaufabsicht und Go/No-Go."
  },
  {
    label: "Layer 03",
    title: "Product & Tech",
    body: "MVP-Scope, UX, Architektur, AI-Logik, Engineering, Tracking und Produktkern."
  },
  {
    label: "Layer 04",
    title: "Go-to-Market",
    body: "Positionierung, Funnel, Sales, Ads, Content, Pricing und erste wiederholbare Kanäle."
  },
  {
    label: "Layer 05",
    title: "Operations & Capital",
    body: "Reporting, Automatisierung, Rollen, Governance, Datenraum und Finanzierungslogik."
  }
];

const operatingPrinciples = [
  {
    title: "Ein System statt Einzelleistungen",
    body: "Studio OS verbindet Research, Product, Tech, Growth, Operations und Capital Readiness, statt isolierte Aufgaben abzuarbeiten."
  },
  {
    title: "Jedes Modul erzeugt eine Entscheidung",
    body: "Wir bauen nicht einfach weiter. Jedes Modul soll zeigen, ob das Venture mehr Produkt, mehr Markt, mehr Kapital oder einen Stopp braucht."
  },
  {
    title: "Shared Services reduzieren Reibung",
    body: "Das Venture muss nicht für jede frühe Frage ein eigenes Team aufbauen. Das Studio bringt Infrastruktur, Routinen und Spezialisten ein."
  },
  {
    title: "Output ist Unternehmenssubstanz",
    body: "Am Ende zählen keine Folien, sondern Marktreaktion, Produktkern, Pipeline, Rollen, Struktur, Daten und nächste Wachstumslogik."
  }
];

const moduleGroups = [
  {
    title: "Find",
    body: "Chancen erkennen, Thesen bauen, Markt und Zielgruppe einordnen."
  },
  {
    title: "Validate",
    body: "Annahmen prüfen, Nachfrage messen, Zahlungsbereitschaft und Vertriebszugang testen."
  },
  {
    title: "Build",
    body: "MVP, Produktkern, UX, Tech, AI-Logik und Tracking operativ umsetzen."
  },
  {
    title: "Launch",
    body: "Go-to-Market, Funnel, Sales, Content, Ads und erste Kundensignale erzeugen."
  },
  {
    title: "Operate",
    body: "Reporting, Automatisierung, Prozesse, Rollen und interne Systeme aufbauen."
  },
  {
    title: "Capital",
    body: "Kapitalpfad, Investor Story, Datenraum, Cap-Table-Logik und nächste Finanzierung vorbereiten."
  }
];

const audiences = [
  {
    title: "Gründer",
    text: "bekommen ein operatives System für Idee, Validierung, MVP, Launch und Ausgründung.",
    href: "/fuer-gruender"
  },
  {
    title: "Unternehmen",
    text: "nutzen vorhandene Assets, Kunden, Daten und Distribution für ein testbares Corporate Venture.",
    href: "/fuer-unternehmen"
  },
  {
    title: "Startups",
    text: "erhalten operative Unterstützung bei Produkt, Growth, Automatisierung, AI und Fundraising-Readiness.",
    href: "/fuer-startups"
  },
  {
    title: "Investoren",
    text: "sehen Ventures, die nicht nur gepitcht, sondern vorqualifiziert, gebaut und begleitet werden.",
    href: "/fuer-investoren"
  }
];

const studioOsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Studio OS: Venture Building Operating System",
  serviceType: "Venture Building Operating System, Studio OS und Shared Services",
  url: absoluteUrl("/studio-os"),
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
    },
    {
      "@type": "Audience",
      audienceType: "Investoren"
    }
  ],
  description:
    "Studio OS von Veytra ist das Venture Building Operating System für neue Ventures: Research, Product, Tech, Growth, Operations und Capital Readiness.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Studio OS Module",
    itemListElement: moduleGroups.map((module) => ({
      "@type": "Offer",
      name: module.title,
      description: module.body
    }))
  }
};

function StudioOSVisual() {
  return (
    <div className="os-hero-visual relative overflow-hidden border border-white/12 bg-white/[0.04] p-4 md:p-7">
      <div className="relative z-10 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 md:text-xs">
            Studio OS
          </p>
          <h2 className="mt-3 text-xl font-semibold text-white md:text-3xl">
            Operating System für Ventures
          </h2>
        </div>
        <div className="inline-flex w-fit border border-white/10 px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400 sm:px-4 sm:py-3 sm:text-xs sm:tracking-[0.18em]">
          shared services
        </div>
      </div>
      <div className="relative z-10 mt-5 grid gap-3 md:mt-7">
        {osLayers.map((layer, index) => (
          <div
            key={layer.title}
            data-reveal="slide"
            data-reveal-delay={`${index * 70}ms`}
            className="os-layer-row relative overflow-hidden border border-white/10 bg-neutral-950/60 p-3 md:grid md:grid-cols-[120px_0.7fr_1.3fr] md:items-center md:gap-5 md:p-4"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">{layer.label}</span>
            <strong className="mt-2 block text-base font-semibold text-white md:mt-0 md:text-lg">{layer.title}</strong>
            <span className="mt-3 block text-sm leading-6 text-neutral-400 md:mt-0">{layer.body}</span>
          </div>
        ))}
      </div>
      <div className="relative z-10 mt-5 grid grid-cols-3 gap-2 md:mt-7 md:gap-3">
        {["Research", "Build", "Scale"].map((item) => (
          <div
            key={item}
            className="border border-white/10 bg-white/[0.03] p-3 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-300 md:p-4 md:text-xs md:tracking-[0.18em]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={studioOsSchema} />
      <section className="border-b border-neutral-800 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-[1440px] gap-9 px-5 py-14 md:px-8 md:py-24 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div data-reveal="slide" className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 md:mb-6">
              Venture Studio Operating System
            </p>
            <h1 className="text-3xl font-semibold leading-[1.08] md:text-6xl">
              Studio OS: Venture Building Operating System für neue Ventures.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 md:mt-7 md:text-lg md:leading-9">
              Studio OS ist kein Leistungskatalog. Es ist das operative System aus Research, Product, Tech, Growth, Operations und Capital Readiness, mit dem Veytra Ventures schneller prüft, baut und entscheidet.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-9">
              <Link
                href="/kontakt"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white bg-white px-5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
              >
                Venture anfragen
              </Link>
              <Link
                href="/venture-studio"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white/20 px-5 text-sm font-medium text-white transition hover:border-white"
              >
                Venture Studio ansehen
              </Link>
            </div>
          </div>
          <div data-reveal="scale" data-reveal-delay="140ms">
            <StudioOSVisual />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-14 md:px-8 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Was Studio OS ist"
            title="Ein gemeinsames Betriebssystem für die Frühphase."
            description="Frühe Ventures scheitern selten an einem einzelnen fehlenden Asset. Sie scheitern, weil These, Markt, Produkt, Vertrieb, Operations und Kapital nicht gleichzeitig zusammenfinden."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {operatingPrinciples.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 80}ms`}
                className="os-card relative overflow-hidden border border-neutral-200 bg-white p-5 md:p-6"
              >
                <span className="relative z-10 text-sm font-semibold text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="relative z-10 mt-5 text-xl font-semibold text-neutral-950 md:mt-6">{item.title}</h2>
                <p className="relative z-10 mt-4 text-base leading-8 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Module"
            title="Die Module, mit denen wir Ventures bauen."
            description="Die Module sind keine einzelnen Dienstleistungen zum Einkaufen. Sie sind die wiederholbaren Bausteine, mit denen ein Venture von These zu Marktreaktion und Company Build kommt."
          />
          <div className="mt-8 grid gap-4 md:mt-12 lg:grid-cols-3">
            {moduleGroups.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 60}ms`}
                className="os-module-card relative overflow-hidden border border-neutral-200 bg-white p-5 md:p-7"
              >
                <div className="relative z-10 flex items-start justify-between gap-6">
                  <h3 className="text-xl font-semibold text-neutral-950 md:text-2xl">{item.title}</h3>
                  <span className="text-sm font-semibold text-neutral-400">0{index + 1}</span>
                </div>
                <p className="relative z-10 mt-5 text-base leading-8 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-9 px-5 py-14 md:gap-12 md:px-8 md:py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Shared Services"
              title="Warum das schneller ist als alles einzeln aufzubauen."
              description="Ein einzelnes Startup müsste Research, Produkt, Tech, Growth, Admin, Reporting, Automatisierung und Kapitalvorbereitung parallel selbst organisieren. Studio OS macht diese Infrastruktur sofort nutzbar."
            />
            <div className="mt-8 grid gap-3 md:mt-10">
              {serviceModules.slice(0, 6).map((module, index) => (
                <article
                  key={module.title}
                  data-reveal="fade"
                  data-reveal-delay={`${index * 50}ms`}
                  className="os-service-row relative overflow-hidden border border-neutral-200 bg-white p-5 md:grid md:grid-cols-[0.55fr_1fr] md:gap-8"
                >
                  <h3 className="relative z-10 text-lg font-semibold text-neutral-950">{module.title}</h3>
                  <p className="relative z-10 mt-3 text-sm leading-7 text-neutral-600 md:mt-0">{module.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div data-reveal="clip" className="relative overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/launch-artifacts.png"
              alt="Launch-Artefakte eines Venture Builds mit Produkt, Funnel, Signalen und operativen Bausteinen"
              width={900}
              height={680}
              className="h-full min-h-[280px] w-full object-cover contrast-[1.04] md:min-h-[420px]"
            />
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 border border-white/55 bg-white/[0.84] p-4 backdrop-blur md:bottom-6 md:left-6 md:right-6 md:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Launch Artifacts
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-neutral-950 md:text-base">
                Produkt, Funnel, Tracking und Signale werden als Venture-System aufgebaut.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-14 md:gap-12 md:px-8 md:py-24 lg:grid-cols-[0.72fr_1.28fr]">
          <div data-reveal="slide" className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Operating Logic</p>
            <h2 className="text-2xl font-semibold leading-tight md:text-5xl">
              Input rein. Signal raus. Dann nächste Entscheidung.
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-300">
              Studio OS sorgt dafür, dass jede Phase nicht nur Aktivität erzeugt, sondern ein klares Ergebnis: bauen, anpassen, skalieren oder stoppen.
            </p>
          </div>
          <div className="studio-process-track relative grid gap-4">
            {[
              ["Input", "Idee, Marktproblem, Corporate Asset, Startup-Engpass oder AI-Use-Case."],
              ["Thesis", "Zielkunde, Problem, Angebot, Erlöslogik, Risiko und Testplan werden scharf gestellt."],
              ["Signal", "Nachfrage, Nutzung, Einwand, Zahlungsbereitschaft, Pipeline oder Produktfeedback entscheidet."],
              ["Build", "MVP, Funnel, Automatisierung, Tracking und operative Routinen werden dort gebaut, wo Signale es rechtfertigen."],
              ["Decision", "Weiterbauen, pivotieren, ausgründen, finanzieren oder stoppen. Keine Endlosschleife."],
            ].map(([title, body], index) => (
              <article
                key={title}
                data-reveal="slide"
                data-reveal-delay={`${index * 90}ms`}
                className="studio-process-card relative overflow-hidden border border-white/10 bg-white/[0.03] p-5 md:grid md:grid-cols-[86px_0.75fr_1fr] md:gap-8 md:p-6"
              >
                <span className="relative z-10 text-sm font-semibold text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="relative z-10 mt-4 text-xl font-semibold text-white md:mt-0 md:text-2xl">{title}</h3>
                <p className="relative z-10 mt-5 text-base leading-8 text-neutral-300 md:mt-0">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Output"
            title="Was Studio OS am Ende sichtbar machen muss."
            description="Das Ergebnis ist keine lose Sammlung aus Dateien, sondern eine belastbare Entscheidungsgrundlage für das Venture."
          />
          <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
            {resultArtifacts.map((artifact, index) => (
              <div
                key={artifact}
                data-reveal="slide"
                data-reveal-delay={`${index * 40}ms`}
                className="os-output-card relative overflow-hidden border border-neutral-200 bg-white p-5"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Output</span>
                <p className="mt-5 text-base font-semibold text-neutral-950">{artifact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Relevant für"
            title="Wer Studio OS nutzt."
            description="Das Betriebssystem bleibt gleich. Der Einstieg unterscheidet sich je nachdem, ob Idee, Team, Marktproblem, Corporate Asset oder Kapital vorhanden ist."
          />
          <div className="mt-8 grid gap-4 md:mt-12 lg:grid-cols-4">
            {audiences.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                data-reveal="slide"
                data-reveal-delay={`${index * 70}ms`}
                className="os-card relative overflow-hidden border border-neutral-200 bg-white p-5 transition hover:border-neutral-950 md:p-6"
              >
                <span className="text-sm font-semibold text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-xl font-semibold text-neutral-950 md:mt-7">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{item.text}</p>
                <span className="mt-7 inline-flex text-sm font-medium text-neutral-950 underline">Mehr erfahren</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Soll daraus ein Venture werden oder nur ein Projekt?"
        description="Wir prüfen These, Markt, Team, Kapitalbedarf und Ownership. Wenn daraus kein Unternehmen entstehen kann, sagen wir es."
        primaryLabel="Venture anfragen"
        secondaryLabel="Prozess ansehen"
        secondaryHref="/prozess"
      />
    </>
  );
}
