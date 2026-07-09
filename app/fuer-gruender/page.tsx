import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { SectionIntro } from "@/components/SectionIntro";
import { StructuredData } from "@/components/StructuredData";
import { faqs } from "@/content/faqs";
import { pageSeo } from "@/content/pages";
import { faqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = createMetadata(pageSeo.founders);

const founderServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Venture Studio für Gründer",
  description: pageSeo.founders.description,
  url: absoluteUrl(pageSeo.founders.path),
  serviceType: [
    "Venture Studio",
    "Technischer Co-Founder",
    "MVP Entwicklung",
    "Go-to-Market",
    "Company Build"
  ],
  provider: {
    "@type": "Organization",
    name: "Veytra",
    url: absoluteUrl("/")
  },
  areaServed: ["Deutschland", "DACH"],
  audience: {
    "@type": "Audience",
    audienceType: "Gründer, Solo-Founder, nicht-technische Gründer und Operator"
  }
};

const heroSignals = [
  "Idee validieren",
  "MVP bauen",
  "Launch starten",
  "Company Build vorbereiten"
];

const founderPainCards = [
  {
    title: "Idee ist da, aber keine Venture-These",
    problem: "Du erkennst ein echtes Problem, aber Zielkunde, Nutzen, Erlöslogik und erster Test sind noch zu unscharf.",
    consequence: "Ohne These wird aus der Idee schnell ein Sammelbecken aus Features, Meinungen und Bauchgefühl."
  },
  {
    title: "Kein technischer Co-Founder",
    problem: "Du weißt, was entstehen soll, aber nicht, wie daraus ein belastbares Produkt wird.",
    consequence: "Freelancer bauen oft nur Tickets ab. Niemand priorisiert wie ein Mitgründer."
  },
  {
    title: "Zu viele Features, kein klarer MVP",
    problem: "KI, Branding, App, Dashboard, Website, Automatisierung: alles wirkt gleichzeitig wichtig.",
    consequence: "Der erste Build wird zu groß, zu teuer und zu langsam, bevor der Markt überhaupt reagiert."
  },
  {
    title: "Keine echten Kundensignale",
    problem: "Feedback von Freunden oder LinkedIn-Interesse fühlt sich gut an, ersetzt aber keine Nachfrage.",
    consequence: "Ohne Interviews, Pilotkunden, Warteliste, Outreach oder Sales-Test bleibt offen, ob jemand zahlt."
  },
  {
    title: "Keine Go-to-Market-Struktur",
    problem: "Das Produkt entsteht, aber Angebot, Pricing, Funnel, Tracking und Vertriebskanal bleiben nachgelagert.",
    consequence: "Dann ist der Launch kein Markt-Test, sondern nur ein Release ohne klare Lernschleife."
  },
  {
    title: "Keine klare nächste Entscheidung",
    problem: "Du weißt nicht, ob du stoppen, anpassen, weiterbauen, Kapital suchen oder gründen solltest.",
    consequence: "Die Idee kostet weiter Zeit und Geld, ohne dass aus Signalen eine Entscheidung wird."
  }
];

const solverBlocks = [
  {
    problem: "Du hast eine Idee, aber keine klare Richtung.",
    solution: "Wir entwickeln mit dir eine Venture-These: Zielkunde, Schmerzpunkt, Nutzenversprechen, Erlösmodell, Marktlogik und erster Test."
  },
  {
    problem: "Dir fehlt ein technischer Co-Founder.",
    solution: "Wir übernehmen Produktarchitektur, MVP-Scope, technische Umsetzung und frühe Produktentscheidungen."
  },
  {
    problem: "Du weißt nicht, ob jemand dafür zahlt.",
    solution: "Wir testen Nachfrage über Landingpage, Interviews, Outreach, Ads, Warteliste, Pilotkunden oder Sales-Funnel."
  },
  {
    problem: "Du willst nicht nur bauen, sondern verkaufen.",
    solution: "Wir strukturieren Positionierung, Angebot, Pricing, Funnel, Tracking und erste Go-to-Market-Kanäle."
  },
  {
    problem: "Du brauchst jemanden mit Ownership.",
    solution: "Wir arbeiten nicht wie eine reine Agentur, sondern mit Venture-Denke, klaren Verantwortlichkeiten und optionaler Beteiligungslogik."
  }
];

