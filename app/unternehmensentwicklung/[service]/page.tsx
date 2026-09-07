import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Arrow, PhaseGraphic, PhaseLinks, ProofStrip } from "@/components/business-development/DevelopmentShared";
import { StructuredData } from "@/components/StructuredData";
import { developmentBasePath, developmentPhases } from "@/content/business-development";
import { createMetadata } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";
import styles from "@/components/business-development/development.module.css";

type Props = { params: Promise<{ service: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return developmentPhases.map((phase) => ({ service: phase.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const phase = developmentPhases.find((item) => item.slug === service);
  if (!phase) notFound();
  const seo = createMetadata({ title: phase.seoTitle, description: phase.seoDescription, path: `${developmentBasePath}/${phase.slug}` });
  return { ...seo, title: { absolute: phase.seoTitle }, openGraph: { ...seo.openGraph, images: [{ url: `${developmentBasePath}/opengraph-image`, width: 1200, height: 630, alt: "VEYTRA Unternehmensentwicklung" }] }, twitter: { ...seo.twitter, images: [`${developmentBasePath}/opengraph-image`] } };
}

export default async function DevelopmentServicePage({ params }: Props) {
  const { service } = await params;
  const phase = developmentPhases.find((item) => item.slug === service);
  if (!phase) notFound();
  const baseUrl = getSiteUrl();
  const url = `${baseUrl}${developmentBasePath}/${phase.slug}`;

  return <div className={styles.page}>
    <StructuredData data={[
      { "@context": "https://schema.org", "@type": "Service", name: phase.label, serviceType: phase.cta, description: phase.description, url, provider: { "@id": `${baseUrl}/#organization` }, areaServed: "DE" },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Veytra", item: baseUrl }, { "@type": "ListItem", position: 2, name: "Unternehmensentwicklung", item: `${baseUrl}${developmentBasePath}` }, { "@type": "ListItem", position: 3, name: phase.cta, item: url }] }
    ]} />
    <section className={styles.serviceHero}><div className={styles.container}>
      <nav className={styles.breadcrumb} aria-label="Brotkrümelnavigation"><Link href={developmentBasePath}>Unternehmensentwicklung</Link><span aria-hidden="true">/</span><span aria-current="page">{phase.name}</span></nav>
      <div className={styles.serviceHeroGrid}><div><p className={styles.eyebrow}><i /> {phase.number} / {phase.label}</p><h1>{phase.headline}</h1><p className={styles.heroDescription}>{phase.summary}</p><div className={styles.buttonRow}><Link href="/kontakt" className={styles.primaryButton}>{phase.cta} <Arrow diagonal /></Link><a href="#ergebnis" className={styles.secondaryButton}>Das erhalten Sie <Arrow /></a></div></div><aside className={styles.serviceOutput}><span className={styles.micro}>IHR ERGEBNIS / {phase.name}</span><PhaseGraphic phase={phase.id} /><h2>{phase.output}</h2><p>{phase.outputDescription}</p><span className={styles.smallMuted}>{phase.id === "validate" ? "Grafik: illustratives Rating-Beispiel" : "Ein klar definiertes Ergebnis für Ihre Entscheidung."}</span></aside></div>
    </div></section>
    <ProofStrip />
    <section id="ergebnis" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <div><p className={styles.eyebrow}>KLARER AUFTRAG. KONKRETES ERGEBNIS.</p><h2>Was Sie danach<br /><span>in der Hand haben.</span></h2></div>
          <p>{phase.description}</p>
        </div>
        <div className={styles.deliverableGrid}>
          {phase.deliverables.map((item, index) => <article key={item.title}><span className={styles.micro}>0{index + 1} / ERGEBNIS</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
        <section id="preis" className={styles.servicePrice} aria-labelledby="service-price-title">
          <div className={styles.servicePriceCopy}>
            <p className={styles.eyebrow}>PREIS & LEISTUNGSUMFANG</p>
            <h3 id="service-price-title">{phase.label}</h3>
            <p>{phase.priceDescription}</p>
            <p className={styles.servicePriceNote}>Den genauen Leistungsumfang und den verbindlichen Gesamtpreis vereinbaren wir vor dem Start.</p>
          </div>
          <div className={styles.servicePriceOffer}>
            <p className={styles.servicePriceAmount}><span>ab</span><strong>{new Intl.NumberFormat("de-DE").format(phase.startingPrice)} €</strong></p>
            <p className={styles.servicePriceTax}>zzgl. MwSt. · einmalig</p>
            <Link href="/kontakt" className={styles.primaryButton}>Angebot anfragen <Arrow diagonal /></Link>
          </div>
        </section>
      </div>
    </section>
    <section className={`${styles.section} ${styles.lifecycleSection}`}><div className={`${styles.container} ${styles.serviceProcessGrid}`}><div><p className={styles.eyebrow}>DIE ZUSAMMENARBEIT</p><h2>Strukturiert analysieren.<br /><span>Klar entscheiden.</span></h2><ol className={styles.serviceSteps}>{phase.steps.map((step, index) => <li key={step}><span>0{index + 1}</span><h3>{step}</h3></li>)}</ol></div><aside className={styles.inputCard}><p className={styles.micro}>UNSER GEMEINSAMER AUSGANGSPUNKT</p><h3>Was wir zu Beginn klären.</h3><ul>{phase.inputs.map((input) => <li key={input}>{input}</li>)}</ul><p>Fehlende Daten sind kein Grund für Scheingenauigkeit. Wir machen Datenlücken sichtbar und vereinbaren, wie sie sinnvoll geschlossen werden.</p><p>Umfang, Zeitrahmen und Honorar stimmen wir vor dem Start auf Ihr Vorhaben ab.</p></aside></div></section>
    <section className={styles.serviceDecision}><div className={styles.container}><p className={styles.eyebrow}>DIE FRAGE HINTER DER ANALYSE</p><h2>{phase.question}</h2><p>{phase.answer}</p><Link href="/kontakt" className={styles.primaryButton}>Vorhaben mit VEYTRA besprechen <Arrow diagonal /></Link>{phase.id === "validate" && <p className={styles.serviceDisclaimer}>Das VEYTRA Rating ist eine strukturierte Entscheidungsgrundlage. Es garantiert keinen wirtschaftlichen Erfolg.</p>}{phase.id === "improve" && <p className={styles.serviceDisclaimer}>Ergebnisverbesserungen hängen von Datenlage, Markt und Umsetzung ab. Ausgewiesene Potenziale sind Szenarien und keine Zusagen.</p>}</div></section>
    <section className={styles.finalSection}><div className={styles.container}><p className={styles.eyebrow}>DAS VEYTRA MODELL</p><h2>Ihre nächste Frage<br /><span>kann eine andere sein.</span></h2><PhaseLinks current={phase.id} /><div className={styles.finalFoot}><Link href={developmentBasePath} className={styles.textLink}>Alle Phasen der Unternehmensentwicklung <Arrow /></Link><Link href={`${developmentBasePath}#beispielreport`} className={styles.textLink}>Beispielreport erkunden <Arrow diagonal /></Link></div></div></section>
  </div>;
}
