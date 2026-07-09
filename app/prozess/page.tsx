import type { Metadata } from "next";

import { CTASection } from "@/components/CTASection";
import { ProcessHeroSystem } from "@/components/ProcessHeroSystem";
import {
  ScrollFadingProcessCards,
  type ScrollFadingProcessCard
} from "@/components/ScrollFadingProcessCards";
import { StructuredData } from "@/components/StructuredData";
import { pageSeo } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = createMetadata(pageSeo.process);

const buildProcess: ScrollFadingProcessCard[] = [
  {
    label: "01",
    eyebrow: "Idee & These",
    title: "Idee finden, schärfen oder verwerfen.",
    body: "Am Anfang steht keine Feature-Liste, sondern eine Venture-These: Welches Problem ist dringend genug? Wer hat es? Warum jetzt? Und kann daraus ein wiederholbares Geschäftsmodell entstehen?",
    meta: ["Problem", "Zielgruppe", "Timing"]
  },
  {
    label: "02",
    eyebrow: "Research",
    title: "Markt, Wettbewerb und Nachfrage prüfen.",
    body: "Wir analysieren Marktgröße, bestehende Lösungen, Zahlungsbereitschaft, Suchvolumen, Vertriebskanäle und die Frage, ob das Problem wirklich stark genug ist.",
    meta: ["Markt", "Wettbewerb", "Nachfrage"]
  },
  {
    label: "03",
    eyebrow: "Validation",
    title: "Mit echten Signalen validieren.",
    body: "Interviews, Landingpage-Tests, Ads, Sales-Gespräche, Wartelisten oder erste Angebotsstrecken zeigen, ob Menschen nur nicken oder wirklich handeln.",
    meta: ["Interviews", "Ads", "Kaufabsicht"]
  },
  {
    label: "04",
    eyebrow: "MVP",
    title: "Den kleinsten belastbaren Produktkern bauen.",
    body: "Aus den stärksten Signalen entsteht ein MVP: Software, AI-Tool, App, Plattform, Shop, Service-Logik oder Automatisierung. Nicht maximal groß, sondern maximal lernfähig.",
    meta: ["Produktkern", "UX", "Tech"]
  },
  {
    label: "05",
    eyebrow: "Launch",
    title: "Launch mit Nachfrage-System starten.",
    body: "Positionierung, Funnel, Tracking, Google Ads, Meta Ads, Content, Sales und Automatisierung werden so aufgesetzt, dass der Markt schnell zurückspricht.",
    meta: ["Funnel", "Tracking", "Sales"]
  },
  {
    label: "06",
    eyebrow: "Scorecard",
    title: "An Zahlen entscheiden, nicht an Hoffnung.",
    body: "Nach dem Launch zählen Leads, Conversion, CAC, Umsatzsignal, Retention, Feedback und operative Machbarkeit. Daraus entsteht eine klare Entscheidung: weiterbauen, ändern oder stoppen.",
    meta: ["Leads", "CAC", "Retention"]
  }
];

const agreementProcess: ScrollFadingProcessCard[] = [
  {
    label: "A",
    eyebrow: "Working Agreement",
    title: "Bevor gebaut wird, wird eine klare Vereinbarung geschlossen.",
    body: "Vor dem Start wird schriftlich geregelt, wer was einbringt, welche Ziele geprüft werden, welche Kostenlogik gilt, welche Assets entstehen und ab wann weitergebaut, angepasst oder gestoppt wird.",
    meta: ["Vertrag", "Rollen", "Gates"]
  },
  {
    label: "B",
    eyebrow: "Deal-Modell",
    title: "Ownership und Finanzierung werden vorab geklärt.",
    body: "Je nach Ausgangslage arbeiten wir mit Equity, Hybrid-Modell, Build-Fee, Asset Share oder Revenue Share. Wichtig ist: Risiko, Aufwand, Kapital und Upside müssen sauber zusammenpassen.",
    meta: ["Equity", "Build-Fee", "Asset Share"]
  },
  {
    label: "C",
    eyebrow: "Entscheidungslogik",
    title: "Jede Phase braucht eine klare Entscheidung.",
    body: "Wir definieren, welche Signale für den nächsten Schritt reichen: zum Beispiel echte Nachfrage, zahlungsbereite Kunden, niedrige Akquisekosten, technische Machbarkeit oder ein klarer Kapitalpfad.",
    meta: ["Go", "Pivot", "Stop"]
  },
  {
    label: "D",
    eyebrow: "Verantwortung",
    title: "Operative Rollen werden nicht dem Zufall überlassen.",
    body: "Wir klären, wer Produkt, Tech, Marketing, Vertrieb, Administration und Entscheidungen trägt. Falls vorgesehen, wird später eine operative Geschäftsführung oder ein Founder-Team aufgebaut.",
    meta: ["Produkt", "Growth", "Führung"]
  }
];