const fitItems = [
  "Solo-Gründer mit konkreter Idee",
  "nicht-technische Gründer mit digitalem Produktvorhaben",
  "Branchenexperten mit Prozess-, Daten- oder Marktkenntnis",
  "Consultants oder Dienstleister, die ihr Wissen produktisieren wollen",
  "Gründer mit B2B-SaaS-, AI-, Plattform- oder Marktplatz-Idee",
  "Operator, die ein reales Branchenproblem kennen",
  "Gründer mit ersten Signalen, aber ohne Team für den Build"
];

const noFitItems = [
  "reine App-Ideen ohne Marktverständnis",
  "Anfragen, bei denen nur eine günstige Website gesucht wird",
  "Gründer ohne Kapital für Validierung, Tools, Ads oder externe Kosten",
  "Gründer ohne Bereitschaft zu Fokus, Feedback und Tests",
  "Ideen, die nicht validiert oder kritisch geprüft werden dürfen"
];

const pointSteps = [
  {
    title: "Ideenfindung",
    body: "Wir verdichten Problemnähe, Branchenwissen oder Marktbeobachtung zu prüfbaren Venture-Optionen."
  },
  {
    title: "Validierung",
    body: "Wir testen Nachfrage, Zahlungsbereitschaft, Zielgruppe, Angebot und erste Kundensignale."
  },
  {
    title: "Marktrecherche",
    body: "Wir prüfen Wettbewerb, Timing, Marktlogik, Positionierung und mögliche Eintrittspunkte."
  },
  {
    title: "MVP bauen",
    body: "Wir schneiden den Produktkern, bauen Prototyp, MVP, Landingpage, Tracking oder Demo."
  },
  {
    title: "Launch",
    body: "Wir veröffentlichen nicht einfach. Wir starten mit Funnel, Angebot, Messung und klarer Lernlogik."
  },
  {
    title: "Marketingsupport",
    body: "Wir unterstützen Positionierung, Content, Outreach, Ads, Sales-Strecke und erste Nachfragekanäle."
  },
  {
    title: "Investoren vorbereiten",
    body: "Wenn Signale da sind, strukturieren wir Story, Kennzahlen, Datenraum und Kapitalpfad."
  },
  {
    title: "Ausgründung",
    body: "Wenn aus dem MVP ein Unternehmen werden soll, bereiten wir Rollen, Struktur und Company Build vor."
  }
];

const ventureForms = [
  "B2B-SaaS aus Branchenwissen",
  "AI-Tool für wiederkehrende Prozesse",
  "Plattform oder Marktplatz für eine Nische",
  "produktisierter Service mit digitalem Kern",
  "Lead-Funnel mit späterem Softwareprodukt",
  "Vertical SaaS für eine spezifische Branche",
  "automatisierter Workflow als neues Produkt",
  "MVP für ein digitales Geschäftsmodell"
];

const founderProcess = [
  {
    label: "01",
    title: "Founder Fit & Venture-These",
    check: "Gründerprofil, Idee, Marktproblem, Zielkunde, Timing, Wettbewerb, Motivation und mögliche Rolle des Gründers.",
    output: "Klare Venture-These und Entscheidung, ob das Vorhaben weiterverfolgt wird."
  },
  {
    label: "02",
    title: "De-Risking & Validierung",
    check: "Nachfrage, Zahlungsbereitschaft, Problemstärke, Zielgruppe, Vertriebskanal und Angebotslogik.",
    output: "Echte Kundensignale statt Bauchgefühl."
  },
  {
    label: "03",
    title: "MVP & Produktkern",
    check: "Landingpage, Prototyp, MVP, erste Produktlogik, technische Basis, Tracking, Onboarding oder Demo.",
    output: "Ein testbarer Produktkern, der Feedback und Nachfrage erzeugt."
  },
  {
    label: "04",
    title: "Go-to-Market & erste Kunden",
    check: "Positionierung, Angebot, Pricing, Funnel, Outreach, Content, Ads, Pilotkunden oder Sales-Prozess.",
    output: "Erste Nachfragekanäle und ein klarer Lernprozess."
  },
  {
    label: "05",
    title: "Company Build",
    check: "Rollen, Verantwortlichkeiten, Operations, Backoffice, Roadmap, Beteiligungslogik und nächste Wachstumsphase.",
    output: "Ein Venture, das nicht nur gebaut, sondern operativ geführt werden kann."
  }
];

