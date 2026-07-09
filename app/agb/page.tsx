import type { Metadata } from "next";
import type { ReactNode } from "react";

import { PageHero } from "@/components/PageHero";
import { pageSeo } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata(pageSeo.terms);

const lastUpdated = "Stand: Juli 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="AGB"
        title="Allgemeine Geschäftsbedingungen."
        description="Rahmenbedingungen für Venture-Audits, MVP-Builds, Validierung, Go-to-Market und operative Zusammenarbeit mit Veytra."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-5 py-16 md:px-8 md:py-24">
          <div className="mb-8 border border-neutral-200 bg-neutral-50 p-5 text-sm leading-7 text-neutral-600">
            <p className="font-semibold text-neutral-950">{lastUpdated}</p>
            <p className="mt-2">
              Vertragspartner ist {site.company.legalName}, handelnd unter der Marke Veytra,
              {` ${site.company.address}.`}
              <br />
              Kontakt:{" "}
              <a href={`mailto:${site.company.email}`} className="font-medium text-neutral-950 underline">
                {site.company.email}
              </a>
            </p>
          </div>

          <div className="grid gap-10 text-base leading-8 text-neutral-600">
            <LegalSection title="1. Geltungsbereich">
              <p>
                Diese AGB gelten für Leistungen von Veytra im Bereich Venture-Audit, Ideenvalidierung,
                MVP-Entwicklung, technischer Aufbau, Go-to-Market, Automatisierung, Company Build und
                strategische Begleitung, sofern keine abweichende schriftliche Vereinbarung getroffen wurde.
              </p>
            </LegalSection>

            <LegalSection title="2. Leistungen von Veytra">
              <p>
                Veytra unterstützt bei der Entwicklung neuer digitaler Geschäftsmodelle. Dazu können
                Ideenfindung, Markt- und Zielgruppenanalyse, Venture-Audit, technische Konzeption,
                Produktentwicklung, Infrastruktur, Tracking, Kampagnen, Funnel, Sales-Unterstützung,
                Reporting, Automatisierung und Vorbereitung einer möglichen Ausgründung gehören.
              </p>
              <p>
                Der konkrete Leistungsumfang ergibt sich aus Angebot, Projektbeschreibung, Statement of Work,
                Beteiligungsvereinbarung oder sonstiger schriftlicher Absprache.
              </p>
            </LegalSection>

            <LegalSection title="3. Venture-Audit und Startprüfung">
              <p>
                Vor einem operativen Build kann Veytra ein Venture-Audit oder eine Startprüfung durchführen.
                Ziel ist es, Annahmen, Marktlogik, Risiken, Ressourcen, technische Machbarkeit und nächste
                Schritte zu klären, bevor unnötig Zeit und Budget in den Aufbau fließen.
              </p>
              <p>
                Das Audit ersetzt keine Rechts-, Steuer- oder Finanzberatung. Es liefert eine unternehmerische
                Entscheidungsgrundlage für den weiteren Build.
              </p>
            </LegalSection>

            <LegalSection title="4. Vergütung, Build-Fee und externe Kosten">
              <p>
                Vergütung und Zahlungsmodalitäten ergeben sich aus dem jeweiligen Angebot. Je nach Modell kann
                die Zusammenarbeit auf Fixpreis, monatlicher Build-Fee, Equity, Erfolgsbeteiligung,
                Revenue-Share, Asset-Share oder einer hybriden Struktur beruhen.
              </p>
              <p>
                Externe Kosten wie Werbebudget, Tools, Hosting, Domains, Lizenzen, Rechtsberatung,
                Steuerberatung, Notar, Registerkosten oder Drittanbieter werden gesondert geregelt und sind
                nicht automatisch in der Veytra-Vergütung enthalten.
              </p>
            </LegalSection>

            <LegalSection title="5. Equity, Beteiligung und Erfolgsmodelle">
              <p>
                Beteiligungen, Optionsrechte, Revenue-Share, Asset-Share, Geschäftsführungsrollen oder
                sonstige erfolgsabhängige Modelle entstehen nur durch eine separate schriftliche Vereinbarung.
                Ohne eine solche Vereinbarung besteht kein Anspruch auf Übertragung von Anteilen oder Assets.
              </p>
            </LegalSection>

            <LegalSection title="6. Mitwirkungspflichten">
              <p>
                Kunden, Gründer, Startups oder Unternehmen stellen die für die Zusammenarbeit erforderlichen
                Informationen, Zugänge, Unterlagen, Ansprechpartner, Entscheidungen und Freigaben rechtzeitig
                bereit. Verzögerungen oder unvollständige Mitwirkung können Termine, Umfang und Kosten
                beeinflussen.
              </p>
            </LegalSection>

            <LegalSection title="7. Validierung, Stop-Logik und keine Erfolgsgarantie">
              <p>
                Veytra arbeitet signalorientiert. Wenn MVP, Smoke-Test, Markttest oder Go-to-Market keine
                ausreichenden Signale liefern, kann ein Projekt angepasst, pausiert oder beendet werden. Dies
                dient dazu, weitere Kosten und unnötige Umsetzung zu vermeiden.
              </p>
              <p>
                Veytra schuldet sorgfältige operative Arbeit, aber keinen bestimmten wirtschaftlichen Erfolg,
                keine Finanzierungszusage, keinen Umsatz, keine Conversion-Rate und keine Garantie für eine
                erfolgreiche Ausgründung.
              </p>
            </LegalSection>

            <LegalSection title="8. Rechte an Arbeitsergebnissen">
              <p>
                Nutzungsrechte an Konzepten, Designs, Software, Texten, Dokumentationen, Datenmodellen,
                Automationen und sonstigen Arbeitsergebnissen ergeben sich aus der jeweiligen Vereinbarung.
                Vor vollständiger Zahlung oder vor Abschluss der vereinbarten Beteiligungsstruktur können
                Nutzungsrechte eingeschränkt sein.
              </p>
              <p>
                Vorbestehende Tools, Frameworks, Templates, Methoden, Know-how, Code-Bausteine und interne
                Studio-Prozesse von Veytra bleiben Eigentum von Veytra, sofern nichts anderes schriftlich
                vereinbart ist.
              </p>
            </LegalSection>

            <LegalSection title="9. Vertraulichkeit">
              <p>
                Beide Parteien behandeln vertrauliche Informationen, Geschäftsmodelle, technische Details,
                Kundendaten, interne Zahlen und strategische Informationen vertraulich, sofern diese nicht
                öffentlich bekannt sind oder rechtmäßig anderweitig erlangt wurden.
              </p>
            </LegalSection>

            <LegalSection title="10. Haftung">
              <p>
                Veytra haftet unbeschränkt bei Vorsatz, grober Fahrlässigkeit sowie bei Verletzung von Leben,
                Körper oder Gesundheit. Bei leichter Fahrlässigkeit haftet Veytra nur bei Verletzung
                wesentlicher Vertragspflichten und der Höhe nach begrenzt auf den vertragstypisch
                vorhersehbaren Schaden.
              </p>
            </LegalSection>

            <LegalSection title="11. Schlussbestimmungen">
              <p>
                Es gilt deutsches Recht. Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz von
                {` ${site.company.legalName}`}. Sollten einzelne Bestimmungen unwirksam sein oder werden,
                bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
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
