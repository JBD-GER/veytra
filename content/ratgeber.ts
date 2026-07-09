export type RatgeberCategoryId =
  | "venture-studio"
  | "ai-venture-building"
  | "mvp-validierung"
  | "corporate-venture-building"
  | "go-to-market-sales"
  | "saas-geschaeftsmodelle"
  | "fundraising-investor-readiness"
  | "pricing-unit-economics"
  | "operations-studio-os"
  | "seo-content-nachfrage";

export type RatgeberCategory = {
  id: RatgeberCategoryId;
  label: string;
  shortLabel: string;
  description: string;
  intent: string;
  coverImage: string;
  coverAlt: string;
};

export type RatgeberPostPlan = {
  slug: string;
  href: string;
  title: string;
  categoryId: RatgeberCategoryId;
  categoryLabel: string;
  audience: string;
  searchIntent: string;
  focusKeyword: string;
  metaTitle: string;
  metaDescription: string;
  publishAt: string;
  readingTime: string;
  wordCountTarget: number;
  summary: string;
  narrativeArc: string;
  coverImage: string;
  imageAlt: string;
  heroImagePrompt: string;
  inlineGraphicPrompts: string[];
  outline: string[];
  featured: boolean;
};

type RawRatgeberPostPlan = {
  categoryId: RatgeberCategoryId;
  title: string;
  focusKeyword: string;
  audience: string;
  searchIntent: string;
  summary: string;
  narrativeArc: string;
  visual: string;
  graphics: string[];
};

export const ratgeberArticleStandard = {
  language: "de-DE",
  format: "Umfangreicher Longform-SEO-Beitrag statt kurzer Stichpunktliste",
  targetLength: "2.800 bis 4.600 Wörter je nach Suchintention",
  requiredMetadata: [
    "SEO Title",
    "Meta Description",
    "Canonical URL",
    "datePublished mit Uhrzeit",
    "dateModified",
    "Author/Publisher",
    "Hero Image inklusive Alt-Text",
    "Article oder BlogPosting JSON-LD"
  ],
  writingRules: [
    "chronologische H2-Struktur von Ausgangslage über Entscheidung bis Umsetzung",
    "jeder H2-Abschnitt mit erklärendem Fließtext und konkretem Venture-Kontext",
    "keine reinen Checklisten- oder Stichpunktartikel",
    "1 bis 3 erklärende Zwischen-Grafiken je Beitrag",
    "klare interne Links zu passenden Veytra-Seiten und Kontakt-CTA",
    "mobile zuerst: kurze Absätze, scanbare Zwischenüberschriften, aber substanzielle Tiefe"
  ]
};

export const ratgeberResearchSignals = [
  {
    source: "Stanford HAI AI Index 2026",
    url: "https://hai.stanford.edu/ai-index/2026-ai-index-report",
    signal:
      "AI-Investitionen und neu finanzierte AI-Unternehmen bleiben ein zentraler Marktimpuls für Gründer, Startups und Investoren."
  },
  {
    source: "Gartner Top Strategic Technology Trends 2026",
    url: "https://www.gartner.com/en/articles/top-technology-trends-2026",
    signal:
      "AI-native Development, Multiagent-Systeme, domain-spezifische Modelle und AI Security prägen die Technologie-Roadmaps."
  },
  {
    source: "McKinsey State of AI 2025",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    signal:
      "AI-Wert entsteht nicht nur durch Tools, sondern durch Strategie, Operating Model, Daten, Talent und Adoption."
  },
  {
    source: "Google Search Central SEO Starter Guide",
    url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
    signal:
      "Ratgeber-Inhalte müssen hilfreich, crawlbar, klar strukturiert und auf echte Nutzerfragen ausgerichtet sein."
  },
  {
    source: "Google Search Central Article Structured Data",
    url: "https://developers.google.com/search/docs/appearance/structured-data/article",
    signal:
      "Artikel profitieren von sauberem Markup mit Überschrift, Bild, Veröffentlichungsdatum und Änderungsdatum."
  }
];

export const ratgeberCategories: RatgeberCategory[] = [
  {
    id: "venture-studio",
    label: "Venture Studio Grundlagen",
    shortLabel: "Venture Studio",
    description:
      "Grundlagen, Modelle und Entscheidungslogik für Gründer, Unternehmen und Teams, die mit einem Venture Studio bauen wollen.",
    intent: "Definition, Vergleich, Entscheidung",
    coverImage: "/images/studio-workbench.png",
    coverAlt: "Veytra Studio Workbench als visuelle Grundlage für Venture Studio Themen"
  },
  {
    id: "ai-venture-building",
    label: "AI Venture Building",
    shortLabel: "AI Ventures",
    description:
      "AI-native Produkte, Agenten, Datenvorteile und praktische MVP-Entwicklung mit künstlicher Intelligenz.",
    intent: "AI Use Cases, Produktstrategie, Umsetzung",
    coverImage: "/images/ai-workbench.png",
    coverAlt: "AI Workbench mit Produkt- und Datenartefakten"
  },
  {
    id: "mvp-validierung",
    label: "MVP & Validierung",
    shortLabel: "MVP",
    description:
      "Von Problemhypothese über Interviews und Smoke Tests bis zum belastbaren MVP-Scope.",
    intent: "Validieren, de-risken, priorisieren",
    coverImage: "/images/launch-artifacts.png",
    coverAlt: "Launch-Artefakte für MVP-Validierung und Markttests"
  },
  {
    id: "corporate-venture-building",
    label: "Corporate Venture Building",
    shortLabel: "Corporate",
    description:
      "Neue Geschäftsmodelle, Spin-outs und AI-Produkte für Unternehmen außerhalb klassischer Linienorganisation.",
    intent: "Corporate Innovation, Governance, Spin-out",
    coverImage: "/images/studio-workbench.png",
    coverAlt: "Strategischer Studio-Arbeitsplatz für Corporate Venture Building"
  },
  {
    id: "go-to-market-sales",
    label: "Go-to-Market & Sales",
    shortLabel: "GTM",
    description:
      "Frühe Nachfrage, ICP, Sales Motion, Founder-led Sales und Launch-Systeme für neue Ventures.",
    intent: "Kundengewinnung, Positionierung, Launch",
    coverImage: "/images/launch-artifacts.png",
    coverAlt: "Launch- und Go-to-Market-Artefakte auf einem Arbeitstisch"
  },
  {
    id: "saas-geschaeftsmodelle",
    label: "SaaS & digitale Geschäftsmodelle",
    shortLabel: "SaaS",
    description:
      "Vertical SaaS, Plattformen, Marketplaces, Produktized Services und AI-native Geschäftsmodelle.",
    intent: "Geschäftsmodell, Produktlogik, Skalierung",
    coverImage: "/case-studies/huntfields-showcase.png",
    coverAlt: "Digitale Plattform als Beispiel für ein skalierbares Geschäftsmodell"
  },
  {
    id: "fundraising-investor-readiness",
    label: "Fundraising & Investor Readiness",
    shortLabel: "Fundraising",
    description:
      "Pitch, Datenraum, Traction, Investor-Fit und Kapitalfähigkeit von Pre-Seed bis Seed.",
    intent: "Finanzierungsfähigkeit, Investor-Kommunikation",
    coverImage: "/images/investor-startup-team.jpg",
    coverAlt: "Startup-Team in Investorengespräch"
  },
  {
    id: "pricing-unit-economics",
    label: "Pricing, Unit Economics & Deal-Modelle",
    shortLabel: "Pricing",
    description:
      "Preislogik, Pilotpreise, Umsatzmodelle, CAC, LTV und Studio-Deal-Strukturen.",
    intent: "Monetarisierung, Wirtschaftlichkeit, Deal Design",
    coverImage: "/case-studies/pmslogic.png",
    coverAlt: "Dashboard-Ansicht als Symbol für Unit Economics und Pricing"
  },
  {
    id: "operations-studio-os",
    label: "Operations & Studio OS",
    shortLabel: "Studio OS",
    description:
      "Operating Cadence, Teamrollen, Tooling, Analytics, Entscheidungen und wiederholbare Venture-Prozesse.",
    intent: "Betriebssystem, Team, Execution",
    coverImage: "/images/studio-workbench.png",
    coverAlt: "Venture Studio Arbeitsumgebung mit operativen Artefakten"
  },
  {
    id: "seo-content-nachfrage",
    label: "SEO, Content & Nachfrageaufbau",
    shortLabel: "SEO",
    description:
      "Suchintention, Content Hubs, AI Search, programmatische SEO und Nachfrageaufbau für B2B-Ventures.",
    intent: "Suchnachfrage, Content-System, Conversion",
    coverImage: "/case-studies/geogurus-showcase.png",
    coverAlt: "Such- und Informationsarchitektur als SEO-Beispiel"
  }
];

