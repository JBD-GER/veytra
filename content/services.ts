export type ServiceModule = {
  title: string;
  description: string;
  results: string[];
};

export const serviceModules: ServiceModule[] = [
  {
    title: "Venture Thesis",
    description:
      "Wir starten nicht mit einem Kundenbriefing, sondern mit einer unternehmerischen These: Welches Problem ist groß genug, dringend genug und baubar?",
    results: [
      "Markt- und Problemthese",
      "Zielkundensegmente",
      "Investment- und Risikologik"
    ]
  },
  {
    title: "Validation Engine",
    description:
      "Wir testen nicht Meinungen, sondern Signale: Nachfrage, Zahlungsbereitschaft, Vertriebszugang und wirtschaftliche Plausibilität.",
    results: [
      "Customer Interviews",
      "Kaufabsichtsprüfung",
      "Go/No-Go-Entscheidung"
    ]
  },
  {
    title: "Company Build",
    description:
      "Wenn die These trägt, bauen wir das Unternehmen: Produkt, Tech, Vertrieb, Operations und erste Management-Struktur.",
    results: [
      "MVP und technische Basis",
      "erste Go-to-Market-Strecke",
      "operative Routinen"
    ]
  },
  {
    title: "Founder & Talent",
    description:
      "Ein Venture braucht Menschen, die es tragen. Wir suchen, bewerten und installieren Founder, Operator und Schlüsselrollen.",
    results: [
      "Founder-in-Residence",
      "CEO/CTO-Suche",
      "Operator-Onboarding"
    ]
  },
  {
    title: "Capital & Ownership",
    description:
      "Wir denken Finanzierung und Ownership von Anfang an mit: Studio-Anteil, Founder-Anteile, Corporate-Beteiligung oder Investorenzugang.",
    results: [
      "Equity-Struktur",
      "Pre-Seed-Logik",
      "Investor Readiness"
    ]
  },
  {
    title: "Spin-out Setup",
    description:
      "Das Ziel ist kein Projektabschluss, sondern ein eigenständiges Unternehmen mit sauberem Setup und klarer Verantwortlichkeit.",
    results: [
      "GmbH-Setup",
      "Governance",
      "Verträge und Admin"
    ]
  },
  {
    title: "Portfolio Support",
    description:
      "Nach dem Start bleibt das Venture Teil des Studio-Portfolios: mit Sparring, Reporting, Hiring-Hilfe und Kapitalzugang.",
    results: [
      "Board- und KPI-Sparring",
      "Fundraising-Unterstützung",
      "Netzwerkzugang"
    ]
  },
  {
    title: "Corporate Venture Build",
    description:
      "Für Unternehmen bauen wir Ventures außerhalb der Linienlogik: mit Build-Budget, klarer Beteiligung und eigener Venture-Verantwortung.",
    results: [
      "Build-Budget-Modell",
      "Joint-Venture-Logik",
      "Spin-off-Option"
    ]
  }
];

export type ProcessStep = {
  title: string;
  description: string;
  outcome: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Thesis",
    description: "Wir entwickeln oder prüfen eine Venture-These: Marktproblem, Zielkunden, Timing, Wettbewerb und wirtschaftliche Logik.",
    outcome: "eine klare These, warum aus diesem Problem ein Unternehmen entstehen kann"
  },
  {
    title: "De-risk",
    description: "Wir testen die kritischen Annahmen mit echten Kundensignalen, nicht mit Bauchgefühl oder Workshop-Konsens.",
    outcome: "belastbare Signale zu Nachfrage, Zahlungsbereitschaft und Vertriebszugang"
  },
  {
    title: "Build",
    description: "Wir bauen Produkt, Go-to-Market, Operations und erste Teamstruktur so weit auf, dass daraus ein echtes Venture wird.",
    outcome: "ein operativ laufendes Venture mit MVP, Kundenkontakt und Verantwortlichkeiten"
  },
  {
    title: "Spin out",
    description: "Wir geben dem Venture eigene Struktur: Company Setup, Ownership, Founder-Team, Governance und Kapitalpfad.",
    outcome: "ein eigenständiges Unternehmen mit Team, Cap Table und nächstem Wachstumsschritt"
  }
];

export const comparisonRows = [
  {
    model: "Klassische Beratung",
    focus: "Analyse, Strategie und Empfehlungen",
    limitation: "baut in der Regel kein Startup, kein MVP und kein Gründerteam",
    fit: "passend, wenn die Umsetzung intern bereits sicher steht"
  },
  {
    model: "Klassische Agentur",
    focus: "Design, Website, Kampagnen oder einzelne Gewerke",
    limitation: "übernimmt selten Marktvalidierung, Produktlogik, Teamaufbau und Fundraising",
    fit: "passend, wenn Geschäftsmodell, Zielgruppe und Produkt bereits validiert sind"
  },
  {
    model: "Accelerator",
    focus: "Programm, Mentoring, Netzwerk und Demo Day",
    limitation: "begleitet Teams, baut aber meistens nicht operativ mit",
    fit: "passend, wenn bereits ein Gründerteam und ein MVP vorhanden sind"
  },
  {
    model: "Investor",
    focus: "Kapital, Netzwerk und Governance",
    limitation: "stellt selten ein In-House-Team für Produkt, Sales, Legal und Recruiting",
    fit: "passend, wenn das Startup vor allem Kapital braucht"
  },
  {
    model: "Venture Studio",
    focus: "Venture-These, De-Risking, Company Build, Spin-out, Teamaufbau und Kapitalpfad",
    limitation: "selektiert hart und arbeitet nur an Ideen mit echter Venture-Logik",
    fit: "passend, wenn aus einer validierten Chance schnell ein eigenständiges Startup werden soll",
    highlighted: true
  }
];
