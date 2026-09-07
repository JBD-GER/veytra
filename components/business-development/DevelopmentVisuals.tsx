"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";

import { developmentBasePath, developmentPhases, exampleRatingScore } from "@/content/business-development";
import styles from "./development.module.css";

export function LifecycleExplorer() {
  const [active, setActive] = useState(1);
  const phase = developmentPhases[active];
  const positions = [{ x: 66, y: 227 }, { x: 171, y: 170 }, { x: 280, y: 96 }, { x: 388, y: 54 }];

  return (
    <div className={styles.explorer}>
      <div className={styles.explorerTop}>
        <span className={styles.micro}>VEYTRA / BUSINESS LIFECYCLE</span>
        <span className={styles.modelBadge}><i /> Das Modell</span>
      </div>
      <div className={styles.explorerChart}>
        <svg viewBox="0 0 450 290" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="development-area" x1="230" y1="50" x2="230" y2="255" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e97659" stopOpacity=".2" /><stop offset="1" stopColor="#e97659" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[55, 105, 155, 205, 255].map((y) => <path key={y} d={`M24 ${y} H427`} stroke="#deddd8" strokeDasharray="3 5" />)}
          {[66, 171, 280, 388].map((x) => <path key={x} d={`M${x} 28 V255`} stroke="#e7e5df" />)}
          <path d="M30 239 C83 235 112 202 171 170 S233 113 280 96 S345 58 419 47 L419 255 H30Z" fill="url(#development-area)" />
          <path d="M30 239 C83 235 112 202 171 170 S233 113 280 96 S345 58 419 47" stroke="#c9c6bf" strokeWidth="2" />
          <path d="M30 239 C83 235 112 202 171 170 S233 113 280 96 S345 58 419 47" stroke="#d96648" strokeWidth="2.5" pathLength="100" className={styles.lifecycleLine} style={{ strokeDasharray: `${[12, 36, 65, 100][active]} 100` }} />
          {positions.map(({ x, y }, index) => (
            <g key={x} className={styles.chartPoint} data-active={active === index}>
              <circle cx={x} cy={y} r={active === index ? 17 : 9} fill={active === index ? "#f5e2da" : "#f7f6f2"} />
              <circle cx={x} cy={y} r={active === index ? 6 : 4} fill={active === index ? "#d96648" : "#a5a29a"} />
              <text x={x} y={278} textAnchor="middle" fill={active === index ? "#a33d26" : "#69675f"} fontSize="10" fontFamily="inherit">{developmentPhases[index].number}</text>
            </g>
          ))}
          <text x="26" y="19" fill="#757269" fontSize="9" letterSpacing="1.3">UNTERNEHMERISCHE ENTWICKLUNG</text>
        </svg>
        <span className={styles.chartCaption}>Schematische Darstellung</span>
      </div>
      <div className={styles.phaseControls} role="group" aria-label="Unternehmensphase erkunden">
        {developmentPhases.map((item, index) => (
          <button key={item.id} type="button" aria-pressed={active === index} onPointerEnter={(event) => { if (event.pointerType === "mouse") setActive(index); }} onFocus={() => setActive(index)} onClick={() => setActive(index)}>
            {item.name}
          </button>
        ))}
      </div>
      <div className={styles.explorerOutput} aria-live="polite" aria-atomic="true">
        <div><span className={styles.micro}>IHR NÄCHSTER SCHRITT / {phase.number}</span><p>{phase.question}</p></div>
        <Link href={`${developmentBasePath}/${phase.slug}`} aria-label={phase.cta} className={styles.circleLink}>↗</Link>
      </div>
      <p className={styles.explorerHint}>Jede Phase ist ein möglicher Einstieg. Wählen Sie Ihre.</p>
    </div>
  );
}

const reportTabs = ["Überblick", "Markt & Wettbewerb", "Nächste Schritte"];

