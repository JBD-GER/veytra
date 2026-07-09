import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AnimatedTrustStats } from "@/components/AnimatedTrustStats";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { HeroSection } from "@/components/HeroSection";
import { ImageFeature } from "@/components/ImageFeature";
import { SectionIntro } from "@/components/SectionIntro";
import { AfterLaunchScroller } from "@/components/AfterLaunchScroller";
import { ScrollFadingAudienceCards } from "@/components/ScrollFadingAudienceCards";
import { ScrollFadingInvestmentModels } from "@/components/ScrollFadingInvestmentModels";
import { StatBlock } from "@/components/StatBlock";
import { StructuredData } from "@/components/StructuredData";
import { VentureMachine } from "@/components/VentureMachine";
import { VentureProbabilityGraph } from "@/components/VentureProbabilityGraph";
import { caseStudies, featuredCaseStudies } from "@/content/case-studies";
import { faqs } from "@/content/faqs";
import { pageSeo } from "@/content/pages";
import { faqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(pageSeo.home);

const ventureTypes = [
  {
    title: "Software & Plattformen",
    body: "SaaS, Portale und digitale Systeme, die wiederkehrende Probleme lösen und als eigenständiges Produkt verkauft werden können."
  },
  {
    title: "AI-native Produkte",
    body: "Anwendungen, bei denen künstliche Intelligenz der zentrale Nutzen ist - von Assistenten und Suche bis zu Datenprodukten und Automatisierung."
  },
  {
    title: "Commerce & Marktplätze",
    body: "Geschäftsmodelle, die Angebot und Nachfrage verbinden oder eine klare Nische digital, skalierbar und transaktional erschließen."
  },
  {
    title: "Produktisierte Services",
    body: "Dienstleistungen, die standardisiert, paketiert und wiederholbar verkauft werden - mit klaren Prozessen statt individueller Einmalprojekte."
  },
  {
    title: "Automation & AI Workflows",
    body: "Workflows, Agenten und interne Tools, die operative Arbeit reduzieren, Prozesse beschleunigen oder neue Effizienz schaffen."
  },
  {
    title: "Connected Products & IoT",
    body: "Vernetzte Produkte, Sensorik und hardware-nahe Geschäftsmodelle, bei denen physische Nutzung mit digitaler Logik verbunden wird."
  }
];

const audienceFit = [
  {
    title: "Unternehmen",
    href: "/fuer-unternehmen",
    body: "Ihr habt Kunden, Daten, Distribution oder eine Marktchance, die intern zu langsam vorankommt. Veytra baut daraus ein testbares Venture außerhalb der normalen Projektlogik."
  },
  {
    title: "Gründer",
    href: "/fuer-gruender",
    body: "Du hast eine Idee, Problemnähe oder Zugang zu einer Zielgruppe. Veytra hilft, daraus eine belastbare Venture-These, ein MVP und einen ersten Launch zu bauen."
  },
  {
    title: "Startups",
    href: "/fuer-startups",
    body: "Euer Startup existiert bereits, aber Produkt, Growth, Automatisierung oder Kapitalpfad brauchen mehr Tempo. Veytra steigt operativ ein und schärft die nächsten Wachstumsentscheidungen."
  }
];

const collaborationModels = [
  {
    title: "Reines Equity-Modell",
    label: "Gemeinsames Risiko",
    when: "Wenn eine valide Idee, tiefe Markt-Expertise oder erste Proof-of-Concepts vorliegen, aber das technische Core-Team für die Skalierung fehlt.",
    means: "Veytra übernimmt die komplette Produktentwicklung, das Design und die technische Infrastruktur bis zum Launch gegen Firmenanteile. Das unternehmerische Risiko wird zu 100 % geteilt."
  },
  {
    title: "Hybrid-Modell (Build-Fee + Equity)",
    label: "Co-finanzierter Aufbau",
    when: "Für Gründerteams mit erstem Pre-Seed-Kapital oder Unternehmen, die das Risiko minimieren und gleichzeitig sofort maximale Entwicklungsgeschwindigkeit wollen.",
    means: "Eine reduzierte, monatliche Build-Fee deckt die direkten Projekt- und Ressourcenkosten. Im Gegenzug verringert sich die Equity-Beteiligung von Veytra signifikant."
  },
  {
    title: "Corporate-Modell (Asset- & Revenue-Share)",
    label: "Strategischer Aufbau",
    when: "Wenn ein etabliertes Unternehmen den Aufbau vollständig finanziert, das neue Venture aber agil und losgelöst von Konzernstrukturen entstehen soll.",
    means: "Die Entwicklung wird voll finanziert. Die Beteiligung von Veytra erfolgt flexibel und individuell - beispielsweise über Umsatzanteile (Revenue Share), Lizenzmodelle oder vordefinierte Meilenstein-Zahlungen des geschaffenen Assets."
  }
];

const afterLaunchItems = [
  {
    tag: "Demand Loop",
    title: "Go-to-Market weiterführen",
    body: "Kampagnen, Funnel, Content und Sales-Strecken werden nach dem Launch nicht abgestellt, sondern anhand echter Zahlen verbessert."
  },
  {
    tag: "Metric Loop",
    title: "Produkt & Kennzahlen schärfen",
    body: "Nutzung, Conversion, Feedback und Zahlungsbereitschaft zeigen, welche Features gebaut, gestrichen oder weiterentwickelt werden."
  },
  {
    tag: "Ops Layer",
    title: "Betrieb & Automatisierung aufbauen",
    body: "Workflows, CRM, Reporting, AI-Prozesse und interne Systeme reduzieren manuelle Arbeit und machen das Venture operativ belastbar."
  },
  {
    tag: "Company Layer",
    title: "Gesellschaft & Geschäftsführung vorbereiten",
    body: "Wenn aus dem MVP ein eigenständiges Unternehmen werden soll, begleiten wir die nächsten Schritte: Rechtsform, Rollen, Verantwortlichkeiten und operative Geschäftsführung."
  },
  {
    tag: "Capital Path",
    title: "Kapitalpfad vorbereiten",
    body: "Wenn Wachstum sichtbar wird, übersetzen wir Traktion in Investor Story, Kennzahlen, Datenraum und nächste Finanzierungsschritte."
  }
];

const trustStats = [
  {
    label: "Umgesetzte Projekte",
    value: caseStudies.length,
    suffix: "+",
    body: "Digitale Produkte, Funnels, AI-Angebote und Venture-Setups aus den bestehenden Cases.",
    chart: "steps" as const,
    max: 8,
    points: [1, 2, 3, 3, 5, 6, 7]
  },
  {
    label: "Investiertes Kapital",
    value: 485,
    prefix: "€",
    suffix: "k+",
    body: "Build-Kapital für Produkt, Launch, Growth, Automatisierung und frühe Validierung.",
    chart: "bars" as const,
    max: 500,
    points: [45, 92, 140, 210, 310, 390, 485]
  },
  {
    label: "Kundentraffic / Monat",
    value: 120,
    suffix: "k+",
    body: "Aktuelle monatliche Reichweite über gebaute Websites, Funnels, Suchstrecken und Kampagnen.",
    chart: "area" as const,
    max: 130,
    points: [12, 22, 31, 48, 72, 94, 120]
  }
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={faqSchema(faqs.home, pageSeo.home.path)} />
      <HeroSection />

      <VentureProbabilityGraph />

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionIntro
              eyebrow="Vision"
              title="Kein Dienstleister hinter der Idee. Ein Geschäftspartner im Aufbau."
              description="Veytra hilft Gründern, Unternehmen und Operatorn dabei, neue digitale Geschäftsmodelle zu finden, mit dem Markt zu validieren, produktseitig zu bauen und mit Marketingmaßnahmen in den Launch zu bringen."
            />
            <div className="grid gap-6 text-base leading-8 text-neutral-600">
              <p>
                Der Unterschied ist entscheidend: Es geht nicht darum, eine Website, eine App
                oder eine Kampagne einzukaufen. Es geht darum, ein digitales Geschäftsmodell
                aufzubauen, das eigene Nachfrage, eigene Nutzer und eigene Wirtschaftlichkeit
                entwickeln kann.
              </p>
              <p>
                Veytra denkt wie ein Co-Founder: Welche Idee ist groß genug? Wer kauft das wirklich?
                Was muss gebaut werden? Wie entsteht Nachfrage? Welche Rolle spielen Google Ads,
                Meta Ads, Sales, Content, Automatisierung und Produktentwicklung im ersten echten Launch?
              </p>
            </div>
          </div>
          <div className="mt-14 border-t border-neutral-200 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Track Record
            </p>
            <div className="mt-6">
              <AnimatedTrustStats stats={trustStats} />
            </div>
          </div>
        </div>
      </section>

      <VentureMachine />

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-28">
          <SectionIntro
            eyebrow="WAS AUS EINER IDEE ENTSTEHEN KANN"
            title="Ein Venture kann viele Formen haben."
            description="Veytra ist nicht auf eine Produktkategorie beschränkt. Wir bauen Geschäftsmodelle, die sich validieren, verkaufen und wiederholt skalieren lassen - ob Software, AI, Plattform, Service oder vernetztes Produkt."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ventureTypes.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${Math.min(index, 5) * 60}ms`}
                className="min-h-[230px] border border-neutral-200 bg-white p-6 transition hover:border-neutral-950"
              >
                <p className="text-sm tabular-nums text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-xl font-semibold leading-tight text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ImageFeature
        src="/images/studio-workbench.png"
        alt="Venture-Studio-Arbeitsfläche mit Strategie, Produktplanung und Launch-Artefakten"
        eyebrow="Co-Founder-Modell"
        title="Sobald die Idee steht, entsteht schnell ein MVP."
        description="Veytra arbeitet mit extrem effizienten Aufbauprozessen: Idee schärfen, Markt prüfen, Scope festlegen, MVP bauen und Launch vorbereiten. Kein monatelanges Agenturbriefing, sondern ein kompakter Produktkern, der am Markt lernen kann."
      />

      <section className="overflow-hidden border-y border-neutral-900 bg-neutral-950 text-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-28">
          <div
            data-reveal="slide"
            className="border-b border-white/10 pb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Geeignet für
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <h2 className="max-w-xl text-2xl font-semibold leading-tight md:text-4xl">
                Für wen Veytra als Venture Studio geeignet ist.
              </h2>
              <p className="max-w-4xl text-base leading-8 text-neutral-300 md:text-lg md:leading-9">
                Veytra ist sinnvoll, wenn es nicht um eine einzelne Website, App oder Kampagne
                geht, sondern um ein digitales Geschäftsmodell mit gemeinsamer Verantwortung.
              </p>
            </div>
          </div>

          <ScrollFadingAudienceCards audiences={audienceFit} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-28">
          <StatBlock
            items={[
              {
                label: "Find",
                value: "Ideen finden",
                description: "Wir suchen Marktprobleme, Zielgruppen, Nischen und digitale Hebel, aus denen ein Geschäft entstehen kann."
              },
              {
                label: "Validate",
                value: "Mit dem Markt testen",
                description: "Wir prüfen Nachfrage, Kaufabsicht, Wettbewerb und Vertriebszugang, bevor das Produkt zu schwer wird."
              },
              {
                label: "Launch",
                value: "Mit Growth starten",
                description: "Wir launchen mit Positionierung, Funnel, Google Ads, Meta Ads, Content, Sales und messbaren Signalen."
              }
            ]}
          />
        </div>
      </section>

      <section className="overflow-hidden border-y border-neutral-200 bg-neutral-950 text-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-28">
          <div
            data-reveal="slide"
            className="border-b border-neutral-800 pb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              ZUSAMMENARBEIT
            </p>
            <h2 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight md:text-4xl">
              Unternehmerische Partnerschaft. Unsere Investment-Modelle.
            </h2>
            <p className="mt-6 max-w-5xl text-base leading-8 text-neutral-300 md:text-lg md:leading-9">
              Ein Venture Studio arbeitet grundlegend anders als eine klassische IT-Agentur. Wir
              rechnen keine reinen Arbeitsstunden ab, sondern investieren unsere operative
              Execution direkt in den Erfolg des gemeinsamen Unternehmens. Je nach Ausgangslage,
              Marktchance und Finanzierungsstatus nutzen wir dafür drei transparente Modelle.
            </p>
          </div>
          <div className="mt-10">
            <ScrollFadingInvestmentModels models={collaborationModels} />
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-28">
          <div
            data-reveal="slide"
            className="grid gap-8 border-b border-neutral-200 pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                NACH DEM LAUNCH
              </p>
              <h2 className="mt-5 max-w-xl text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
                Aus dem MVP wird ein Unternehmen.
              </h2>
            </div>
            <p className="max-w-4xl text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
              Ein Venture ist nicht fertig, wenn das erste Produkt online ist. Nach dem Launch
              geht es darum, echte Marktsignale auszuwerten, Vertrieb aufzubauen, Prozesse zu
              automatisieren und bei Bedarf die passende Gesellschaftsstruktur samt operativer
              Geschäftsführung vorzubereiten.
            </p>
          </div>

          <AfterLaunchScroller items={afterLaunchItems} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-28">
          <SectionIntro
            eyebrow="Beispiele"
            title="Einige digitale Geschäftsmodelle aus unserer Welt."
            description="Die Cases sind keine Blaupause, aber sie zeigen die Spannweite: AI-Produkte, Marktplätze, SaaS, Suchsysteme, Finance-Funnel und digitale Angebote."
          />
          <div className="mt-12">
            <CaseStudyGrid studies={featuredCaseStudies.slice(0, 3)} compact />
          </div>
          <Link href="/case-studies" className="mt-10 inline-flex text-sm font-medium text-neutral-950 underline">
            Cases ansehen
          </Link>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:px-8 md:py-28 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div data-reveal="slide">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Reality Check
            </p>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Wir sagen auch Nein.
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-600 md:text-lg">
              Nicht jede Idee braucht ein Venture Studio. Manche Ideen sind Projekte. Manche sind
              Features. Manche sind zu früh. Wir suchen die Fälle, in denen gemeinsame Ownership
              Sinn ergibt und aus Arbeit ein Unternehmenswert entstehen kann.
            </p>
          </div>
          <div data-reveal="scale" className="overflow-hidden border border-neutral-200 bg-white">
            <Image
              src="/images/launch-artifacts.png"
              alt="Launch-Artefakte für ein digitales Venture"
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] h-auto w-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="FAQ"
            title="Häufige Fragen zu Veytra als Venture Studio."
            description="Kurz erklärt: was Veytra macht, wann ein Venture Studio sinnvoll ist und wie wir mit Gründern, Startups und Unternehmen arbeiten."
          />
          <div className="mt-10">
            <FAQ items={faqs.home} />
          </div>
        </div>
      </section>

      <CTASection
        title="Kann daraus ein Venture werden?"
        description="Veytra prüft rohe Ideen, Marktprobleme oder Zugänge zu Zielgruppen und bewertet, ob daraus ein Venture entstehen kann."
        primaryLabel="Venture prüfen lassen"
        secondaryLabel="Studio OS ansehen"
        secondaryHref="/studio-os"
      />
    </>
  );
}
