import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CaseStudyGrid } from "@/components/CaseStudyGrid";
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

export const metadata: Metadata = createMetadata(pageSeo.aiVentureStudio);

const aiStack = [
  {
    label: "01",
    title: "Problem",
    text: "Welcher Prozess, welche Entscheidung oder welcher Kundenschmerz ist teuer genug?"
  },
  {
    label: "02",
    title: "Datenlage",
    text: "Welche Daten, Dokumente, Workflows oder Schnittstellen sind wirklich nutzbar?"
  },
  {
    label: "03",
    title: "AI-Logik",
    text: "Search, Assistant, Agent, RAG, Klassifikation, Automatisierung oder Datenprodukt."
  },
  {
    label: "04",
    title: "MVP",
    text: "Ein testbarer Produktkern mit UX, Backend, Prompt-/Model-Logik und Messpunkten."
  },
  {
    label: "05",
    title: "Launch",
    text: "Zielgruppe, Angebot, Sales, Pilotkunden, Tracking und wiederholbare Nachfrage."
  }
];

const aiValueAreas = [
  {
    title: "AI-native Produkte",
    body: "Assistenten, Suchsysteme, Datenprodukte, Automatisierungen und AI-Workflows, bei denen KI der zentrale Nutzen ist."
  },
  {
    title: "Vertical SaaS mit AI-Kern",
    body: "Branchenspezifische Software, die Prozesse nicht nur digitalisiert, sondern fachliche Arbeit durch AI beschleunigt."
  },
  {
    title: "RAG & Wissenssysteme",
    body: "Sichere Systeme, die Dokumente, Datenquellen und interne Logik nutzbar machen, ohne daraus eine Demo-Spielerei zu bauen."
  },
  {
    title: "Workflow Automation",
    body: "Operative Abläufe, die durch Agenten, interne Tools, Trigger, CRM-Logik oder Reporting weniger manuell werden."
  },
  {
    title: "AI Search & Discovery",
    body: "Produkte und Suchlogiken, die Nutzern schneller zu besseren Antworten, Entscheidungen oder Empfehlungen verhelfen."
  },
  {
    title: "AI im Go-to-Market",
    body: "Research, Segmentierung, Lead-Listen, Sales-Sequenzen, Content-Systeme und Auswertung, damit der Launch schneller lernt."
  }
];

const exactWork = [
  {
    label: "Use Case Discovery",
    title: "Wir finden den richtigen AI-Hebel",
    body: "Nicht jede Aufgabe braucht AI. Wir prüfen, wo AI wirklich Zeit spart, Qualität erhöht, Umsatz ermöglicht oder ein neues Produkt rechtfertigt."
  },
  {
    label: "Data Readiness",
    title: "Wir prüfen Daten, Zugriff und Grenzen",
    body: "Dokumente, Datenquellen, Prozesse, Schnittstellen, Compliance und Datenschutz werden vor dem MVP sauber eingeordnet."
  },
  {
    label: "Prototype",
    title: "Wir machen den Nutzen sichtbar",
    body: "Statt monatelang zu spezifizieren, bauen wir einen Prototypen, der User Flow, AI-Logik und Wertversprechen testbar macht."
  },
  {
    label: "Product Build",
    title: "Wir bauen den AI-MVP",
    body: "UX, Backend, Datenpipeline, AI-Integration, Rechtekonzept, Monitoring und Tracking werden so gebaut, dass echte Nutzung möglich wird."
  },
  {
    label: "Go-to-Market",
    title: "Wir testen Nachfrage",
    body: "Positionierung, Pilotkunden, Landingpages, Sales, Content, Ads oder Outreach zeigen, ob der Markt das AI-Produkt wirklich will."
  },
  {
    label: "Scale Logic",
    title: "Wir bereiten den nächsten Schritt vor",
    body: "Wenn Nutzung und Nachfrage passen, entstehen Roadmap, Automatisierung, Datenraum, Pricing, Betrieb und Kapitalpfad."
  }
];

