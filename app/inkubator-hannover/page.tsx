import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { SectionIntro } from "@/components/SectionIntro";
import { StructuredData } from "@/components/StructuredData";
import type { FAQItem } from "@/content/faqs";
import { faqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

const pagePath = "/inkubator-hannover";

export const metadata: Metadata = createMetadata({
  title: "Inkubator Hannover für Startups & neue Ventures",
  description:
    "Inkubator Hannover: Veytra validiert Geschäftsideen, baut MVPs und entwickelt Go-to-Market, Team und Kapitalpfad für Startups und Unternehmen.",
  path: pagePath
});

const incubatorStages = [
  {
    label: "01",
    title: "Venture Audit",
    text: "Problem, Zielgruppe, Markt, Wettbewerb, Team und wirtschaftliche Logik prüfen."
  },
  {
    label: "02",
    title: "Validierung",
    text: "Interviews, Angebote und Markttests erzeugen belastbare Nachfrage-Signale."
  },
  {
    label: "03",
    title: "MVP Build",
    text: "Der kleinste Produktkern wird mit klarem Lernziel konzipiert und umgesetzt."
  },
  {
    label: "04",
    title: "Go-to-Market",
    text: "Positionierung, Funnel, Founder-led Sales und erste Kanäle werden getestet."
  },
  {
    label: "05",
    title: "Company Build",
    text: "Team, Operations, Beteiligung und Kapitalpfad werden für den nächsten Schritt vorbereitet."
  }
];

const incubatorServices = [
  {
    title: "Idee und Markt prüfen",
    body: "Wir übersetzen eine Geschäftsidee, ein Branchenproblem oder eine Technologiechance in eine belastbare Venture-These mit Zielkunde, Nutzenversprechen und Risikologik."
  },
  {
    title: "Nachfrage vor Produkt testen",
    body: "Kundeninterviews, Landingpages, Angebots- und Smoke-Tests zeigen, ob das Problem dringend genug ist und ob ein realistischer Weg zur Zahlungsbereitschaft existiert."
  },
  {
    title: "MVP fokussiert bauen",
    body: "Wir konzipieren und bauen SaaS-Produkte, Apps, Plattformen, AI-Produkte und Automatisierungen – nicht als Feature-Sammlung, sondern als messbaren Markttest."
  },
  {
    title: "Erste Kunden gewinnen",
    body: "Positionierung, Outreach, Sales-Gespräche, Content, Kampagnen und Tracking werden so verbunden, dass aus Interesse verwertbare Vertriebsdaten entstehen."
  },
  {
    title: "Founder und Team ergänzen",
    body: "Fehlende Produkt-, Tech-, Growth- oder Operator-Rollen werden zunächst durch das Studio abgedeckt und bei belastbaren Signalen in eine eigene Teamstruktur überführt."
  },
  {
    title: "Kapitalfähigkeit vorbereiten",
    body: "Wir strukturieren Kennzahlen, Datenraum, Finanzierungslogik und nächste Meilensteine, damit Investoren nicht nur eine Idee, sondern nachvollziehbare Evidenz bewerten können."
  }
];

const comparison = [
  {
    label: "Programm",
    title: "Kein starrer Batch",
    body: "Der Einstieg wartet nicht auf eine Kohorte. Scope und Geschwindigkeit richten sich nach Venture, Evidenz und Team."
  },
  {
    label: "Umsetzung",
    title: "Nicht nur Mentoring",
    body: "Veytra übernimmt Research, Produkt, Technologie und Go-to-Market operativ mit."
  },
  {
    label: "Entscheidung",
    title: "Gates statt Demo Day",
    body: "Nach jeder Phase wird anhand echter Signale entschieden: ausbauen, verändern oder stoppen."
  },
  {
    label: "Ownership",
    title: "Gemeinsame Verantwortung",
    body: "Cash-, Equity- und Hybridmodelle verteilen Leistung, Risiko und langfristige Interessen passend zum Case."
  }
];

const process = [
  {
    label: "Woche 01–02",
    title: "Aus der Idee wird eine prüfbare These",
    body: "Wir klären Zielkunde, Problem, bestehende Alternativen, Nutzen, Preislogik, Marktkanal und die Annahme, die das Venture am schnellsten widerlegen könnte."
  },
  {
    label: "Woche 03–04",
    title: "Der Markt antwortet vor dem großen Build",
    body: "Interviews, Tests und erste Angebote erzeugen Verhalten statt bloßer Meinungen. Die Ergebnisse bestimmen, ob und was gebaut werden sollte."
  },
  {
    label: "Monat 02",
    title: "Ein MVP beantwortet die nächste Geschäftsfrage",
    body: "Produkt, UX, Technik und Tracking werden auf ein Lernziel begrenzt. Komplexität entsteht erst dort, wo sie für reale Nutzer und Daten nötig ist."
  },
  {
    label: "Monat 03",
    title: "Launch, Sales und Nutzung werden messbar",
    body: "Das Venture trifft auf echte Interessenten, Pilotkunden oder Nutzer. Conversion, Aktivierung, Einwände, Wiederkehr und Zahlungsbereitschaft werden ausgewertet."
  },
  {
    label: "Decision Gate",
    title: "Ausbauen, pivotieren oder sauber stoppen",
    body: "Starke Signale führen zu Company Build, eigenem Team und Kapitalpfad. Schwache Signale führen nicht automatisch zu weiteren Build-Kosten."
  }
];

const audiences = [
  {
    title: "Gründer aus Hannover",
    body: "Für Menschen mit Branchenwissen, Problemnähe oder Kundenzugang, denen ein vollständiges Produkt-, Tech- oder Go-to-Market-Team fehlt.",
    href: "/fuer-gruender",
    linkLabel: "Angebot für Gründer"
  },
  {
    title: "Startups in der Frühphase",
    body: "Für Pre-Seed- und Seed-Teams, die MVP, Product-Market-Fit, Automatisierung oder Vertrieb schneller in belastbare Systeme überführen wollen.",
    href: "/fuer-startups",
    linkLabel: "Angebot für Startups"
  },
  {
    title: "Unternehmen aus der Region",
    body: "Für Mittelstand und Corporates, die Kundenzugang, Daten, Prozesse oder Technologien in ein neues digitales Geschäftsmodell übersetzen möchten.",
    href: "/fuer-unternehmen",
    linkLabel: "Angebot für Unternehmen"
  }
];

const outcomes = [
  ["Venture-These", "Zielkunde, Problem, Nutzen und Erlöslogik in einer prüfbaren Struktur."],
  ["Validierungsdaten", "Gespräche, Reaktionen und Tests statt interner Zustimmung."],
  ["MVP", "Ein nutzbarer Produktkern mit klarer Mess- und Lernlogik."],
  ["Go-to-Market", "Positionierung, erster Funnel und wiederholbare Sales-Schritte."],
  ["Operating System", "Rollen, Cadence, Kennzahlen und klare Entscheidungen."],
  ["Kapitalpfad", "Nächste Meilensteine, Datenraum und nachvollziehbarer Mitteleinsatz."]
];

const hannoverFaqs: FAQItem[] = [
  {
    question: "Was macht ein Inkubator in Hannover?",
    answer:
      "Ein Inkubator unterstützt sehr frühe Geschäftsideen bei Validierung, Produktentwicklung, Markteintritt und Unternehmensaufbau. Veytra arbeitet dabei operativ mit und verbindet Venture Audit, MVP-Build, Go-to-Market und Company Build."
  },
  {
    question: "Hat Veytra ein Büro direkt in Hannover?",
    answer:
      "Veytra bietet das Inkubator-Modell für Gründer, Startups und Unternehmen aus Hannover und der Region an. Der rechtliche Unternehmenssitz befindet sich in Leese; die Zusammenarbeit kann vor Ort in der Region und digital organisiert werden."
  },
  {
    question: "Ist der Inkubator nur für Tech-Startups geeignet?",
    answer:
      "Der Schwerpunkt liegt auf digitalen und technologiegetriebenen Geschäftsmodellen wie SaaS, Apps, Plattformen, AI-Produkten und Automatisierungen. Entscheidend sind ein relevantes Problem und ein testbarer Weg zum Markt."
  },
  {
    question: "Muss ich bereits ein Team oder einen MVP haben?",
    answer:
      "Nein. Ein Einstieg ist mit einer begründeten Idee, Branchenwissen, Kundenzugang oder einem konkreten Unternehmensproblem möglich. Vor dem Build wird geprüft, welche Rollen und Tests wirklich benötigt werden."
  },
  {
    question: "Wie unterscheidet sich Veytra von einem Accelerator?",
    answer:
      "Ein Accelerator arbeitet meist mit zeitlich begrenzten Kohorten, Mentoring und Netzwerk. Veytra arbeitet als operativer Co-Builder direkt an Validierung, Produkt, Technologie, Launch und Unternehmensstruktur."
  },
  {
    question: "Was kostet die Zusammenarbeit mit dem Inkubator?",
    answer:
      "Der konkrete Rahmen hängt von Reife, Scope und Risikoverteilung ab. Veytra bietet Equity-, Hybrid- und Corporate-Modelle. Vor jedem Build steht ein Venture Audit; Details und aktuelle Preisrahmen sind auf der Preisseite beschrieben."
  }
];

const incubatorSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Inkubator Hannover",
  serviceType: "Startup Inkubator, Venture Building und Company Building",
  url: absoluteUrl(pagePath),
  description:
    "Veytra unterstützt Gründer, Startups und Unternehmen aus Hannover bei Ideenvalidierung, MVP-Entwicklung, Go-to-Market und Company Build.",
  provider: {
    "@type": "Organization",
    name: "Veytra",
    url: absoluteUrl("/")
  },
  areaServed: [
    {
      "@type": "City",
      name: "Hannover"
    },
    {
      "@type": "AdministrativeArea",
      name: "Niedersachsen"
    },
    "Deutschland",
    "DACH"
  ],
  audience: [
    { "@type": "Audience", audienceType: "Gründer" },
    { "@type": "Audience", audienceType: "Startups" },
    { "@type": "Audience", audienceType: "Unternehmen" }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen des Inkubators Hannover",
    itemListElement: incubatorServices.map((service) => ({
      "@type": "Offer",
      name: service.title,
      description: service.body
    }))
  }
};

