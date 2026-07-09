import type { Metadata } from "next";
import type { ReactNode } from "react";

import { PageHero } from "@/components/PageHero";
import { pageSeo } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata(pageSeo.imprint);

export default function ImprintPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum."
        description="Anbieterkennzeichnung und Pflichtangaben für die Veytra-Website."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 text-base leading-8 text-neutral-600">
            <LegalSection title="Angaben gemäß § 5 DDG">
              <p>
                {site.company.legalName}
                <br />
                {site.company.address}
              </p>
            </LegalSection>

            <LegalSection title="Vertreten durch">
              <p>{site.company.representative}</p>
            </LegalSection>

            <LegalSection title="Kontakt">
              <p>
                E-Mail:{" "}
                <a href={`mailto:${site.company.email}`} className="font-medium text-neutral-950 underline">
                  {site.company.email}
                </a>
                <br />
                Telefon:{" "}
                <a href={`tel:${site.company.phone.replace(/\s/g, "")}`} className="font-medium text-neutral-950 underline">
                  {site.company.phone}
                </a>
              </p>
            </LegalSection>

            <LegalSection title="Registereintrag">
              <p>
                Registergericht: {site.company.registerCourt}
                <br />
                Registernummer: {site.company.registerNumber}
              </p>
            </LegalSection>

            <LegalSection title="Umsatzsteuer-ID">
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: {site.company.vatId}</p>
            </LegalSection>

            <LegalSection title="Verbraucherstreitbeilegung">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  className="font-medium text-neutral-950 underline"
                  rel="noreferrer"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                . Unsere E-Mail-Adresse findest du oben im Impressum.
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </LegalSection>

            <LegalSection title="Haftung für Inhalte und Links">
              <p>
                Wir erstellen die Inhalte dieser Website mit Sorgfalt. Für Vollständigkeit, Aktualität und
                Richtigkeit übernehmen wir jedoch keine Gewähr. Externe Links führen zu Inhalten Dritter, auf
                die wir keinen Einfluss haben. Für diese Inhalte ist der jeweilige Anbieter oder Betreiber
                verantwortlich.
              </p>
            </LegalSection>
          </div>
        </div>
      </section>
    </>
  );
}

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-neutral-200 pt-8">
      <h2 className="text-2xl font-semibold leading-tight text-neutral-950">{title}</h2>
      <div className="mt-4 grid gap-4">{children}</div>
    </section>
  );
}