const antiDemo = [
  {
    title: "Kein Prompt-Theater",
    text: "Prompts sind kein Geschäftsmodell. Wir bauen Produktlogik, Nutzerwert, Datenfluss, UX und wiederholbare Nutzung."
  },
  {
    title: "Keine AI um der AI willen",
    text: "AI muss ein reales Problem schneller, günstiger, präziser oder skalierbarer lösen. Sonst bleibt sie draußen."
  },
  {
    title: "Kein schwarzer Kasten",
    text: "Wir machen Datenlage, Modelllogik, Grenzen, Kosten, Risiken und Messpunkte sichtbar, bevor größer gebaut wird."
  }
];

const aiProcess = [
  {
    label: "01",
    title: "AI-Chance erkennen",
    body: "Wir suchen nach wiederkehrenden Aufgaben, teuren Entscheidungen, Datenmustern und Prozessen, die durch AI produktisierbar werden."
  },
  {
    label: "02",
    title: "Use Case validieren",
    body: "Zielgruppe, Nutzen, Datenlage, Zahlungsbereitschaft und technische Machbarkeit werden geprüft, bevor der MVP schwer wird."
  },
  {
    label: "03",
    title: "Prototyp bauen",
    body: "Ein reduzierter Flow zeigt, ob Nutzer den AI-Nutzen verstehen, verwenden und als wertvoll genug empfinden."
  },
  {
    label: "04",
    title: "AI-MVP launchen",
    body: "Produktkern, Datenpipeline, AI-Integration, Tracking und Go-to-Market werden in eine reale Testumgebung gebracht."
  },
  {
    label: "05",
    title: "Automatisieren oder stoppen",
    body: "Wenn Signale passen, wird das System stabilisiert. Wenn nicht, wird angepasst oder sauber gestoppt."
  }
];

const aiVentureStudioSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Venture Studio für AI-Produkte und Automatisierung",
  serviceType: "AI Venture Studio, AI Product Building und AI Venture Building",
  url: absoluteUrl("/ai-venture-studio"),
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
    "Veytra ist ein AI Venture Studio für AI-Produkte, Automatisierungen und AI-native Ventures: Use Case prüfen, Datenlage klären, AI-MVP bauen und Nachfrage testen.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Venture Studio Leistungen",
    itemListElement: [
      {
        "@type": "Offer",
        name: "AI Use Case Discovery",
        description:
          "Wir prüfen, welcher AI-Hebel ein reales Problem löst und als Geschäftsmodell tragfähig werden kann."
      },
      {
        "@type": "Offer",
        name: "Data Readiness und Prototyping",
        description:
          "Datenquellen, Workflows, Schnittstellen, Compliance und Prototypen werden vor dem AI-MVP geklärt."
      },
      {
        "@type": "Offer",
        name: "AI-MVP und Produktkern",
        description:
          "Veytra baut AI-Produkte mit UX, Backend, Datenpipeline, AI-Integration, Monitoring und Tracking."
      },
      {
        "@type": "Offer",
        name: "Launch und Nachfrage-Test",
        description:
          "Positionierung, Pilotkunden, Landingpages, Sales, Content, Ads oder Outreach testen, ob der Markt das AI-Produkt will."
      }
    ]
  }
};

