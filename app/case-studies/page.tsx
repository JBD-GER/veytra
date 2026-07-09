import type { Metadata } from "next";

import { CaseStudyShowcase } from "@/components/CaseStudyShowcase";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { StructuredData } from "@/components/StructuredData";
import { caseStudies } from "@/content/case-studies";
import { pageSeo } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = createMetadata(pageSeo.caseStudies);

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Veytra Case Studies",
  description: pageSeo.caseStudies.description,
  url: absoluteUrl(pageSeo.caseStudies.path),
  itemListElement: caseStudies.map((study, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: study.name,
      description: study.shortDescription,
      url: study.url,
      image: absoluteUrl(study.screenshot)
    }
  }))
};

const caseStudySignals = [
  {
    label: "MVP & Produktkern",
    text: "Aus Idee, Marktproblem oder Angebot entsteht eine erste Version, die echte Nutzung oder Nachfrage zeigen kann."
  },
  {
    label: "AI, SaaS & Plattformen",
    text: "Die Cases reichen von AI-Infrastruktur und AI Search bis zu Vertical SaaS, Marketplace-Logik und digitalen Entscheidungsstrecken."
  },
  {
    label: "Launch & Conversion",
    text: "Jedes Projekt braucht eine eigene Mechanik für Vertrauen, Kontakt, Demo, Anfrage oder wiederkehrende Nutzung."
  }
];

const sharedPatterns = [
  "Ein Marktproblem wird in ein testbares Produkt oder Angebot übersetzt.",
  "Die sichtbare Website ist nur ein Teil: dahinter stehen Positionierung, Produktlogik und Launch-System.",
  "Jedes Projekt braucht eine eigene Conversion-Mechanik, nicht nur eine schöne Oberfläche.",
  "Nach dem Launch zählen echte Signale: Nachfrage, Nutzung, Kontakt, Kosten und nächste Wachstumsentscheidung."
];

export default function CaseStudiesPage() {
  return (
    <>
      <StructuredData data={caseStudySchema} />
      <PageHero
        eyebrow="Case Studies"
        title="Case Studies aus Venture-Studio-Arbeit."
        description="Gebaut wurden bisher vor allem digitale Internet-, SaaS-, AI-, Funnel- und Plattformprojekte. Die Cases zeigen, wie Marktthese, Produktlogik, Design, Launch und Conversion zusammenkommen."
        links={[
          { label: "Venture anfragen", href: "/kontakt" },
          { label: "Prozess ansehen", href: "/prozess", variant: "secondary" }
        ]}
      />

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-12 md:px-8 md:py-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div data-reveal="slide">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Showcase
            </p>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Sieben Cases. Unterschiedliche Märkte. Eine Studio-Logik.
            </h2>
          </div>
          <p data-reveal="slide" className="text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
            Die Projekte sind bewusst gleich gewichtet. Entscheidend ist nicht, welcher Case am
            lautesten wirkt, sondern welche Geschäftsmodell-Frage gelöst wurde: Nachfrage,
            Produktkern, Trust, Conversion, AI-Nutzen, Plattformlogik oder Launch-Fähigkeit.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1240px] gap-3 px-5 pb-12 md:grid-cols-3 md:px-8">
          {caseStudySignals.map((signal, index) => (
            <div
              key={signal.label}
              data-reveal="slide"
              data-reveal-delay={`${index * 70}ms`}
              className="border border-neutral-200 bg-neutral-50 p-5"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 text-lg font-semibold text-neutral-950">{signal.label}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{signal.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CaseStudyShowcase studies={caseStudies} />

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
          <div data-reveal="slide" className="border-b border-neutral-200 pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Muster
            </p>
            <h2 className="mt-5 max-w-4xl text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Was alle Case Studies gemeinsam haben.
            </h2>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {sharedPatterns.map((item, index) => (
              <div
                key={item}
                data-reveal="slide"
                data-reveal-delay={`${index * 60}ms`}
                className="border border-neutral-200 bg-white p-5 text-base leading-8 text-neutral-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Aus deinem Marktproblem soll das nächste Venture werden?"
        description="Wir prüfen Idee, Zielkunden, MVP-Scope, Go-to-Market und Deal-Modell und entscheiden dann, ob wir gemeinsam bauen."
        primaryLabel="Venture aufbauen"
        secondaryLabel="Preislogik ansehen"
        secondaryHref="/preise"
      />
    </>
  );
}
