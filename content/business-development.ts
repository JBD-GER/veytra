export const developmentBasePath = "/unternehmensentwicklung";

export const developmentPhases = [
  {
    id: "discover",
    number: "01",
    name: "DISCOVER",
    slug: "geschaeftsideen",
    label: "VEYTRA Venture Discovery",
    shortLabel: "Geschäftsidee finden",
    title: "Ich möchte ein Unternehmen gründen.",
    headline: "Die nächste Geschäftsidee beginnt bei Ihnen.",
    summary: "Sie wollen gründen. Wir finden heraus, welches Geschäftsmodell zu Ihren Stärken, Ressourcen und Zielen passt.",
    description: "Sie möchten sich selbstständig machen oder gemeinsam mit einem Gründerteam ein Unternehmen aufbauen, wissen aber noch nicht, welches Geschäftsmodell zu Ihnen passt. Wir analysieren Fähigkeiten, Erfahrung, Ressourcen, Kapital, Interessen und unternehmerische Ziele und entwickeln daraus drei konkrete Geschäftskonzepte.",
    cta: "Geschäftsideen entwickeln",
    question: "Was sollten wir aufbauen?",
    answer: "Drei konkrete Geschäftskonzepte, passend zu Ihrem Profil.",
    topics: ["Founder Fit", "Skills", "Ressourcen", "Marktchancen", "Geschäftsmodell"],
    output: "3 Business Opportunities",
    outputDescription: "Drei ausgearbeitete Geschäftskonzepte mit Zielgruppe, Nutzenversprechen, Erlösmodell und nächsten Validierungsschritten.",
    deliverables: [
      { title: "Ihr unternehmerisches Profil", text: "Fähigkeiten, Branchenwissen, Interessen, verfügbare Zeit und Kapital werden zu einem klaren Suchprofil verdichtet." },
      { title: "Drei konkrete Geschäftskonzepte", text: "Jedes Konzept beschreibt ein Kundenproblem, eine erreichbare Zielgruppe, das Angebot und ein mögliches Erlösmodell." },
      { title: "Ein nachvollziehbarer Vergleich", text: "Wir ordnen Founder Fit, Ressourcenbedarf und offene Annahmen ein. So wird sichtbar, welche Idee zuerst geprüft werden sollte." }
    ],
    inputs: ["Beruflicher Hintergrund und Branchenkenntnisse", "Verfügbare Zeit, Ressourcen und Kapital", "Persönliche Ziele und Risikobereitschaft"],
    steps: ["Profil und Suchfelder schärfen", "Marktchancen und Geschäftsmodelle entwickeln", "Drei Konzepte vergleichen und nächste Tests priorisieren"],
    seoTitle: "Geschäftsideen entwickeln mit Founder Fit | Veytra",
    seoDescription: "Entwickeln Sie mit VEYTRA drei konkrete Geschäftsideen, die zu Ihren Fähigkeiten, Ressourcen und Zielen passen. Vom Gründerprofil zum Geschäftsmodell."
  },
  {
    id: "validate",
    number: "02",
    name: "VALIDATE",
    slug: "geschaeftsidee-validieren",
    label: "VEYTRA Validation",
    shortLabel: "Geschäftsidee validieren",
    title: "Ich habe bereits eine Geschäftsidee.",
    headline: "Eine gute Idee verdient eine belastbare Prüfung.",
    summary: "Sie haben eine Idee. Wir prüfen Markt, Geschäftsmodell und Risiken, bevor Sie weiter investieren.",
    description: "Sie haben eine konkrete Idee und möchten wissen, ob daraus tatsächlich ein tragfähiges Unternehmen entstehen kann. Wir analysieren Markt, Nachfrage, Wettbewerb, Geschäftsmodell, Monetarisierung, Skalierbarkeit und Risiken. Das Ergebnis ist ein strukturiertes Validation Reporting inklusive VEYTRA Rating.",
    cta: "Geschäftsidee validieren",
    question: "Sollten wir diese Idee weiterverfolgen?",
    answer: "Eine fundierte Einschätzung mit klaren Bedingungen für den nächsten Schritt.",
    topics: ["Marktnachfrage", "Wettbewerb", "Unit Economics", "Risiken", "Skalierbarkeit"],
    output: "Validation Report + VEYTRA Rating",
    outputDescription: "Ein strukturiertes Gesamtbild Ihrer Idee: Marktpotenzial, wirtschaftliche Annahmen, Risiken und priorisierte nächste Tests.",
    deliverables: [
      { title: "Markt- und Wettbewerbsanalyse", text: "Wir prüfen Kundenproblem, Nachfrageindikatoren, bestehende Alternativen und die mögliche Positionierung Ihres Angebots." },
      { title: "Geschäftsmodell und Economics", text: "Erlöslogik, Kosten, Zahlungsbereitschaft und Skalierbarkeit werden auf ihre Plausibilität geprüft. Annahmen bleiben als solche erkennbar." },
      { title: "Validation Report und Rating", text: "Sie erhalten eine strukturierte Entscheidungsgrundlage mit Stärken, Risiken, Datenlücken und konkreten Tests für die nächsten Schritte." }
    ],
    inputs: ["Beschreibung von Idee, Zielgruppe und Kundenproblem", "Bestehende Recherche, Interviews oder erste Marktsignale", "Annahmen zu Angebot, Preisen und Kosten"],
    steps: ["Hypothesen und Prüfrahmen festlegen", "Markt, Nachfrage und Wirtschaftlichkeit analysieren", "Ergebnisse bewerten und nächste Entscheidung vorbereiten"],
    seoTitle: "Geschäftsidee validieren: Markt, Modell & Rating | Veytra",
    seoDescription: "Geschäftsidee validieren mit VEYTRA: Marktanalyse, Wettbewerb, Unit Economics und Risiken. Ein Validation Report als Grundlage für Ihre nächste Entscheidung."
  },
  {
    id: "grow",
    number: "03",
    name: "GROW",
    slug: "wachstum",
    label: "VEYTRA Growth",
    shortLabel: "Unternehmen wachsen lassen",
    title: "Mein Unternehmen soll stärker wachsen.",
    headline: "Wachstum beginnt dort, wo Sie genauer hinsehen.",
    summary: "Ihr Geschäftsmodell funktioniert. Wir finden die Hebel für mehr Nachfrage, Umsatz und skalierbares Wachstum.",
    description: "Das Geschäftsmodell funktioniert bereits, aber Umsatz, Neukundengewinnung oder Skalierung bleiben hinter den Möglichkeiten zurück. Wir identifizieren Wachstumsbarrieren und analysieren Acquisition, Conversion, Pricing, Angebot, Positionierung, Retention und neue Umsatzpotenziale.",
    cta: "Wachstum analysieren",
    question: "Wo entsteht das nächste Wachstum?",
    answer: "Eine priorisierte Wachstumsstrategie mit überprüfbaren Hypothesen.",
    topics: ["Acquisition", "Conversion", "Pricing", "Retention", "Expansion"],
    output: "Growth Strategy",
    outputDescription: "Eine Wachstumsstrategie mit den wichtigsten Engpässen, priorisierten Experimenten und Kennzahlen für die Umsetzung.",
    deliverables: [
      { title: "Ein klares Bild Ihrer Wachstumsbarrieren", text: "Wir betrachten Kundengewinnung, Conversion, Angebot und Kundenbindung zusammen und identifizieren den aktuell begrenzenden Faktor." },
      { title: "Priorisierte Wachstumspotenziale", text: "Pricing, Positionierung, neue Segmente und Umsatzpotenziale werden nach Wirkung, Aufwand und Evidenz eingeordnet." },
      { title: "Ein umsetzbarer Growth Plan", text: "Sie erhalten konkrete Maßnahmen und Experimente mit Zielkennzahlen, Verantwortlichkeiten und einer sinnvollen Reihenfolge." }
    ],
    inputs: ["Umsatz- und Kundendaten nach Segment oder Angebot", "Vertriebsprozess, Kanäle und Conversion-Kennzahlen", "Preise, Kundenbindung und bisherige Wachstumsmaßnahmen"],
    steps: ["Ausgangslage und Wachstumsziel klären", "Engpässe und Umsatzpotenziale analysieren", "Experimente, Kennzahlen und Umsetzung priorisieren"],
    seoTitle: "Unternehmenswachstum & Wachstumsstrategie | Veytra",
    seoDescription: "Unternehmenswachstum gezielt entwickeln: VEYTRA analysiert Acquisition, Conversion, Pricing und Retention und erstellt eine priorisierte Wachstumsstrategie."
  },
  {
    id: "improve",
    number: "04",
    name: "IMPROVE",
    slug: "performance",
    label: "VEYTRA Performance",
    shortLabel: "Profitabilität verbessern",
    title: "Mein Unternehmen muss profitabler werden.",
    headline: "Mehr Wert aus dem Unternehmen, das Sie aufgebaut haben.",
    summary: "Umsatz allein reicht nicht. Wir machen sichtbar, welche Maßnahmen Marge, Prozesse und EBIT verbessern können.",
    description: "Wenn Kosten steigen, Margen sinken oder Strukturen ineffizient geworden sind, analysieren wir die wirtschaftlichen Stellhebel Ihres Unternehmens. Im Fokus stehen Kostenstruktur, Prozesse, Pricing, Deckungsbeiträge, Organisation, Produktportfolio und EBIT.",
    cta: "Profitabilität verbessern",
    question: "Welche Maßnahmen verbessern unsere Profitabilität?",
    answer: "Ein Maßnahmenplan, der wirtschaftliche Wirkung und Umsetzbarkeit verbindet.",
    topics: ["Kosten", "Marge", "Prozesse", "Organisation", "Profitabilität"],
    output: "EBIT Improvement Plan",
    outputDescription: "Ein priorisierter Maßnahmenplan für Kosten, Pricing, Prozesse und Portfolio mit transparenten Annahmen zur möglichen Ergebniswirkung.",
    deliverables: [
      { title: "Transparenz über Ihre Ergebnishebel", text: "Wir analysieren Kostenstruktur, Deckungsbeiträge und Portfolio, um Ertragstreiber und wirtschaftliche Schwachstellen zu erkennen." },
      { title: "Bewertete Verbesserungsmaßnahmen", text: "Pricing, Abläufe, Ressourceneinsatz und Organisation werden auf mögliche Ergebnisbeiträge und Umsetzungsrisiken geprüft." },
      { title: "Ein konkreter EBIT Improvement Plan", text: "Ein priorisierter Plan verbindet Maßnahmen, Aufwand, Verantwortlichkeiten und Messgrößen. Potenziale werden als Szenarien ausgewiesen." }
    ],
    inputs: ["BWA oder Ergebnisrechnung und relevante Kostendaten", "Deckungsbeiträge, Preise und Produktportfolio", "Prozessübersicht, Kapazitäten und organisatorische Engpässe"],
    steps: ["Ergebnisstruktur und Datenqualität prüfen", "Kosten-, Margen- und Prozesshebel bewerten", "Maßnahmen nach Wirkung und Machbarkeit priorisieren"],
    seoTitle: "Profitabilität verbessern & EBIT entwickeln | Veytra",
    seoDescription: "Profitabilität verbessern, Kosten reduzieren und EBIT-Potenziale erkennen. VEYTRA analysiert Pricing, Prozesse und Marge für einen konkreten Maßnahmenplan."
  }
] as const;