function IncubatorVisual() {
  return (
    <div className="relative overflow-hidden border border-white/12 bg-white/[0.04] p-4 md:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(255,255,255,0.09),transparent_34%)]" />
      <div className="relative border-b border-white/10 pb-5">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 md:text-xs">
              Venture Incubation System
            </p>
            <h2 className="mt-3 text-xl font-semibold text-white md:text-3xl">Hannover → Market</h2>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">Region</p>
            <p className="mt-2 text-xs font-medium text-neutral-300">52.3759° N / 9.7320° E</p>
          </div>
        </div>
      </div>

      <div className="relative mt-5 grid gap-3">
        {incubatorStages.map((stage, index) => (
          <div
            key={stage.title}
            className="relative grid gap-2 overflow-hidden border border-white/10 bg-neutral-950/55 p-3 md:grid-cols-[52px_0.72fr_1.28fr] md:items-center md:gap-4 md:p-4"
          >
            <span className="text-xs font-semibold text-neutral-500">{stage.label}</span>
            <strong className="text-sm font-semibold text-white md:text-base">{stage.title}</strong>
            <span className="text-xs leading-5 text-neutral-400 md:text-sm md:leading-6">{stage.text}</span>
            <span
              aria-hidden="true"
              className="absolute left-0 h-px bg-white/20"
              style={{ width: `${18 + index * 16}%` }}
            />
          </div>
        ))}
      </div>

      <div className="relative mt-5 grid grid-cols-3 gap-2 text-center">
        {[
          ["01", "Idee"],
          ["02", "Signal"],
          ["03", "Venture"]
        ].map(([value, label]) => (
          <div key={label} className="border border-white/10 bg-white/[0.03] px-2 py-3">
            <span className="block text-lg font-semibold text-white">{value}</span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.17em] text-neutral-500">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function IncubatorHannoverPage() {
  return (
    <>
      <StructuredData data={[incubatorSchema, faqSchema(hannoverFaqs, pagePath)]} />

      <section className="border-b border-neutral-800 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-[1440px] gap-9 px-5 py-14 md:px-8 md:py-24 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[0.84fr_1fr] lg:items-center">
          <div data-reveal="slide" className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 md:mb-6">
              Startup Inkubator für Hannover und die Region
            </p>
            <h1 className="text-3xl font-semibold leading-[1.08] md:text-6xl">Inkubator Hannover</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 md:mt-7 md:text-lg md:leading-9">
              Veytra prüft Geschäftsideen, validiert Nachfrage, baut fokussierte MVPs und entwickelt den Weg zu ersten Kunden, eigenem Team und Finanzierung. Operativ, technologiegetrieben und mit klaren Entscheidungsgates.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-9">
              <Link
                href="/kontakt"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white bg-white px-5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
              >
                Idee prüfen lassen
              </Link>
              <Link
                href="/preise"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white/20 px-5 text-sm font-medium text-white transition hover:border-white"
              >
                Modelle und Preise
              </Link>
            </div>
          </div>
          <div data-reveal="scale" data-reveal-delay="140ms">
            <IncubatorVisual />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-14 md:px-8 md:py-24 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionIntro
            eyebrow="Definition"
            title="Ein Inkubator macht aus einer frühen Chance eine belastbare Venture-Entscheidung."
            description="Nicht jede gute Idee braucht sofort eine Gesellschaft, Finanzierung oder große Software. Sie braucht zuerst Evidenz: ein relevantes Problem, erreichbare Kunden, ein überzeugendes Angebot und einen realistischen Build-Pfad."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {comparison.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 70}ms`}
                className="border border-neutral-200 bg-white p-5 md:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">{item.label}</p>
                <h2 className="mt-5 text-xl font-semibold text-neutral-950">{item.title}</h2>
                <p className="mt-4 text-base leading-8 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Inkubator-Leistungen"
            title="Was Veytra für neue Ventures in Hannover übernimmt."
            description="Der Inkubator verbindet Markt, Produkt, Technologie, Vertrieb und Unternehmensaufbau. So entstehen keine losen Beratungsfolien, sondern konkrete Artefakte und messbare Signale."
          />
          <div className="mt-8 grid gap-4 md:mt-12 lg:grid-cols-3">
            {incubatorServices.map((service, index) => (
              <article
                key={service.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 55}ms`}
                className="relative overflow-hidden border border-neutral-200 bg-white p-5 md:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <h3 className="text-lg font-semibold leading-tight text-neutral-950 md:text-xl">{service.title}</h3>
                  <span className="shrink-0 text-sm font-semibold text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-base leading-8 text-neutral-600">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-14 md:gap-12 md:px-8 md:py-24 lg:grid-cols-[0.72fr_1.28fr]">
          <div data-reveal="slide" className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Inkubator-Prozess
            </p>
            <h2 className="text-2xl font-semibold leading-tight md:text-5xl">
              Von der Idee zum Marktsignal in klaren Gates.
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-300">
              Der Ablauf folgt keiner starren Förderung. Jede Phase beantwortet eine konkrete Venture-Frage und entscheidet über die nächste Investition.
            </p>
          </div>
          <div className="grid gap-4">
            {process.map((step, index) => (
              <article
                key={step.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 80}ms`}
                className="border border-white/10 bg-white/[0.03] p-5 md:grid md:grid-cols-[116px_0.8fr_1.2fr] md:gap-7 md:p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">{step.label}</span>
                <h3 className="mt-4 text-xl font-semibold leading-tight text-white md:mt-0 md:text-2xl">{step.title}</h3>
                <p className="mt-5 text-base leading-8 text-neutral-300 md:mt-0">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Für wen"
            title="Der Inkubator passt zu drei Ausgangslagen."
            description="Entscheidend ist nicht, ob bereits ein Pitchdeck oder Prototyp existiert. Entscheidend sind Problemnähe, Lernbereitschaft und der Wille, aus Marktsignalen Konsequenzen zu ziehen."
          />
          <div className="mt-8 grid gap-4 md:mt-12 lg:grid-cols-3">
            {audiences.map((audience, index) => (
              <Link
                key={audience.title}
                href={audience.href}
                data-reveal="slide"
                data-reveal-delay={`${index * 80}ms`}
                className="group border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 hover:border-neutral-950 hover:shadow-[0_20px_60px_rgba(23,23,23,0.08)] md:p-7"
              >
                <span className="text-sm font-semibold text-neutral-400">0{index + 1}</span>
                <h3 className="mt-6 text-xl font-semibold text-neutral-950 md:text-2xl">{audience.title}</h3>
                <p className="mt-5 text-base leading-8 text-neutral-600">{audience.body}</p>
                <span className="mt-7 inline-flex text-sm font-medium text-neutral-950 underline underline-offset-4">
                  {audience.linkLabel}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-[1240px] gap-9 px-5 py-14 md:gap-12 md:px-8 md:py-24 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionIntro
              eyebrow="Standortvorteil"
              title="In Hannover starten. Für den Markt bauen."
              description="Hannover verbindet Unternehmen, technische Kompetenz und kurze Wege in einer wirtschaftlich vielfältigen Region. Für neue B2B-, SaaS- und AI-Ventures ist das ein guter Ausgangspunkt – sofern aus Zugang auch echte Validierung entsteht."
            />
            <div className="mt-8 border-l-2 border-neutral-950 pl-5 text-base leading-8 text-neutral-600 md:mt-10 md:pl-7 md:text-lg md:leading-9">
              <p>
                Veytra nutzt den regionalen Kontext nicht als Selbstzweck. Entscheidend ist, ob Branchenwissen, Kundenkontakte, Daten oder Prozesse in ein wiederholbares digitales Angebot übersetzt werden können.
              </p>
              <p className="mt-5">
                Die Zusammenarbeit lässt sich regional und digital organisieren. So bleibt Kundennähe erhalten, während Produkt, Research und Go-to-Market ohne Standortgrenzen skalieren können.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {outcomes.map(([title, body], index) => (
              <article
                key={title}
                data-reveal="fade"
                data-reveal-delay={`${index * 55}ms`}
                className="border border-neutral-200 bg-white p-5"
              >
                <span className="text-xs font-semibold text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg font-semibold text-neutral-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-9 px-5 py-14 md:px-8 md:py-24 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionIntro
            eyebrow="Zusammenarbeit"
            title="Ein Einstieg, drei mögliche Build-Modelle."
            description="Jede Zusammenarbeit beginnt mit einem Venture Audit. Danach wird entschieden, ob ein Equity-, Hybrid- oder Corporate-Modell zum Risiko, Budget und Beitrag der Beteiligten passt."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Equity", "Studio-Leistung gegen Beteiligung", "Für ausgewählte Founder-Cases mit starkem Fit und geteilter operativer Verantwortung."],
              ["Hybrid", "Build-Fee plus Beteiligung", "Für finanzierte Teams, die schneller bauen und gleichzeitig Equity schonen möchten."],
              ["Corporate", "Finanzierter Venture Build", "Für Unternehmen, die eine neue Marktchance außerhalb der Linienlogik testen wollen."]
            ].map(([label, title, body], index) => (
              <article key={label} className="border border-neutral-200 bg-white p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">{label}</p>
                <h3 className="mt-5 text-lg font-semibold leading-tight text-neutral-950">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{body}</p>
                <span className="mt-6 block text-xs font-semibold text-neutral-400">0{index + 1}</span>
              </article>
            ))}
          </div>
          <div className="lg:col-start-2">
            <Link href="/preise" className="inline-flex text-sm font-medium text-neutral-950 underline underline-offset-4">
              Modelle, Beteiligung und Preise im Detail ansehen
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <SectionIntro eyebrow="FAQ" title="Häufige Fragen zum Inkubator Hannover." />
          <div className="mt-10">
            <FAQ items={hannoverFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Soll aus deiner Idee in Hannover ein testbares Venture werden?"
        description="Wir prüfen Problem, Zielgruppe, Markt, MVP-Scope, Go-to-Market und Team-Fit. Danach ist klar, welcher nächste Schritt wirtschaftlich sinnvoll ist."
        primaryLabel="Venture Audit anfragen"
        secondaryLabel="Venture-Studio-Prozess"
        secondaryHref="/venture-studio"
      />
    </>
  );
}
