export type CaseStudy = {
  slug: string;
  name: string;
  url: string;
  screenshot: string;
  category: string;
  shortDescription: string;
  challenge: string;
  build: string[];
  outcome: string;
  tags: string[];
  featured?: boolean;
  aiRelevant?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "huntfields",
    name: "Huntfields",
    url: "https://www.huntfields.com/",
    screenshot: "/case-studies/huntfields-showcase.png",
    category: "Marketplace Venture",
    shortDescription:
      "Marketplace-Venture für Hunting Leases, private Landflächen und landowner-approved access in den USA.",
    challenge:
      "Ein fragmentierter Nischenmarkt mit regionaler Nachfrage, Trust-Anforderungen und komplexer Suchlogik musste in ein skalierbares Plattformmodell übersetzt werden.",
    build: [
      "Marketplace-Positionierung",
      "SEO-orientierte Land- und State-Struktur",
      "Trust- und Access-Logik",
      "klare Angebots-, Anfrage- und Conversion-Wege"
    ],
    outcome:
      "Ein marktnahes Plattformbeispiel, das zeigt, wie aus einer spezifischen Nische eine digitale Venture-Logik mit Nachfragekanälen und Trust-Mechanik entstehen kann.",
    tags: ["Marketplace", "SEO-Struktur", "US-Markt", "Plattform"],
    featured: true
  },
  {
    slug: "geogurus",
    name: "GEOgurus",
    url: "https://www.geogurus.de/",
    screenshot: "/case-studies/geogurus-showcase.png",
    category: "AI Search & GEO",
    shortDescription:
      "GEO-Agentur für KI-Suche, generative Antworten und SEO-Sichtbarkeit.",
    challenge:
      "Ein neuer Marktbegriff musste als kaufbares B2B-Angebot positioniert werden, ohne in KI-Hype oder unklare Beratungsversprechen zu kippen.",
    build: [
      "Positionierung für GEO und AI Search",
      "SEO- und Service-Seitenstruktur",
      "präzises Messaging für B2B-Zielgruppen",
      "vertrauensbildende Lead- und Angebotsarchitektur"
    ],
    outcome:
      "Ein Beispiel für AI-nahe Venture-Positionierung, bei der neue Suchrealität, konkrete Nachfrage und klare Angebotslogik zusammengeführt werden.",
    tags: ["GEO", "AI Search", "SEO", "B2B"],
    featured: true,
    aiRelevant: true
  },
  {
    slug: "mcpcore",
    name: "MCP Core",
    url: "https://www.mcpcore.de/",
    screenshot: "/case-studies/mcpcore-showcase.png",
    category: "AI Infrastructure",
    shortDescription:
      "MCP-Server, sichere KI-Infrastruktur, lokale Datenconnectoren, RAG-Systeme und KI-Cockpits für Unternehmen.",
    challenge:
      "Ein technisch anspruchsvolles Infrastruktur-Angebot musste für Unternehmen verständlich, sicherheitsbewusst und entscheidbar gemacht werden.",
    build: [
      "B2B-Positionierung für KI-Infrastruktur",
      "Service-Architektur für MCP, RAG und Connectoren",
      "Website-Struktur für technische Entscheider",
      "klare Erklärung komplexer Implementierungs- und Sicherheitsfelder"
    ],
    outcome:
      "Ein AI-Venture-Beispiel, das technische Tiefe in ein B2B-Angebot mit nachvollziehbarem Nutzen, Risikoargumentation und Vertriebslogik übersetzt.",
    tags: ["MCP", "RAG", "KI-Infrastruktur", "B2B"],
    featured: true,
    aiRelevant: true
  },
  {
    slug: "pmslogic",
    name: "PMSLogic",
    url: "https://www.pmslogic.com/",
    screenshot: "/case-studies/pmslogic.png",
    category: "Vertical SaaS",
    shortDescription:
      "Hotelsoftware für Reservierungen, Frontdesk, Housekeeping, Rechnungen, Gästekommunikation, Integrationen und PMSAI.",
    challenge:
      "Ein vertikales Softwareangebot musste als umfassende, aber verständliche Lösung mit klarer Demo- und Sales-Logik für Hotellerie positioniert werden.",
    build: [
      "SaaS-Positionierung für Hotellerie",
      "Feature- und Use-Case-Struktur",
      "Demo-orientierte Conversion-Wege",
      "AI-Erweiterung als Produktbaustein"
    ],
    outcome:
      "Ein Beispiel für Vertical-SaaS-Aufbau mit klarer Zielgruppe, konkretem Nutzenversprechen, Feature-Logik und vertrieblicher Anschlussfähigkeit.",
    tags: ["SaaS", "Hotelsoftware", "B2B", "AI Feature"]
  },
  {
    slug: "cartpt",
    name: "CartPT",
    url: "https://www.cartpt.com/de",
    screenshot: "/case-studies/cartpt.png",
    category: "AI Consumer Product",
    shortDescription:
      "AI-gestützte Produktsuche, die Nutzerbedarf versteht, Live-Angebote prüft und klare Vorschläge macht.",
    challenge:
      "Aus einer AI-Idee musste ein nutzbares Consumer-Produkt entstehen, das Nutzen, Ablauf und Vertrauen in wenigen Schritten erklärt.",
    build: [
      "AI-Produktpositionierung",
      "mehrsprachige Angebotslogik",
      "klare Nutzenkommunikation",
      "produktnaher MVP- und Launch-Aufbau"
    ],
    outcome:
      "Ein AI-Venture-Beispiel für ein nutzerorientiertes Produkt, bei dem KI nicht als Selbstzweck, sondern als konkrete Entscheidungshilfe mit klarer Produktlogik positioniert wird.",
    tags: ["AI Product", "E-Commerce", "Consumer", "Launch"],
    featured: true,
    aiRelevant: true
  },
  {
    slug: "sepana",
    name: "SEPANA",
    url: "https://www.sepana.de/",
    screenshot: "/case-studies/sepana.png",
    category: "Finance Funnel",
    shortDescription:
      "Finanzpartner für Baufinanzierung und Privatkredit mit klarem Anfragefunnel und persönlicher Begleitung.",
    challenge:
      "Ein sensibler Entscheidungsprozess musste vertrauenswürdig, ruhig und conversion-orientiert in einen digitalen Anfragefunnel übersetzt werden.",
    build: [
      "Positionierung im Finanzumfeld",
      "Funnel für Kreditanfragen",
      "vertrauensbildende Website-Struktur",
      "klare Kontakt- und Begleitlogik"
    ],
    outcome:
      "Ein Beispiel für eine digitale Angebotsstrecke in einem erklärungsbedürftigen Markt, bei der Vertrauen, Conversion und persönliche Begleitung zusammenwirken.",
    tags: ["Finance", "Funnel", "Trust", "Conversion"]
  },
  {
    slug: "mpupfad",
    name: "MPUPFAD",
    url: "https://www.mpupfad.de/",
    screenshot: "/case-studies/mpupfad.png",
    category: "Digital Education",
    shortDescription:
      "Digitale MPU-Vorbereitung mit klarem Pfad und ruhiger Struktur.",
    challenge:
      "Ein emotional belastetes Thema musste seriös, übersichtlich und handlungsnah in ein digitales Education-Angebot übersetzt werden.",
    build: [
      "ruhige Marken- und Angebotsstruktur",
      "klare Lern- und Orientierungspfade",
      "SEO-fähige Informationsarchitektur",
      "niedrige Einstiegshürde für Anfragen"
    ],
    outcome:
      "Ein Beispiel für digitale Angebotsentwicklung, bei der Vertrauen, Verständlichkeit und klare Nutzerführung wichtiger sind als laute Versprechen.",
    tags: ["Education", "SEO", "Trust", "Digitales Angebot"]
  }
];

export const featuredCaseStudies = caseStudies.filter((study) => study.featured);

export const aiCaseStudies = caseStudies.filter((study) => study.aiRelevant);
