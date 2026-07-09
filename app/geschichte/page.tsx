import type { Metadata } from "next";

import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { StoryMilestones } from "@/components/StoryMilestones";
import { StructuredData } from "@/components/StructuredData";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Veytra Geschichte: Vom Digitalprojekt zum Venture Studio",
  description:
    "Die Geschichte von Veytra: Von eigenen digitalen Projekten, MVPs und Marktvalidierung zum Venture Studio für Gründer, Startups und Unternehmen.",
  path: "/geschichte"
});

const milestones = [
  {
    date: "2022",
    label: "Gründung",
    title: "Veytra wird gegründet.",
    body: "Das Unternehmen startet mit dem Ziel, digitale Projekte nicht nur zu gestalten, sondern selbst zu bauen, zu testen und wirtschaftlich weiterzuentwickeln."
  },
  {
    date: "2022-2024",
    label: "Eigene Projekte",
    title: "Aus Ideen werden eigene Builds.",
    body: "Es folgen viele eigene Projekte: Software, Shops, Automatisierungen, Funnels, digitale Angebote und MVPs. Nicht für fremde Briefings, sondern aus eigener Verantwortung."
  },
  {
    date: "2024-2026",
    label: "Validierung",
    title: "Validierte Ideen werden skaliert.",
    body: "Aus einzelnen Projekten entsteht ein System: Ideen finden, Markt prüfen, Produktkern bauen, Launch starten, Nachfrage messen und nur dann weiter investieren, wenn echte Signale entstehen."
  },
  {
    date: "01.07.2026",
    label: "Venture Studio",
    title: "Veytra öffnet das Studio für externe Gründer und Unternehmen.",
    body: "Heute startet Veytra als Venture Studio für gemeinsame Ventures: mit Gründern, Startups und Unternehmen, die aus Ideen eigenständige digitale Geschäftsmodelle bauen wollen."
  }
];

const storySchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Veytra Geschichte",
  description:
    "Die Entwicklung von Veytra: von eigenen digitalen Projekten und Validierungserfahrung zum Venture Studio.",
  url: absoluteUrl("/geschichte"),
  mainEntity: {
    "@type": "Organization",
    name: "Veytra",
    url: absoluteUrl("/"),
    foundingDate: "2022",
    description:
      "Venture Studio für Gründer, Startups und Unternehmen, die aus Ideen validierte digitale Geschäftsmodelle bauen wollen."
  },
  hasPart: milestones.map((milestone, index) => ({
    "@type": "CreativeWork",
    position: index + 1,
    name: milestone.title,
    temporalCoverage: milestone.date,
    description: milestone.body
  }))
};

export default function StoryPage() {
  return (
    <>
      <StructuredData data={storySchema} />
      <PageHero
        eyebrow="Geschichte"
        title="Veytra Geschichte: vom eigenen Digitalprojekt zum Venture Studio."
        description="Veytra entstand aus eigenen Builds, MVPs, Marktversuchen und der Frage, wie aus einer Idee ein belastbares digitales Geschäftsmodell wird."
        links={[
          { label: "Venture anfragen", href: "/kontakt" },
          { label: "Prozess ansehen", href: "/prozess", variant: "secondary" }
        ]}
      />

      <StoryMilestones milestones={milestones} />

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
          <div
            data-reveal="slide"
            className="grid gap-8 border-b border-neutral-200 pb-10 md:pb-12 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Was bleibt
              </p>
              <h2 className="mt-5 text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
                Der Unterschied ist die operative Verantwortung.
              </h2>
            </div>
            <div className="grid gap-5 text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
              <p>
                Veytra baut nicht einfach Websites, Apps oder Kampagnen. Veytra baut neue digitale
                Geschäftsmodelle: mit Ideenfindung, Validierung, Produkt, Launch, Marketing,
                Automatisierung und Kapitalpfad.
              </p>
              <p>
                Aus den eigenen Projekten wurde klar: Gute Ideen brauchen kein weiteres Briefing,
                sondern ein System, das Markt, Produkt und Wachstum zusammenbringt.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10 md:grid-cols-3 md:gap-4">
            {[
              "MVP vor Perfektion",
              "Nachfrage vor Meinung",
              "Ownership vor Auftrag",
              "Zahlen vor Gefühl",
              "Launch vor Endlosplanung",
              "Kapitalpfad vor Wunschdenken"
            ].map((item) => (
              <div
                key={item}
                data-reveal="slide"
                className="min-h-16 border border-neutral-200 bg-neutral-50 p-4 text-sm font-semibold text-neutral-900 md:p-5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Du hast eine Idee, die mehr als ein Projekt sein könnte?"
        description="Veytra prüft, ob daraus ein Venture entstehen kann und welches Modell dafür sinnvoll ist."
        primaryLabel="Idee prüfen lassen"
        secondaryLabel="Prozess ansehen"
        secondaryHref="/prozess"
      />
    </>
  );
}
