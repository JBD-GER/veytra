import type { Metadata } from "next";
import Image from "next/image";

import { InvestorForm } from "@/components/InvestorForm";
import {
  ScrollFadingProcessCards,
  type ScrollFadingProcessCard
} from "@/components/ScrollFadingProcessCards";
import { StructuredData } from "@/components/StructuredData";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Investorenliste für Startups, Dealflow & Venture-Projekte",
  description:
    "Auf die Veytra Investorenliste: früher Zugang zu Startups, validierten Venture-Projekten und Dealflow für Business Angels, strategische Investoren und VC-Partner.",
  path: "/fuer-investoren"
});

const heroSignals = [
  {
    label: "Validierung",
    value: "Research, Smoke-Test, MVP-Signale"
  },
  {
    label: "Dealflow",
    value: "Gründer, Startups, Studio-Ventures"
  },
  {
    label: "Begleitung",
    value: "Produkt, Launch, Growth, Kapitalpfad"
  }
];

const investorFlow: ScrollFadingProcessCard[] = [
  {
    label: "01",
    eyebrow: "Dealflow",
    title: "Frühe Ventures, bevor sie breit im Markt sichtbar sind.",
    body: "Wir arbeiten an frischen Ideen, neuen Gründern, bestehenden Startups und Projekten, die bereits durch Research, Smoke-Test oder MVP-Logik gegangen sind.",
    meta: ["Pre-Seed", "MVP", "Validated"]
  },
  {
    label: "02",
    eyebrow: "Vorprüfung",
    title: "Weniger Bauchgefühl, mehr Marktsignale.",
    body: "Ein Investment bleibt Risiko. Aber vor einem Gespräch liegen bereits Signale vor: Nachfrage, Zielgruppe, Positionierung, CAC-Indikationen, Produktkern oder erste Zahlungsbereitschaft.",
    meta: ["Nachfrage", "CAC-Indikation", "Zahlungsbereitschaft"]
  },
  {
    label: "03",
    eyebrow: "Begleitung",
    title: "Nicht nur Gründerteam. Auch Studio-Infrastruktur.",
    body: "Viele frühe Teams scheitern an Produkt, Launch, Tracking oder Operations. Veytra kann diese Lücken operativ schließen und schafft dadurch ein professionelleres Setup für die nächste Finanzierungsentscheidung.",
    meta: ["Produkt", "Growth", "Operations"]
  }
];

const pros = [
  "Zugang zu frischen Startup- und Venture-Möglichkeiten",
  "Ideen sind durch Research, Smoke-Test oder MVP vorqualifiziert",
  "Professionelle Begleitung durch Produkt-, Launch- und Growth-Prozesse",
  "Besserer Blick auf echte Nachfrage statt nur Pitchdeck-Story",
  "Möglichkeit, früh in Gründer, Startups oder Studio-Ventures einzusteigen",
  "Klarere nächste Schritte: weiter validieren, investieren, syndizieren oder ablehnen"
];

const realities = [
  "Sehr frühe Ventures bleiben riskant und können scheitern",
  "Nicht jede Idee wird nach dem Smoke-Test weitergebaut",
  "Investitionsmöglichkeiten entstehen selektiv, nicht nach festem Kalender",
  "Wir suchen Fit, nicht nur Kapital: Fokus, Tempo und Erwartung müssen passen"
];

const investorSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Investorenliste für Startups und Venture-Projekte",
  provider: {
    "@type": "Organization",
    name: "Veytra",
    url: absoluteUrl("/")
  },
  areaServed: {
    "@type": "Country",
    name: "Deutschland"
  },
  serviceType: "Startup Dealflow und Venture Studio Investorenliste",
  url: absoluteUrl("/fuer-investoren"),
  description:
    "Veytra sucht Business Angels, strategische Investoren und Venture Capital Partner für frühe, validierte Startup- und Venture-Projekte.",
  audience: [
    {
      "@type": "Audience",
      audienceType: "Business Angels"
    },
    {
      "@type": "Audience",
      audienceType: "Strategische Investoren"
    },
    {
      "@type": "Audience",
      audienceType: "Venture Capital Partner"
    }
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Veytra Investorenzugang",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Früher Dealflow",
        description: "Zugang zu frühen Startup- und Venture-Projekten vor breiter Veröffentlichung."
      },
      {
        "@type": "Offer",
        name: "Validierte Venture-Projekte",
        description:
          "Projekte mit Research, Smoke-Test, MVP-Signalen oder klarer Venture-These."
      },
      {
        "@type": "Offer",
        name: "Studio-Begleitung",
        description:
          "Operative Begleitung durch Produkt-, Launch-, Growth- und Kapitalpfad-Prozesse."
      }
    ]
  }
};

