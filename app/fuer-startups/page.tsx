import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { SectionIntro } from "@/components/SectionIntro";
import { StartupStageSwitcher } from "@/components/StartupStageSwitcher";
import { StructuredData } from "@/components/StructuredData";
import { faqs } from "@/content/faqs";
import { pageSeo } from "@/content/pages";
import { faqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = createMetadata(pageSeo.startups);

const startupServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Venture Studio für Startups",
  description: pageSeo.startups.description,
  url: absoluteUrl(pageSeo.startups.path),
  serviceType: [
    "Venture Studio",
    "MVP Optimierung",
    "Product-Market-Fit",
    "Go-to-Market",
    "Growth Sprint",
    "Fundraising Readiness",
    "AI Product Development"
  ],
  provider: {
    "@type": "Organization",
    name: "Veytra",
    url: absoluteUrl("/")
  },
  areaServed: ["Deutschland", "DACH"],
  audience: {
    "@type": "Audience",
    audienceType: "Pre-Seed Startups, Seed Startups, B2B-SaaS-Startups und AI-Startups"
  }
};

const heroSignals = [
  "MVP schärfen",
  "PMF-Signale messen",
  "Growth-System bauen",
  "Fundraising vorbereiten"
];

const startupProblems = [
  {
    title: "MVP ist gebaut, Nachfrage bleibt unklar",
    problem: "Das Produkt existiert, aber Zielkunde, Zahlungsbereitschaft und Nutzung liefern noch kein klares Signal.",
    consequence: "Das Team baut weiter, ohne sicher zu wissen, ob Markt und Angebot wirklich passen."
  },
  {
    title: "Produkt wächst, Positionierung bleibt unscharf",
    problem: "Features werden ergänzt, aber der Nutzen ist schwer erklärbar und die Zielgruppe bleibt zu breit.",
    consequence: "Sales, Website und Pitch erzählen unterschiedliche Geschichten."
  },
  {
    title: "Viele Features, wenig Fokus",
    problem: "Das Team reagiert auf jede Idee, jede Anfrage und jede Investor-Frage mit neuer Produktarbeit.",
    consequence: "Komplexität, Tech Debt und Kosten steigen, bevor klar ist, was wirklich verkauft."
  },
  {
    title: "Go-to-Market ist schwach",
    problem: "ICP, Angebot, Pricing, Funnel, Outreach, Ads oder Sales-Prozess sind nicht sauber strukturiert.",
    consequence: "Der Markt-Test bleibt zu weich, und Pipeline entsteht eher zufällig als wiederholbar."
  },
  {
    title: "Keine saubere Datenstruktur",
    problem: "Tracking, Aktivierung, Conversion, Retention und Pipeline werden nicht eindeutig gemessen.",
    consequence: "Entscheidungen basieren auf Gefühl statt auf belastbaren Signalen."
  },
  {
    title: "AI im Produkt, aber kein klares Wertversprechen",
    problem: "AI ist technisch vorhanden, aber Nutzen, Use Case und Geschäftsmodell bleiben unpräzise.",
    consequence: "Das Produkt wirkt modern, aber nicht zwingend kaufwürdig."
  },
  {
    title: "Fundraising-Story ohne belastbare Signale",
    problem: "Vision und Markt sind da, aber Belege für Nachfrage, Aktivierung, Pipeline oder Milestones fehlen.",
    consequence: "Investorengespräche bleiben defensiv und die nächste Runde wird schwerer erklärbar."
  },
  {
    title: "Team überlastet, Struktur fehlt",
    problem: "Founder arbeiten an Produkt, Sales, Support, Hiring, Reporting und Fundraising gleichzeitig.",
    consequence: "Tempo entsteht kurzfristig, aber keine wiederholbare Operating-Logik."
  }
];

