import type { Metadata } from "next";
import Link from "next/link";

import { Arrow, PhaseGraphic, PhaseLinks, ProofStrip } from "@/components/business-development/DevelopmentShared";
import { ExampleReport, LifecycleExplorer } from "@/components/business-development/DevelopmentVisuals";
import { StructuredData } from "@/components/StructuredData";
import { developmentBasePath, developmentFaqs, developmentPhases, exampleRatingMetrics, exampleRatingScore } from "@/content/business-development";
import { getSiteUrl } from "@/lib/site";
import { createMetadata } from "@/lib/seo";
import styles from "@/components/business-development/development.module.css";
import { PortraitContactCTA } from "@/components/PortraitContactCTA";

const seo = createMetadata({
  title: "Unternehmensentwicklung: von der Idee zum Wachstum | Veytra",
  description: "Geschäftsideen entwickeln, Ideen validieren, Wachstum gestalten und Profitabilität verbessern. VEYTRA begleitet Ihre nächste unternehmerische Entscheidung.",
  path: developmentBasePath
});
export const metadata: Metadata = { ...seo, title: { absolute: "Unternehmensentwicklung: von der Idee zum Wachstum | Veytra" }, openGraph: { ...seo.openGraph, images: [{ url: `${developmentBasePath}/opengraph-image`, width: 1200, height: 630, alt: "VEYTRA Unternehmensentwicklung – Discover, Validate, Grow, Improve" }] }, twitter: { ...seo.twitter, images: [`${developmentBasePath}/opengraph-image`] } };

function radarPoints(values: readonly number[], radius: number) {
  return values.map((value, index) => {
    const angle = (Math.PI / 3) * index - Math.PI / 2;
    return `${(190 + Math.cos(angle) * radius * value / 100).toFixed(2)},${(166 + Math.sin(angle) * radius * value / 100).toFixed(2)}`;
  }).join(" ");
}

function RatingChart() {
  return <div className={styles.radar}>
    <svg viewBox="0 0 380 335" role="img" aria-labelledby="rating-chart-title rating-chart-description">
      <title id="rating-chart-title">Beispiel eines VEYTRA Ratings: {exampleRatingScore} von 100</title>
      <desc id="rating-chart-description">Fiktive, gleich gewichtete Beispielwerte: {exampleRatingMetrics.map((metric) => `${metric.translation} ${metric.score}`).join(", ")}. Höhere Werte sind günstiger. Keine Erfolgsprognose.</desc>
      {[25, 50, 75, 100].map((level) => <polygon key={level} points={radarPoints(Array(6).fill(level), 115)} stroke="#dddcd5" strokeWidth="1" fill="none" />)}
      {Array.from({ length: 6 }, (_, index) => { const angle = Math.PI / 3 * index - Math.PI / 2; return <line key={index} x1="190" y1="166" x2={190 + Math.cos(angle) * 115} y2={166 + Math.sin(angle) * 115} stroke="#e3e1db" />; })}
      <polygon points={radarPoints(exampleRatingMetrics.map((metric) => metric.score), 115)} fill="#d96e50" fillOpacity=".13" stroke="#cc5b3e" strokeWidth="2" />
      {exampleRatingMetrics.map((metric, index) => { const angle = Math.PI / 3 * index - Math.PI / 2; return <circle key={metric.label} cx={190 + Math.cos(angle) * 115 * metric.score / 100} cy={166 + Math.sin(angle) * 115 * metric.score / 100} r="3.5" fill="#cc5b3e" stroke="#fff" strokeWidth="1.5" />; })}
      <g fill="#66675f" fontSize="10" fontFamily="inherit"><text x="190" y="28" textAnchor="middle">Market Demand</text><text x="310" y="101" textAnchor="middle"><tspan x="310">Competitive</tspan><tspan x="310" dy="14">Position</tspan></text><text x="315" y="235" textAnchor="middle">Economics</text><text x="190" y="308" textAnchor="middle">Scalability</text><text x="68" y="230" textAnchor="middle"><tspan x="68">Execution</tspan><tspan x="68" dy="14">Complexity</tspan></text><text x="65" y="110" textAnchor="middle">Founder Fit</text></g>
    </svg>
  </div>;
}

