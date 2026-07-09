import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Ratgeber für Venture Studio, MVP und AI Ventures",
  description:
    "Ratgeber von Veytra zu Venture Studios, AI Venture Building, MVPs, Validierung, Go-to-Market und Startup-Aufbau.",
  path: "/ratgeber"
});

const guideLinks = [
  {
    title: "Was ist ein Venture Studio?",
    href: "/venture-studio",
    body: "Der Unterschied zwischen Agentur, Accelerator, Investor und operativem Co-Founder."
  },
  {
    title: "Was ist ein AI Venture Studio?",
    href: "/ai-venture-studio",
    body: "Wie AI Research, Produktentwicklung, Automatisierung und Growth schneller testbar macht."
  },
  {
    title: "Wie läuft der Prozess?",
    href: "/prozess",
    body: "Von These und Validierung über MVP und Launch bis zu Ownership, Kapitalpfad und Spin-out."
  },
  {
    title: "Was ist das Studio OS?",
    href: "/studio-os",
    body: "Die operativen Bausteine hinter Research, Produkt, Growth, Back-Office und Fundraising."
  }
];

export default function GuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Ratgeber"
        title="Klare Antworten zum Aufbau digitaler Ventures."
        description="Kein Innovationsnebel. Hier findest du die wichtigsten Grundlagen zu Venture Studio, AI Venture Studio, MVP, Validierung, Launch, Deal-Modellen und Kapitalfähigkeit."
        links={[
          { label: "Venture anfragen", href: "/kontakt" },
          { label: "Preise ansehen", href: "/preise", variant: "secondary" }
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Startpunkte"
            title="Die wichtigsten Seiten, wenn du Veytra verstehen willst."
            description="Der Ratgeber wächst weiter. Für den Einstieg führen diese Seiten am schnellsten zur richtigen Entscheidung."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {guideLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-h-[220px] border border-neutral-200 bg-white p-6 transition hover:border-neutral-950"
              >
                <h2 className="text-2xl font-semibold leading-tight text-neutral-950">{item.title}</h2>
                <p className="mt-5 text-base leading-8 text-neutral-600">{item.body}</p>
                <span className="mt-7 inline-flex text-sm font-medium text-neutral-950 underline">
                  Seite öffnen
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Du willst nicht nur lesen, sondern prüfen?"
        description="Schick uns Idee, Marktproblem oder Startup-Situation. Wir sagen dir, ob ein Venture-Studio-Ansatz sinnvoll ist."
        primaryLabel="Venture prüfen lassen"
        secondaryLabel="Kontakt aufnehmen"
        secondaryHref="/kontakt"
      />
    </>
  );
}