const solutionBlocks = [
  {
    problem: "Das MVP ist da, aber Product-Market-Fit ist nicht sichtbar.",
    solution: "Wir prüfen Zielkunde, Problemstärke, Nutzenversprechen, Pricing, Funnel und Produktdaten und bauen die nächsten Tests so, dass echte Signale entstehen."
  },
  {
    problem: "Das Team baut zu viel und testet zu wenig.",
    solution: "Wir priorisieren MVP-Scope, Produkt-Roadmap und Experimente nach Risiko, Wirkung und Geschwindigkeit."
  },
  {
    problem: "Go-to-Market ist unklar.",
    solution: "Wir schärfen ICP, Positionierung, Angebot, Sales-Funnel, Landingpages, Outreach, Ads, Content oder Pilotkunden-Setup."
  },
  {
    problem: "AI ist Teil des Produkts, aber noch kein klares Geschäftsmodell.",
    solution: "Wir strukturieren AI-Funktionalität so, dass daraus konkreter Kundennutzen, ein wiederholbarer Use Case und ein zahlbares Produkt entsteht."
  },
  {
    problem: "Fundraising steht an, aber die Story ist noch nicht belastbar.",
    solution: "Wir helfen, Produkt-, Markt- und Growth-Signale so zu strukturieren, dass daraus eine klarere Investor-Story, Roadmap und Milestone-Logik entsteht."
  },
  {
    problem: "Das Gründerteam ist operativ überlastet.",
    solution: "Wir übernehmen operative Build-Verantwortung in Produkt, Tech, Funnel, Automatisierung oder Growth, ohne das Startup in eine Agenturabhängigkeit zu bringen."
  }
];

const fitItems = [
  "Pre-Seed-Startups mit klarer These",
  "Seed-Startups mit MVP und ersten Nutzern",
  "B2B-SaaS-Startups",
  "AI-Startups",
  "Plattform- und Marktplatz-Startups",
  "Vertical-SaaS-Startups",
  "Startups mit technischem Produkt und schwachem Vertrieb",
  "Startups vor Fundraising, die bessere Milestones brauchen",
  "Teams, die schneller testen, bauen und lernen wollen"
];

const noFitItems = [
  "Teams, die nur billige Entwicklerkapazität suchen",
  "Startups ohne Bereitschaft, Annahmen kritisch zu prüfen",
  "Projekte, bei denen nur eine Website oder App nach Briefing gebaut werden soll",
  "Teams, die kein echtes Marktfeedback zulassen",
  "Startups ohne Fokus auf Nachfrage, Umsatz oder klare Validierung",
  "reine Pitchdeck-Projekte ohne operative Substanz"
];

const stages = [
  {
    label: "Pre-Seed",
    problem: "These, Zielkunde, MVP-Scope und erste Validierung sind noch unscharf.",
    help: "Venture-These, MVP-Plan, Landingpage, Testlogik und erste Kundensignale."
  },
  {
    label: "MVP",
    problem: "Produkt existiert, aber Nachfrage und Nutzung sind noch nicht eindeutig.",
    help: "Produktanalyse, Tracking, Onboarding, Funnel, Feedback-Loops und Pricing-Test."
  },
  {
    label: "Seed",
    problem: "Es gibt erste Signale, aber noch keine wiederholbare Growth-Logik.",
    help: "ICP, Positionierung, Sales-System, Growth-Experimente und Produkt-Roadmap."
  },
  {
    label: "PMF",
    problem: "Nachfrage ist da, aber Struktur, Prozesse und Produktqualität bremsen.",
    help: "Operations, Automatisierung, Tech-Struktur, Reporting und Skalierungslogik."
  },
  {
    label: "Scale",
    problem: "Das Team wächst, aber Komplexität nimmt zu.",
    help: "Systematisierung, Automatisierung, AI-Workflows, interne Tools und Growth-Infrastruktur."
  }
];