export type DevelopmentPhase = (typeof developmentPhases)[number];

// Illustrative, equally weighted example; never used as a customer result.
export const exampleRatingMetrics = [
  { label: "Market Demand", translation: "Marktnachfrage", score: 88 },
  { label: "Competitive Position", translation: "Wettbewerbsposition", score: 74 },
  { label: "Economics", translation: "Wirtschaftlichkeit", score: 85 },
  { label: "Scalability", translation: "Skalierbarkeit", score: 84 },
  { label: "Execution Complexity", translation: "Umsetzbarkeit", score: 72 },
  { label: "Founder Fit", translation: "Gründerprofil", score: 89 }
] as const;

export const exampleRatingScore = Math.round(
  exampleRatingMetrics.reduce((total, metric) => total + metric.score, 0) / exampleRatingMetrics.length
);

export const developmentFaqs = [
  { question: "Was bedeutet Unternehmensentwicklung bei VEYTRA?", answer: "Unternehmensentwicklung verbindet bei VEYTRA die Entwicklung neuer Geschäftsmodelle, die Validierung von Geschäftsideen, Unternehmenswachstum und die Verbesserung der Profitabilität. Unsere Beratung setzt bei der aktuellen unternehmerischen Frage an und übersetzt die Analyse in eine konkrete Entscheidungsgrundlage." },
  { question: "Welche Leistung passt zu meiner aktuellen Situation?", answer: "DISCOVER passt, wenn Sie gründen möchten und noch ein Geschäftsmodell suchen. VALIDATE prüft eine vorhandene Idee. GROW untersucht die Wachstumshebel eines funktionierenden Unternehmens. IMPROVE fokussiert Kosten, Prozesse, Marge und EBIT. Im Erstgespräch klären wir gemeinsam den passenden Einstieg." },
  { question: "Muss ich alle vier Phasen durchlaufen?", answer: "Nein. Jede Leistung kann eigenständig sinnvoll sein. Sie steigen dort ein, wo Ihre nächste Entscheidung ansteht. Wenn beispielsweise ein etabliertes Unternehmen ein neues Geschäftsfeld prüfen möchte, kann VALIDATE der passende Einstieg sein." },
  { question: "Garantiert das VEYTRA Rating wirtschaftlichen Erfolg?", answer: "Nein. Das Rating ist eine strukturierte Entscheidungsgrundlage und keine Erfolgsprognose. Datenqualität, Annahmen, Risiken und offene Fragen werden eingeordnet. Marktentwicklung und Umsetzung bleiben mit Unsicherheit verbunden." }
];