export default function BusinessDevelopmentPage() {
  const baseUrl = getSiteUrl();
  return (
    <div className={styles.page}>
      <StructuredData data={[
        { "@context": "https://schema.org", "@type": "Service", "@id": `${baseUrl}${developmentBasePath}#service`, name: "VEYTRA Unternehmensentwicklung", serviceType: "Unternehmensentwicklung und Business Development", description: "Analytische Begleitung von Geschäftsideen über Validierung und Wachstum bis zur Verbesserung der Profitabilität.", url: `${baseUrl}${developmentBasePath}`, provider: { "@id": `${baseUrl}/#organization` }, areaServed: "DE", hasOfferCatalog: { "@type": "OfferCatalog", name: "Vier Phasen der Unternehmensentwicklung", itemListElement: developmentPhases.map((phase) => ({ "@type": "OfferCatalog", name: phase.label, url: `${baseUrl}${developmentBasePath}/${phase.slug}` })) } },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Veytra", item: baseUrl }, { "@type": "ListItem", position: 2, name: "Unternehmensentwicklung", item: `${baseUrl}${developmentBasePath}` }] },
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: developmentFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }
      ]} />
      <section className={styles.hero} aria-labelledby="development-title">
        <div className={styles.container}>
          <div className={styles.heroEyebrow}><span className={styles.eyebrow}><i /> UNTERNEHMENSENTWICKLUNG</span><span className={styles.micro}>KLARHEIT FÜR IHREN NÄCHSTEN SCHRITT</span></div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1 id="development-title">Unternehmen<br />entstehen.<br />wachsen.<br /><span>verändern sich.</span><span className={styles.srOnly}> Unternehmensentwicklung mit VEYTRA.</span></h1>
              <p className={styles.heroDescription}>Von der ersten Geschäftsidee über Marktvalidierung und Wachstum bis zur Verbesserung von Profitabilität und EBIT.</p>
              <div className={styles.buttonRow}><a href="#unternehmensphase" className={styles.primaryButton}>Unternehmensphase bestimmen <Arrow diagonal /></a><a href="#leistungen" className={styles.secondaryButton}>Leistungen ansehen <Arrow /></a></div>
              <p className={styles.heroNote}>Vier Phasen. Ein Partner. Ihre nächste Entscheidung.</p>
            </div>
            <div className={styles.heroVisual}><LifecycleExplorer /><div className={styles.heroPromise}><span>VON DER FRAGE</span><span className={styles.promiseLine} /><span>ZUR BELASTBAREN ENTSCHEIDUNG</span></div></div>
          </div>
        </div>
      </section>

      <ProofStrip />

      <PortraitContactCTA />

      <section id="unternehmensphase" className={styles.section} aria-labelledby="phase-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>01 / IHR AUSGANGSPUNKT</p><h2 id="phase-title">Wo stehen Sie heute?</h2></div><p>Sie brauchen nicht jede Leistung.<br />Sie brauchen die passende für Ihren nächsten Schritt.</p></div>
          <div className={styles.selectionGrid}>
            {developmentPhases.map((phase) => <article key={phase.id} className={styles.selectionCard} data-reveal="slide"><div className={styles.cardTop}><span className={styles.phaseLabel}>{phase.number} / {phase.name}</span><span className={styles.smallArrow} aria-hidden="true">↗</span></div><h3>{phase.title}</h3><p className={styles.cardDescription}>{phase.description}</p><div className={styles.cardBottom}><div><span className={styles.micro}>{phase.label}</span><Link href={`${developmentBasePath}/${phase.slug}`} className={styles.cardLink}>{phase.cta} <Arrow /></Link><span className={styles.cardOutput}>{phase.output}</span></div><PhaseGraphic phase={phase.id} /></div>{phase.id === "validate" && <span className={styles.graphicNote}>Rating: illustratives Beispiel</span>}</article>)}
          </div>
          <div className={styles.selectionNote}><span>Noch nicht sicher, welche Phase passt?</span><Link href="/kontakt" className={styles.textLink}>Gemeinsam einordnen <Arrow diagonal /></Link></div>
        </div>
      </section>

      <section id="leistungen" className={`${styles.section} ${styles.lifecycleSection}`} aria-labelledby="lifecycle-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>02 / DAS VEYTRA MODELL</p><h2 id="lifecycle-title">Vier Phasen.<br /><span>Unterschiedliche Entscheidungen.</span></h2></div><p>Wir entwickeln Unternehmen entlang ihrer entscheidenden Phasen. Jeder Einstieg hat einen klaren Fokus. Und ein konkretes Ergebnis.</p></div>
          <div className={styles.lifecycleGrid}>{developmentPhases.map((phase) => <article key={phase.id} className={styles.lifecycleColumn} data-reveal="slide"><div className={styles.lifecycleNode}><span>{phase.number}</span><i /></div><h3>{phase.name}</h3><p className={styles.lifecycleQuestion}>{phase.question}</p><ul>{phase.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul><Link href={`${developmentBasePath}/${phase.slug}`} className={styles.outputLink}><span className={styles.micro}>IHR ERGEBNIS</span><strong>{phase.output}</strong><Arrow diagonal /></Link></article>)}</div>
          <p className={styles.lifecycleFootnote}>Kein starrer Prozess: Sie steigen dort ein, wo Ihr Unternehmen heute steht.</p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="rating-title">
        <div className={`${styles.container} ${styles.ratingGrid}`}>
          <div className={styles.ratingCopy}><p className={styles.eyebrow}>03 / VEYTRA RATING</p><h2 id="rating-title">Aus Bauchgefühl<br />wird eine<br /><span>Entscheidung.</span></h2><p>Eine Idee kann überzeugen. Die entscheidende Frage ist, ob die Annahmen dahinter tragen.</p><p>Das VEYTRA Rating verdichtet die wichtigsten Erkenntnisse einer Geschäftsideen-Validierung zu einem strukturierten Gesamtbild. Stärken, Risiken und offene Fragen werden auf einen Blick sichtbar.</p><Link href={`${developmentBasePath}/geschaeftsidee-validieren`} className={styles.textLink}>Mehr über die Validierung <Arrow diagonal /></Link><div className={styles.ratingDisclaimer}><span aria-hidden="true">↳</span><p>Eine strukturierte Entscheidungsgrundlage. Keine Garantie für wirtschaftlichen Erfolg.</p></div></div>
          <div className={styles.ratingCard} data-reveal="slide"><div className={styles.ratingCardTop}><span className={styles.micro}>VENTURE ASSESSMENT</span><span className={styles.sampleBadge}>ILLUSTRATIVES BEISPIEL</span></div><div className={styles.scoreLine}><div><span className={styles.score}>{exampleRatingScore}</span><span className={styles.scoreMax}> / 100</span></div><div><strong>Potenzial mit Prüfbedarf</strong><span>VEYTRA Rating · Beispieldaten</span></div></div><RatingChart /><div className={styles.ratingMetricList}>{exampleRatingMetrics.map((metric) => <div key={metric.label}><span>{metric.translation}</span><span className={styles.metricTrack} aria-hidden="true"><i style={{ width: `${metric.score}%` }} /></span><strong>{metric.score}</strong></div>)}</div><p className={styles.ratingMethod}>Im Beispiel: sechs gleich gewichtete Dimensionen. Höhere Werte sind günstiger; „Execution Complexity“ bewertet die Umsetzbarkeit. 82/100 ist keine Erfolgswahrscheinlichkeit.</p></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.decisionsSection}`} aria-labelledby="decisions-title"><div className={styles.container}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>04 / DATEN STATT POWERPOINT</p><h2 id="decisions-title">Keine Beratung<br /><span>um der Beratung willen.</span></h2></div><p>Jede Analyse soll eine klare Frage beantworten. Damit Sie wissen, was Sie als Nächstes tun – und warum.</p></div><div className={styles.decisionGrid}>{developmentPhases.map((phase) => <article key={phase.id} data-reveal="slide"><span className={styles.micro}>{phase.number} / {phase.name}</span><h3>{phase.question}</h3><div className={styles.decisionRule} /><p>{phase.answer}</p></article>)}</div><div className={styles.decisionClosing}><span>ANALYSE</span><i /><span>EINORDNUNG</span><i /><span>ENTSCHEIDUNG</span><i /><strong>UMSETZUNG</strong></div></div></section>

      <section id="beispielreport" className={styles.section} aria-labelledby="report-title"><div className={styles.container}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>05 / EINBLICK IN DAS ERGEBNIS</p><h2 id="report-title">Klarheit, die Sie<br /><span>weiterbringt.</span></h2></div><p>Relevante Kennzahlen. Nachvollziehbare Annahmen. Konkrete nächste Schritte. Erkunden Sie einen beispielhaften Ausschnitt unseres Reportings.</p></div><ExampleReport /></div></section>

      <section className={styles.audienceSection} aria-labelledby="audience-title"><div className={styles.container}><div className={styles.audienceHeading}><p className={styles.eyebrow}>FÜR UNTERNEHMERISCHE VERANTWORTUNG</p><h2 id="audience-title">Für Menschen, die unternehmerische Entscheidungen treffen.</h2></div><div className={styles.audienceGrid}>{[{ title: "Gründer", text: "Aus Fähigkeiten und Ambition ein Geschäftsmodell entwickeln." }, { title: "Gründerteams", text: "Eine gemeinsame Idee prüfen und den nächsten Schritt fundieren." }, { title: "Geschäftsführer", text: "Wachstum gestalten und wirtschaftliche Stellhebel verstehen." }, { title: "Unternehmer & Gesellschafter", text: "Geschäftsfelder entwickeln und den Unternehmenswert stärken." }].map((item, index) => <article key={item.title}><span className={styles.micro}>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

      <section className={styles.section} aria-labelledby="faq-title"><div className={`${styles.container} ${styles.faqGrid}`}><div><p className={styles.eyebrow}>GUT ZU WISSEN</p><h2 id="faq-title">Die wichtigsten<br />Fragen vorab.</h2><p className={styles.faqIntro}>Unternehmensentwicklung, Geschäftsentwicklung, Business Development: Im Mittelpunkt steht die nächste tragfähige Entscheidung für Ihr Unternehmen.</p></div><div className={styles.faqList}>{developmentFaqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>

      <section className={styles.finalSection} aria-labelledby="next-title"><div className={styles.container}><p className={styles.eyebrow}><i /> DER NÄCHSTE SCHRITT BEGINNT MIT KLARHEIT</p><h2 id="next-title">Welche Entscheidung<br />steht bei Ihnen<br /><span>als Nächstes an?</span></h2><PhaseLinks /><div className={styles.finalFoot}><p>Von der unternehmerischen Frage zur belastbaren Entscheidung.</p><Link href="/kontakt" className={styles.textLink}>Mit VEYTRA sprechen <Arrow diagonal /></Link></div></div></section>
    </div>
  );
}