const buildSprints = [
  "MVP-Überarbeitung, die Nutzung, Feedback und Zahlungsbereitschaft messbar macht",
  "Produktkern schärfen, damit weniger Features mehr Entscheidung erzeugen",
  "AI-Funktionen strukturieren, damit aus Technologie ein klarer Kundennutzen wird",
  "Landingpages und Anfragefunnel, die Zielgruppenreaktion sichtbar machen",
  "Sales- und Lead-Funnel, die Pipeline, Conversion und Einwände messbar machen",
  "Tracking und Analytics, damit Aktivierung, Retention und Kanalqualität klarer werden",
  "Onboarding-Flows, die Time-to-Value und frühe Nutzung verbessern",
  "Pricing- und Angebotstests, die Zahlungsbereitschaft statt nur Interesse prüfen",
  "Automatisierungen und interne Tools, die Founder und Team operativ entlasten",
  "Investor-Readiness-Materialien, die Milestones, Story und Datenraum schärfen",
  "Demo-Umgebungen, Kundeninterviews und Feedback-Loops für echte Lernzyklen",
  "Produkt-Roadmap und Operations-Struktur für die nächsten Entscheidungen"
];

const processSteps = [
  {
    label: "01",
    title: "Diagnose & Startup-Audit",
    action: "Wir prüfen Produkt, Zielkunde, Marktthese, Funnel, Datenlage, Team, Roadmap und aktuelle Engpässe.",
    output: "Klare Engpass-Diagnose und Priorisierung der nächsten 30 bis 90 Tage."
  },
  {
    label: "02",
    title: "Signal Design",
    action: "Wir definieren, welche Signale jetzt wirklich zählen: Nachfrage, Aktivierung, Retention, Umsatz, Pipeline, Pilotkunden, Conversion oder Investor-Milestones.",
    output: "Klare Testlogik und messbare Kriterien."
  },
  {
    label: "03",
    title: "Build Sprint",
    action: "Wir bauen oder verbessern Produktkern, Funnel, AI-Funktion, Tracking, Onboarding, Landingpage, Sales-Flow oder Automatisierung.",
    output: "Ein operativ nutzbarer Build, der echte Daten erzeugt."
  },
  {
    label: "04",
    title: "Go-to-Market & Learning Loop",
    action: "Wir bringen das Angebot in den Markt, testen Kanäle, werten Feedback aus und schärfen Produkt, Messaging und Pricing.",
    output: "Echte Marktreaktion statt interner Meinung."
  },
  {
    label: "05",
    title: "Readiness & Next Step",
    action: "Wir strukturieren die nächste Entscheidung: weiterbauen, pivotieren, skalieren, Fundraising vorbereiten oder stoppen.",
    output: "Klare Roadmap, Milestones, Verantwortlichkeiten und Investor-/Budget-Story."
  }
];

const collaborationModels = [
  {
    title: "Sprint-Modell",
    body: "Klar abgegrenzter Build- oder Growth-Sprint, wenn ein konkreter Engpass schnell geprüft oder gelöst werden soll."
  },
  {
    title: "Retainer-Modell",
    body: "Operative Begleitung über mehrere Monate, wenn Produkt, Funnel, Tracking und Growth gemeinsam stabilisiert werden müssen."
  },
  {
    title: "Hybrid-Modell",
    body: "Reduziertes Build-Budget plus Beteiligung, wenn Veytra operative Verantwortung übernimmt und langfristig mitwirkt."
  },
  {
    title: "Equity-Modell",
    body: "Beteiligung bei starkem Team-Fit, klarem Marktpotenzial, Momentum und echter operativer Rolle von Veytra."
  },
  {
    title: "Fundraising-Vorbereitung",
    body: "Milestones, Story, Signalstruktur, Unterlagen und Datenraum vor der nächsten Runde."
  }
];

const comparisons = [
  {
    other: "Agentur",
    otherText: "baut nach Briefing.",
    veytra: "hinterfragt Scope, Markt, Funnel und Prioritäten."
  },
  {
    other: "Accelerator",
    otherText: "arbeitet oft mit Programmen, Mentoren und Demo Days.",
    veytra: "arbeitet operativ am Produkt, Funnel und Build."
  },
  {
    other: "Freelancer",
    otherText: "liefert einzelne Aufgaben.",
    veytra: "verbindet Produkt, Tech, Markt, Growth und Venture-Logik."
  },
  {
    other: "Beratung",
    otherText: "liefert Strategie und Empfehlungen.",
    veytra: "hilft beim Bauen, Testen, Messen und Entscheiden."
  }
];

