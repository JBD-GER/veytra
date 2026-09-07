import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site";
import portrait from "@/public/images/team/christoph-pfad.png";
import { Arrow } from "./DevelopmentShared";
import styles from "./development.module.css";

export function ContactPerson() {
  const phoneHref = `tel:${site.company.phone.replace(/[^\d+]/g, "").replace(/^0/, "+49")}`;

  return (
    <section className={styles.contactPersonSection} aria-labelledby="contact-person-title">
      <div className={styles.container}>
        <div className={styles.contactPersonCard}>
          <div className={styles.contactPersonPhoto}>
            <Image
              src={portrait}
              alt="Christoph Pfad, Ihr persönlicher Ansprechpartner bei VEYTRA"
              fill
              sizes="(max-width: 767px) calc(100vw - 40px), 260px"
              placeholder="blur"
              className={styles.contactPersonImage}
            />
          </div>
          <div className={styles.contactPersonCopy}>
            <p className={styles.eyebrow}>IHR PERSÖNLICHER ANSPRECHPARTNER</p>
            <h2 id="contact-person-title">Christoph Pfad</h2>
            <p className={styles.contactPersonRole}>Geschäftsführer · VEYTRA</p>
            <p className={styles.contactPersonIntro}>
              Ich begleite Menschen, die aus einer Idee ein tragfähiges Geschäft machen oder ihr
              Unternehmen weiterentwickeln möchten. Im persönlichen Gespräch klären wir Ihre
              Ausgangslage, ordnen die offenen Fragen ein und legen den nächsten sinnvollen Schritt fest.
            </p>
            <div className={styles.contactPersonActions}>
              <Link href="/kontakt#anfrage" className={styles.primaryButton}>
                Mit Christoph sprechen <Arrow diagonal />
              </Link>
              <div className={styles.contactPersonDetails}>
                <a href={phoneHref} aria-label={`Christoph Pfad unter ${site.company.phone} anrufen`}>
                  <span>Telefon</span>{site.company.phone}
                </a>
                <a href={`mailto:${site.contactEmail}`}>
                  <span>E-Mail</span>{site.contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
