import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { PageHero } from "@/components/PageHero";
import { pageSeo } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata(pageSeo.privacy);

const lastUpdated = "Stand: Juli 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Datenschutz"
        title="Datenschutzerklärung."
        description="Hier erklären wir, welche Daten wir auf der Veytra-Website verarbeiten, wofür sie genutzt werden und wie Cookie- und Google-Tracking-Einstellungen geändert werden können."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-5 py-16 md:px-8 md:py-24">
          <div className="mb-8 border border-neutral-200 bg-neutral-50 p-5 text-sm leading-7 text-neutral-600">
            <p className="font-semibold text-neutral-950">{lastUpdated}</p>
            <p className="mt-2">
              Wir verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb dieser Website,
              die Bearbeitung von Anfragen, die Sicherheit der Website oder ausdrücklich erlaubte Analyse-
              und Marketingdienste erforderlich ist.
            </p>
          </div>

          <div className="grid gap-10 text-base leading-8 text-neutral-600">
            <LegalSection title="1. Verantwortlicher">
              <p>
                {site.company.legalName}
                <br />
                {site.company.address}
                <br />
                Vertreten durch: {site.company.representative}
                <br />
                E-Mail:{" "}
                <a href={`mailto:${site.company.email}`} className="font-medium text-neutral-950 underline">
                  {site.company.email}
                </a>
              </p>
            </LegalSection>

            <LegalSection title="2. Hosting, Server-Logs und technische Bereitstellung">
              <p>
                Diese Website ist für den Betrieb über Vercel vorbereitet. Beim Aufruf der Website können
                technisch erforderliche Zugriffsdaten verarbeitet werden, etwa IP-Adresse, Datum und Uhrzeit
                des Zugriffs, angefragte URL, Referrer, Browser- und Geräteinformationen sowie Logdaten.
                Die Verarbeitung dient der Auslieferung, Stabilität, Sicherheit und Fehleranalyse der Website.
              </p>
              <p>
                Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren und funktionsfähigen
                Online-Angebot. Soweit Dienstleister eingesetzt werden, erfolgt dies auf Basis geeigneter
                vertraglicher Vereinbarungen.
              </p>
            </LegalSection>

            <LegalSection title="3. Kontaktformulare und E-Mail-Kommunikation">
              <p>
                Wenn du ein Kontaktformular nutzt oder uns per E-Mail kontaktierst, verarbeiten wir die
                angegebenen Daten zur Bearbeitung deiner Anfrage. Dazu können Vorname, Nachname,
                E-Mail-Adresse, Telefonnummer, optionaler Firmenname, ausgewählte Gruppe, Nachricht und
                technische Metadaten gehören.
              </p>
              <p>
                Die Verarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen, zur Kommunikation mit
                dir und zur Prüfung, ob eine Zusammenarbeit sinnvoll ist. Formularinhalte können über Resend
                per E-Mail an uns übermittelt werden. Die Daten werden nur so lange gespeichert, wie dies für
                Bearbeitung, Nachweis oder gesetzliche Aufbewahrungspflichten erforderlich ist.
              </p>
            </LegalSection>

            <LegalSection title="4. Cookies, lokale Speicherung und Einwilligung">
              <p>
                Wir nutzen notwendige lokale Speichereinträge, damit die Website funktioniert und deine
                Cookie-Auswahl gespeichert werden kann. Analyse- und Marketingdienste werden erst aktiviert,
                wenn du der jeweiligen Kategorie zustimmst.
              </p>
              <div className="mt-4 inline-flex rounded-[6px] border border-neutral-950 bg-neutral-950 px-4 py-2 text-sm font-medium text-white">
                <CookieSettingsButton className="text-left text-white" />
              </div>
            </LegalSection>

            <LegalSection title="5. Google Consent Mode v2">
              <p>
                Für Google-Dienste ist der Google Consent Mode v2 eingerichtet. Die Kategorien
                <span className="font-medium text-neutral-950"> ad_storage</span>,
                <span className="font-medium text-neutral-950"> analytics_storage</span>,
                <span className="font-medium text-neutral-950"> ad_user_data</span> und
                <span className="font-medium text-neutral-950"> ad_personalization</span> sind standardmäßig
                abgelehnt. Erst nach deiner Einwilligung werden die entsprechenden Signale aktualisiert und
                Google-Tags geladen.
              </p>
              <p>
                Die Einwilligung kann jederzeit über die Cookie-Einstellungen mit Wirkung für die Zukunft
                geändert oder widerrufen werden.
              </p>
            </LegalSection>

            <LegalSection title="6. Google Analytics, Google Ads und Google Tag Manager">
              <p>
                Wenn du Analyse- oder Marketing-Cookies akzeptierst, können Google Analytics, Google Ads
                Conversion-Tracking und/oder Google Tag Manager eingesetzt werden. Anbieter ist Google Ireland
                Limited, Gordon House, Barrow Street, Dublin 4, Irland. Dabei können Nutzungsdaten,
                Geräteinformationen, Referrer, Interaktionen, Kampagneninformationen und Conversion-Ereignisse
                verarbeitet werden.
              </p>
              <p>
                Die Verarbeitung hilft uns zu verstehen, welche Inhalte funktionieren, wie Kampagnen performen
                und ob Anfragen über Anzeigen oder bestimmte Seiten entstehen. Rechtsgrundlage ist deine
                Einwilligung.
              </p>
            </LegalSection>

            <LegalSection title="7. Betroffenenrechte">
              <p>
                Du hast im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem kannst du
                erteilte Einwilligungen jederzeit mit Wirkung für die Zukunft widerrufen.
              </p>
              <p>
                Du hast zudem das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn du der
                Ansicht bist, dass die Verarbeitung deiner personenbezogenen Daten rechtswidrig erfolgt.
              </p>
            </LegalSection>

            <LegalSection title="8. Änderungen dieser Datenschutzerklärung">
              <p>
                Wir können diese Datenschutzerklärung anpassen, wenn sich technische, organisatorische oder
                rechtliche Anforderungen ändern. Es gilt die jeweils auf dieser Website veröffentlichte Fassung.
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