const successPath: ScrollFadingProcessCard[] = [
  {
    label: "01",
    eyebrow: "Traktion",
    title: "Wenn der MVP echte Nachfrage zeigt, wird stärker gebaut.",
    body: "Ein gutes MVP ist kein Abschluss. Es ist der Beweis, dass mehr Produkt, mehr Marketing, mehr Vertrieb und mehr Struktur sinnvoll sein können.",
    meta: ["Nachfrage", "Umsatzsignal", "Retention"]
  },
  {
    label: "02",
    eyebrow: "Company Setup",
    title: "Dann entsteht das Unternehmen nach den vereinbarten Regeln.",
    body: "Wenn vorher definiert wurde, dass aus dem Venture eine eigene Gesellschaft werden soll, wird die Gründung vorbereitet: Rechtsform, Anteile, Rollen, Verantwortlichkeiten und operative Governance.",
    meta: ["GmbH", "Cap Table", "Governance"]
  },
  {
    label: "03",
    eyebrow: "Management",
    title: "Operative Geschäftsführung oder Founder-Team einsetzen.",
    body: "Falls vereinbart, suchen oder installieren wir die Menschen, die das Venture langfristig führen: CEO, CTO, Operator oder ein gemeinsames Management-Setup.",
    meta: ["CEO", "CTO", "Operator"]
  },
  {
    label: "04",
    eyebrow: "Scale",
    title: "Aus Launch wird wiederholbares Wachstum.",
    body: "Produkt, Marketing, Sales, Automatisierung, Reporting und Kapitalpfad werden weiter ausgebaut. Ziel ist ein Geschäft, das nicht nur startet, sondern wiederholt verkauft und betrieben werden kann.",
    meta: ["Growth", "Operations", "Kapitalpfad"]
  }
];

const stopPath: ScrollFadingProcessCard[] = [
  {
    label: "01",
    eyebrow: "Stoppsignal",
    title: "Wenn der MVP keine ausreichenden Signale liefert, stoppen wir sauber.",
    body: "Schwache Nachfrage, zu hohe Akquisekosten, unklare Zahlungsbereitschaft oder fehlende operative Machbarkeit sind kein Drama. Sie sind ein Signal, rechtzeitig zu stoppen.",
    meta: ["Nachfrage fehlt", "CAC zu hoch", "Scope falsch"]
  },
  {
    label: "02",
    eyebrow: "Abwicklung",
    title: "Das Projekt wird sauber heruntergefahren.",
    body: "Kampagnen werden gestoppt, MVPs oder Landingpages offline gestellt, Daten gesichert und Zugänge, Assets oder Learnings nach vorheriger Vereinbarung übergeben oder archiviert.",
    meta: ["Offline", "Assets", "Daten"]
  },
  {
    label: "03",
    eyebrow: "Kostenlogik",
    title: "Offene Posten werden nach den vereinbarten Regeln gelöst.",
    body: "Offene Kosten, Verbindlichkeiten oder Restaufwände werden nach der vorab definierten Kosten-, Anteils- oder Beteiligungslogik abgerechnet. Keine Endlosschleife, keine stillen Erwartungen.",
    meta: ["Kosten", "Anteile", "Verbindlichkeiten"]
  },
  {
    label: "04",
    eyebrow: "Learning",
    title: "Was gelernt wurde, bleibt verwertbar.",
    body: "Die Idee kann gestoppt werden, aber Marktlernen, Zielgruppenverständnis, Kampagnendaten, Produktentscheidungen und technische Bausteine können für spätere Chancen nutzbar bleiben.",
    meta: ["Learnings", "Research", "Bausteine"]
  }
];

const processSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Venture-Studio-Prozess von Veytra",
  description: pageSeo.process.description,
  url: absoluteUrl(pageSeo.process.path),
  step: [
    ...buildProcess.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.body
    })),
    {
      "@type": "HowToStep",
      position: buildProcess.length + 1,
      name: "Working Agreement und Vertrag klären",
      text: "Vor dem operativen Build werden Rollen, Deal-Modell, Kostenlogik, Assets, Gates und Stop-Regeln schriftlich vereinbart."
    },
    {
      "@type": "HowToStep",
      position: buildProcess.length + 2,
      name: "Company Build oder Stop-Logik entscheiden",
      text: "Wenn echte Marktsignale entstehen, wird Gründung, Management, Growth und Kapitalpfad vorbereitet. Wenn die Signale fehlen, wird geordnet gestoppt."
    }
  ],
  provider: {
    "@type": "Organization",
    name: "Veytra",
    url: absoluteUrl("/")
  }
};

export default function ProcessPage() {
  return (
    <>
      <StructuredData data={processSchema} />
      <ProcessHeroSystem />

      <section id="startschuss" className="scroll-mt-20 border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-28">
          <div data-reveal="slide" className="border-b border-neutral-200 pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Operativer Prozess
            </p>
            <h2 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Der Startschuss. Erst Marktlogik. Dann Produkt. Dann Launch. Dann Entscheidung.
            </h2>
            <p className="mt-6 max-w-5xl text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
              Der Prozess ist absichtlich hart geführt. Jede Phase muss eine Unsicherheit
              reduzieren: Problem, Nachfrage, Produkt, Vertrieb, Kosten, Betrieb oder Kapitalpfad.
            </p>
          </div>

          <div className="mt-10">
            <ScrollFadingProcessCards cards={buildProcess} />
          </div>
        </div>
      </section>

      <section id="vertrag" className="scroll-mt-20 overflow-hidden border-b border-neutral-200 bg-neutral-950 text-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-28">
          <div data-reveal="slide" className="border-b border-neutral-800 pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Zusammenarbeit hinter den Kulissen
            </p>
            <h2 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight md:text-4xl">
              Ein Venture braucht einen Vertrag, bevor es Geschwindigkeit bekommt.
            </h2>
            <p className="mt-6 max-w-5xl text-base leading-8 text-neutral-300 md:text-lg md:leading-9">
              Co-Founder-Arbeit funktioniert nur, wenn Verantwortung, Deal-Modell,
              Entscheidungslogik und Abbruchregeln vorher schriftlich vereinbart sind. Das schützt
              beide Seiten und verhindert, dass aus einem Venture ein unendliches Agenturprojekt
              wird.
            </p>
          </div>

          <div className="mt-10">
            <ScrollFadingProcessCards cards={agreementProcess} tone="dark" />
          </div>
        </div>
      </section>

      <section id="company-build" className="scroll-mt-20 border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-28">
          <div data-reveal="slide" className="border-b border-neutral-200 pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Wenn der MVP Nachfrage zeigt
            </p>
            <h2 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Aus einem guten MVP wird ein echtes Unternehmen.
            </h2>
            <p className="mt-6 max-w-5xl text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
              Ein Unternehmen wird nicht gegründet, weil eine Idee schön klingt. Es wird gegründet,
              wenn echte Nachfrage, Zahlungsbereitschaft, Nutzung oder Umsatzsignale den nächsten
              Schritt rechtfertigen.
            </p>
          </div>

          <div className="mt-10">
            <ScrollFadingProcessCards cards={successPath} />
          </div>
        </div>
      </section>

      <section id="stop-logik" className="scroll-mt-20 border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-28">
          <div data-reveal="slide" className="border-b border-neutral-200 pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Wenn der MVP keine ausreichenden Signale liefert
            </p>
            <h2 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Dann wird nicht weiter verbrannt. Dann wird sauber gestoppt.
            </h2>
            <p className="mt-6 max-w-5xl text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
              Nicht jede These verdient mehr Kapital. Wenn ein MVP keine Nachfrage erzeugt, zu teuer
              verkauft werden müsste oder operativ nicht sinnvoll wird, beenden wir das Vorhaben
              geordnet: Verpflichtungen schließen, offene Posten regeln, Learnings sichern.
            </p>
          </div>

          <div className="mt-10">
            <ScrollFadingProcessCards cards={stopPath} />
          </div>
        </div>
      </section>

      <CTASection
        title="Soll dein Vorhaben durch diesen Prozess?"
        description="Wir prüfen Idee, Markt, MVP-Scope, Deal-Modell, Verantwortlichkeiten und die Frage, ob daraus wirklich ein Venture entstehen kann."
        primaryLabel="Venture prüfen lassen"
        secondaryLabel="Modelle ansehen"
        secondaryHref="/preise"
      />
    </>
  );
}