const rawRatgeberPostPlans: RawRatgeberPostPlan[] = [
  {
    categoryId: "venture-studio",
    title: "Was ist ein Venture Studio und wann lohnt sich das Modell?",
    focusKeyword: "Venture Studio",
    audience: "Gründer, Unternehmen",
    searchIntent: "Definition und Entscheidungsfindung",
    summary:
      "Erklärt das Venture-Studio-Modell von der Idee bis zum Company Build und zeigt, wann operative Co-Creation besser passt als Beratung, Agentur oder Accelerator.",
    narrativeArc: "Von der diffusen Startup-Idee zur klaren Entscheidung, ob ein Studio der richtige Baupartner ist.",
    visual: "ein ruhiger Studio-Tisch mit Research, Produktskizzen, Kapitalplan und MVP-Artefakten",
    graphics: [
      "Vergleich Venture Studio, Accelerator, Agentur und Investor entlang Risiko, Kapital, Umsetzung und Ownership",
      "Chronologischer Ablauf von These, Validierung, MVP, Launch und Company Build"
    ]
  },
  {
    categoryId: "venture-studio",
    title: "Venture Studio vs. Accelerator: der Unterschied für Gründer",
    focusKeyword: "Venture Studio vs Accelerator",
    audience: "Gründer, Startups",
    searchIntent: "Vergleich und Auswahl",
    summary:
      "Ordnet ein, warum Accelerator vor allem Programme liefern, während Studios operativ bauen, und welche Konsequenzen das für Tempo, Equity und Verantwortung hat.",
    narrativeArc: "Vom ersten Unterstützungsbedarf zur richtigen Wahl zwischen Netzwerkprogramm und operativem Build-Team.",
    visual: "zwei nebeneinanderliegende Arbeitsmodi: Programmkalender und produktives Venture-Building-Board",
    graphics: [
      "Entscheidungsbaum: Wann Accelerator, wann Studio, wann klassischer Investor",
      "Ownership- und Leistungsumfang im zeitlichen Verlauf"
    ]
  },
  {
    categoryId: "venture-studio",
    title: "Venture Studio vs. Agentur: warum Umsetzung allein nicht reicht",
    focusKeyword: "Venture Studio vs Agentur",
    audience: "Unternehmen, Gründer",
    searchIntent: "Vergleich und Kaufentscheidung",
    summary:
      "Zeigt den Unterschied zwischen Projektlieferung und gemeinsamer Venture-Verantwortung mit Validierung, Produktstrategie und Marktrisiko.",
    narrativeArc: "Von der Idee als Briefing zur Idee als Geschäftsmodell mit gemeinsamer Ergebnisverantwortung.",
    visual: "eine Produkt-Roadmap, die von einem Agentur-Briefing in ein Venture-Operating-System übergeht",
    graphics: [
      "Matrix aus Delivery, Strategie, Risikoübernahme und Go-to-Market",
      "Kosten- und Risikoverlauf von Agenturprojekt gegenüber Studio-Modell"
    ]
  },
  {
    categoryId: "venture-studio",
    title: "Wie arbeitet ein Venture Studio Schritt für Schritt?",
    focusKeyword: "Venture Studio Prozess",
    audience: "Gründer, Unternehmen",
    searchIntent: "Prozess verstehen",
    summary:
      "Beschreibt den operativen Prozess von Research und Validierung über MVP-Scope bis Launch, Lernschleifen und Spin-out-Vorbereitung.",
    narrativeArc: "Vom ersten Problemhinweis zur wiederholbaren Entscheidungsmaschine für neue Ventures.",
    visual: "ein langer Prozesspfad mit Research-Karten, Prototyp, Launch-Dashboard und Governance-Dokument",
    graphics: [
      "Fünf Phasen eines Venture-Studio-Prozesses mit Entscheidungspunkten",
      "Beispielhafte 90-Tage-Timeline mit Artefakten pro Woche"
    ]
  },
  {
    categoryId: "venture-studio",
    title: "Venture Studio Equity: welche Beteiligung ist fair?",
    focusKeyword: "Venture Studio Equity",
    audience: "Gründer, Investoren",
    searchIntent: "Deal-Modell verstehen",
    summary:
      "Erklärt, wie Studio-Beteiligungen entstehen, welche Leistungen dahinterstehen und wie Gründer Fairness, Verwässerung und Kontrolle bewerten können.",
    narrativeArc: "Vom Bauchgefühl bei Equity zur nachvollziehbaren Bewertung von Leistung, Risiko und Kapitalbeitrag.",
    visual: "Cap-Table-Bausteine auf einem Tisch mit Studio-Anteil, Founder-Anteil und Investor-Anteil",
    graphics: [
      "Equity-Komponenten nach Kapital, Produktleistung, Risiko und Operator-Zeit",
      "Beispielhafte Cap-Table-Szenarien vor und nach Seed-Runde"
    ]
  },
  {
    categoryId: "venture-studio",
    title: "Venture Building ohne technischen Co-Founder: was wirklich fehlt",
    focusKeyword: "Startup ohne technischen Co-Founder",
    audience: "Gründer",
    searchIntent: "Problem lösen",
    summary:
      "Zeigt, welche Aufgaben ein technischer Co-Founder wirklich übernimmt und wann ein Studio diese Lücke temporär oder langfristig schließen kann.",
    narrativeArc: "Vom fehlenden CTO zur realistischen Build-Strategie mit Produkt-, Tech- und Ownership-Klarheit.",
    visual: "Founder-Notizen neben Architektur-Skizzen, Produkt-Backlog und Studio-Team-Kapazität",
    graphics: [
      "Rollenkarte: CTO, Product Lead, Engineer, Designer, Growth Operator",
      "Build-or-recruit-Entscheidung entlang Risiko und Reifegrad"
    ]
  },
  {
    categoryId: "venture-studio",
    title: "Startup-Idee prüfen lassen: wie ein Venture Audit funktioniert",
    focusKeyword: "Startup Idee prüfen lassen",
    audience: "Gründer, Unternehmen",
    searchIntent: "Validierungsangebot verstehen",
    summary:
      "Beschreibt, wie ein Venture Audit Marktproblem, Zielgruppe, Wettbewerb, MVP-Scope und Deal-Fit prüft, bevor Geld in Entwicklung fließt.",
    narrativeArc: "Von der ungeprüften Idee zu einer belastbaren Build- oder Stop-Entscheidung.",
    visual: "ein Audit-Dashboard mit Signalen, Risiken, Marktgröße und MVP-Scope",
    graphics: [
      "Audit-Scorecard mit Problem, Markt, Kanal, Produkt, Team und Kapital",
      "Entscheidungspfad: bauen, vertagen, pivotieren oder verwerfen"
    ]
  },
  {
    categoryId: "venture-studio",
    title: "Co-Founder Studio: wann operative Mitgründung sinnvoll ist",
    focusKeyword: "Co-Founder Studio",
    audience: "Gründer, Startups",
    searchIntent: "Partnerwahl",
    summary:
      "Ordnet operative Mitgründung ein und zeigt, wann ein Studio als Co-Founder mehr Wert liefert als Dienstleistung oder reine Finanzierung.",
    narrativeArc: "Vom Wunsch nach Unterstützung zur bewussten Entscheidung für gemeinsame Verantwortung.",
    visual: "ein gemeinsames Founder-Board mit Rollen, Risiken, Anteilen und Produktentscheidungen",
    graphics: [
      "Leistungs- und Verantwortungsmodell eines Co-Founder Studios",
      "Risikoaufteilung zwischen Founder, Studio und späteren Investoren"
    ]
  },
  {
    categoryId: "venture-studio",
    title: "Venture Studio Kosten: womit Gründer und Unternehmen rechnen müssen",
    focusKeyword: "Venture Studio Kosten",
    audience: "Gründer, Unternehmen",
    searchIntent: "Kostenplanung",
    summary:
      "Macht transparent, welche Kostenblöcke bei Research, MVP, Launch und Company Build entstehen und wie Cash, Equity und hybride Modelle zusammenspielen.",
    narrativeArc: "Von der Preisfrage zur realistischen Investitionslogik für frühe Ventures.",
    visual: "Budget-Layer für Research, Produkt, Technik, Launch und Operations",
    graphics: [
      "Kostenblöcke eines Venture Builds nach Phase",
      "Vergleich Cash-only, Equity-only und hybrides Modell"
    ]
  },
  {
    categoryId: "venture-studio",
    title: "Venture Studio in Deutschland: Chancen für Gründer im DACH-Markt",
    focusKeyword: "Venture Studio Deutschland",
    audience: "Gründer, Unternehmen, Investoren",
    searchIntent: "Marktüberblick",
    summary:
      "Analysiert, warum Studios im deutschen Markt für AI, SaaS, Mittelstand und Corporate Spin-outs relevant werden und wo lokale Besonderheiten liegen.",
    narrativeArc: "Von internationalen Studio-Modellen zur DACH-spezifischen Chance für neue digitale Geschäftsmodelle.",
    visual: "Deutschlandkarte mit B2B-Clustern, Mittelstand, AI-Zentren und Venture-Studio-Knoten",
    graphics: [
      "DACH-Chancenkarte nach Gründer, Mittelstand, Corporate und Investor",
      "Lokale Erfolgsfaktoren: Vertrauen, Branchenzugang, B2B-Sales und Kapitalpfad"
    ]
  },
  {
    categoryId: "ai-venture-building",
    title: "AI Venture Studio: wie AI-native Startups schneller entstehen",
    focusKeyword: "AI Venture Studio",
    audience: "Gründer, Unternehmen, Investoren",
    searchIntent: "Definition und Strategie",
    summary:
      "Erklärt, wie AI Research, Prototyping, Automatisierung und Datenstrategie die frühe Venture-Entwicklung verändern.",
    narrativeArc: "Von klassischem Venture Building zu AI-native Arbeitsweisen mit kürzeren Lernzyklen.",
    visual: "AI-Workbench mit Datenquellen, Agentenfluss, MVP-Prototyp und Validierungsmetriken",
    graphics: [
      "AI-native Venture Building Prozess von Use Case bis Skalierung",
      "Vergleich klassisches MVP und AI-MVP entlang Tempo, Daten und Risiko"
    ]
  },
  {
    categoryId: "ai-venture-building",
    title: "AI-MVP bauen: was ein künstlich intelligenter Produktkern braucht",
    focusKeyword: "AI MVP bauen",
    audience: "Gründer, Startups",
    searchIntent: "Umsetzung planen",
    summary:
      "Beschreibt, welche Komponenten ein AI-MVP braucht: Nutzerproblem, Datenlage, Modellwahl, Evaluierung, UX und Guardrails.",
    narrativeArc: "Vom AI-Hype zur belastbaren Produktentscheidung mit messbarem Nutzerwert.",
    visual: "Produktkern aus Interface, Modell, Datenpipeline, Evaluation und Guardrails",
    graphics: [
      "Architektur eines AI-MVPs mit Daten, Modell, UX und Monitoring",
      "Evaluierungsbogen für Qualität, Kosten, Latenz und Risiko"
    ]
  },
  {
    categoryId: "ai-venture-building",
    title: "AI Agents im Startup: welche Use Cases wirklich tragfähig sind",
    focusKeyword: "AI Agents Startup",
    audience: "Gründer, Unternehmen",
    searchIntent: "Use Case Bewertung",
    summary:
      "Zeigt, wie Gründer Agenten-Use-Cases nach Autonomiegrad, Datenzugang, Risiko und wirtschaftlichem Nutzen priorisieren.",
    narrativeArc: "Vom Agentenversprechen zur kontrollierten Automatisierung mit messbarem Ergebnis.",
    visual: "Agenten-Orchestrierung zwischen CRM, Wissensbasis, Aufgabenliste und menschlicher Freigabe",
    graphics: [
      "Use-Case-Matrix für AI Agents nach Wert und Risiko",
      "Autonomie-Level von Copilot bis vollständig orchestriertem Workflow"
    ]
  },
  {
    categoryId: "ai-venture-building",
    title: "Vertical AI: warum Branchenfokus für AI-Startups entscheidend wird",
    focusKeyword: "Vertical AI",
    audience: "Gründer, Investoren",
    searchIntent: "Marktchance verstehen",
    summary:
      "Erklärt, warum AI-Produkte mit Branchenkontext, Datenzugang und Workflow-Tiefe oft stärkere Moats aufbauen als horizontale Tools.",
    narrativeArc: "Von generischer AI-Funktion zu vertikaler Produktlogik mit klarer Zahlungsbereitschaft.",
    visual: "Branchenspezifisches Workflow-System mit Daten, Regeln, Fachsprache und AI-Modell",
    graphics: [
      "Vertical-AI-Moat aus Daten, Distribution, Workflow und Compliance",
      "Auswahlmatrix für attraktive Vertical-AI-Nischen"
    ]
  },
  {
    categoryId: "ai-venture-building",
    title: "Domain-spezifische KI-Modelle: wann sie besser sind als Generalisten",
    focusKeyword: "domain spezifische KI Modelle",
    audience: "Unternehmen, Startups",
    searchIntent: "Technologieentscheidung",
    summary:
      "Ordnet domain-spezifische Modelle gegenüber allgemeinen LLMs ein und zeigt, wann Genauigkeit, Kosten und Compliance den Ausschlag geben.",
    narrativeArc: "Vom Standardmodell zur spezialisierten AI-Architektur für konkrete Geschäftsprozesse.",
    visual: "Vergleich zwischen allgemeinem Modell und branchenspezifischem Modell in einer Produktarchitektur",
    graphics: [
      "Entscheidungspfad: Prompting, RAG, Fine-Tuning oder domain-spezifisches Modell",
      "Trade-off-Diagramm aus Kosten, Genauigkeit, Datenschutz und Wartung"
    ]
  },
  {
    categoryId: "ai-venture-building",
    title: "RAG für Startups: wann Retrieval-Augmented Generation sinnvoll ist",
    focusKeyword: "RAG Startup",
    audience: "Startups, Unternehmen",
    searchIntent: "Technische Umsetzung",
    summary:
      "Erklärt RAG verständlich und zeigt, wie Startups Wissensbasen, Kundendaten und Dokumente in AI-Produkte integrieren können.",
    narrativeArc: "Von verstreutem Wissen zu einem nutzbaren AI-Produkt mit Quellenbezug.",
    visual: "Dokumentenpipeline mit Chunking, Embeddings, Vektorsuche und Antwortinterface",
    graphics: [
      "RAG-Architektur von Dokumentenimport bis Antwortausgabe",
      "Qualitätsmetriken für Retrieval, Antworttreue und Nutzerfeedback"
    ]
  },
  {
    categoryId: "ai-venture-building",
    title: "AI Security für neue Produkte: Risiken vor dem MVP klären",
    focusKeyword: "AI Security Produkt",
    audience: "Unternehmen, Startups",
    searchIntent: "Risiko reduzieren",
    summary:
      "Zeigt, warum Prompt Injection, Datenabfluss, fehlerhafte Agentenaktionen und Modellabhängigkeit bereits im MVP-Design berücksichtigt werden müssen.",
    narrativeArc: "Vom schnellen AI-Prototyp zum kontrollierten Produkt mit Sicherheitslogik.",
    visual: "AI-Produktarchitektur mit Schutzschichten, Policies, Logs und Freigabepunkten",
    graphics: [
      "AI-Risikokarte für Daten, Modell, Agentenaktion und Nutzeroberfläche",
      "Guardrail-Stack vom Systemprompt bis Monitoring"
    ]
  },
  {
    categoryId: "ai-venture-building",
    title: "AI Automation im Mittelstand: wie daraus ein Venture werden kann",
    focusKeyword: "AI Automation Mittelstand",
    audience: "Unternehmen",
    searchIntent: "Venture Chance entdecken",
    summary:
      "Beschreibt, wie interne Automatisierungsprobleme zu produktisierbaren AI-Angeboten für ähnliche Unternehmen werden können.",
    narrativeArc: "Vom internen Effizienzproblem zum wiederholbaren Marktangebot.",
    visual: "Mittelstandsprozess, der von manueller Arbeit über AI-Automation zu einem SaaS-Angebot transformiert",
    graphics: [
      "Transformation von internem Workflow zu externem Produkt",
      "Bewertungsmatrix für Produktisierbarkeit von Automatisierungsfällen"
    ]
  },
  {
    categoryId: "ai-venture-building",
    title: "Human-in-the-Loop: warum AI-Produkte Menschen bewusst einbauen",
    focusKeyword: "Human in the Loop AI Produkt",
    audience: "Startups, Unternehmen",
    searchIntent: "Produktdesign",
    summary:
      "Erklärt, wie menschliche Freigabe, Feedback und Verantwortung AI-Produkte zuverlässiger, vertrauenswürdiger und marktfähiger machen.",
    narrativeArc: "Von vollständiger Automatisierung zur besseren Arbeitsteilung zwischen Mensch und AI.",
    visual: "Workflow mit AI-Vorschlag, menschlicher Prüfung, Feedbackdaten und automatischer Verbesserung",
    graphics: [
      "Human-in-the-Loop-Designmuster für verschiedene Risikostufen",
      "Feedbackkreislauf von Nutzerkorrektur zu Modell- und Produktverbesserung"
    ]
  },
  {
    categoryId: "ai-venture-building",
    title: "AI Evaluation: wie Gründer die Qualität eines AI-Produkts messen",
    focusKeyword: "AI Evaluation Startup",
    audience: "Gründer, Startups",
    searchIntent: "Qualität messen",
    summary:
      "Zeigt, wie qualitative und quantitative Evaluierung bei AI-Produkten aufgebaut wird, bevor Kundenvertrauen und Skalierung gefährdet sind.",
    narrativeArc: "Vom subjektiven Demo-Eindruck zur messbaren Produktqualität.",
    visual: "Evaluation-Dashboard mit Testfällen, Scores, Kosten, Latenz und Nutzerfeedback",
    graphics: [
      "Evaluierungs-Framework aus Testsets, Human Review, Nutzersignalen und Monitoring",
      "Beispielhafte Scorecard für AI-Produktqualität"
    ]
  },
  {
    categoryId: "mvp-validierung",
    title: "MVP entwickeln lassen: wie viel Produkt am Anfang wirklich nötig ist",
    focusKeyword: "MVP entwickeln lassen",
    audience: "Gründer, Unternehmen",
    searchIntent: "Kauf- und Scope-Entscheidung",
    summary:
      "Erklärt, wie ein MVP auf Lernziel, Marktproblem und Zahlungsbereitschaft zugeschnitten wird, statt nur eine kleine Produktversion zu sein.",
    narrativeArc: "Von der Wunschliste zum kleinsten Produktkern, der eine echte Geschäftsmodellfrage beantwortet.",
    visual: "Produktumfang, der von vielen Features auf einen validierbaren Kern reduziert wird",
    graphics: [
      "MVP-Scope-Funnel von Annahmen zu Kernfunktion",
      "Entscheidungsbaum: Prototyp, Concierge MVP, No-Code MVP oder Software-MVP"
    ]
  },
  {
    categoryId: "mvp-validierung",
    title: "Problem-Solution-Fit validieren: bevor du ein MVP baust",
    focusKeyword: "Problem Solution Fit validieren",
    audience: "Gründer, Startups",
    searchIntent: "Validierung lernen",
    summary:
      "Beschreibt, wie Gründer echte Problemstärke, bestehende Workarounds und Kaufdruck erkennen, bevor Produktentwicklung beginnt.",
    narrativeArc: "Vom vermuteten Problem zum belastbaren Signal, dass eine Lösung gebraucht wird.",
    visual: "Interviewauswertung mit Schmerzpunkten, Workarounds und Zahlungsbereitschaft",
    graphics: [
      "Signalmodell für Problemstärke, Häufigkeit, Budget und Dringlichkeit",
      "Interview-zu-Hypothesen-Mapping"
    ]
  },
  {
    categoryId: "mvp-validierung",
    title: "Smoke Test für Startups: Nachfrage messen, bevor gebaut wird",
    focusKeyword: "Smoke Test Startup",
    audience: "Gründer, Startups",
    searchIntent: "Testmethode verstehen",
    summary:
      "Zeigt, wie Landing Pages, Anzeigen, Wartelisten und manuelle Follow-ups frühe Nachfrage messbar machen.",
    narrativeArc: "Von der unbelegten Annahme zum ersten messbaren Nachfragesignal.",
    visual: "Landing Page, Kampagnendaten, Warteliste und Follow-up-Gespräche in einem Testsystem",
    graphics: [
      "Smoke-Test-Aufbau von These über Traffic bis Gespräch",
      "Metrik-Kette von Impression, Klick, Sign-up, Gespräch und Zahlungsabsicht"
    ]
  },
  {
    categoryId: "mvp-validierung",
    title: "Customer Interviews richtig führen: Fragen, die nicht täuschen",
    focusKeyword: "Customer Interviews Startup",
    audience: "Gründer",
    searchIntent: "Research-Methode",
    summary:
      "Erklärt, wie Gründer Interviews so führen, dass echte Verhaltenssignale statt Höflichkeitsmeinungen entstehen.",
    narrativeArc: "Vom netten Feedbackgespräch zur belastbaren Markterkenntnis.",
    visual: "Interviewnotizen mit Verhaltensbelegen, Zitaten und Hypothesen-Clustern",
    graphics: [
      "Interviewfluss von Kontext über Verhalten zu Entscheidungsdruck",
      "Auswertungstabelle für Zitate, Muster und Produktannahmen"
    ]
  },
  {
    categoryId: "mvp-validierung",
    title: "Concierge MVP: manuell starten, bevor Software skaliert",
    focusKeyword: "Concierge MVP",
    audience: "Gründer, Unternehmen",
    searchIntent: "MVP-Methode",
    summary:
      "Zeigt, wann ein manuell erbrachter Service die beste Lernform ist und wie daraus später ein Softwareprodukt entsteht.",
    narrativeArc: "Vom händischen Serviceversprechen zur automatisierbaren Produktlogik.",
    visual: "manueller Serviceprozess, der schrittweise in Produktmodule übersetzt wird",
    graphics: [
      "Concierge-MVP-Ablauf von Kundenzusage bis manueller Lieferung",
      "Automatisierungspfad: manuell, teilautomatisiert, produktisiert"
    ]
  },
  {
    categoryId: "mvp-validierung",
    title: "Wizard-of-Oz MVP: wie du Automatisierung simulierst und lernst",
    focusKeyword: "Wizard of Oz MVP",
    audience: "Gründer, Startups",
    searchIntent: "MVP-Methode",
    summary:
      "Erklärt, wie scheinbar automatisierte Produktflows manuell im Hintergrund getestet werden, ohne frühe Nutzer zu überfordern.",
    narrativeArc: "Von der teuren Automatisierungsidee zum günstigen Lerntest im echten Nutzungskontext.",
    visual: "Interface mit unsichtbarem manuellen Operations-Layer im Hintergrund",
    graphics: [
      "Wizard-of-Oz-System mit Frontend, Operator und Nutzerfeedback",
      "Risiko-Check für Täuschung, Datenschutz und Erwartungsmanagement"
    ]
  },
  {
    categoryId: "mvp-validierung",
    title: "MVP Roadmap erstellen: die ersten 90 Tage nach der Idee",
    focusKeyword: "MVP Roadmap",
    audience: "Gründer, Unternehmen",
    searchIntent: "Planung",
    summary:
      "Baut eine 90-Tage-Roadmap vom Problemverständnis über Scope, Prototyp und Launch bis zur Entscheidung über Weiterbau.",
    narrativeArc: "Vom unklaren Startpunkt zur taktischen 90-Tage-Abfolge mit Entscheidungstoren.",
    visual: "90-Tage-Roadmap mit Research, Prototype, Build, Launch und Learn",
    graphics: [
      "90-Tage-Plan mit Wochenzielen und Artefakten",
      "Entscheidungstore nach Research, Prototyp und Launch"
    ]
  },
  {
    categoryId: "mvp-validierung",
    title: "Landing Page Validierung: wann eine Warteliste wirklich etwas bedeutet",
    focusKeyword: "Landing Page Validierung",
    audience: "Gründer, Startups",
    searchIntent: "Nachfrage einordnen",
    summary:
      "Ordnet ein, welche Landing-Page-Signale belastbar sind und wann Klicks, Sign-ups oder Gespräche falsch interpretiert werden.",
    narrativeArc: "Vom oberflächlichen Interesse zur tatsächlichen Kauf- und Gesprächsbereitschaft.",
    visual: "Funnel von Landing Page bis qualifiziertem Discovery Call",
    graphics: [
      "Signalqualität von Pageview bis bezahltem Pilot",
      "Landing-Page-Struktur für klare Such- und Kaufintention"
    ]
  },
  {
    categoryId: "mvp-validierung",
    title: "MVP Kennzahlen: welche Metriken vor Product-Market-Fit zählen",
    focusKeyword: "MVP Kennzahlen",
    audience: "Startups, Investoren",
    searchIntent: "Metriken verstehen",
    summary:
      "Zeigt, welche frühen Kennzahlen wirklich Lernfortschritt anzeigen: Aktivierung, Retention, Kaufdruck, manuelle Wiederholung und qualifizierte Nachfrage.",
    narrativeArc: "Von Vanity Metrics zu belastbaren Lernmetriken für frühe Produkte.",
    visual: "MVP-Dashboard mit Aktivierung, Wiederkehr, Gesprächsqualität und Zahlungsbereitschaft",
    graphics: [
      "Metrik-Hierarchie vor Product-Market-Fit",
      "Beispiel-Dashboard für Validierungsfortschritt"
    ]
  },
  {
    categoryId: "mvp-validierung",
    title: "No-Code MVP vs. Custom Software: was passt zur Venture-Phase?",
    focusKeyword: "No-Code MVP vs Custom Software",
    audience: "Gründer, Unternehmen",
    searchIntent: "Technologieentscheidung",
    summary:
      "Vergleicht No-Code, Low-Code und individuelle Entwicklung entlang Lernziel, Skalierbarkeit, Daten, Integrationen und späterem Rewrite-Risiko.",
    narrativeArc: "Vom schnellsten Prototyp zur passenden technischen Basis für das nächste Lernziel.",
    visual: "drei technische Pfade mit Geschwindigkeit, Kosten, Flexibilität und Risiko",
    graphics: [
      "Entscheidungsmatrix No-Code, Low-Code und Custom Software",
      "Rewrite-Risiko im Verlauf von Validierung bis Skalierung"
    ]
  },
  {
    categoryId: "corporate-venture-building",
    title: "Corporate Venture Building: wie Unternehmen neue Geschäfte bauen",
    focusKeyword: "Corporate Venture Building",
    audience: "Unternehmen",
    searchIntent: "Grundlagen und Umsetzung",
    summary:
      "Erklärt, wie Corporates außerhalb der Linienorganisation neue Geschäftsmodelle validieren, bauen und in tragfähige Einheiten überführen.",
    narrativeArc: "Von Innovationsdruck zu einem Venture-Prozess mit klarer Governance und Marktsignalen.",
    visual: "Corporate Assets, Venture-Team, MVP und Spin-out-Struktur in einem Systembild",
    graphics: [
      "Corporate Venture Building Prozess mit Governance-Toren",
      "Asset-Leverage-Modell: Marke, Daten, Kunden, Know-how und Distribution"
    ]
  },
  {
    categoryId: "corporate-venture-building",
    title: "Corporate Spin-out planen: von der Idee zur eigenen Einheit",
    focusKeyword: "Corporate Spin-out",
    audience: "Unternehmen",
    searchIntent: "Spin-out planen",
    summary:
      "Beschreibt die wichtigsten Schritte von IP, Team, Governance und Finanzierung bis zu Marktvalidierung und operativer Eigenständigkeit.",
    narrativeArc: "Vom internen Projekt zur spin-out-fähigen Venture-Struktur.",
    visual: "Unternehmensbereich, der über Governance- und Produktbrücke zu einer eigenen Einheit wird",
    graphics: [
      "Spin-out-Timeline von Venture-These bis Gesellschaftsstruktur",
      "Klärungsmodell für IP, Team, Kunden, Kapital und Kontrolle"
    ]
  },
  {
    categoryId: "corporate-venture-building",
    title: "Innovationsbudget richtig einsetzen: weniger Ideen, mehr Tests",
    focusKeyword: "Innovationsbudget einsetzen",
    audience: "Unternehmen",
    searchIntent: "Budgetentscheidung",
    summary:
      "Zeigt, warum Innovationsbudgets nicht in Ideenlisten, sondern in kurze, messbare Validierungs- und Build-Zyklen fließen sollten.",
    narrativeArc: "Von Innovationsaktivität zu Kapitalallokation nach Evidenz.",
    visual: "Budget, das auf Experimente, MVPs und Entscheidungsdaten verteilt wird",
    graphics: [
      "Budgetallokation nach Research, Test, MVP und Launch",
      "Stop-or-scale-Logik für Innovationsportfolios"
    ]
  },
  {
    categoryId: "corporate-venture-building",
    title: "Corporate AI Venture: aus internen Daten neue Produkte entwickeln",
    focusKeyword: "Corporate AI Venture",
    audience: "Unternehmen",
    searchIntent: "AI-Geschäftsmodell entwickeln",
    summary:
      "Erklärt, wie Unternehmen vorhandene Daten, Prozesse und Kundenzugänge nutzen können, um AI-Produkte mit externem Marktwert zu bauen.",
    narrativeArc: "Vom ungenutzten Datenbestand zum validierten AI-Venture.",
    visual: "Datenquellen, Prozesse und Kundenprobleme, die in ein AI-Produkt münden",
    graphics: [
      "Daten-zu-Produkt-Pfad mit Datenschutz, Modellwahl und Kundennutzen",
      "Bewertung von Corporate Assets für AI-Venture-Potenzial"
    ]
  },
  {
    categoryId: "corporate-venture-building",
    title: "Venture Governance: wie Unternehmen schnelle Entscheidungen treffen",
    focusKeyword: "Venture Governance",
    audience: "Unternehmen",
    searchIntent: "Governance verbessern",
    summary:
      "Zeigt, welche Entscheidungsrollen, Budgets und Eskalationswege ein Corporate Venture braucht, damit Tempo nicht an Konzernlogik scheitert.",
    narrativeArc: "Von langsamer Abstimmung zu klarer Venture-Governance mit Entscheidungsrechten.",
    visual: "Venture Board, Operator-Team und Entscheidungstore in einer schlanken Governance-Struktur",
    graphics: [
      "Rollenmodell für Sponsor, Venture Board, Studio und Operator-Team",
      "Entscheidungsrechte je Venture-Phase"
    ]
  },
  {
    categoryId: "corporate-venture-building",
    title: "Pilotkunden im Unternehmen finden: der schnellste Weg zum B2B-Test",
    focusKeyword: "Pilotkunden B2B Venture",
    audience: "Unternehmen, Startups",
    searchIntent: "Pilot starten",
    summary:
      "Beschreibt, wie Unternehmensnetzwerke genutzt werden, um echte Pilotkunden für neue B2B-Produkte zu finden, ohne den Markt zu verzerren.",
    narrativeArc: "Vom internen Kontaktbuch zum validen externen Pilotkunden.",
    visual: "Netzwerkkarte aus Corporate-Kunden, Partnern und Pilotsegmenten",
    graphics: [
      "Pilotkunden-Fit-Matrix nach Problem, Budget, Zugang und Referenzwert",
      "Pilotprozess von Intro bis bezahlter Testphase"
    ]
  },
  {
    categoryId: "corporate-venture-building",
    title: "Buy, Build or Partner: wann Unternehmen ein Venture selbst bauen",
    focusKeyword: "Buy Build Partner Innovation",
    audience: "Unternehmen",
    searchIntent: "Strategieentscheidung",
    summary:
      "Ordnet Build, Buy und Partner als strategische Optionen ein und zeigt, wann ein Venture-Studio-Ansatz die beste Lern- und Kontrolllogik bietet.",
    narrativeArc: "Von der strategischen Lücke zur passenden Innovationsoption.",
    visual: "drei Pfade Buy, Build und Partner mit Risiko, Kontrolle und Time-to-Market",
    graphics: [
      "Entscheidungsmatrix Buy, Build, Partner",
      "Kontroll- und Lerntiefe je Option"
    ]
  },
  {
    categoryId: "corporate-venture-building",
    title: "Mittelstand und Venture Studio: neue Geschäftsmodelle ohne Großkonzernapparat",
    focusKeyword: "Mittelstand Venture Studio",
    audience: "Unternehmen",
    searchIntent: "Modell für Mittelstand",
    summary:
      "Zeigt, wie mittelständische Unternehmen mit Branchenwissen, Kundenzugang und schlanken Studio-Teams neue digitale Produkte testen können.",
    narrativeArc: "Vom operativen Kerngeschäft zur kontrollierten Venture-Option neben dem Bestand.",
    visual: "Mittelstandsunternehmen mit digitalem Venture-Satelliten und Kundenkanal",
    graphics: [
      "Mittelstands-Assets für digitale Ventures",
      "Schlanker Build-Prozess ohne Konzern-Overhead"
    ]
  },
  {
    categoryId: "corporate-venture-building",
    title: "Innovation Accounting: wie Corporate Ventures messbar werden",
    focusKeyword: "Innovation Accounting",
    audience: "Unternehmen",
    searchIntent: "Messsystem aufbauen",
    summary:
      "Erklärt, wie Unternehmen Fortschritt bei unsicheren Ventures messen, ohne frühe Projekte mit klassischen Umsatz-KPIs zu ersticken.",
    narrativeArc: "Von klassischen Reportingzahlen zu Lernmetriken und Investitionsentscheidungen.",
    visual: "Innovation-Dashboard mit Lernmetriken, Risikoabbau und Investitionsstufen",
    graphics: [
      "Metrikmodell von Annahme über Test zu Investitionsentscheidung",
      "Portfolio-Ansicht für Venture-Fortschritt"
    ]
  },
  {
    categoryId: "corporate-venture-building",
    title: "Corporate Venture stoppen: wann ein Nein der beste Fortschritt ist",
    focusKeyword: "Corporate Venture stoppen",
    audience: "Unternehmen",
    searchIntent: "Entscheidung treffen",
    summary:
      "Zeigt, wie Unternehmen frühe Stop-Entscheidungen professionell treffen und daraus Portfolio-Lernen statt politischen Schaden erzeugen.",
    narrativeArc: "Von der Angst vor Abbruch zur reifen Stop-or-Pivot-Entscheidung.",
    visual: "Entscheidungstor mit Stop, Pivot, Weiterbau und Scale als klare Optionen",
    graphics: [
      "Stop-Kriterien nach Markt, Produkt, Team, Kapital und Strategie",
      "Lernarchiv für beendete Corporate Ventures"
    ]
  },
  {
    categoryId: "go-to-market-sales",
    title: "Go-to-Market Strategie für Startups: von ICP bis erster Umsatz",
    focusKeyword: "Go-to-Market Strategie Startup",
    audience: "Gründer, Startups",
    searchIntent: "GTM planen",
    summary:
      "Beschreibt, wie Startups Zielkunden, Positionierung, Kanal, Sales Motion und Launch-Lernziele zu einem realistischen GTM-System verbinden.",
    narrativeArc: "Vom Produktlaunch ohne Plan zum fokussierten Weg in die ersten zahlenden Kunden.",
    visual: "GTM-System aus ICP, Kanal, Messaging, Sales Prozess und Feedbackschleife",
    graphics: [
      "Go-to-Market-Blueprint für frühe B2B-Ventures",
      "ICP-zu-Kanal-Mapping"
    ]
  },
  {
    categoryId: "go-to-market-sales",
    title: "ICP definieren: warum Startups zu Beginn enger denken müssen",
    focusKeyword: "ICP definieren Startup",
    audience: "Gründer, Startups",
    searchIntent: "Positionierung",
    summary:
      "Zeigt, wie ein enger Ideal Customer Profile frühe Sales-Gespräche, Produktentscheidungen und Content-Fokus verbessert.",
    narrativeArc: "Von der breiten Zielgruppe zum scharfen Kundensegment mit echtem Kaufdruck.",
    visual: "Zielgruppen-Trichter, der von breitem Markt auf einen präzisen ICP fokussiert",
    graphics: [
      "ICP-Canvas mit Problem, Trigger, Budget, Rolle und Kanal",
      "Segmentierungslogik nach Dringlichkeit und Zugänglichkeit"
    ]
  },
  {
    categoryId: "go-to-market-sales",
    title: "Founder-led Sales: warum Gründer die ersten Kunden selbst gewinnen",
    focusKeyword: "Founder-led Sales",
    audience: "Gründer, Startups",
    searchIntent: "Sales lernen",
    summary:
      "Erklärt, warum Gründer frühe Sales-Gespräche nicht delegieren sollten und wie daraus Produkt-, Pricing- und Messaging-Lernen entsteht.",
    narrativeArc: "Vom Gründer als Produktbauer zum Gründer als Lernmaschine im Markt.",
    visual: "Founder am Sales-Board mit Discovery Calls, Einwänden, Preisen und Produktfeedback",
    graphics: [
      "Founder-led-Sales-Kreislauf aus Gespräch, Einwand, Produktlernen und Closing",
      "Übergang von Gründerverkauf zu wiederholbarem Sales-Prozess"
    ]
  },
  {
    categoryId: "go-to-market-sales",
    title: "Erste 10 B2B-Kunden gewinnen: ein realistischer Pfad",
    focusKeyword: "erste B2B Kunden gewinnen",
    audience: "Gründer, Startups",
    searchIntent: "Kundengewinnung",
    summary:
      "Baut einen pragmatischen Weg von Netzwerk, Outbound, Content und Pilotangeboten zu den ersten zehn zahlenden B2B-Kunden.",
    narrativeArc: "Von null Referenzen zur ersten wiederholbaren Kundengewinnung.",
    visual: "Pipeline von Warm Intros, Outbound, Pilot, Vertrag und Referenzkunde",
    graphics: [
      "10-Kunden-Roadmap mit Akquisequellen und Conversion-Schritten",
      "Qualifizierungsmodell für frühe B2B-Leads"
    ]
  },
  {
    categoryId: "go-to-market-sales",
    title: "Startup Positionierung: wie aus Features ein klares Marktversprechen wird",
    focusKeyword: "Startup Positionierung",
    audience: "Gründer, Startups",
    searchIntent: "Messaging verbessern",
    summary:
      "Zeigt, wie Startups ihre Produktfunktionen in ein klares Nutzenversprechen für eine spitze Zielgruppe übersetzen.",
    narrativeArc: "Von Feature-Sprache zu einem Marktversprechen, das verstanden und gekauft wird.",
    visual: "Feature-Liste, die in Problem, Ergebnis, Differenzierung und Proof übersetzt wird",
    graphics: [
      "Positionierungs-Framework aus Zielkunde, Problem, Ergebnis und Beweis",
      "Messaging-Iteration von technischer Funktion zu Business Outcome"
    ]
  },
  {
    categoryId: "go-to-market-sales",
    title: "Startup Outbound: wie frühe B2B-Akquise ohne Spam funktioniert",
    focusKeyword: "Startup Outbound",
    audience: "Startups",
    searchIntent: "Outbound aufbauen",
    summary:
      "Erklärt, wie Startups relevante Listen, Kontext, persönliche Nachrichten und Lernmetriken nutzen, ohne Massen-Spam zu erzeugen.",
    narrativeArc: "Von kalten Massenmails zu präzisen Marktgesprächen mit Lernwert.",
    visual: "Outbound-Arbeitsplatz mit Segmentliste, persönlichem Trigger, Nachricht und Antwortfeedback",
    graphics: [
      "Outbound-System aus Segment, Signal, Message, Follow-up und Learning",
      "Antwortqualität statt reiner Versandmenge als Metrik"
    ]
  },
  {
    categoryId: "go-to-market-sales",
    title: "Product-Led Growth für frühe Startups: wann PLG zu früh ist",
    focusKeyword: "Product-Led Growth Startup",
    audience: "Startups",
    searchIntent: "GTM-Strategie bewerten",
    summary:
      "Ordnet ein, wann Self-Serve und produktgetriebene Akquise funktionieren und wann frühe Startups zuerst Sales- und Onboarding-Lernen brauchen.",
    narrativeArc: "Vom Wunsch nach skalierbarem Wachstum zur ehrlichen Prüfung der PLG-Voraussetzungen.",
    visual: "PLG-Funnel mit Aktivierung, Wertmoment, Expansion und Support-Aufwand",
    graphics: [
      "PLG-Readiness-Check für Produkt, Markt, Preis und Onboarding",
      "Vergleich Sales-led, Product-led und Hybrid-GTM"
    ]
  },
  {
    categoryId: "go-to-market-sales",
    title: "Demo-Call für SaaS-Startups: wie aus Interesse ein Lernsignal wird",
    focusKeyword: "SaaS Demo Call",
    audience: "Startups",
    searchIntent: "Sales Execution",
    summary:
      "Zeigt, wie Demo-Calls strukturiert werden, damit sie nicht nur Produktpräsentation, sondern Discovery, Qualifizierung und Closing-Test sind.",
    narrativeArc: "Von der Funktionsdemo zum Gespräch über Problem, Wert und Kaufentscheidung.",
    visual: "Demo-Call-Script neben Produktscreen, Einwandliste und Entscheidungsnotizen",
    graphics: [
      "Demo-Call-Struktur von Kontext bis Next Step",
      "Signalwertung: Interesse, Problemstärke, Budget und Dringlichkeit"
    ]
  },
  {
    categoryId: "go-to-market-sales",
    title: "Launch Plan für Startups: wie ein MVP sichtbar wird",
    focusKeyword: "Startup Launch Plan",
    audience: "Gründer, Startups",
    searchIntent: "Launch planen",
    summary:
      "Beschreibt, wie ein MVP-Launch mit Zielsegment, Content, Community, Outbound, Presse und Messpunkten vorbereitet wird.",
    narrativeArc: "Vom stillen Produktrelease zum geplanten Markttest mit klaren Lernzielen.",
    visual: "Launch-Kalender mit Content, Outreach, Produktmeilenstein und Feedbackkanälen",
    graphics: [
      "Launch-Timeline von Pre-Launch bis Lernreview",
      "Kanal-Mix für frühe Sichtbarkeit"
    ]
  },
  {
    categoryId: "go-to-market-sales",
    title: "CRM für Startups: welche Sales-Struktur am Anfang reicht",
    focusKeyword: "CRM Startup",
    audience: "Startups",
    searchIntent: "Sales Operations",
    summary:
      "Erklärt, wie Startups einfache CRM-Strukturen nutzen, um Gespräche, Signale, Follow-ups und Pipeline-Lernen sauber zu dokumentieren.",
    narrativeArc: "Vom verstreuten Lead-Chaos zu einem leichten Sales-System.",
    visual: "ein schlichtes CRM-Board mit Leadstatus, Signalen, Notizen und nächstem Schritt",
    graphics: [
      "Minimaler CRM-Aufbau für Pre-Seed- und Seed-Startups",
      "Pipeline-Stufen von Research bis bezahltem Pilot"
    ]
  },
  {
    categoryId: "saas-geschaeftsmodelle",
    title: "Vertical SaaS bauen: warum kleine Nischen große Chancen haben",
    focusKeyword: "Vertical SaaS bauen",
    audience: "Gründer, Investoren",
    searchIntent: "Geschäftsmodell verstehen",
    summary:
      "Erklärt, warum branchenspezifische Software durch Workflow-Tiefe, Daten und Distribution starke Geschäftsmodelle aufbauen kann.",
    narrativeArc: "Von der scheinbar kleinen Nische zum skalierbaren Vertical-SaaS-System.",
    visual: "Branchensoftware, die tief in einen spezialisierten Workflow eingebettet ist",
    graphics: [
      "Vertical-SaaS-Moat aus Workflow, Daten, Compliance und Distribution",
      "Nischenbewertung nach Schmerz, Budget, Fragmentierung und Wiederholbarkeit"
    ]
  },
  {
    categoryId: "saas-geschaeftsmodelle",
    title: "Marketplace MVP: Angebot und Nachfrage ohne Henne-Ei-Problem testen",
    focusKeyword: "Marketplace MVP",
    audience: "Gründer, Startups",
    searchIntent: "Plattform validieren",
    summary:
      "Zeigt, wie Marktplatzideen mit manueller Liquidität, kuratiertem Angebot und spitzen Segmenten validiert werden.",
    narrativeArc: "Vom Plattformtraum zur kontrollierten Liquiditätsprobe in einem engen Markt.",
    visual: "zweiseitiger Marktplatz mit kuratiertem Angebot, Nachfrage und manueller Vermittlung",
    graphics: [
      "Marketplace-Liquiditätspfad von Concierge bis automatisiertem Matching",
      "Henne-Ei-Strategien nach Angebots- und Nachfrageseite"
    ]
  },
  {
    categoryId: "saas-geschaeftsmodelle",
    title: "Produktized Service zu SaaS: wie Dienstleistung skalierbar wird",
    focusKeyword: "Productized Service SaaS",
    audience: "Gründer, Unternehmen",
    searchIntent: "Produktisierung",
    summary:
      "Beschreibt, wie wiederholbare Dienstleistungsprozesse in Software, Automatisierung und skalierbare Angebote übersetzt werden.",
    narrativeArc: "Vom manuellen Service zur standardisierten Produkt- und Softwarelogik.",
    visual: "Serviceprozess, der in Module, Automatisierung und Kundeninterface zerlegt wird",
    graphics: [
      "Produktisierungspfad von Beratung zu Serviceprodukt zu SaaS",
      "Wiederholbarkeits-Score für Servicebestandteile"
    ]
  },
  {
    categoryId: "saas-geschaeftsmodelle",
    title: "API-first Geschäftsmodelle: wann Infrastruktur ein Startup trägt",
    focusKeyword: "API Geschäftsmodell",
    audience: "Startups, Investoren",
    searchIntent: "Geschäftsmodell bewerten",
    summary:
      "Erklärt, wann API-Produkte echte Infrastrukturprobleme lösen und welche Risiken bei Distribution, Developer Experience und Pricing entstehen.",
    narrativeArc: "Von technischer Schnittstelle zu einem wirtschaftlichen Infrastrukturprodukt.",
    visual: "API-Layer zwischen Kundensystemen, Datenflüssen, Developer Portal und Usage Pricing",
    graphics: [
      "API-Business-Modell aus Use Case, Integration, Nutzung und Abrechnung",
      "Developer-Experience-Check für API-Produkte"
    ]
  },
  {
    categoryId: "saas-geschaeftsmodelle",
    title: "AI SaaS vs klassisches SaaS: was sich am Geschäftsmodell ändert",
    focusKeyword: "AI SaaS Geschäftsmodell",
    audience: "Gründer, Investoren",
    searchIntent: "Modellvergleich",
    summary:
      "Vergleicht klassische SaaS-Logik mit AI-native Produkten entlang Kostenstruktur, Wertversprechen, Pricing, Daten und Moat.",
    narrativeArc: "Von Softwarezugang zu intelligentem Arbeitsergebnis als verkaufbarem Wert.",
    visual: "klassisches SaaS-Dashboard neben AI-Workflow mit Ergebnis- und Kostenlogik",
    graphics: [
      "Vergleich SaaS und AI SaaS nach Wert, Kosten, Daten und Skalierung",
      "AI-Kostenmodell pro Nutzer, Aufgabe oder Ergebnis"
    ]
  },
  {
    categoryId: "saas-geschaeftsmodelle",
    title: "Datenprodukt bauen: wann Daten selbst zum Geschäftsmodell werden",
    focusKeyword: "Datenprodukt bauen",
    audience: "Unternehmen, Startups",
    searchIntent: "Datenmonetarisierung",
    summary:
      "Zeigt, wie Datenquellen, Aufbereitung, Aktualität, Lizenzierung und Produkt-UX zu einem verkaufbaren Datenprodukt werden.",
    narrativeArc: "Von rohen Datenbeständen zum wiederkehrenden Kundennutzen.",
    visual: "Datenpipeline von Rohdaten über Qualitätssicherung zu Kunden-Dashboard und API",
    graphics: [
      "Datenprodukt-Architektur mit Quellen, Qualität, Zugriff und Abrechnung",
      "Bewertungsmatrix für Datenwert und Differenzierung"
    ]
  },
  {
    categoryId: "saas-geschaeftsmodelle",
    title: "Workflow Automation als Startup-Idee: wie man Wiederholung findet",
    focusKeyword: "Workflow Automation Startup",
    audience: "Gründer, Unternehmen",
    searchIntent: "Ideenfindung",
    summary:
      "Erklärt, wie wiederkehrende, fehleranfällige und budgetrelevante Prozesse zu Automatisierungsprodukten werden können.",
    narrativeArc: "Vom nervigen manuellen Prozess zur produktisierbaren Automatisierung.",
    visual: "manueller Workflow, der in Trigger, Regeln, AI-Schritte und Ergebnisse zerlegt wird",
    graphics: [
      "Workflow-Automation-Canvas mit Trigger, Entscheidung, Aktion und Ausnahme",
      "Priorisierung nach Häufigkeit, Fehlerkosten und Zahlungsbereitschaft"
    ]
  },
  {
    categoryId: "saas-geschaeftsmodelle",
    title: "SaaS Moat aufbauen: was nach dem ersten Feature schützt",
    focusKeyword: "SaaS Moat",
    audience: "Startups, Investoren",
    searchIntent: "Wettbewerbsvorteil verstehen",
    summary:
      "Zeigt, warum Features kopierbar sind und welche Moats durch Daten, Distribution, Workflow-Einbettung, Switching Costs und Marke entstehen.",
    narrativeArc: "Vom ersten Feature zu verteidigbarer Marktposition.",
    visual: "SaaS-Produkt im Zentrum mit Daten-, Workflow-, Distribution- und Integrationsschutzschichten",
    graphics: [
      "Moat-Layer für SaaS-Startups",
      "Kopierbarkeit vs Verteidigbarkeit nach Produktreife"
    ]
  },
  {
    categoryId: "saas-geschaeftsmodelle",
    title: "B2B SaaS Compliance: wann Regulierung ein Vorteil wird",
    focusKeyword: "B2B SaaS Compliance",
    audience: "Startups, Unternehmen",
    searchIntent: "Risiko und Differenzierung",
    summary:
      "Erklärt, wie Datenschutz, Sicherheit, Branchenanforderungen und Nachweispflichten im B2B-SaaS nicht nur Last, sondern Eintrittsbarriere sein können.",
    narrativeArc: "Von Compliance als Bremse zu Compliance als Vertrauens- und Vertriebsfaktor.",
    visual: "B2B-SaaS-System mit Datenschutz, Audit-Logs, Rollenrechten und Sicherheitsfreigaben",
    graphics: [
      "Compliance-Layer in B2B-SaaS-Produkten",
      "Vertriebsrelevanz von Security, Datenschutz und Dokumentation"
    ]
  },
  {
    categoryId: "saas-geschaeftsmodelle",
    title: "SaaS Launch in einer Nische: wie spitze Märkte schneller lernen",
    focusKeyword: "SaaS Nische Launch",
    audience: "Gründer, Startups",
    searchIntent: "Launch-Strategie",
    summary:
      "Beschreibt, warum kleine, klar erreichbare Nischen frühe Learnings, Referenzen und Positionierung beschleunigen können.",
    narrativeArc: "Vom Wunsch nach großem Markt zur bewussten ersten Nische als Lernbeschleuniger.",
    visual: "kleines Nischensegment mit hoher Problemnähe und kurzen Vertriebswegen",
    graphics: [
      "Nischen-Launch-Modell mit Segment, Kanal, Proof und Expansion",
      "Expansion vom Beachhead Market in angrenzende Segmente"
    ]
  },
  {
    categoryId: "fundraising-investor-readiness",
    title: "Pre-Seed Funding vorbereiten: was vor dem ersten Investorengespräch stehen muss",
    focusKeyword: "Pre-Seed Funding vorbereiten",
    audience: "Gründer, Startups",
    searchIntent: "Fundraising vorbereiten",
    summary:
      "Erklärt, welche Story, Signale, Teamlogik, Marktthese und Unterlagen vor den ersten Pre-Seed-Gesprächen belastbar sein sollten.",
    narrativeArc: "Von der Idee mit Pitchdeck zur investierbaren frühen Venture-These.",
    visual: "Pre-Seed-Readiness-Board mit Pitch, Traction, Team, Markt und Kapitalbedarf",
    graphics: [
      "Pre-Seed-Readiness-Scorecard",
      "Unterlagenfluss von One-Pager über Deck bis Datenraum"
    ]
  },
  {
    categoryId: "fundraising-investor-readiness",
    title: "Pitch Deck Aufbau: die Reihenfolge, die Investoren verstehen",
    focusKeyword: "Pitch Deck Aufbau",
    audience: "Gründer, Startups",
    searchIntent: "Pitchdeck erstellen",
    summary:
      "Führt chronologisch durch ein starkes Pitch Deck von Problem, Markt und Lösung bis Traction, Team, Finanzierungsbedarf und Ask.",
    narrativeArc: "Von Folien-Sammlung zu einer überzeugenden Investorenstory.",
    visual: "Pitchdeck-Folien als Storyline von Problem bis Ask",
    graphics: [
      "Pitchdeck-Storyline mit logischer Reihenfolge",
      "Investor-Fragen je Folie und Reifegrad"
    ]
  },
  {
    categoryId: "fundraising-investor-readiness",
    title: "Startup Datenraum: welche Dokumente wirklich gebraucht werden",
    focusKeyword: "Startup Datenraum",
    audience: "Gründer, Startups",
    searchIntent: "Datenraum vorbereiten",
    summary:
      "Zeigt, welche Dokumente in einen frühen Datenraum gehören und wie Gründer Ordnung schaffen, ohne sich in Bürokratie zu verlieren.",
    narrativeArc: "Vom Dokumentenchaos zur investorenfähigen Due-Diligence-Struktur.",
    visual: "digitaler Datenraum mit Produkt, Recht, Finanzen, Cap Table und Kundenbelegen",
    graphics: [
      "Datenraum-Struktur für Pre-Seed und Seed",
      "Priorisierung nach Muss, Sollte und Später"
    ]
  },
  {
    categoryId: "fundraising-investor-readiness",
    title: "TAM, SAM, SOM erklären: Marktgröße ohne Fantasiezahlen",
    focusKeyword: "TAM SAM SOM",
    audience: "Gründer, Investoren",
    searchIntent: "Marktgröße berechnen",
    summary:
      "Erklärt, wie Marktgrößen nachvollziehbar hergeleitet werden und warum Bottom-up-Logik für frühe Ventures oft glaubwürdiger ist.",
    narrativeArc: "Von großen Marktfolien zur plausiblen Marktchance.",
    visual: "verschachtelte Marktsegmente mit Bottom-up-Annahmen und erreichbarem Startmarkt",
    graphics: [
      "TAM-SAM-SOM-Modell mit Bottom-up- und Top-down-Perspektive",
      "Beispielrechnung von ICP, Preis und erreichbaren Kunden"
    ]
  },
  {
    categoryId: "fundraising-investor-readiness",
    title: "Investor Update schreiben: Vertrauen zwischen Runden aufbauen",
    focusKeyword: "Investor Update schreiben",
    audience: "Gründer, Startups",
    searchIntent: "Investor Relations",
    summary:
      "Zeigt, wie regelmäßige Updates mit Fortschritt, Metriken, Lernen, Risiken und konkreten Asks Vertrauen aufbauen.",
    narrativeArc: "Von sporadischer Kommunikation zur wiederholbaren Investor-Relationship.",
    visual: "Investor-Update-Dokument mit Metriken, Learnings, Ask und Roadmap",
    graphics: [
      "Struktur eines Investor Updates",
      "Metriken und Narrative nach Venture-Phase"
    ]
  },
  {
    categoryId: "fundraising-investor-readiness",
    title: "Traction vor Umsatz: welche Signale Investoren trotzdem ernst nehmen",
    focusKeyword: "Traction vor Umsatz",
    audience: "Gründer, Investoren",
    searchIntent: "Traction einordnen",
    summary:
      "Ordnet Signale wie Pilotkunden, Nutzung, Wiederkehr, Wartelisten, LOIs und Zahlungsabsicht ein, wenn noch kein Umsatz vorhanden ist.",
    narrativeArc: "Von fehlendem Umsatz zu glaubwürdigen Frühindikatoren für Nachfrage.",
    visual: "Traction-Leiter von Gespräch über Pilot bis Umsatz",
    graphics: [
      "Signalstärke verschiedener Pre-Revenue-Traction-Arten",
      "Evidenzleiter für Investorenkommunikation"
    ]
  },
  {
    categoryId: "fundraising-investor-readiness",
    title: "Cap Table für Gründer: wie frühe Entscheidungen später wirken",
    focusKeyword: "Cap Table Gründer",
    audience: "Gründer",
    searchIntent: "Ownership verstehen",
    summary:
      "Erklärt, wie Gründeranteile, Studio-Anteile, Mitarbeiteroptionen, Wandeldarlehen und Investorenrunden langfristig zusammenspielen.",
    narrativeArc: "Von der ersten Anteilsverteilung zur später finanzierbaren Eigentümerstruktur.",
    visual: "Cap-Table-Entwicklung über mehrere Finanzierungsrunden",
    graphics: [
      "Cap-Table-Simulation vor und nach Seed und Series A",
      "Verwässerungseffekte nach Anteilsklassen"
    ]
  },
  {
    categoryId: "fundraising-investor-readiness",
    title: "Wandeldarlehen für Startups: wann es sinnvoll ist",
    focusKeyword: "Wandeldarlehen Startup",
    audience: "Gründer, Investoren",
    searchIntent: "Finanzierungsinstrument verstehen",
    summary:
      "Erklärt Wandeldarlehen verständlich und zeigt, wann sie Tempo geben, welche Terms wichtig sind und wo spätere Konflikte entstehen können.",
    narrativeArc: "Vom schnellen Zwischenkapital zur sauberen nächsten Runde.",
    visual: "Finanzierungsbrücke zwischen Pre-Seed und Seed mit Conversion-Mechanik",
    graphics: [
      "Mechanik eines Wandeldarlehens mit Cap, Discount und Conversion",
      "Term-Sheet-Faktoren und spätere Auswirkungen"
    ]
  },
  {
    categoryId: "fundraising-investor-readiness",
    title: "Investor Fit finden: nicht jedes Kapital hilft deinem Startup",
    focusKeyword: "Investor Fit Startup",
    audience: "Gründer",
    searchIntent: "Investorenauswahl",
    summary:
      "Zeigt, wie Gründer Investoren nach Phase, Sektor, Ticketgröße, Mehrwert, Entscheidungslogik und Folgefinanzierung auswählen.",
    narrativeArc: "Vom beliebigen Investorenlistenbau zur fokussierten Kapitalstrategie.",
    visual: "Investor-Mapping mit Phase, Branche, Ticket, Mehrwert und Warm Intro",
    graphics: [
      "Investor-Fit-Matrix",
      "Priorisierung von Outreach nach Wahrscheinlichkeit und strategischem Wert"
    ]
  },
  {
    categoryId: "fundraising-investor-readiness",
    title: "Fundraising Story: wie aus Produktdaten eine Investitionsthese wird",
    focusKeyword: "Fundraising Story Startup",
    audience: "Gründer, Startups",
    searchIntent: "Narrativ entwickeln",
    summary:
      "Erklärt, wie Problem, Timing, Markt, Produkt, Team und Traction zu einer Investitionsthese verbunden werden.",
    narrativeArc: "Von verstreuten Fakten zur Story, warum dieses Startup jetzt gewinnen kann.",
    visual: "Investitionsthese als roter Faden durch Markt, Produkt, Timing und Team",
    graphics: [
      "Fundraising-Narrativ von Warum jetzt bis Warum dieses Team",
      "Belegkette aus Markttrend, Kundensignal und Produktfortschritt"
    ]
  },
  {
    categoryId: "pricing-unit-economics",
    title: "SaaS Pricing entwickeln: vom Bauchgefühl zum Preismodell",
    focusKeyword: "SaaS Pricing",
    audience: "Gründer, Startups",
    searchIntent: "Preisstrategie",
    summary:
      "Zeigt, wie SaaS-Preise aus Wert, Zielkunde, Nutzungslogik, Kostenstruktur und Verkaufsprozess entstehen.",
    narrativeArc: "Vom geratenen Preis zur testbaren Monetarisierungslogik.",
    visual: "Pricing-Board mit Wertmetriken, Paketen, Kosten und Zahlungsbereitschaft",
    graphics: [
      "Pricing-Framework aus Wert, Kosten, Segment und Metrik",
      "Paketlogik von Pilot über Team bis Enterprise"
    ]
  },
  {
    categoryId: "pricing-unit-economics",
    title: "Value-Based Pricing: wie Startups nach Ergebnis statt Aufwand bepreisen",
    focusKeyword: "Value-Based Pricing Startup",
    audience: "Gründer, Startups",
    searchIntent: "Pricing-Modell verstehen",
    summary:
      "Erklärt, wie Startups den wirtschaftlichen Nutzen ihres Produkts quantifizieren und daraus bessere Preisanker ableiten.",
    narrativeArc: "Von Stunden, Features und Bauchgefühl zu Preislogik nach Kundenwert.",
    visual: "Kundenwertrechnung, die in Preisanker und Paketstruktur übersetzt wird",
    graphics: [
      "Wertberechnung nach Umsatzsteigerung, Zeitersparnis und Risikoreduktion",
      "Preisanker zwischen Kundennutzen und Zahlungsbereitschaft"
    ]
  },
  {
    categoryId: "pricing-unit-economics",
    title: "Pilot Pricing: was frühe Kunden für einen MVP zahlen sollten",
    focusKeyword: "Pilot Pricing Startup",
    audience: "Gründer, Startups",
    searchIntent: "Pilotangebot bepreisen",
    summary:
      "Zeigt, wie bezahlte Piloten strukturiert werden, damit sie Lernwert, Commitment und spätere Skalierung ermöglichen.",
    narrativeArc: "Vom kostenlosen Test zur ernsthaften Pilotpartnerschaft.",
    visual: "Pilotangebot mit Umfang, Zeitraum, Preis, Erfolgskriterien und Next Step",
    graphics: [
      "Pilot-Pricing-Struktur mit Scope, Preis und Erfolgskriterien",
      "Übergang vom Pilotvertrag zum wiederkehrenden SaaS-Plan"
    ]
  },
  {
    categoryId: "pricing-unit-economics",
    title: "Usage-Based Pricing: wann nutzungsbasierte Preise funktionieren",
    focusKeyword: "Usage-Based Pricing",
    audience: "Startups",
    searchIntent: "Preismodell bewerten",
    summary:
      "Erklärt, wann nutzungsbasierte Preise fair, skalierbar und verständlich sind und wann sie Sales und Planbarkeit erschweren.",
    narrativeArc: "Vom flexiblen Preisversprechen zur kontrollierbaren Umsatzlogik.",
    visual: "Nutzungsmetriken, Kostenkurve und Kundenwert in einem Preisdiagramm",
    graphics: [
      "Entscheidungsmatrix für Usage-Based Pricing",
      "Kosten- und Umsatzkurve pro Nutzungseinheit"
    ]
  },
  {
    categoryId: "pricing-unit-economics",
    title: "Freemium für B2B SaaS: Wachstumsmotor oder Ablenkung?",
    focusKeyword: "Freemium B2B SaaS",
    audience: "Startups",
    searchIntent: "Pricing-Strategie",
    summary:
      "Ordnet ein, wann Freemium in B2B-SaaS funktioniert und wann es Supportkosten, falsche Nutzer und schlechte Conversion erzeugt.",
    narrativeArc: "Vom kostenlosen Einstieg zur Frage, ob Self-Serve wirklich zur Zielgruppe passt.",
    visual: "Freemium-Funnel mit Aktivierung, Limit, Upgrade und Supportkosten",
    graphics: [
      "Freemium-Readiness-Check",
      "Conversion- und Kostenlogik eines Freemium-Modells"
    ]
  },
  {
    categoryId: "pricing-unit-economics",
    title: "CAC und LTV für frühe Startups: was du wirklich berechnen kannst",
    focusKeyword: "CAC LTV Startup",
    audience: "Gründer, Startups, Investoren",
    searchIntent: "Unit Economics verstehen",
    summary:
      "Erklärt, welche CAC- und LTV-Aussagen in frühen Phasen sinnvoll sind und wo Scheingenauigkeit gefährlich wird.",
    narrativeArc: "Von theoretischen Kennzahlen zu ehrlicher Frühphasen-Ökonomie.",
    visual: "Unit-Economics-Dashboard mit Annahmen, Szenarien und Unsicherheiten",
    graphics: [
      "CAC/LTV-Modell für frühe Startups mit Unsicherheitsbereichen",
      "Metriken, die vor belastbarer Retention wichtiger sind"
    ]
  },
  {
    categoryId: "pricing-unit-economics",
    title: "Gross Margin bei AI-Produkten: warum Modellkosten ins Pricing gehören",
    focusKeyword: "AI Produkt Gross Margin",
    audience: "Startups, Investoren",
    searchIntent: "Wirtschaftlichkeit prüfen",
    summary:
      "Zeigt, wie Inferenzkosten, Datenverarbeitung, Support und Human Review die Marge von AI-Produkten beeinflussen.",
    narrativeArc: "Von beeindruckender AI-Demo zur wirtschaftlich tragfähigen Produktleistung.",
    visual: "AI-Kostenstruktur aus Modellaufrufen, Daten, Infrastruktur und menschlicher Prüfung",
    graphics: [
      "AI-Gross-Margin-Modell pro Aufgabe oder Nutzer",
      "Kostenhebel: Modellwahl, Caching, Routing und Automatisierungsgrad"
    ]
  },
  {
    categoryId: "pricing-unit-economics",
    title: "Retention in frühen SaaS-Produkten: was Wiederkehr wirklich zeigt",
    focusKeyword: "SaaS Retention frühe Phase",
    audience: "Startups, Investoren",
    searchIntent: "Produktqualität messen",
    summary:
      "Erklärt, wie frühe Retention gelesen wird, wenn Datenmengen klein sind, und welche qualitativen Signale ergänzend zählen.",
    narrativeArc: "Von einzelnen Nutzungsdaten zur ehrlichen Einschätzung von wiederkehrendem Wert.",
    visual: "Retention-Kohorten mit qualitativen Nutzerzitaten und Aktivierungsereignissen",
    graphics: [
      "Frühphasen-Retention mit Kohorten und Verhalten",
      "Qualitative Signale für wiederkehrenden Produktwert"
    ]
  },
  {
    categoryId: "pricing-unit-economics",
    title: "Studio Deal-Modell: Cash, Equity oder hybride Zusammenarbeit?",
    focusKeyword: "Venture Studio Deal Modell",
    audience: "Gründer, Unternehmen",
    searchIntent: "Deal-Struktur",
    summary:
      "Vergleicht Cash-, Equity- und hybride Modelle und erklärt, wie Risiko, Leistung, Kapital und Kontrolle fair austariert werden.",
    narrativeArc: "Von unklaren Erwartungen zur passenden Kooperationsstruktur.",
    visual: "Deal-Modell-Waage mit Cash, Equity, Risiko und operativer Leistung",
    graphics: [
      "Vergleich Cash, Equity und Hybrid nach Anreiz und Risiko",
      "Deal-Design nach Venture-Phase und Leistungsumfang"
    ]
  },
  {
    categoryId: "pricing-unit-economics",
    title: "Revenue Model für Startups: welches Erlösmodell zur Idee passt",
    focusKeyword: "Revenue Model Startup",
    audience: "Gründer, Startups",
    searchIntent: "Geschäftsmodell entwickeln",
    summary:
      "Ordnet Abos, Transaktionsgebühren, Usage-Based Pricing, Services, Lizenzen und Erfolgsmodelle entlang Produktlogik und Zielgruppe ein.",
    narrativeArc: "Vom Produktnutzen zur passenden Einnahmelogik.",
    visual: "verschiedene Erlösmodelle, die einem Produktkern zugeordnet werden",
    graphics: [
      "Revenue-Model-Matrix nach Produkt, Nutzung, Kundensegment und Risiko",
      "Übergang von Serviceumsatz zu wiederkehrendem Produktumsatz"
    ]
  },
  {
    categoryId: "operations-studio-os",
    title: "Studio OS: warum Venture Building ein Betriebssystem braucht",
    focusKeyword: "Studio OS",
    audience: "Gründer, Unternehmen",
    searchIntent: "Operating Model verstehen",
    summary:
      "Erklärt, wie Research, Produkt, Tech, Growth, Operations und Kapitalfähigkeit in einem wiederholbaren Venture-Operating-System zusammenlaufen.",
    narrativeArc: "Von Einzelprojekten zu einem reproduzierbaren System für neue Ventures.",
    visual: "modulares Venture-Operating-System mit Research, Product, Growth, Ops und Capital",
    graphics: [
      "Studio-OS-Modulkarte",
      "Informationsfluss von Marktlearning zu Produkt- und Kapitalentscheidung"
    ]
  },
  {
    categoryId: "operations-studio-os",
    title: "Venture Operating Cadence: welche Meetings frühe Startups brauchen",
    focusKeyword: "Venture Operating Cadence",
    audience: "Startups, Unternehmen",
    searchIntent: "Execution strukturieren",
    summary:
      "Zeigt, welche Weekly-, Review- und Decision-Formate frühe Venture-Teams brauchen, ohne Meeting-Overhead zu erzeugen.",
    narrativeArc: "Vom reaktiven Arbeiten zu einem Rhythmus, der Lernen und Umsetzung verbindet.",
    visual: "Wochenrhythmus mit Build, Research, Sales, Review und Entscheidungstor",
    graphics: [
      "Operating-Cadence-Kalender für frühe Ventures",
      "Meeting-Zweck, Input und Output je Format"
    ]
  },
  {
    categoryId: "operations-studio-os",
    title: "Startup Rollen im MVP-Team: wer am Anfang wirklich gebraucht wird",
    focusKeyword: "MVP Team Rollen",
    audience: "Gründer, Unternehmen",
    searchIntent: "Team planen",
    summary:
      "Beschreibt die Kernrollen für ein frühes Venture: Founder, Product, Engineering, Design, Growth, Operations und Advisor.",
    narrativeArc: "Von fehlender Vollbesetzung zum schlanken Team, das richtig lernt.",
    visual: "kleines MVP-Team mit klaren Verantwortungsbereichen",
    graphics: [
      "Rollenkarte eines MVP-Teams",
      "Wann welche Rolle intern, extern oder im Studio liegen kann"
    ]
  },
  {
    categoryId: "operations-studio-os",
    title: "Venture Decision Log: wie Teams bessere Entscheidungen treffen",
    focusKeyword: "Venture Decision Log",
    audience: "Startups, Unternehmen",
    searchIntent: "Entscheidungen dokumentieren",
    summary:
      "Erklärt, warum frühe Ventures Entscheidungen, Annahmen, Daten und Begründungen dokumentieren sollten, um schneller zu lernen.",
    narrativeArc: "Vom vergessenen Bauchgefühl zur nachvollziehbaren Lernhistorie.",
    visual: "Decision Log mit Annahme, Signal, Entscheidung, Risiko und Follow-up",
    graphics: [
      "Decision-Log-Struktur für Produkt- und Marktentscheidungen",
      "Lernschleife aus Annahme, Test, Entscheidung und Review"
    ]
  },
  {
    categoryId: "operations-studio-os",
    title: "Tech Stack für MVPs: was stabil genug und schnell genug ist",
    focusKeyword: "MVP Tech Stack",
    audience: "Gründer, Startups",
    searchIntent: "Technologieauswahl",
    summary:
      "Ordnet ein, wie Startups Technologie nach Lernziel, Teamfähigkeit, Integrationen, Skalierung und Wartbarkeit auswählen.",
    narrativeArc: "Von Tool-Hype zur pragmatischen technischen Basis für das nächste Lernziel.",
    visual: "MVP-Tech-Stack aus Frontend, Backend, Datenbank, Analytics und Automatisierung",
    graphics: [
      "Tech-Stack-Entscheidungsmatrix für MVPs",
      "Skalierbarkeit vs Lernspeed in frühen Phasen"
    ]
  },
  {
    categoryId: "operations-studio-os",
    title: "Analytics Setup für Startups: welche Daten vom ersten Tag zählen",
    focusKeyword: "Analytics Startup Setup",
    audience: "Startups",
    searchIntent: "Messsystem aufbauen",
    summary:
      "Zeigt, welche Events, Funnels und qualitativen Signale frühe Startups erfassen sollten, ohne sich in Tracking-Komplexität zu verlieren.",
    narrativeArc: "Vom blinden Launch zum einfachen Lern-Dashboard.",
    visual: "Analytics-Setup mit Events, Funnels, qualitativen Notizen und Entscheidungsfragen",
    graphics: [
      "Minimaler Event-Plan für MVPs",
      "Lern-Dashboard für Aktivierung, Retention und Nachfrage"
    ]
  },
  {
    categoryId: "operations-studio-os",
    title: "Research Ops im Venture Studio: wie Marktlernen wiederholbar wird",
    focusKeyword: "Research Ops Venture Studio",
    audience: "Unternehmen, Startups",
    searchIntent: "Research strukturieren",
    summary:
      "Erklärt, wie Research-Prozesse, Interviewdaten, Quellen, Wettbewerbsanalysen und Hypothesen sauber organisiert werden.",
    narrativeArc: "Von Einzelrecherche zu einem wiederholbaren Research-System.",
    visual: "Research-Repository mit Hypothesen, Interviews, Quellen und Marktsegmenten",
    graphics: [
      "Research-Ops-System für Venture Building",
      "Quellen- und Hypothesenfluss bis zur Produktentscheidung"
    ]
  },
  {
    categoryId: "operations-studio-os",
    title: "Design System für MVPs: wann Konsistenz schon früh hilft",
    focusKeyword: "MVP Design System",
    audience: "Startups",
    searchIntent: "Produktdesign skalieren",
    summary:
      "Zeigt, wie ein leichtes Design System Geschwindigkeit, Konsistenz und spätere Produktentwicklung verbessert, ohne den MVP zu überfrachten.",
    narrativeArc: "Vom improvisierten Interface zu wiederverwendbaren Produktbausteinen.",
    visual: "UI-Komponenten, Produktflows und Design Tokens für einen frühen MVP",
    graphics: [
      "Leichtes Design-System-Set für MVPs",
      "Aufwand-Nutzen-Kurve von Ad-hoc-Design zu System"
    ]
  },
  {
    categoryId: "operations-studio-os",
    title: "Startup Hiring Roadmap: wann erste Rollen intern werden sollten",
    focusKeyword: "Startup Hiring Roadmap",
    audience: "Gründer, Startups",
    searchIntent: "Teamaufbau planen",
    summary:
      "Beschreibt, wann Startups Product, Engineering, Sales, Customer Success und Operations intern aufbauen sollten.",
    narrativeArc: "Von Studio- oder Freelancer-Unterstützung zum eigenen Kernteam.",
    visual: "Hiring-Roadmap entlang Produktreife, Umsatz und Komplexität",
    graphics: [
      "Hiring-Timeline nach Venture-Phase",
      "Make-or-buy-Entscheidung für Kernrollen"
    ]
  },
  {
    categoryId: "operations-studio-os",
    title: "Customer Support im MVP: wie frühe Probleme zu Produktlernen werden",
    focusKeyword: "MVP Customer Support",
    audience: "Startups",
    searchIntent: "Support strukturieren",
    summary:
      "Erklärt, wie früher Support nicht nur Probleme löst, sondern Produktlücken, Onboarding-Hürden und Zahlungsbereitschaft sichtbar macht.",
    narrativeArc: "Vom Supportaufwand zur Produkt- und Marktlernquelle.",
    visual: "Support-Tickets, Nutzerzitate und Produktentscheidungen in einer Feedbackschleife",
    graphics: [
      "Support-zu-Produkt-Lernkreislauf",
      "Kategorisierung von Bugs, UX-Hürden, Feature-Wünschen und Kaufgründen"
    ]
  },
  {
    categoryId: "seo-content-nachfrage",
    title: "SEO für Startups: wie Ratgeber-Content echte Nachfrage aufbaut",
    focusKeyword: "SEO für Startups",
    audience: "Gründer, Startups",
    searchIntent: "SEO-Strategie",
    summary:
      "Erklärt, wie Startups Suchintentionen, Content Hubs und Conversion-Pfade nutzen, um nachhaltige Nachfrage statt nur Reichweite aufzubauen.",
    narrativeArc: "Von vereinzelten Blogposts zu einem SEO-System, das Marktlernen und Leads verbindet.",
    visual: "Content-Hub mit Suchintentionen, Artikeln, internen Links und Kontakt-Conversion",
    graphics: [
      "SEO-Content-Hub-Struktur für B2B-Startups",
      "Suchintention-zu-Conversion-Pfad"
    ]
  },
  {
    categoryId: "seo-content-nachfrage",
    title: "Topical Map erstellen: 100 Themen strategisch planen",
    focusKeyword: "Topical Map erstellen",
    audience: "Startups, Unternehmen",
    searchIntent: "Content-Planung",
    summary:
      "Zeigt, wie aus Zielgruppe, Problemen, Keywords und internen Links eine langfristige Themenkarte für SEO entsteht.",
    narrativeArc: "Von Ideenliste zu einer priorisierten Content-Architektur.",
    visual: "Topical Map mit Kategorien, Pillar Pages, Clustern und internen Links",
    graphics: [
      "Topical-Map-Architektur mit Pillars und Clustern",
      "Priorisierung nach Suchintention, Business-Wert und Umsetzbarkeit"
    ]
  },
  {
    categoryId: "seo-content-nachfrage",
    title: "Suchintention verstehen: warum Keywords allein nicht reichen",
    focusKeyword: "Suchintention verstehen",
    audience: "Gründer, Startups",
    searchIntent: "SEO-Grundlage",
    summary:
      "Erklärt, wie informational, commercial und transactional Intent Content-Struktur, CTA und interne Verlinkung bestimmen.",
    narrativeArc: "Vom Keyword-Fokus zur Nutzerfrage und passenden Antworttiefe.",
    visual: "Keyword-Cluster, die nach Suchintention und Entscheidungsphase sortiert sind",
    graphics: [
      "Intent-Matrix für Startup- und B2B-Keywords",
      "Mapping von Suchintention zu Artikeltyp und CTA"
    ]
  },
  {
    categoryId: "seo-content-nachfrage",
    title: "Programmatic SEO für Startups: wann skalierte Seiten sinnvoll sind",
    focusKeyword: "Programmatic SEO Startup",
    audience: "Startups",
    searchIntent: "SEO-Skalierung bewerten",
    summary:
      "Ordnet ein, wann programmatische SEO-Seiten echte Suchbedürfnisse abdecken und wann sie dünne, riskante Masseninhalte werden.",
    narrativeArc: "Von Skalierungswunsch zu sauberer Daten- und Seitenlogik.",
    visual: "Datenbank, Template, Suchmuster und Qualitätsprüfung in einem SEO-System",
    graphics: [
      "Programmatic-SEO-Architektur mit Datenquelle, Template und Qualitätsregeln",
      "Risiko-Check für Thin Content und Indexierungsprobleme"
    ]
  },
  {
    categoryId: "seo-content-nachfrage",
    title: "Artikelstruktur für SEO: wie Longform-Ratgeber lesbar bleiben",
    focusKeyword: "Artikelstruktur SEO",
    audience: "Startups, Unternehmen",
    searchIntent: "Content-Qualität",
    summary:
      "Zeigt, wie umfassende Ratgeber mit H1, H2, Fließtext, Beispielen, Grafiken, FAQs und internen Links für Menschen und Suchmaschinen funktionieren.",
    narrativeArc: "Vom langen Text zur klar geführten Entscheidungsreise.",
    visual: "Longform-Artikel-Blueprint mit Hero, Inhaltslogik, Grafiken, FAQs und CTA",
    graphics: [
      "Longform-SEO-Template für Ratgeberartikel",
      "Lesefluss von Problem über Erklärung zu Handlung"
    ]
  },
  {
    categoryId: "seo-content-nachfrage",
    title: "Bild-SEO für Blogartikel: Prompts, Alt-Texte und Dateistruktur",
    focusKeyword: "Bild SEO Blogartikel",
    audience: "Startups, Unternehmen",
    searchIntent: "Medien-SEO",
    summary:
      "Erklärt, wie Hero-Bilder und Zwischen-Grafiken geplant, benannt, komprimiert und mit sinnvollen Alt-Texten versehen werden.",
    narrativeArc: "Vom dekorativen Bild zur such- und nutzerfreundlichen visuellen Erklärung.",
    visual: "Bildproduktions-Workflow mit Prompt, Asset-Datei, Alt-Text, Kompression und Einbau",
    graphics: [
      "Bild-SEO-Workflow von Prompt bis Veröffentlichung",
      "Alt-Text-Entscheidung nach Bildfunktion"
    ]
  },
  {
    categoryId: "seo-content-nachfrage",
    title: "Article Schema für Ratgeber: strukturierte Daten richtig planen",
    focusKeyword: "Article Schema Ratgeber",
    audience: "Startups, Unternehmen",
    searchIntent: "Technisches SEO",
    summary:
      "Beschreibt, welche strukturierten Daten Ratgeberartikel brauchen und wie Titel, Bild, Datum, Autor und Publisher sauber modelliert werden.",
    narrativeArc: "Vom normalen Blogartikel zur maschinenlesbaren Content-Einheit.",
    visual: "JSON-LD-Schema neben Artikel-Metadaten und Suchergebnis-Vorschau",
    graphics: [
      "Article-Schema-Felder für Ratgeberartikel",
      "Validierungsprozess von Content-Plan bis Rich-Result-Test"
    ]
  },
  {
    categoryId: "seo-content-nachfrage",
    title: "AI Search und GEO: wie Startups in generativen Antworten vorkommen",
    focusKeyword: "AI Search GEO Startups",
    audience: "Startups, Unternehmen",
    searchIntent: "Moderne Suche verstehen",
    summary:
      "Erklärt, wie klare Entitäten, Quellen, strukturierte Inhalte und fachliche Tiefe die Sichtbarkeit in AI-gestützten Suchumgebungen verbessern können.",
    narrativeArc: "Von klassischer SERP-Optimierung zu zitierfähigem, eindeutigem Expertencontent.",
    visual: "Content-Entitäten, Quellen und Antwortbausteine, die in generative Suche fließen",
    graphics: [
      "GEO-Content-Modell aus Entität, Beleg, Struktur und Antwortformat",
      "Optimierung von Ratgeberinhalten für klassische und generative Suche"
    ]
  },
  {
    categoryId: "seo-content-nachfrage",
    title: "B2B Content Funnel: wie Ratgeber zu Gesprächen führen",
    focusKeyword: "B2B Content Funnel",
    audience: "Startups, Unternehmen",
    searchIntent: "Content Conversion",
    summary:
      "Zeigt, wie Informationsartikel, Vergleichsseiten, Case Studies und Kontaktangebote zusammenarbeiten, um qualifizierte B2B-Anfragen zu erzeugen.",
    narrativeArc: "Von organischem Besuch zu qualifiziertem Venture-Gespräch.",
    visual: "B2B-Content-Funnel von Ratgeber über Proof zu Kontakt",
    graphics: [
      "Content-Funnel nach Awareness, Consideration und Decision",
      "Interne Linkpfade von Artikel zu Case Study und Kontakt"
    ]
  },
  {
    categoryId: "seo-content-nachfrage",
    title: "SEO Redaktionsplan: wie Startups 6 Monate Content planen",
    focusKeyword: "SEO Redaktionsplan Startup",
    audience: "Startups, Unternehmen",
    searchIntent: "Redaktionsplanung",
    summary:
      "Beschreibt, wie Teams Themen, Briefings, Bildproduktion, Veröffentlichung, interne Links und Updates über sechs Monate organisieren.",
    narrativeArc: "Von spontaner Content-Produktion zu einem planbaren Publishing-System.",
    visual: "Redaktionskalender mit Kategorien, Veröffentlichungszeiten, Assets und Update-Zyklen",
    graphics: [
      "6-Monats-Redaktionsplan mit Kategorien und Veröffentlichungsrhythmus",
      "Workflow von Briefing über Bildprompt bis Artikel-Update"
    ]
  }
];

