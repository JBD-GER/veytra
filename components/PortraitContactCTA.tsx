import Image from "next/image";
import Link from "next/link";

import portrait from "@/public/images/team/christoph-pfad.png";
import styles from "./PortraitContactCTA.module.css";

type PortraitContactCTAProps = {
  message?: string;
  href?: string;
  label?: string;
};

export function PortraitContactCTA({
  message = "Ihr Einstieg: First Audit für 599 € zzgl. MwSt. – mit Marktanalyse, schriftlicher Empfehlung und zwei Calls. Start nach Zahlungseingang.",
  href = "/kontakt#anfrage",
  label = "First Audit beauftragen"
}: PortraitContactCTAProps) {
  return (
    <aside className={styles.section} aria-label="Persönlicher Kontakt zu Christoph Pfad" data-portrait-contact-cta="">
      <div className={styles.inner}>
        <div className={styles.photo}>
          <Image src={portrait} alt="Christoph Pfad" fill sizes="160px" placeholder="blur" className={styles.image} />
        </div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>IHR DIREKTER ANSPRECHPARTNER</p>
          <p className={styles.name}>Christoph Pfad <span>Geschäftsführer · VEYTRA</span></p>
          <p className={styles.message}>{message}</p>
        </div>
        <Link href={href} className={styles.button}>
          {label} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </aside>
  );
}
