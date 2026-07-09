import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CaseStudyStrip } from "@/components/CaseStudyStrip";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { SectionIntro } from "@/components/SectionIntro";
import { StructuredData } from "@/components/StructuredData";
import { caseStudies } from "@/content/case-studies";
import { faqs } from "@/content/faqs";
import { pageSeo } from "@/content/pages";
import { faqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = createMetadata(pageSeo.ventureStudio);

const ventureSystem = [
  {
    label: "01",
    title: "These",
    text: "Welches Problem ist teuer genug, dringend genug und wiederholbar genug?"
  },
  {
    label: "02",
    title: "Validierung",
    text: "Interviews, Nachfrage, Kaufabsicht, Wettbewerb und erste Marktreaktion."
  },
  {
    label: "03",
    title: "MVP",
    text: "Produktkern, UX, technische Architektur, Tracking und reale Testumgebung."
  },
  {
    label: "04",
    title: "Launch",
    text: "Positionierung, Funnel, Sales, Ads, Content und erste Kundenkontakte."
  },
  {
    label: "05",
    title: "Company Build",
    text: "Rollen, Struktur, Kapitalpfad, Operations und nächste Wachstumsentscheidung."
  }
];

const exactWork = [
  {
    title: "Venture-These schärfen",
    body: "Wir übersetzen Idee, Branchenwissen oder Marktproblem in eine klare Hypothese: Zielkunde, Schmerz, Nutzenversprechen, Erlöslogik und Differenzierung."
  },
  {
    title: "Markt validieren",
    body: "Wir testen nicht intern, sondern am Markt: Interviews, Landingpages, Angebotslogik, Nachfrage, Preisgefühl, Pilotkunden und echte Einwände."
  },
  {
    title: "MVP bauen",
    body: "Wir bauen den kleinsten Produktkern, der eine Geschäftsmodell-Frage beantwortet: SaaS, App, Plattform, Shop, Service, AI-Produkt oder Automatisierung."
  },
  {
    title: "Go-to-Market starten",
    body: "Wir bringen das Venture in Kontakt mit dem Markt: Positionierung, Funnel, Sales-Strecken, Google Ads, Meta Ads, Content, Tracking und Reporting."
  },
  {
    title: "Company Build vorbereiten",
    body: "Wenn Signale stark genug sind, strukturieren wir Rollen, Gesellschaft, Beteiligung, Operations, Datenraum und die nächste Kapitalentscheidung."
  },
  {
    title: "Stoppen, wenn es nicht reicht",
    body: "Wenn Nachfrage, Nutzung oder Zahlungsbereitschaft nicht reichen, wird nicht aus Prinzip weitergebaut. Das spart Kapital, Zeit und Nerven."
  }
];

const valueCards = [
  {
    metric: "weniger Blindflug",
    title: "Risiko früher sichtbar machen",
    body: "Die wichtigsten Annahmen werden geprüft, bevor zu viel Produktbudget in die falsche Richtung läuft."
  },
  {
    metric: "mehr Tempo",
    title: "Build ohne Aufbau-Lähmung",
    body: "Research, Produkt, Tech, Launch und Operations greifen ineinander, ohne erst ein vollständiges Team einstellen zu müssen."
  },
  {
    metric: "bessere Entscheidungen",
    title: "Stop, Pivot oder Ausbau",
    body: "Nach dem Launch entscheidet nicht Bauchgefühl, sondern Marktreaktion: Leads, Conversion, Nutzung, Feedback und Umsatzsignale."
  },
  {
    metric: "kapitalfähiger",
    title: "Investor Story mit Substanz",
    body: "Ein Venture wird mit Zahlen, Produktlogik, Datenraum und nachvollziehbarem Kapitalpfad deutlich besser erklärbar."
  }
];

const studioModels = [
  {
    title: "Nicht Agentur",
    text: "Keine Umsetzung nach Briefing. Wir hinterfragen Idee, Markt, Produkt, Angebot und Deal-Modell."
  },
  {
    title: "Nicht Accelerator",
    text: "Kein Programm mit Mentorenfolien. Wir bauen operativ mit und übernehmen Verantwortung für die Frühphase."
  },
  {
    title: "Nicht reiner Investor",
    text: "Kapital allein baut kein Unternehmen. Veytra bringt Team, Prozess, Infrastruktur und Go-to-Market ein."
  },
  {
    title: "Operativer Co-Builder",
    text: "Wir verbinden Strategie, Validierung, Produkt, Launch, Operations und Company Build in einem Studio-System."
  }
];

const processSteps = [
  {
    label: "01",
    tag: "Opportunity",
    title: "Idee in Venture-These verwandeln",
    body: "Aus Problem, Kundenzugang, Branchenwissen oder Marktchance entsteht eine klare These mit Zielkunde, Nutzen, Erlöslogik und Validierungsplan."
  },
  {
    label: "02",
    tag: "Signal",
    title: "Markt vor Produkt beweisen",
    body: "Wir prüfen Nachfrage, Zahlungsbereitschaft, Einwände und Wettbewerb, bevor das Produkt unnötig schwer wird."
  },
  {
    label: "03",
    tag: "Build",
    title: "MVP mit klarem Testzweck bauen",
    body: "Das Produkt beantwortet eine Geschäftsmodell-Frage. Nicht jedes Feature wird gebaut, sondern das, was zur nächsten Entscheidung führt."
  },
  {
    label: "04",
    tag: "Launch",
    title: "Echte Kanäle statt interne Meinung",
    body: "Funnel, Sales, Ads, Content, Tracking und Feedback-Loops zeigen, ob aus Interesse wiederholbare Nachfrage werden kann."
  },
  {
    label: "05",
    tag: "Company",
    title: "Aus MVP wird Unternehmensstruktur",
    body: "Wenn die Signale stimmen, bereiten wir Rollen, Gesellschaft, Geschäftsführung, Operations, Datenraum und Kapitalpfad vor."
  }
];

const fitCards = [
  {
    title: "Gründer",
    body: "Wenn Idee, Problemnähe oder Zielgruppenzugang da sind, aber Produktteam, Go-to-Market und Kapitalpfad fehlen.",
    href: "/fuer-gruender"
  },
  {
    title: "Unternehmen",
    body: "Wenn Kunden, Daten, Distribution oder Branchenwissen in ein testbares digitales Venture übersetzt werden sollen.",
    href: "/fuer-unternehmen"
  },
  {
    title: "Startups",
    body: "Wenn ein bestehendes Team schneller zu Produktklarheit, Growth-Signalen, Automatisierung oder Funding-Readiness kommen muss.",
    href: "/fuer-startups"
  }
];

const ventureStudioSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Venture Studio für digitale Geschäftsmodelle",
  serviceType: "Venture Studio, Company Building und Venture Building",
  url: absoluteUrl("/venture-studio"),
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
    "Veytra ist ein Venture Studio für digitale Geschäftsmodelle: Idee schärfen, Markt validieren, MVP bauen, Launch testen und Company Build vorbereiten.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Venture Studio Leistungen",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Venture-These und Validierung",
        description:
          "Aus Idee, Marktproblem oder Branchenwissen entsteht eine prüfbare Venture-These mit Zielkunde, Nutzenversprechen und Validierungsplan."
      },
      {
        "@type": "Offer",
        name: "MVP und Produktkern",
        description:
          "Veytra baut den kleinsten Produktkern, der eine Geschäftsmodell-Frage am Markt beantworten kann."
      },
      {
        "@type": "Offer",
        name: "Go-to-Market und Launch",
        description:
          "Positionierung, Funnel, Sales, Ads, Content, Tracking und erste Marktreaktionen werden gemeinsam aufgebaut."
      },
      {
        "@type": "Offer",
        name: "Company Build und Kapitalpfad",
        description:
          "Bei starken Signalen werden Rollen, Gesellschaft, Operations, Datenraum und nächste Kapitalentscheidung vorbereitet."
      }
    ]
  }
};