const collaborationModels = [
  {
    title: "Build-Budget",
    body: "Der Gründer finanziert die operative Aufbauphase. Sinnvoll, wenn Kapital vorhanden ist und der Fokus auf schneller Umsetzung liegt."
  },
  {
    title: "Hybrid-Modell",
    body: "Reduziertes Build-Budget plus Beteiligung. Sinnvoll, wenn Veytra operativ Verantwortung übernimmt und der Gründer Verwässerung reduzieren möchte."
  },
  {
    title: "Equity-Modell",
    body: "Veytra beteiligt sich am Venture, wenn Gründer-Fit, Marktpotenzial, Timing und Rollenverteilung wirklich passen."
  },
  {
    title: "Phasenmodell",
    body: "Erst These und Validierung, dann MVP, dann Company Build. So wird nicht zu früh zu viel Budget in die falsche Richtung investiert."
  }
];

const comparisons = [
  {
    other: "Agentur",
    otherText: "baut meist nach Briefing.",
    veytra: "prüft mit, priorisiert, hinterfragt und baut mit Venture-Logik."
  },
  {
    other: "Freelancer",
    otherText: "liefert einzelne Aufgaben.",
    veytra: "denkt Produkt, Markt, Technik und Go-to-Market zusammen."
  },
  {
    other: "Coach",
    otherText: "gibt Impulse.",
    veytra: "hilft bei Umsetzung, MVP, Funnel und Struktur."
  },
  {
    other: "Accelerator",
    otherText: "arbeitet oft programmatisch.",
    veytra: "arbeitet operativ und individuell am Venture."
  }
];

const outcomeQuestions = [
  "Ist das Problem stark genug?",
  "Gibt es echte Nachfrage?",
  "Gibt es ein klares Angebot?",
  "Gibt es einen testbaren Produktkern?",
  "Gibt es erste Kundensignale?",
  "Gibt es einen Go-to-Market-Kanal?",
  "Gibt es eine klare Rolle für Gründer und Veytra?",
  "Wird gestoppt, angepasst, weitergebaut oder skaliert?",
  "Ist das Venture gründungs- oder fundraisingfähig?",
  "Gibt es einen realistischen nächsten Schritt?"
];