export function ExampleReport() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % reportTabs.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + reportTabs.length) % reportTabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = reportTabs.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className={styles.report}>
      <div className={styles.reportHeader}>
        <div className={styles.reportBrand}>VEYTRA<span> / INTELLIGENCE</span></div>
        <span className={styles.sampleBadge}>DEMO · FIKTIVE BEISPIELDATEN</span>
      </div>
      <div className={styles.reportHeading}>
        <div><p className={styles.micro}>VENTURE VALIDATION / BEISPIELREPORT</p><h3>B2B Operations Platform</h3><p>Digitale Prozesssteuerung für spezialisierte Dienstleister.</p></div>
        <span className={styles.reportStatus}><i /> Analysebeispiel</span>
      </div>
      <div className={styles.reportTabs} role="tablist" aria-label="Beispielreport erkunden">
        {reportTabs.map((tab, index) => <button key={tab} ref={(element) => { tabRefs.current[index] = element; }} type="button" role="tab" id={`report-tab-${index}`} aria-controls={`report-panel-${index}`} aria-selected={active === index} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => handleKeyDown(event, index)}>{tab}</button>)}
      </div>
      <div className={styles.reportPanel} role="tabpanel" tabIndex={0} id={`report-panel-${active}`} aria-labelledby={`report-tab-${active}`}>
        {active === 0 && <>
          <div className={styles.reportMetrics}>
            <div><span>Opportunity Score</span><strong>{exampleRatingScore}<small> / 100</small></strong><p>Validierung vertiefen</p></div>
            <div><span>Revenue Model</span><strong>B2B SaaS</strong><p>Wiederkehrende Erlöse</p></div>
            <div><span>Risk Level</span><strong>Moderat<span className={styles.amberDot} /></strong><p>Vertrieb noch zu prüfen</p></div>
            <div><span>Founder Fit</span><strong>89<small> / 100</small></strong><p>Passendes Branchenwissen</p></div>
          </div>
          <div className={styles.reportBottom}>
            <div className={styles.evidenceChart}><p className={styles.micro}>EVIDENZ NACH ANALYSEFELD</p><p className={styles.smallMuted}>Qualitative Einordnung im fiktiven Beispiel</p>{[{ label: "Kundenproblem", value: 88, text: "Stark" }, { label: "Marktzugang", value: 64, text: "Offen" }, { label: "Zahlungsbereitschaft", value: 45, text: "Zu testen" }].map((item) => <div className={styles.evidenceRow} key={item.label}><span>{item.label}</span><div aria-hidden="true"><i style={{ width: `${item.value}%` }} /></div><span>{item.text}</span></div>)}</div>
            <div className={styles.reportRecommendation}><span className={styles.micro}>DIE NÄCHSTE ENTSCHEIDUNG</span><h4>Erst Zahlungsbereitschaft prüfen.</h4><p>Ein bezahlter Pilottest prüft die kritischste Annahme, bevor der Produktumfang wächst.</p><button type="button" onClick={() => { setActive(2); tabRefs.current[2]?.focus(); }}>Next Actions ansehen <span aria-hidden="true">↗</span></button></div>
          </div>
        </>}
        {active === 1 && <div className={styles.marketPanel}>
          <div><span className={styles.micro}>MARKET SIZE / MODELLANNAHME</span><h4>Ein klar umrissener Einstieg.</h4><p>Der erreichbare Markt wird von einem konkreten Kundensegment aus aufgebaut. Die Zahlen illustrieren ausschließlich die Berechnung.</p><dl className={styles.marketCalculation}><div><dt>Erreichbare Unternehmen</dt><dd>2.000</dd></div><div><dt>Angenommener Jahresumsatz je Kunde</dt><dd>3.600 €</dd></div><div><dt>Theoretisches Segmentpotenzial</dt><dd>7,2 Mio. € / Jahr</dd></div></dl><p className={styles.smallMuted}>Keine Marktstudie oder Umsatzprognose. Marktzugang und Zahlungsbereitschaft sind noch zu validieren.</p></div>
          <div className={styles.competition}><span className={styles.micro}>COMPETITION / ALTERNATIVEN</span><h4>Wettbewerb beginnt beim Status quo.</h4>{["Tabellen & manuelle Abläufe", "Breite Projektmanagement-Tools", "Spezialisierte Branchenlösungen"].map((item, index) => <p key={item}><span>0{index + 1}</span>{item}</p>)}<small>Prüffrage: Ist der Wechselnutzen groß genug?</small></div>
        </div>}
        {active === 2 && <div className={styles.actionsPanel}><div><span className={styles.micro}>NEXT ACTIONS</span><h4>Von der Erkenntnis zum nächsten Test.</h4><p>Priorisierte Schritte im fiktiven Beispiel. Aufwand und Umfang werden für ein reales Vorhaben individuell festgelegt.</p></div><ol>{[{ title: "Kundenproblem überprüfen", text: "Gespräche mit Entscheidern führen und heutige Abläufe dokumentieren.", label: "PRIORITÄT 01" }, { title: "Zahlungsbereitschaft testen", text: "Ein konkretes Pilotangebot formulieren und verbindliche Rückmeldungen einholen.", label: "PRIORITÄT 02" }, { title: "Pilotentscheidung treffen", text: "Evidenz, Aufwand und Risiken gegenüberstellen; fortführen, anpassen oder stoppen.", label: "PRIORITÄT 03" }].map((item) => <li key={item.title}><span className={styles.micro}>{item.label}</span><h5>{item.title}</h5><p>{item.text}</p></li>)}</ol></div>}
      </div>
      <div className={styles.reportFooter}><span>Illustrative Darstellung · keine Kunden- oder Projektergebnisse</span><span>VEYTRA VALIDATION FRAMEWORK</span></div>
    </div>
  );
}