const categoryById = new Map(ratgeberCategories.map((category) => [category.id, category]));

const publishSlots = [
  { dayOffset: 0, time: "08:30" },
  { dayOffset: 1, time: "10:00" },
  { dayOffset: 2, time: "13:30" },
  { dayOffset: 3, time: "16:00" }
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatDatePart(date: Date) {
  return date.toISOString().slice(0, 10);
}

function berlinOffset(date: Date) {
  const dstEnd2026 = Date.UTC(2026, 9, 25);
  return date.getTime() < dstEnd2026 ? "+02:00" : "+01:00";
}

function scheduledPublishAt(index: number) {
  const slot = publishSlots[index % publishSlots.length];
  const weekOffset = Math.floor(index / publishSlots.length) * 7;
  const date = new Date(Date.UTC(2026, 6, 21 + weekOffset + slot.dayOffset));

  return `${formatDatePart(date)}T${slot.time}:00${berlinOffset(date)}`;
}

function metaTitle(title: string, keyword: string) {
  const candidate = `${title} | Veytra`;
  return candidate.length <= 60 ? candidate : `${keyword} | Veytra Ratgeber`;
}

function metaDescription(summary: string) {
  const suffix = " Inklusive Struktur, Bildplanung und nächstem Umsetzungsschritt.";
  const description = `${summary}${suffix}`;
  return description.length <= 155 ? description : `${description.slice(0, 152).trim()}...`;
}

function outlineFor(post: RawRatgeberPostPlan) {
  return [
    `Ausgangslage: ${post.narrativeArc}`,
    `Warum ${post.focusKeyword} jetzt für ${post.audience} relevant ist`,
    "Welche Annahmen zuerst geklärt werden müssen",
    "Wie daraus Produkt, Marktkanal und Entscheidungslogik entstehen",
    "Welche Risiken vor dem nächsten Build-Schritt sichtbar werden sollten",
    "Wie die nächsten 30, 60 und 90 Tage sinnvoll geplant werden"
  ];
}

export const ratgeberPostPlans: RatgeberPostPlan[] = rawRatgeberPostPlans.map((post, index) => {
  const category = categoryById.get(post.categoryId);

  if (!category) {
    throw new Error(`Missing Ratgeber category: ${post.categoryId}`);
  }

  const slug = slugify(post.title);

  return {
    slug,
    href: `/ratgeber/${slug}`,
    title: post.title,
    categoryId: post.categoryId,
    categoryLabel: category.label,
    audience: post.audience,
    searchIntent: post.searchIntent,
    focusKeyword: post.focusKeyword,
    metaTitle: metaTitle(post.title, post.focusKeyword),
    metaDescription: metaDescription(post.summary),
    publishAt: scheduledPublishAt(index),
    readingTime: `${18 + (index % 8)} Min.`,
    wordCountTarget: 2800 + (index % 5) * 450,
    summary: post.summary,
    narrativeArc: post.narrativeArc,
    coverImage: category.coverImage,
    imageAlt: `Hero-Bild für den Ratgeberbeitrag "${post.title}"`,
    heroImagePrompt:
      `Generate a premium editorial hero image for a German venture studio article. Topic: "${post.title}". Visual concept: ${post.visual}. Style: realistic, sophisticated, high-detail, clean B2B startup studio atmosphere, neutral black-white-slate palette with subtle warm light, no readable text, no logos, 16:9 aspect ratio.`,
    inlineGraphicPrompts: post.graphics.slice(0, 3).map(
      (graphic, graphicIndex) =>
        `Create a clean explanatory ${graphicIndex === 0 ? "process graphic" : "supporting diagram"} for the article "${post.title}": ${graphic}. Use minimal labels, neutral colors, strong mobile readability, SVG-ready composition.`
    ),
    outline: outlineFor(post),
    featured: index === 0 || index === 10 || index === 20 || index === 30 || index === 60 || index === 90
  };
});

export const featuredRatgeberPosts = ratgeberPostPlans.filter((post) => post.featured);

export const ratgeberAudienceOptions = Array.from(
  new Set(ratgeberPostPlans.flatMap((post) => post.audience.split(", ")))
).sort();