const outcomes = [
  "Welcher Engpass bremst das Startup wirklich?",
  "Welche Zielgruppe reagiert?",
  "Welches Angebot erzeugt Nachfrage?",
  "Welche Produktteile sind wirklich relevant?",
  "Welche Features können weg?",
  "Welcher Kanal zeigt erste Signale?",
  "Welche Metriken sind belastbar?",
  "Welche Story ist für Investoren glaubwürdig?",
  "Welche Roadmap ergibt Sinn?",
  "Was wird gestoppt, angepasst oder skaliert?",
  "Was muss das Team selbst übernehmen?",
  "Wo übernimmt Veytra operative Verantwortung?"
];

function StartupHeroVisual() {
  return (
    <div data-reveal="scale" data-reveal-delay="120ms" className="startup-hero-visual relative overflow-hidden border border-neutral-200 bg-white p-4 shadow-[0_28px_90px_rgba(23,23,23,0.08)] md:p-6">
      <div className="relative z-10">
        <div className="border-b border-neutral-200 pb-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Signal System
          </p>
          <p className="mt-3 max-w-xl text-xl font-semibold leading-tight text-neutral-950">
            Startups brauchen nicht mehr Roadmap. Sie brauchen die richtigen Signale.
          </p>
        </div>
        <div className="mt-6 grid gap-3">
          {[
            ["MVP", "Produktkern"],
            ["Signal", "Nachfrage / Nutzung"],
            ["GTM", "Funnel / Pipeline"],
            ["Readiness", "Story / Milestones"]
          ].map(([label, value], index) => (
            <div key={label} className="startup-hero-row grid grid-cols-[38px_1fr] gap-x-3 gap-y-1 border border-neutral-200 bg-neutral-50/70 p-4 sm:grid-cols-[48px_0.7fr_1fr] sm:items-center sm:gap-4">
              <span className="text-sm font-semibold tabular-nums text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-semibold text-neutral-950">{label}</span>
              <span className="col-start-2 text-sm leading-6 text-neutral-600 sm:col-start-auto">{value}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {["Fokus", "Speed", "Belege"].map((item, index) => (
            <div key={item} className="border border-neutral-200 bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                Output {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-sm font-semibold text-neutral-950">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function StartupsPage() {
  return (
    <>
      <StructuredData data={[startupServiceSchema, faqSchema(faqs.startups, pageSeo.startups.path)]} />

      <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,23,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(23,23,23,0.035)_1px,transparent_1px)] bg-[size:96px_96px] opacity-50" />
        <div className="relative mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:px-8 md:py-28 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-3xl">
            <p data-reveal="slide" className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Venture Studio für Startups
            </p>
            <h1 data-reveal="slide" data-reveal-delay="70ms" className="text-3xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Venture Studio für Startups: MVP schärfen, Growth testen, Funding vorbereiten.
            </h1>
            <p data-reveal="slide" data-reveal-delay="140ms" className="mt-6 text-base leading-8 text-neutral-600 md:mt-7 md:text-xl md:leading-9">
              Veytra unterstützt Pre-Seed- und Seed-Startups operativ bei MVP, Product-Market-Fit,
              AI-Integration, Go-to-Market, Growth-Signalen und Fundraising-Readiness. Für Teams,
              die nicht nur weiterbauen, sondern schneller belastbare Entscheidungen treffen müssen.
            </p>
            <div data-reveal="slide" data-reveal-delay="220ms" className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/kontakt" className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-950 bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950">
                Startup anfragen
              </Link>
              <Link href="/prozess" className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-950 transition hover:border-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950">
                Prozess ansehen
              </Link>
            </div>
            <div data-reveal="slide" data-reveal-delay="280ms" className="mt-7 grid gap-2 sm:grid-cols-2">
              {heroSignals.map((signal) => (
                <div key={signal} className="border border-neutral-200 bg-white/80 px-4 py-3 text-sm font-semibold text-neutral-800 shadow-[0_12px_40px_rgba(23,23,23,0.04)]">
                  {signal}
                </div>
              ))}
            </div>
          </div>
          <StartupHeroVisual />
        </div>
      </section>

      <section id="ausgangslage" className="scroll-mt-20 bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-14 md:gap-12 md:px-8 md:py-24 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionIntro
            eyebrow="Ausgangslage"
            title="Startups scheitern selten an Ideen. Sie verlieren Zeit, bevor echte Signale entstehen."
            description="Viele Teams bauen zu lange am Produkt, bevor sie wissen, ob Markt, Zielkunde, Pricing und Vertrieb funktionieren."
          />
          <div data-reveal="slide" className="grid gap-6 text-base leading-8 text-neutral-600">
            <p>
              Kleine Teams haben wenig Runway und viele Baustellen. Jeder falsche Monat bindet
              Produktzeit, technische Kapazität und Founder-Aufmerksamkeit.
            </p>
            <p>
              Investoren erwarten nicht nur Vision, sondern Belege: Nachfrage, Aktivierung,
              Retention, Pipeline, Zahlungsbereitschaft, Unit Economics und ein Team, das fokussiert
              umsetzen kann.
            </p>
            <p className="border border-neutral-200 bg-neutral-50 p-5 font-medium text-neutral-800">
              Startups brauchen keine weitere Innovationspräsentation. Sie brauchen ein System,
              das aus Annahmen möglichst schnell Marktsignale macht.
            </p>
          </div>
        </div>
      </section>

      <section id="engpaesse" className="scroll-mt-20 border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Engpässe"
            title="Wo Startups typischerweise Geschwindigkeit verlieren."
            description="Wenn Produkt, Markt, Daten, Growth und Fundraising gleichzeitig drücken, braucht es klare Prioritäten statt noch mehr Workshops."
          />
          <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
            {startupProblems.map((item, index) => (
              <article key={item.title} data-reveal="slide" data-reveal-delay={`${index * 45}ms`} className="startup-card relative overflow-hidden border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 hover:border-neutral-950 hover:shadow-[0_20px_60px_rgba(23,23,23,0.08)]">
                <p className="text-sm font-semibold tabular-nums text-neutral-500">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-6 text-lg font-semibold leading-tight text-neutral-950 md:mt-7">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{item.problem}</p>
                <p className="mt-5 border-t border-neutral-200 pt-5 text-sm leading-7 text-neutral-700">{item.consequence}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="probleme-loesen" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Problemlöser"
            title="Was Veytra für Startups löst."
            description="Wir arbeiten als operativer Build-Partner mit Venture-Logik: Produkt, Markt, Growth, Daten und Investor-Readiness werden zusammen gedacht."
          />
          <div className="mt-10 grid gap-4 md:mt-12">
            {solutionBlocks.map((item, index) => (
              <article key={item.problem} data-reveal="slide" data-reveal-delay={`${index * 60}ms`} className="startup-solver-row relative grid gap-5 overflow-hidden border border-neutral-200 bg-white p-5 md:grid-cols-[0.38fr_0.62fr] md:gap-6 md:p-7">
                <div>
                  <p className="text-sm font-semibold tabular-nums text-neutral-500">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-6 text-lg font-semibold leading-tight text-neutral-950">{item.problem}</p>
                </div>
                <div className="border-t border-neutral-200 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">Veytra</p>
                  <p className="mt-4 text-base leading-8 text-neutral-600">{item.solution}</p>
                </div>
              </article>
            ))}
          </div>
          <div data-reveal="fade" className="mt-10 flex flex-col gap-4 border border-neutral-200 bg-neutral-50 p-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-base font-medium leading-7 text-neutral-800">
              Der erste Schritt ist keine große Roadmap, sondern eine klare Engpassdiagnose: Wo verliert euer Startup gerade die meiste Geschwindigkeit?
            </p>
            <Link href="/kontakt" className="inline-flex min-h-11 items-center justify-center rounded-[6px] border border-neutral-950 bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800">
              Engpass prüfen lassen
            </Link>
          </div>
        </div>
      </section>

      <section id="fit" className="scroll-mt-20 border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-[1240px] gap-5 px-5 py-14 md:gap-8 md:px-8 md:py-24 lg:grid-cols-2">
          <div data-reveal="slide" className="startup-fit-panel border border-neutral-200 bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Geeignet für</p>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-neutral-950 md:text-3xl">
              Startups mit Produkt, Momentum und echtem Entscheidungsdruck.
            </h2>
            <div className="mt-8 grid gap-3">
              {fitItems.map((item, index) => (
                <div key={item} className="grid grid-cols-[42px_1fr] items-start gap-4 border border-neutral-200 bg-neutral-50 px-4 py-4">
                  <span className="text-sm font-semibold tabular-nums text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm font-medium leading-6 text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal="slide" data-reveal-delay="100ms" className="startup-fit-panel border border-neutral-200 bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Nicht geeignet für</p>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-neutral-950 md:text-3xl">
              Wenn nur Kapazität gesucht wird, ist Veytra nicht der richtige Partner.
            </h2>
            <div className="mt-8 grid gap-3">
              {noFitItems.map((item, index) => (
                <div key={item} className="grid grid-cols-[42px_1fr] items-start gap-4 border border-neutral-200 bg-neutral-50 px-4 py-4">
                  <span className="text-sm font-semibold tabular-nums text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm font-medium leading-6 text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="phasen" className="scroll-mt-20">
        <StartupStageSwitcher stages={stages} />
      </div>

      <section id="build-sprints" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Build-Sprints"
            title="Aus Startup-Engpässen werden konkrete Build-Sprints."
            description="Wir bauen nicht einfach Assets. Jeder Sprint soll eine Entscheidung ermöglichen: Was funktioniert, was wird verkauft, was muss weg, was trägt die nächste Runde?"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {buildSprints.map((item, index) => (
              <article key={item} data-reveal="slide" data-reveal-delay={`${index * 35}ms`} className="startup-build-card border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 hover:border-neutral-950">
                <p className="text-sm font-semibold tabular-nums text-neutral-500">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-6 text-sm font-medium leading-7 text-neutral-800">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="prozess" className="relative scroll-mt-20 overflow-hidden border-y border-neutral-200 bg-neutral-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:96px_96px] opacity-35" />
        <div className="relative mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <div data-reveal="slide" className="grid gap-6 border-b border-white/10 pb-10 lg:grid-cols-[0.54fr_0.46fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.45]">Prozess</p>
              <h2 className="mt-5 text-2xl font-semibold leading-tight md:text-3xl">
                Vom Engpass zur nächsten belastbaren Entscheidung.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/[0.66] lg:justify-self-end">
              Jeder Schritt hat einen Output. Wir bauen das, was Signale erzeugt, statt Aktivität nur größer zu machen.
            </p>
          </div>
          <div className="startup-process-track relative mt-10 grid gap-4 md:mt-12 md:gap-5">
            {processSteps.map((step, index) => (
              <article key={step.title} data-reveal="slide" data-reveal-delay={`${index * 70}ms`} className="startup-process-card relative overflow-hidden border border-white/10 bg-white/[0.035] p-5 md:p-6">
                <div className="relative z-10 grid gap-5 md:gap-6 lg:grid-cols-[70px_0.28fr_0.37fr_0.35fr]">
                  <p className="text-sm font-semibold tabular-nums text-white/[0.44]">{step.label}</p>
                  <h3 className="text-xl font-semibold leading-tight text-white md:text-2xl">{step.title}</h3>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.44]">Was passiert</p>
                    <p className="mt-3 text-sm leading-7 text-white/[0.68]">{step.action}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.44]">Output</p>
                    <p className="mt-3 text-sm leading-7 text-white/[0.76]">{step.output}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div data-reveal="fade" className="mt-10 flex flex-col gap-4 border border-white/10 bg-white/[0.035] p-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-base font-medium leading-7 text-white/[0.78]">
              Wenn der Engpass klar ist, kann ein Sprint klein starten und trotzdem eine große Entscheidung vorbereiten.
            </p>
            <Link href="/kontakt" className="inline-flex min-h-11 items-center justify-center rounded-[6px] border border-white bg-white px-5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200">
              Build-Sprint starten
            </Link>
          </div>
        </div>
      </section>

      <section id="zusammenarbeit" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Zusammenarbeit"
            title="Wie die Zusammenarbeit mit Startups aussehen kann."
            description="Nicht jedes Startup bekommt ein Equity-Modell. Veytra prüft Team, Markt, Produkt, Momentum, Potenzial und Zusammenarbeit. Beteiligung ergibt nur Sinn, wenn Veytra echte operative Verantwortung übernimmt."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-5">
            {collaborationModels.map((item, index) => (
              <article key={item.title} data-reveal="slide" data-reveal-delay={`${index * 55}ms`} className="startup-card relative overflow-hidden border border-neutral-200 bg-white p-5">
                <p className="text-sm font-semibold tabular-nums text-neutral-500">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-7 text-lg font-semibold leading-tight text-neutral-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-9 max-w-3xl text-base leading-8 text-neutral-600">
            Für AI-native Produkte lohnt sich zusätzlich die Seite <Link href="/ai-venture-studio" className="text-neutral-950 underline">AI Venture Studio</Link>. Sehr frühe Teams finden mehr Kontext unter <Link href="/fuer-gruender" className="text-neutral-950 underline">Für Gründer</Link>.
          </p>
        </div>
      </section>

      <section id="abgrenzung" className="scroll-mt-20 border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Abgrenzung"
            title="Warum Veytra kein Accelerator und keine Agentur ist."
            description="Wir sind kein Programm und keine Ticket-Fabrik. Veytra arbeitet als operativer Build-Partner mit Produkt-, Markt- und Venture-Logik."
          />
          <div className="mt-10 grid gap-4 md:mt-12">
            {comparisons.map((item, index) => (
              <article key={item.other} data-reveal="slide" data-reveal-delay={`${index * 60}ms`} className="startup-comparison-row grid gap-5 border border-neutral-200 bg-white p-5 md:grid-cols-[0.32fr_0.68fr] md:p-7">
                <div>
                  <p className="text-sm font-semibold tabular-nums text-neutral-500">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-5 text-xl font-semibold text-neutral-950">{item.other}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{item.otherText}</p>
                </div>
                <div className="border-t border-neutral-200 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">Veytra</p>
                  <p className="mt-4 text-xl font-semibold leading-tight text-neutral-950">{item.veytra}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ergebnis" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Ergebnis"
            title="Was nach der Zusammenarbeit klarer sein muss."
            description="Ziel ist nicht mehr Aktivität, sondern bessere Entscheidungen: Was funktioniert, was wird gebaut, was wird verkauft und welche Zahlen zählen."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
            {outcomes.map((item, index) => (
              <li key={item} data-reveal="slide" data-reveal-delay={`${index * 35}ms`} className="border border-neutral-200 bg-white p-5 text-sm font-medium leading-7 text-neutral-800 transition hover:border-neutral-950">
                <span className="mb-5 block text-sm font-semibold tabular-nums text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro eyebrow="FAQ" title="Häufige Fragen von Startups." />
          <div className="mt-10">
            <FAQ items={faqs.startups} />
          </div>
        </div>
      </section>

      <CTASection
        title="Euer Startup braucht bessere Signale für die nächste Entscheidung?"
        description="Wir prüfen Produkt, Markt, Growth, AI-Potenzial, Fundraising-Readiness und den sinnvollsten Build-Sprint."
        primaryLabel="Mit Veytra sprechen"
        secondaryLabel="Prozess ansehen"
        secondaryHref="/prozess"
      />
    </>
  );
}