function AIStudioVisual() {
  return (
    <div className="ai-studio-visual relative overflow-hidden border border-white/12 bg-white/[0.04] p-4 md:p-7">
      <div className="relative z-10 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 md:text-xs">
            AI Build Stack
          </p>
          <h2 className="mt-3 text-xl font-semibold text-white md:text-3xl">
            Vom Use Case zum AI-Produkt
          </h2>
        </div>
        <span className="ai-core-pulse" aria-hidden="true" />
      </div>
      <div className="relative z-10 mt-5 grid gap-3 md:mt-7">
        {aiStack.map((item, index) => (
          <div
            key={item.title}
            data-reveal="slide"
            data-reveal-delay={`${index * 70}ms`}
            className="ai-stack-row grid gap-2 border border-white/10 bg-neutral-950/60 p-3 md:grid-cols-[64px_0.65fr_1.35fr] md:items-center md:gap-4 md:p-4"
          >
            <span className="text-sm font-semibold text-neutral-500">{item.label}</span>
            <strong className="text-base font-semibold text-white md:text-lg">{item.title}</strong>
            <span className="text-sm leading-6 text-neutral-400">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="relative z-10 mt-5 grid gap-2 sm:grid-cols-2 md:mt-7 md:grid-cols-4 md:gap-3">
        {["Nutzen", "Daten", "Kosten", "Nachfrage"].map((item, index) => (
          <div key={item} className="border border-white/10 bg-white/[0.03] p-3 md:p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500 md:text-xs md:tracking-[0.18em]">
              Signal 0{index + 1}
            </p>
            <p className="mt-3 text-sm font-semibold text-white">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AIVentureStudioPage() {
  const aiExamples = ["cartpt", "mcpcore", "geogurus"]
    .map((slug) => caseStudies.find((study) => study.slug === slug))
    .filter((study): study is NonNullable<typeof study> => Boolean(study));

  return (
    <>
      <StructuredData
        data={[aiVentureStudioSchema, faqSchema(faqs.aiVentureStudio, pageSeo.aiVentureStudio.path)]}
      />

      <section className="border-b border-neutral-800 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-[1440px] gap-9 px-5 py-14 md:px-8 md:py-24 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div data-reveal="slide" className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 md:mb-6">
              AI Venture Studio
            </p>
            <h1 className="text-3xl font-semibold leading-[1.08] md:text-6xl">
              AI Venture Studio: AI-Produkte bauen, die mehr sind als Demo-Effekt.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 md:mt-7 md:text-lg md:leading-9">
              Veytra entwickelt AI-native Ventures, Automatisierungen und Software-Produkte: von Use Case, Datenlage und Prototyp bis AI-MVP, Launch, Nachfrage-Test und nächster Wachstumsentscheidung.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-9">
              <Link
                href="/kontakt"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white bg-white px-5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
              >
                AI-Venture anfragen
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
            <AIStudioVisual />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-14 md:px-8 md:py-24 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionIntro
            eyebrow="Definition"
            title="Was ein AI Venture Studio wirklich macht."
            description="Ein AI Venture Studio baut keine Prompt-Demos. Es übersetzt AI in ein testbares Geschäftsmodell: Problem, Daten, Produkt, Vertrieb, Betrieb und Skalierung."
          />
          <div className="grid gap-4">
            {antiDemo.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 90}ms`}
                className="ai-studio-card relative overflow-hidden border border-neutral-200 bg-white p-5 md:grid md:grid-cols-[0.45fr_1fr] md:gap-8 md:p-6"
              >
                <h2 className="relative z-10 text-xl font-semibold text-neutral-950">{item.title}</h2>
                <p className="relative z-10 mt-4 text-base leading-8 text-neutral-600 md:mt-0">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="AI-Mehrwert"
            title="Wo AI echten Venture-Wert erzeugt."
            description="AI ist stark, wenn sie eine wiederholbare Aufgabe produktisiert, eine Entscheidung verbessert, operative Arbeit reduziert oder ein neues Erlösmodell ermöglicht."
          />
          <div className="mt-8 grid gap-4 md:mt-12 lg:grid-cols-3">
            {aiValueAreas.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 60}ms`}
                className="ai-studio-card relative overflow-hidden border border-neutral-200 bg-white p-5 md:p-7"
              >
                <span className="relative z-10 text-sm font-semibold text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="relative z-10 mt-5 text-lg font-semibold text-neutral-950 md:mt-7 md:text-xl">{item.title}</h3>
                <p className="relative z-10 mt-5 text-base leading-8 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-9 px-5 py-14 md:gap-12 md:px-8 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div data-reveal="clip" className="relative overflow-hidden border border-neutral-200 bg-neutral-100 lg:order-2">
            <Image
              src="/images/ai-workbench.png"
              alt="AI Venture Studio Workbench mit Produktflows, Datenlogik und technischen Skizzen"
              width={900}
              height={680}
              className="h-full min-h-[280px] w-full object-cover contrast-[1.04] md:min-h-[420px]"
            />
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 border border-white/55 bg-white/[0.84] p-4 backdrop-blur md:bottom-6 md:left-6 md:right-6 md:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                AI Workbench
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-neutral-950 md:text-base">
                Use Case, Datenlage, Produktlogik und Nachfrage-Test zusammen gedacht.
              </p>
            </div>
          </div>
          <div>
            <SectionIntro
              eyebrow="Was wir exakt übernehmen"
              title="Vom AI-Use-Case zur marktfähigen Produktlogik."
              description="Wir bauen nicht nur die technische Oberfläche. Wir prüfen, ob der AI-Nutzen stark genug ist, um Nachfrage, Nutzung und wirtschaftlichen Wert zu erzeugen."
            />
            <div className="mt-8 grid gap-3 md:mt-10">
              {exactWork.map((item, index) => (
                <article
                  key={item.label}
                  data-reveal="fade"
                  data-reveal-delay={`${index * 60}ms`}
                  className="ai-work-row relative overflow-hidden border border-neutral-200 bg-white p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">{item.label}</p>
                  <h3 className="mt-3 text-lg font-semibold text-neutral-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-14 md:gap-12 md:px-8 md:py-24 lg:grid-cols-[0.75fr_1.25fr]">
          <div data-reveal="slide" className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">AI Venture Prozess</p>
            <h2 className="text-2xl font-semibold leading-tight md:text-5xl">
              Erst Problem. Dann Daten. Dann AI-MVP.
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-300">
              AI wird erst wertvoll, wenn Nutzen, Datenlage, Produktlogik und Nachfrage zusammenpassen. Deshalb bauen wir in klaren Gates.
            </p>
          </div>
          <div className="studio-process-track relative grid gap-4">
            {aiProcess.map((step, index) => (
              <article
                key={step.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 90}ms`}
                className="studio-process-card relative overflow-hidden border border-white/10 bg-white/[0.03] p-5 md:grid md:grid-cols-[86px_0.8fr_1fr] md:gap-8 md:p-6"
              >
                <span className="relative z-10 text-sm font-semibold text-neutral-500">{step.label}</span>
                <h3 className="relative z-10 mt-4 text-xl font-semibold text-white md:mt-0 md:text-2xl">{step.title}</h3>
                <p className="relative z-10 mt-5 text-base leading-8 text-neutral-300 md:mt-0">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Case Studies"
            title="AI-nahe Kontexte aus Produkt, Infrastruktur und Sichtbarkeit."
            description="Die Beispiele zeigen unterschiedliche AI-Logiken: Nutzerprodukt, sichere KI-Infrastruktur und digitale Entscheidungsstrecken rund um AI Search."
          />
          <div className="mt-8 md:mt-12">
            <CaseStudyGrid studies={aiExamples} compact />
          </div>
          <Link href="/case-studies" className="mt-10 inline-flex text-sm font-medium text-neutral-950 underline">
            Alle Case Studies ansehen
          </Link>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-14 md:gap-10 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="Einordnung"
            title="AI Venture Studio ist Venture Building mit mehr operativer Geschwindigkeit."
            description="AI ersetzt keine Kundensignale. AI beschleunigt die Arbeit bis zu dem Punkt, an dem der Markt ehrlich antwortet."
          />
          <div data-reveal="slide" className="grid gap-4">
            {[
              "mehr Varianten in Research und Produktkonzept",
              "schnellere Prototypen für echte Nutzertests",
              "frühere Automatisierung von Sales, Reporting und Operations",
              "bessere Entscheidungsgrundlage vor größerem Build-Budget"
            ].map((item, index) => (
              <div key={item} className="border border-neutral-200 bg-white p-4 md:p-5">
                <span className="text-sm font-semibold text-neutral-400">0{index + 1}</span>
                <span className="mt-3 block text-base font-semibold leading-7 text-neutral-950 sm:ml-6 sm:mt-0 sm:inline">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro eyebrow="FAQ" title="Häufige Fragen zum AI Venture Studio." />
          <div className="mt-10">
            <FAQ items={faqs.aiVentureStudio} />
          </div>
        </div>
      </section>

      <CTASection
        title="Soll aus dem AI-Use-Case ein echtes Produkt werden?"
        description="Wir prüfen Problem, Datenlage, AI-Logik, MVP-Scope, Go-to-Market und Deal-Modell. Danach weißt du, ob sich ein AI-Venture-Build lohnt."
        primaryLabel="AI-Venture anfragen"
        secondaryLabel="Studio OS ansehen"
        secondaryHref="/studio-os"
      />
    </>
  );
}