export default function InvestorsPage() {
  return (
    <>
      <StructuredData data={investorSchema} />
      <section className="relative overflow-hidden border-b border-neutral-200 bg-neutral-50">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,23,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(23,23,23,0.035)_1px,transparent_1px)] bg-[size:76px_76px] opacity-60 md:bg-[size:112px_112px] md:opacity-70" />
        <div className="relative mx-auto grid max-w-[1240px] gap-9 px-5 py-14 md:px-8 md:py-24 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div data-reveal="slide" className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Für Investoren
            </p>
            <h1 className="mt-5 text-3xl font-semibold leading-tight text-neutral-950 md:mt-6 md:text-4xl">
              Investorenliste für Startups, validierte Venture-Projekte und frühen Dealflow.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 md:mt-7 md:text-lg md:leading-9">
              Veytra baut neue Ventures mit Gründern, Startups und Unternehmen. Wir suchen
              Business Angels, strategische Investoren und VC-Partner, die früh Zugang zu
              passenden Projekten bekommen wollen, bevor sie öffentlich sichtbar werden.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8">
              <a
                href="#investor-form"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-950 bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Auf Investorenliste anfragen
              </a>
              <a
                href="#dealflow"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-950 transition hover:border-neutral-950"
              >
                Mehr erfahren
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3 md:mt-10">
              {heroSignals.map((item, index) => (
                <div
                  key={item.label}
                  data-reveal="slide"
                  data-reveal-delay={`${index * 70}ms`}
                  className="border border-neutral-200 bg-white/90 p-4 shadow-[0_12px_38px_rgba(23,23,23,0.045)]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-neutral-950">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal="scale">
            <div className="overflow-hidden border border-neutral-200 bg-white shadow-[0_28px_90px_rgba(23,23,23,0.12)]">
              <Image
                src="/images/investor-startup-team.jpg"
                alt="Drei Gründer besprechen ein neues Startup-Projekt in einem modernen Büro"
                width={1586}
                height={992}
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
              />
              <div className="grid border-t border-neutral-200 bg-white sm:grid-cols-3">
                {["Private Liste", "Frühe Projekte", "Vor Veröffentlichung"].map((item) => (
                  <p
                    key={item}
                    className="border-b border-neutral-200 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dealflow" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <div data-reveal="slide" className="border-b border-neutral-200 pb-8 md:pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Warum Veytra
            </p>
            <h2 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Wir suchen Kapital für Ventures, die schon erste Realität gesehen haben.
            </h2>
            <p className="mt-5 max-w-5xl text-base leading-8 text-neutral-600 md:mt-6 md:text-lg md:leading-9">
              Der Vorteil für Investoren: Du siehst nicht nur eine Idee. Du siehst, was der Markt
              darauf antwortet und welche operative Struktur hinter dem nächsten Schritt steht.
            </p>
          </div>
          <div className="mt-8 md:mt-10">
            <ScrollFadingProcessCards cards={investorFlow} />
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-[1240px] gap-4 px-5 py-14 md:gap-10 md:px-8 md:py-24 lg:grid-cols-2">
          <div data-reveal="slide" className="border border-neutral-200 bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Vorteile
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-neutral-950 md:mt-5 md:text-3xl">
              Was Investoren bekommen.
            </h2>
            <div className="mt-6 grid gap-3 md:mt-8">
              {pros.map((item) => (
                <p
                  key={item}
                  className="border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium leading-7 text-neutral-700"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div
            data-reveal="slide"
            data-reveal-delay="90ms"
            className="border border-neutral-200 bg-white p-6 md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Realität
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-neutral-950 md:mt-5 md:text-3xl">
              Was ehrlich dazugehört.
            </h2>
            <div className="mt-6 grid gap-3 md:mt-8">
              {realities.map((item) => (
                <p
                  key={item}
                  className="border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium leading-7 text-neutral-700"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="investor-form" className="relative scroll-mt-20 overflow-hidden bg-neutral-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30 md:bg-[size:96px_96px] md:opacity-35" />
        <div className="relative mx-auto grid max-w-[1240px] gap-8 px-5 py-14 md:px-8 md:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div data-reveal="slide">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
              Investor-Fit
            </p>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-white md:text-4xl">
              Passt unser Dealflow zu deinem Investment-Fokus?
            </h2>
            <p className="mt-5 text-base leading-8 text-white/[0.68] md:mt-6 md:text-lg">
              Wir suchen Investoren, die frühe Ventures nicht nur finanzieren, sondern mit
              Netzwerk, Branchenzugang oder strategischer Perspektive stärker machen.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3 md:mt-8">
              {["Validierte Thesen", "Frühe Einstiege", "Studio-Begleitung"].map((item) => (
                <p
                  key={item}
                  className="border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-white/[0.72]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div
            data-reveal="scale"
            className="border border-white/10 bg-white p-5 text-neutral-950 shadow-[0_28px_80px_rgba(0,0,0,0.28)] md:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Kurze Anfrage
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-neutral-950">
              Auf die Investorenliste.
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Trag dich ein. Wir melden uns, wenn dein Investment-Fokus zu neuen, frühen Projekten passt.
            </p>
            <div className="mt-6">
              <InvestorForm idPrefix="investor-bottom" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