function FounderHeroVisual() {
  return (
    <div data-reveal="scale" data-reveal-delay="120ms" className="founder-hero-visual relative overflow-hidden border border-neutral-200 bg-white p-4 shadow-[0_28px_90px_rgba(23,23,23,0.08)] md:p-6">
      <div className="relative z-10">
        <div className="border-b border-neutral-200 pb-6">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Womit wir als Co-Founder helfen
            </p>
            <p className="mt-3 max-w-md text-xl font-semibold leading-tight text-neutral-950">
              Von der Idee zum testbaren Venture.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {[
            ["Idee finden", "Chance erkennen"],
            ["Validierung", "Markt reagiert"],
            ["MVP bauen", "Produktkern testen"],
            ["Launch", "Nachfrage erzeugen"],
            ["Company Build", "Firma vorbereiten"]
          ].map(([label, value], index) => (
            <div key={label} className="founder-hero-step grid grid-cols-[38px_1fr] gap-x-3 gap-y-1 border border-neutral-200 bg-neutral-50/70 p-4 sm:grid-cols-[42px_0.72fr_1fr] sm:items-center sm:gap-4">
              <span className="text-sm font-semibold tabular-nums text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-sm font-semibold text-neutral-950">{label}</span>
              <span className="col-start-2 text-sm leading-6 text-neutral-600 sm:col-start-auto">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {["Produktteam", "Sparring", "Go-to-Market"].map((item, index) => (
            <div key={item} className="border border-neutral-200 bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                Rolle {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-sm font-semibold text-neutral-950">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FoundersPage() {
  return (
    <>
      <StructuredData data={[founderServiceSchema, faqSchema(faqs.founders, pageSeo.founders.path)]} />

      <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,23,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(23,23,23,0.035)_1px,transparent_1px)] bg-[size:96px_96px] opacity-50" />
        <div className="relative mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:px-8 md:py-28 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-3xl">
            <p data-reveal="slide" className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Venture Studio für Gründer
            </p>
            <h1 data-reveal="slide" data-reveal-delay="70ms" className="text-3xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Venture Studio für Gründer: von der Idee zum MVP und Company Build.
            </h1>
            <p data-reveal="slide" data-reveal-delay="140ms" className="mt-6 text-base leading-8 text-neutral-600 md:mt-7 md:text-xl md:leading-9">
              Veytra unterstützt Gründer ohne vollständiges Produktteam: Idee finden, Markt
              validieren, MVP bauen, Go-to-Market starten und bei starken Signalen die nächste
              Company-Build-Entscheidung vorbereiten.
            </p>
            <div data-reveal="slide" data-reveal-delay="220ms" className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontakt"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-950 bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
              >
                Venture anfragen
              </Link>
              <Link
                href="/prozess"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-950 transition hover:border-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
              >
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

          <FounderHeroVisual />
        </div>
      </section>

      <section id="was-wir-machen" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Auf den Punkt gebracht"
            title="Was Veytra mit Gründern konkret macht."
            description="Wir begleiten nicht nur eine App-Idee. Wir helfen, eine Idee zu finden, zu prüfen, zum MVP auszubauen, zu launchen und bei starken Signalen in ein echtes Unternehmen zu überführen."
          />
          <div className="mt-10 grid gap-3 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
            {pointSteps.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 45}ms`}
                className="founder-point-card relative overflow-hidden border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 hover:border-neutral-950 hover:shadow-[0_20px_60px_rgba(23,23,23,0.07)] md:p-6"
              >
                <p className="text-sm font-semibold tabular-nums text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-7 text-lg font-semibold leading-tight text-neutral-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="co-founder-hilfe" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Problemlöser"
            title="Was Veytra für Gründer übernimmt."
            description="Wir arbeiten wie ein operativer Aufbaupartner mit Venture-Logik: Idee schärfen, Markt testen, Produktkern bauen, Nachfrage erzeugen und Entscheidungen vorbereiten."
          />
          <div className="mt-10 grid gap-4 md:mt-12">
            {solverBlocks.map((item, index) => (
              <article
                key={item.problem}
                data-reveal="slide"
                data-reveal-delay={`${index * 65}ms`}
                className="founder-solver-row relative grid gap-5 overflow-hidden border border-neutral-200 bg-white p-5 md:grid-cols-[0.38fr_0.62fr] md:gap-6 md:p-7"
              >
                <div>
                  <p className="text-sm font-semibold tabular-nums text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-6 text-lg font-semibold leading-tight text-neutral-950">{item.problem}</p>
                </div>
                <div className="border-t border-neutral-200 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Veytra
                  </p>
                  <p className="mt-4 text-base leading-8 text-neutral-600">{item.solution}</p>
                </div>
              </article>
            ))}
          </div>
          <div data-reveal="fade" className="mt-10 flex flex-col gap-3 border border-neutral-200 bg-neutral-50 p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-base font-medium leading-7 text-neutral-800">
              Du musst nicht zuerst ein perfektes Konzept schreiben. Entscheidend ist, ob aus deiner Idee ein prüfbarer Markt-Test werden kann.
            </p>
            <Link href="/kontakt" className="inline-flex min-h-11 items-center justify-center rounded-[6px] border border-neutral-950 bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800">
              Idee prüfen lassen
            </Link>
          </div>
        </div>
      </section>

      <section id="gruender-probleme" className="scroll-mt-20 border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Wo es hakt"
            title="Wo Gründer alleine oft hängen bleiben."
            description="Nicht jedes Problem ist ein Produktproblem. Häufig fehlt die Verbindung aus Marktlogik, Produktentscheidung und operativer Umsetzung."
          />
          <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {founderPainCards.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 55}ms`}
                className="founder-card relative overflow-hidden border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 hover:border-neutral-950 hover:shadow-[0_20px_60px_rgba(23,23,23,0.08)] md:p-7"
              >
                <p className="text-sm font-semibold tabular-nums text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 text-lg font-semibold leading-tight text-neutral-950 md:mt-7 md:text-xl">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-neutral-600">{item.problem}</p>
                <p className="mt-5 border-t border-neutral-200 pt-5 text-sm leading-7 text-neutral-700">
                  {item.consequence}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fit" className="scroll-mt-20 border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-[1240px] gap-5 px-5 py-14 md:gap-8 md:px-8 md:py-24 lg:grid-cols-2">
          <div data-reveal="slide" className="founder-fit-panel border border-neutral-200 bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Geeignet für</p>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-neutral-950 md:text-3xl">
              Gründer mit Substanz, Marktgefühl und Bereitschaft zur Prüfung.
            </h2>
            <div className="mt-8 grid gap-3">
              {fitItems.map((item, index) => (
                <div key={item} className="grid grid-cols-[42px_1fr] items-start gap-4 border border-neutral-200 bg-neutral-50 px-4 py-4">
                  <span className="text-sm font-semibold tabular-nums text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-medium leading-6 text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal="slide" data-reveal-delay="100ms" className="founder-fit-panel border border-neutral-200 bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Nicht geeignet für</p>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-neutral-950 md:text-3xl">
              Wenn nur Umsetzung gesucht wird, ist Veytra nicht der richtige Hebel.
            </h2>
            <div className="mt-8 grid gap-3">
              {noFitItems.map((item, index) => (
                <div key={item} className="grid grid-cols-[42px_1fr] items-start gap-4 border border-neutral-200 bg-neutral-50 px-4 py-4">
                  <span className="text-sm font-semibold tabular-nums text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-medium leading-6 text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="venture-formen" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Venture-Formen"
            title="Aus Gründerwissen wird ein testbares Geschäftsmodell."
            description="Veytra ist nicht auf eine Produktkategorie beschränkt. Entscheidend ist, ob sich ein Problem validieren, verkaufen und wiederholt skalieren lässt."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
            {ventureForms.map((item, index) => (
              <article
                key={item}
                data-reveal="slide"
                data-reveal-delay={`${index * 45}ms`}
                className="founder-venture-form border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 hover:border-neutral-950"
              >
                <p className="text-sm font-semibold tabular-nums text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-7 text-lg font-semibold leading-tight text-neutral-950">{item}</h3>
              </article>
            ))}
          </div>
          <div data-reveal="fade" className="mt-3 border border-neutral-200 bg-neutral-50 p-6 md:p-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Und noch vieles mehr
            </p>
            <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-neutral-950">
              Entscheidend ist nicht die Kategorie, sondern ob aus Problem, Zielgruppe, Produktlogik
              und Nachfrage ein wiederholbares Geschäftsmodell entstehen kann.
            </p>
          </div>
        </div>
      </section>

      <section id="prozess" className="relative scroll-mt-20 overflow-hidden border-y border-neutral-200 bg-neutral-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:96px_96px] opacity-35" />
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <div data-reveal="slide" className="grid gap-6 border-b border-white/10 pb-10 lg:grid-cols-[0.54fr_0.46fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.45]">Prozess</p>
              <h2 className="mt-5 text-2xl font-semibold leading-tight md:text-3xl">
                Von der Idee zur Venture-Entscheidung.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/[0.66] lg:justify-self-end">
              Der Prozess schützt dich vor blindem Produktbau. Jeder Schritt erzeugt einen Output, der die nächste Entscheidung klarer macht.
            </p>
          </div>

          <div className="founder-process-track relative mt-10 grid gap-4 md:mt-12 md:gap-5">
            {founderProcess.map((step, index) => (
              <article
                key={step.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 70}ms`}
                className="founder-process-card relative overflow-hidden border border-white/10 bg-white/[0.035] p-5 md:p-6"
              >
                <div className="relative z-10 grid gap-5 md:gap-6 lg:grid-cols-[70px_0.3fr_0.35fr_0.35fr]">
                  <p className="text-sm font-semibold tabular-nums text-white/[0.44]">{step.label}</p>
                  <h3 className="text-xl font-semibold leading-tight text-white md:text-2xl">{step.title}</h3>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.44]">Was wir prüfen / bauen</p>
                    <p className="mt-3 text-sm leading-7 text-white/[0.68]">{step.check}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.44]">Output</p>
                    <p className="mt-3 text-sm leading-7 text-white/[0.76]">{step.output}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="zusammenarbeit" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Zusammenarbeit"
            title="Wie die Zusammenarbeit aussehen kann."
            description="Nicht jede Idee bekommt ein Equity-Modell. Wir prüfen Gründer, Markt, Timing, Potenzial und Rollenverteilung. Beteiligung entsteht nur, wenn Veytra wirklich operativ Verantwortung übernimmt."
          />
          <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
            {collaborationModels.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 65}ms`}
                className="founder-card relative overflow-hidden border border-neutral-200 bg-white p-6 md:p-7"
              >
                <p className="text-sm font-semibold tabular-nums text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-xl font-semibold leading-tight text-neutral-950">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-9 max-w-3xl text-base leading-8 text-neutral-600">
            Die ausführliche Modelllogik findest du unter <Link href="/preise" className="text-neutral-950 underline">Preise & Modelle</Link>. Für AI-native Ideen lohnt sich zusätzlich die Seite <Link href="/ai-venture-studio" className="text-neutral-950 underline">AI Venture Studio</Link>.
          </p>
        </div>
      </section>

      <section id="abgrenzung" className="scroll-mt-20 border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Abgrenzung"
            title="Warum Veytra kein klassischer Dienstleister ist."
            description="Wir setzen nicht einfach eine App-Idee um. Wir prüfen, priorisieren und bauen mit dir die erste Version, die echte Nachfrage sichtbar macht."
          />
          <div className="mt-10 grid gap-4 md:mt-12">
            {comparisons.map((item, index) => (
              <article
                key={item.other}
                data-reveal="slide"
                data-reveal-delay={`${index * 60}ms`}
                className="founder-comparison-row grid gap-5 border border-neutral-200 bg-white p-5 md:grid-cols-[0.32fr_0.68fr] md:p-7"
              >
                <div>
                  <p className="text-sm font-semibold tabular-nums text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
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
            title="Was nach der Ideenvalidierung klar sein muss."
            description="Nach der Validierung soll nicht mehr offen sein, ob nur Interesse existiert oder echte Nachfrage entsteht. Ziel ist Klarheit über Markt, Produktkern, Go-to-Market und den nächsten sinnvollen Schritt."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-5">
            {outcomeQuestions.map((item, index) => (
              <li
                key={item}
                data-reveal="slide"
                data-reveal-delay={`${index * 35}ms`}
                className="border border-neutral-200 bg-white p-5 text-sm font-medium leading-7 text-neutral-800 transition hover:border-neutral-950"
              >
                <span className="mb-5 block text-sm font-semibold tabular-nums text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div data-reveal="fade" className="mt-12 flex flex-col gap-4 border border-neutral-200 bg-neutral-50 p-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-base font-medium leading-7 text-neutral-800">
              Wenn dein Vorhaben eher aus einem Unternehmen heraus entsteht, ist die Seite <Link href="/fuer-unternehmen" className="text-neutral-950 underline">Für Unternehmen</Link> der bessere Einstieg.
            </p>
            <Link href="/kontakt" className="inline-flex min-h-11 items-center justify-center rounded-[6px] border border-neutral-950 bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800">
              Mit Veytra bauen
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro eyebrow="FAQ" title="Häufige Fragen von Gründern." />
          <div className="mt-10">
            <FAQ items={faqs.founders} />
          </div>
        </div>
      </section>

      <CTASection
        title="Du hast eine Idee, aber dir fehlt das operative Team?"
        description="Sprich mit uns über Problem, Zielgruppe, Marktpotenzial und die Lücke zwischen Idee und Venture. Wir prüfen, ob Veytra als Aufbaupartner passt."
        primaryLabel="Erstgespräch anfragen"
        secondaryLabel="Prozess ansehen"
        secondaryHref="/prozess"
      />
    </>
  );
}
