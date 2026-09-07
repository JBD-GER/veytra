import Link from "next/link";

import { caseStudies } from "@/content/case-studies";
import { developmentBasePath, developmentPhases, type DevelopmentPhase } from "@/content/business-development";
import styles from "./development.module.css";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export function ProofStrip() {
  const featured = ["huntfields", "pmslogic", "mcpcore", "cartpt", "sepana"];
  return (
    <aside className={styles.proof} aria-label="Referenzen aus der VEYTRA Projektarbeit">
      <div className={styles.container}>
        <div className={styles.proofTop}><div className={styles.proofCount}><strong>{String(caseStudies.length).padStart(2, "0")}</strong><span>Öffentliche Case Studies.<br /><b>Unternehmertum in der Praxis.</b></span></div><Link href="/case-studies" className={styles.textLink}>Unsere Arbeit ansehen <Arrow diagonal /></Link></div>
        <div className={styles.proofLogos}><p>AUS UNSERER<br />PROJEKTARBEIT</p>{featured.map((slug) => { const study = caseStudies.find((item) => item.slug === slug); return study ? <Link key={slug} href={`/case-studies#${slug}`} aria-label={`Case Study ${study.name} ansehen`}>{study.name}</Link> : null; })}</div>
      </div>
    </aside>
  );
}

export function PhaseGraphic({ phase }: { phase: DevelopmentPhase["id"] }) {
  return <div className={`${styles.phaseGraphic} ${styles[phase]}`} aria-hidden="true">
    {phase === "discover" && <><i /><i /><i /><span /></>}
    {phase === "validate" && <><i /><i /><i /><span>82<small>/100</small></span></>}
    {phase === "grow" && <>{[22, 34, 29, 47, 57, 72, 90].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</>}
    {phase === "improve" && <>{[48, 34, 26, 18].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}<span /><i style={{ height: "80%" }} /></>}
  </div>;
}

export function PhaseLinks({ current }: { current?: string }) {
  return <div className={styles.finalLinks}>{developmentPhases.filter((phase) => phase.id !== current).map((phase) => <Link key={phase.id} href={`${developmentBasePath}/${phase.slug}`}><span className={styles.micro}>{phase.number} / {phase.name}</span><span>{phase.shortLabel}</span><Arrow diagonal /></Link>)}</div>;
}