function VentureStudioVisual() {
  return (
    <div className="studio-hero-visual relative overflow-hidden border border-white/12 bg-white/[0.04] p-4 md:p-7">
      <div className="relative z-10 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 md:text-xs">
            Venture Build System
          </p>
          <h2 className="mt-3 text-xl font-semibold text-white md:text-3xl">Von These zu Unternehmen</h2>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400 md:text-xs md:tracking-[0.22em]">
          <span className="studio-live-dot" />
          Live Gates
        </div>
      </div>
      <div className="relative z-10 mt-5 grid gap-3 md:mt-6">
        {ventureSystem.map((item, index) => (
          <div
            key={item.title}
            data-reveal="slide"
            data-reveal-delay={`${index * 80}ms`}
            className="studio-system-row grid gap-2 border border-white/10 bg-neutral-950/60 p-3 md:grid-cols-[64px_0.7fr_1.3fr] md:items-center md:gap-4 md:p-4"
          >
            <span className="text-sm font-semibold text-neutral-500">{item.label}</span>
            <strong className="text-base font-semibold text-white md:text-lg">{item.title}</strong>
            <span className="text-sm leading-6 text-neutral-400">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="relative z-10 mt-5 grid gap-2 sm:grid-cols-3 md:mt-6 md:gap-3">
        {["weniger Risiko", "schnellerer Launch", "klarer Kapitalpfad"].map((item) => (
          <div
            key={item}
            className="border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-300 md:px-4 md:py-3 md:text-xs md:tracking-[0.18em]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VentureStudioPage() {
  const ventureExamples = caseStudies.filter((study) =>
    ["huntfields", "pmslogic", "sepana"].includes(study.slug)
  );

  return (
    <>
      <StructuredData data={[ventureStudioSchema, faqSchema(faqs.ventureStudio, pageSeo.ventureStudio.path)]} />

      <section className="border-b border-neutral-800 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-[1440px] gap-9 px-5 py-14 md:px-8 md:py-24 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div data-reveal="slide" className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 md:mb-6">
              Venture Studio für digitale Geschäftsmodelle
            </p>
            <h1 className="text-3xl font-semibold leading-[1.08] md:text-6xl">
              Venture Studio: Wir bauen aus Ideen testbare Ventures.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 md:mt-7 md:text-lg md:leading-9">
              Veytra ist kein Accelerator, keine Agentur und kein reiner Investor. Wir arbeiten als operativer Co-Builder: Idee schärfen, Markt validieren, MVP bauen, Launch testen und den nächsten Company-Build-Schritt vorbereiten.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-9">
              <Link
                href="/kontakt"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white bg-white px-5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
              >
                Venture anfragen
              </Link>
              <Link
                href="/prozess"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white/20 px-5 text-sm font-medium text-white transition hover:border-white"
              >
                Prozess ansehen
              </Link>
            </div>
          </div>
          <div data-reveal="scale" data-reveal-delay="140ms">
            <VentureStudioVisual />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-14 md:px-8 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Definition"
            title="Was ein Venture Studio wirklich macht."
            description="Ein Venture Studio baut nicht nur ein Produkt. Es baut die frühe Unternehmenslogik: Markt, Produkt, Vertrieb, Struktur, Verantwortung und nächste Finanzierung."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {studioModels.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 80}ms`}
                className="studio-card relative overflow-hidden border border-neutral-200 bg-white p-5 md:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">0{index + 1}</p>
                <h2 className="relative z-10 mt-5 text-xl font-semibold text-neutral-950">{item.title}</h2>
                <p className="relative z-10 mt-4 text-base leading-8 text-neutral-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Was wir exakt machen"
            title="Veytra übernimmt die operative Frühphase."
            description="Der Mehrwert entsteht nicht durch ein einzelnes Gewerk, sondern durch die Verbindung aus Research, Produkt, Tech, Launch, Operations und Venture-Entscheidung."
          />
          <div className="mt-8 grid gap-4 md:mt-12 lg:grid-cols-3">
            {exactWork.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 60}ms`}
                className="studio-card relative overflow-hidden border border-neutral-200 bg-white p-5 md:p-7"
              >
                <div className="relative z-10 flex items-start justify-between gap-6">
                  <h3 className="text-lg font-semibold leading-tight text-neutral-950 md:text-xl">{item.title}</h3>
                  <span className="text-sm font-semibold text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
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
              eyebrow="Mehrwert"
              title="Der konkrete Vorteil: weniger Risiko, mehr Tempo, bessere Entscheidungen."
              description="Frühe Ventures brauchen keine langen Innovationsrituale. Sie brauchen ein System, das Annahmen schnell prüft und nur dann schwerer wird, wenn der Markt zurückmeldet."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10">
              {valueCards.map((item, index) => (
                <article
                  key={item.title}
                  data-reveal="fade"
                  data-reveal-delay={`${index * 70}ms`}
                  className="studio-metric-card relative overflow-hidden border border-neutral-200 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">{item.metric}</p>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
          <div data-reveal="clip" className="relative overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/studio-workbench.png"
              alt="Veytra Venture Studio Workbench mit Arbeitsmaterialien, Produktplanung und digitalem Aufbau"
              width={900}
              height={680}
              className="h-full min-h-[280px] w-full object-cover contrast-[1.04] md:min-h-[420px]"
              priority={false}
            />
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 border border-white/55 bg-white/[0.82] p-4 backdrop-blur md:bottom-6 md:left-6 md:right-6 md:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Studio Workbench
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-neutral-950 md:text-base">
                Research, Produkt, Launch und Venture-Entscheidung in einem System.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-14 md:gap-12 md:px-8 md:py-24 lg:grid-cols-[0.75fr_1.25fr]">
          <div data-reveal="slide" className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Venture Build Ablauf</p>
            <h2 className="text-2xl font-semibold leading-tight md:text-5xl">
              Erst Marktsignal. Dann mehr Produkt. Dann Company Build.
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-300">
              Jeder Schritt erzeugt eine Entscheidung. So wird ein Venture nicht aus Hoffnung größer, sondern aus belastbaren Signalen.
            </p>
          </div>
          <div className="studio-process-track relative grid gap-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 90}ms`}
                className="studio-process-card relative overflow-hidden border border-white/10 bg-white/[0.03] p-5 md:grid md:grid-cols-[86px_0.8fr_1fr] md:gap-8 md:p-6"
              >
                <span className="relative z-10 text-sm font-semibold text-neutral-500">{step.label}</span>
                <div className="relative z-10 mt-4 md:mt-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">{step.tag}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">{step.title}</h3>
                </div>
                <p className="relative z-10 mt-5 text-base leading-8 text-neutral-300 md:mt-0">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Geeignet für"
            title="Wann ein Venture Studio sinnvoll ist."
            description="Veytra passt dann, wenn es nicht um eine einzelne Website, App oder Kampagne geht, sondern um ein digitales Geschäftsmodell mit gemeinsamer Verantwortung."
          />
          <div className="mt-8 grid gap-4 md:mt-12 lg:grid-cols-3">
            {fitCards.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                data-reveal="slide"
                data-reveal-delay={`${index * 90}ms`}
                className="studio-fit-card relative overflow-hidden border border-neutral-200 bg-white p-5 transition hover:border-neutral-950 md:p-7"
              >
                <span className="text-sm font-semibold text-neutral-400">0{index + 1}</span>
                <h3 className="mt-6 text-2xl font-semibold text-neutral-950 md:mt-8">{item.title}</h3>
                <p className="mt-5 text-base leading-8 text-neutral-600">{item.body}</p>
                <span className="mt-8 inline-flex text-sm font-medium text-neutral-950 underline">Mehr erfahren</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <CaseStudyStrip
            title="Beispiele für digitale Venture-Aufbauarbeit"
            description="Bisher zeigen die Cases vor allem digitale Internet-, SaaS-, Plattform- und Funnel-Projekte. Genau daraus entsteht die operative Basis für neue Ventures."
            studies={ventureExamples}
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro eyebrow="FAQ" title="Häufige Fragen zum Venture Studio." />
          <div className="mt-10">
            <FAQ items={faqs.ventureStudio} />
          </div>
        </div>
      </section>

      <CTASection
        title="Soll aus der Idee ein Venture werden?"
        description="Wir prüfen Markt, Produktchance, MVP-Scope, Teamlücke, Kapitalbedarf und Deal-Modell. Danach ist klar, ob ein Venture-Studio-Prozess sinnvoll ist."
        primaryLabel="Venture anfragen"
        secondaryLabel="Studio OS ansehen"
        secondaryHref="/studio-os"
      />
    </>
  );
}
