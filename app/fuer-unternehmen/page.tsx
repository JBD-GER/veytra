import type { Metadata } from "next";
import Link from "next/link";

import { CorporateProblemPulse } from "@/components/CorporateProblemPulse";
import { CorporateVentureSystem } from "@/components/CorporateVentureSystem";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { SectionIntro } from "@/components/SectionIntro";
import { StructuredData } from "@/components/StructuredData";
import { faqs } from "@/content/faqs";
import { pageSeo } from "@/content/pages";
import { faqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(pageSeo.companies);

const problemStatements = [
  "Eure Ideen stecken zu lange in Piloten, bevor echte Kundensignale entstehen.",
  "Eure Produktteams sind im Kerngeschäft gebunden, während neue Märkte schneller werden.",
  "AI-Potenziale sind sichtbar, aber noch kein marktfähiges Produkt.",
  "Ihr habt Kunden, Daten und Distribution, aber keine operative Venture-Ownership.",
  "Budget fließt zu früh in Roadmaps statt in schnelle Validierung.",
  "Nach dem MVP fehlt die klare Entscheidung: stoppen, anpassen, skalieren oder ausgründen."
];

const solutionHighlights = [
  "Schnelles De-Risking",
  "Ressourcen effizienter nutzen",
  "Agiles Venture Building",
  "Corporate-Assets als Vorteil",
  "Messbare Growth-Signale"
];

const advantageCards = [
  {
    label: "Zeit",
    title: "Schneller von Idee zu Marktsignal.",
    body: "Statt monatelanger Abstimmung wird zuerst getestet, ob Zielgruppe, Problem und Zahlungsbereitschaft wirklich vorhanden sind."
  },
  {
    label: "Ressourcen",
    title: "Weniger Last für interne Teams.",
    body: "Produkt, Tech, Design, Growth und Validierung laufen über ein operatives Studio-Setup, ohne euer Kerngeschäft aus der Roadmap zu ziehen."
  },
  {
    label: "Risiko",
    title: "Teure Fehlentscheidungen früher stoppen.",
    body: "Schwache Hypothesen werden nicht künstlich weiterfinanziert. Gute Signale bekommen Struktur, Budget und den nächsten Build-Schritt."
  },
  {
    label: "Wert",
    title: "Aus Innovation wird eine Unternehmensentscheidung.",
    body: "Am Ende steht nicht nur ein MVP, sondern Klarheit: intern skalieren, anpassen, ausgründen oder sauber beenden."
  }
];

const ventureStages = [
  {
    label: "01",
    tag: "Einordnung",
    title: "Erstgespräch & Venture-Fit",
    body: "Wir klären Marktchance, Kategorie, Unternehmens-Assets, Investitionsrahmen und die Phase: Idee, MVP, Validierung, Wachstum oder Spin-out.",
    decision: "Passt das Vorhaben zu Veytra und welcher Aufbau ist sinnvoll?",
    output: "Einordnung, nächster Scope und passende Build-Phase."
  },
  {
    label: "02",
    tag: "Venture-Auswahl",
    title: "Venture-Vorstellung",
    body: "Wir zeigen mögliche Venture-Pfade, Hypothesen, MVP-Ansätze und relevante Entscheidungsoptionen. Das Unternehmen entscheidet frei, welcher Pfad weiter geprüft wird.",
    decision: "Welche Chance soll priorisiert und validiert werden?",
    output: "Ausgewählte Venture-These und klare Entscheidungsgrundlage."
  },
  {
    label: "03",
    tag: "Regeln",
    title: "Vertrag & Setup",
    body: "Build-Budget, IP, Rollen, Datenzugang, Reporting, Gate-Kriterien, Stop-Logik und mögliche Beteiligungsmodelle werden früh vorbereitet.",
    decision: "Welche Regeln gelten, bevor Veytra operativ baut?",
    output: "Verbindlicher Rahmen für Validierung, MVP und nächste Entscheidungen."
  },
  {
    label: "04",
    tag: "Validierung",
    title: "MVP & Marktsignale",
    body: "Wir testen Nachfrage, Zahlungsbereitschaft, Nutzerreaktion und Go-to-Market mit MVP, Smoke-Test, Funnel, Interviews oder Pilotkunden.",
    decision: "Gibt es genug Signale für den nächsten Schritt?",
    output: "Validierte Daten, Learnings und klare Empfehlung."
  },
  {
    label: "05",
    tag: "Company Build",
    title: "Gründung oder Skalierung",
    body: "Wenn Validierung und Erfolgsabsicht passen, wird die passende Struktur vorbereitet: intern skalieren, Venture ausgründen oder mit Operator-Team weiterbauen.",
    decision: "Wird gestoppt, angepasst, intern skaliert oder gegründet?",
    output: "Company-Setup, Verantwortlichkeiten und nächste Wachstumsphase."
  }
];

const collaborationScope = [
  {
    title: "Venture-These",
    body: "Marktchance, Zielgruppe, Problem, Angebot, Timing und Geschäftsmodell werden auf den Punkt gebracht."
  },
  {
    title: "Produktkern",
    body: "Veytra baut MVP, UX, technische Architektur und die erste nutzbare Produktlogik."
  },
  {
    title: "Go-to-Market",
    body: "Landingpages, Funnel, Ads, Sales-Tests, Tracking und erste Nachfragekanäle werden mitgedacht."
  },
  {
    title: "Operating Setup",
    body: "Rollen, Reporting, Automatisierung, Governance und mögliche Spin-out-Struktur werden vorbereitet."
  }
];

const solverCards = [
  {
    problem: "Strategische Chance, aber keine Venture-These.",
    solution: "Wir verdichten Marktproblem, Zielgruppe, Angebot, Erlösmodell und Timing zu einer belastbaren These.",
    output: "Entscheidungsfähiger Blueprint statt vager Innovationsidee."
  },
  {
    problem: "AI ist Thema, aber noch kein Geschäftsmodell.",
    solution: "Wir machen aus Daten, Prozessen oder Fachlogik ein prüfbares AI-Produkt, Automatisierungsangebot oder SaaS-Modell.",
    output: "AI-Nutzen mit Marktbezug statt Demo-Effekt."
  },
  {
    problem: "Produktteam und Vertrieb sind intern gebunden.",
    solution: "Wir übernehmen Produktkern, MVP, Landingpage, Tracking, Sales-Test und erste Nachfragekanäle.",
    output: "Marktfeedback, ohne die Linienorganisation zu blockieren."
  },
  {
    problem: "Unklar, was nach dem MVP passieren soll.",
    solution: "Wir strukturieren Entscheidungslogik, Governance, Ownership und mögliche Spin-out-Option früh mit.",
    output: "Klarheit über Stop, Anpassung, interne Skalierung oder Gründung."
  }
];

const corporateAssets = [
  {
    title: "Kundenzugang",
    body: "Bestehende Kunden, Pilotpartner und Sales-Kontakte werden zu Validierung, Interviews und frühen Launch-Kanälen."
  },
  {
    title: "Daten & Prozesswissen",
    body: "Aus internen Daten, Fachlogik und wiederkehrenden Abläufen können AI-Produkte, SaaS oder Automatisierungen entstehen."
  },
  {
    title: "Marke & Vertrauen",
    body: "Bekanntheit, Reputation und Branchenstatus reduzieren Reibung beim ersten Gespräch und beim Markteintritt."
  },
  {
    title: "Distribution",
    body: "Vertrieb, Partnernetzwerke, Newsletter oder bestehende Touchpoints senken die Anlaufkosten eines neuen Angebots."
  },
  {
    title: "Branchenproblem",
    body: "Ein wiederkehrender Schmerz in einer Nische kann die Grundlage für ein Vertical Venture oder ein neues B2B-Produkt sein."
  },
  {
    title: "Infrastruktur",
    body: "Bestehende Systeme, Teams und Datenquellen beschleunigen den MVP-Test, wenn sie gezielt angebunden werden."
  }
];

const applicationCases = [
  {
    title: "AI-Produkt für bestehende Kunden",
    body: "Ein intelligentes Tool, das Fachlogik, Daten oder Services des Unternehmens in ein eigenständiges Angebot übersetzt."
  },
  {
    title: "B2B-SaaS aus Prozesswissen",
    body: "Interne Abläufe, Kalkulationen oder Branchenlogik werden als wiederholbares Softwareprodukt marktfähig gemacht."
  },
  {
    title: "Plattform oder Marktplatz",
    body: "Ein fragmentierter Markt wird über ein digitales Modell verbunden: Anbieter, Nachfrage, Daten oder Transaktionen."
  },
  {
    title: "Digitaler Service",
    body: "Ein bestehender Service wird produktisiert, standardisiert und mit Funnel, Tracking und wiederholbarer Delivery aufgebaut."
  },
  {
    title: "Spin-off aus Geschäftsbereich",
    body: "Eine interne Chance wird außerhalb der Linienorganisation als eigenes Venture vorbereitet und strukturiert."
  },
  {
    title: "MVP für neues Angebot",
    body: "Landingpage, Funnel, Tracking, Sales-Test und Produktkern zeigen, ob der Markt wirklich reagiert."
  },
  {
    title: "Automatisierungsprodukt",
    body: "Wiederkehrende Kundenprobleme werden über AI Workflows, interne Tools oder agentische Prozesse gelöst."
  },
  {
    title: "Datenbasiertes Produkt",
    body: "Vorhandene Unternehmensdaten werden in ein nutzbares Produkt mit klarer Zielgruppe und Erlösmodell übersetzt."
  }
];

const governanceItems = [
  "NDA und vertraulicher Umgang mit internen Informationen",
  "Datenzugang, Systemgrenzen und technische Sicherheit",
  "Anpassung an vorhandene Prozesse und Netzwerkstrukturen",
  "Reporting, Gate-Kriterien und Stop-Logik",
  "IP, Nutzungsrechte und Entscheidungsrechte",
  "Spin-out-Option, GmbH-Struktur oder interne Skalierung"
];

const outcomes = [
  {
    title: "Stoppen",
    body: "Wenn Nachfrage, Budgetnähe oder Timing fehlen, wird das Vorhaben kontrolliert beendet, bevor es zur Budgetfalle wird."
  },
  {
    title: "Anpassen",
    body: "Wenn Signale gemischt sind, wird Positionierung, Zielgruppe, Angebot oder Produktumfang auf Basis echter Daten geschärft."
  },
  {
    title: "Intern skalieren",
    body: "Wenn das Venture strategisch nah am Kerngeschäft bleibt, kann es mit internem Team, klarer Ownership und Growth-Setup weiterlaufen."
  },
  {
    title: "Ausgründen",
    body: "Wenn Markt, Modell und Unabhängigkeit passen, wird eine spin-out-fähige Struktur mit Rollen, Budget und Beteiligungslogik vorbereitet."
  }
];

function CorporateHeroBoard() {
  return (
    <div data-reveal="scale" className="corporate-hero-board relative overflow-hidden border border-neutral-200 bg-white p-4 shadow-[0_28px_90px_rgba(23,23,23,0.08)] md:p-6">
      <div className="relative z-10">
        <div className="grid gap-4 border-b border-neutral-200 pb-5 md:grid-cols-[1fr_190px] md:items-start md:gap-6 md:pb-6">
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Das Produkt
            </p>
            <p className="mt-3 text-lg font-semibold leading-tight text-neutral-950 md:text-xl">
              Corporate Venture Build
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Veytra übernimmt die frühe operative Venture-Arbeit: These, MVP,
              Launch-Test und die Entscheidung, ob daraus ein skalierbares Geschäftsmodell wird.
            </p>
          </div>
          <div className="border border-neutral-200 bg-white/75 p-4 shadow-[0_18px_50px_rgba(23,23,23,0.04)]">
            <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
              <span className="corporate-board-pulse h-2.5 w-2.5 rounded-full bg-neutral-950" />
              Venture Studio
            </span>
            <p className="mt-3 text-sm font-semibold leading-5 text-neutral-950">
              Operativer Co-Builder statt Beratungsprojekt.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:mt-6">
          {[
            ["01", "Geschäftsidee konkretisieren", "These"],
            ["02", "MVP, AI-Produkt oder Plattform bauen", "Build"],
            ["03", "Kunden, Funnel und Sales testen", "Launch"],
            ["04", "Skalieren, gründen oder stoppen", "Entscheidung"]
          ].map(([number, title, label]) => (
            <div key={number} className="grid grid-cols-[38px_1fr] items-start gap-3 border border-neutral-200 bg-neutral-50/60 p-4 sm:grid-cols-[54px_1fr_auto] sm:items-center sm:gap-4">
              <span className="text-sm font-semibold tabular-nums text-neutral-500">{number}</span>
              <span className="text-sm font-semibold text-neutral-950">{title}</span>
              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500 sm:block">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3 md:mt-6">
          {["Validierter MVP", "Marktsignale", "Company-Setup"].map((item, index) => (
            <div key={item} className="border border-neutral-200 bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                Output {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-sm font-semibold text-neutral-950">{item}</p>
              <div className="mt-4 h-px bg-neutral-200">
                <div
                  className="corporate-board-meter h-px bg-neutral-950"
                  style={{ animationDelay: `${index * 180}ms` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CompaniesPage() {
  return (
    <>
      <StructuredData data={faqSchema(faqs.companies, pageSeo.companies.path)} />

      <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,23,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(23,23,23,0.035)_1px,transparent_1px)] bg-[size:96px_96px] opacity-50" />
        <div className="relative mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-reveal="slide" className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Venture Studio für Unternehmen
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Corporate Venture Building für Unternehmen
            </h1>
            <p className="mt-6 text-base leading-8 text-neutral-600 md:mt-7 md:text-xl md:leading-9">
              Veytra hilft Unternehmen, aus Marktchancen, Daten, Kundenzugang oder AI-Potenzialen
              neue digitale Ventures zu bauen: von Venture-These und MVP über Go-to-Market bis zur
              spin-out-fähigen Struktur.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-9">
              <Link
                href="/kontakt"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-950 bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
              >
                Corporate Venture anfragen
              </Link>
              <Link
                href="/ai-venture-studio"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-950 transition hover:border-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
              >
                AI Venture Studio ansehen
              </Link>
            </div>
          </div>

          <CorporateHeroBoard />
        </div>
      </section>

      <section className="relative isolate border-b border-neutral-200 bg-neutral-50">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,23,0.038)_1px,transparent_1px),linear-gradient(180deg,rgba(23,23,23,0.03)_1px,transparent_1px)] bg-[size:88px_88px] opacity-60" />
        <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
          <CorporateProblemPulse statements={problemStatements} />
        </div>
      </section>

      <CorporateVentureSystem stages={ventureStages} />

      <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,23,0.038)_1px,transparent_1px),linear-gradient(180deg,rgba(23,23,23,0.03)_1px,transparent_1px)] bg-[size:92px_92px] opacity-55" />
        <div className="relative mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div data-reveal="slide" className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Warum das wirkt
              </p>
              <h2 className="mt-5 text-2xl font-semibold leading-tight text-neutral-950 md:text-3xl">
                Weniger Innovations-Theater. Mehr Geschwindigkeit, weniger Blindflug.
              </h2>
              <p className="mt-6 text-base leading-8 text-neutral-600">
                Wenn euch die Blockaden bekannt vorkommen, ist Veytra gebaut für genau diese Phase:
                aus strategischem Potenzial wird ein operativer Test mit klarer Entscheidung.
              </p>
              <div className="mt-8 grid gap-3">
                {solutionHighlights.map((item) => (
                  <div key={item} className="border border-neutral-200 bg-neutral-50 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.13em] text-neutral-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {advantageCards.map((item, index) => (
                <article
                  key={item.title}
                  data-reveal="slide"
                  data-reveal-delay={`${index * 70}ms`}
                  className="corporate-advantage-card relative overflow-hidden border border-neutral-200 bg-white p-6 md:p-7"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    {item.label}
                  </p>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Zusammenarbeit"
            title="Was wir mit euch konkret aufbauen."
            description="Kurz gesagt: Veytra übernimmt die frühe operative Venture-Arbeit, damit aus einer strategischen Chance ein prüfbares Geschäftsmodell wird."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {collaborationScope.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 60}ms`}
                className="corporate-scope-card relative overflow-hidden border border-neutral-200 bg-white p-6 transition hover:border-neutral-950 md:p-7"
              >
                <p className="text-sm font-semibold tabular-nums text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-xl font-semibold leading-tight text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Problemlöser"
            title="Wo Veytra konkret entlastet."
            description="Problem, Lösung, Output: Die Zusammenarbeit ist darauf ausgelegt, interne Blockaden zu reduzieren und aus frühen Signalen eine belastbare Venture-Entscheidung zu machen."
          />
          <div className="mt-12 grid gap-4">
            {solverCards.map((item, index) => (
              <article
                key={item.problem}
                data-reveal="slide"
                data-reveal-delay={`${index * 60}ms`}
                className="corporate-solver-row relative grid gap-6 overflow-hidden border border-neutral-200 bg-white p-6 md:grid-cols-[0.34fr_0.33fr_0.33fr] md:p-7"
              >
                <div>
                  <p className="text-sm font-semibold tabular-nums text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-neutral-950">
                    {item.problem}
                  </h3>
                </div>
                <div className="border-t border-neutral-200 pt-5 md:border-l md:border-t-0 md:pl-7 md:pt-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Lösung
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{item.solution}</p>
                </div>
                <div className="border-t border-neutral-200 pt-5 md:border-l md:border-t-0 md:pl-7 md:pt-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Output
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-700">{item.output}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Unternehmens-Assets"
            title="Was Unternehmen oft schon besitzen und was daraus werden kann."
            description="Corporate Venture Building funktioniert am besten, wenn vorhandene Stärke in ein neues digitales Geschäftsmodell übersetzt wird."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {corporateAssets.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 55}ms`}
                className="corporate-asset-card relative overflow-hidden border border-neutral-200 bg-white p-6 md:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold tabular-nums text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="h-px flex-1 bg-neutral-200" />
                </div>
                <h3 className="mt-7 text-xl font-semibold leading-tight text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Anwendungsfälle"
            title="Typische Vorhaben für Unternehmen."
            description="Geeignet sind Vorhaben, die strategisch relevant sind, aber außerhalb langsamer Linienlogik schneller validiert werden müssen."
          />
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {applicationCases.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 45}ms`}
                className="corporate-usecase-card relative overflow-hidden border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 hover:border-neutral-950 hover:shadow-[0_20px_60px_rgba(23,23,23,0.08)]"
              >
                <p className="text-sm font-semibold tabular-nums text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-7 text-lg font-semibold leading-tight text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Sicherheit & Zusammenarbeit"
            title="Wir bauen nicht blind in eure Systeme hinein."
            description="Gerade bei internen Daten, Zugängen, Kundennetzwerken und bestehenden Prozessen braucht ein Venture klare Leitplanken. NDA, Datenzugang, Verantwortlichkeiten und Entscheidungswege werden früh sauber abgestimmt."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {governanceItems.map((item, index) => (
              <div
                key={item}
                data-reveal="slide"
                data-reveal-delay={`${index * 60}ms`}
                className="corporate-governance-card relative overflow-hidden grid min-h-28 grid-cols-[48px_1fr] items-start gap-5 border border-neutral-200 bg-white p-5"
              >
                <span className="text-sm font-semibold tabular-nums text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-semibold leading-7 text-neutral-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Ergebnis"
            title="Am Ende steht eine Entscheidung, nicht nur ein MVP."
            description="Ein MVP für Unternehmen ist nur wertvoll, wenn danach klar ist, was passieren soll: stoppen, anpassen, intern skalieren oder ausgründen."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 70}ms`}
                className="corporate-outcome-card relative overflow-hidden border border-neutral-200 bg-neutral-50 p-6"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-neutral-950" />
                <p className="text-sm font-semibold tabular-nums text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-2xl font-semibold leading-tight text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <SectionIntro eyebrow="FAQ" title="Häufige Fragen von Unternehmen." />
          <div className="mt-10">
            <FAQ items={faqs.companies} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ihr habt eine Marktchance, aber noch kein Venture?"
        description="Wir prüfen Zielgruppe, Datenlage, Produktlogik, Build-Budget, Governance und den schnellsten Weg zu einem belastbaren MVP."
        primaryLabel="Corporate Venture anfragen"
        secondaryLabel="Prozess ansehen"
        secondaryHref="/prozess"
      />
    </>
  );
}
