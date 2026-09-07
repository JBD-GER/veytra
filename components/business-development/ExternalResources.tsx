import Image from "next/image";

import { Arrow } from "./DevelopmentShared";
import styles from "./development.module.css";

export function ExternalResources() {
  return (
    <nav className={styles.externalResources} aria-label="Externe Ressourcen">
      <p className={styles.resourceHeading}>EXTERNE RESSOURCEN</p>
      <div className={styles.resourceLinks}>
        <a href="https://www.forbes.com/entrepreneurs/" target="_blank" rel="noopener noreferrer" aria-label="Forbes: Unternehmerwissen (öffnet einen neuen Tab)">
          <span className={styles.resourceBrand}>
            <Image src="/brands/forbes.svg" alt="Forbes" width={100} height={27} unoptimized />
          </span>
          <span className={styles.resourceDescription}>Unternehmerwissen <Arrow diagonal /></span>
        </a>
        <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" aria-label="ChatGPT von OpenAI: KI-Assistent (öffnet einen neuen Tab)">
          <span className={styles.resourceBrand}>
            <Image src="/brands/chatgpt.webp" alt="" width={32} height={32} unoptimized />
            <span>ChatGPT</span>
          </span>
          <span className={styles.resourceDescription}>KI-Assistent von OpenAI <Arrow diagonal /></span>
        </a>
      </div>
    </nav>
  );
}
