export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQPageKey = "home" | "ventureStudio" | "aiVentureStudio" | "founders" | "companies" | "startups";

export const faqs: Record<FAQPageKey, FAQItem[]> = {
  home: [
    {
      question: "Was ist ein Venture Studio?",
      answer:
        "Ein Venture Studio baut Startups in Serie. Es ist kein Accelerator und kein reiner Investor, sondern ein operativer Company Builder: Wir entwickeln Venture-Thesen, validieren Marktprobleme, bauen MVPs, strukturieren Ownership, gründen Ventures aus und unterstützen Teamaufbau und Fundraising."
    },
    {
      question: "Was übernimmt Veytra konkret?",
      answer:
        "Wir übernehmen die Company-Building-Arbeit: Venture-These, Validierung, MVP, Go-to-Market, Operations, Ownership-Struktur, Gründerteam, Spin-out-Setup und Fundraising-Vorbereitung."
    },
    {
      question: "Wie schnell kann ein Venture starten?",
      answer:
        "Der Aufbau folgt keinem starren Kalender, sondern klaren Risikostufen: Thesis, De-risk, Build und Spin-out. Entscheidend ist, echte Kundensignale zu erzeugen, ohne blind Produktbudget zu verbrennen."
    },
    {
      question: "Was kostet die Zusammenarbeit?",
      answer:
        "Bei Corporate Venture Building finanzieren Unternehmen den Build und teilen sich dafür die Equity am neuen Venture. Bei klassischen Studio-Ventures investieren wir Kapital und operative Manpower und erhalten dafür einen signifikanten Anteil am Startup."
    },
    {
      question: "Wie viel Equity nimmt ein Venture Studio?",
      answer:
        "Wenn das Studio Kapital, Team, Infrastruktur und Anfangsrisiko trägt, sind signifikante Anteile üblich, häufig im Bereich von 30 % bis 50 %. Der konkrete Deal hängt von Kapitalbedarf, Reifegrad, Gründerteam, Unternehmenspartnern und Risikoverteilung ab."
    },
    {
      question: "Für wen ist Veytra geeignet?",
      answer:
        "Für Gründer, Operator, Unternehmen und Investoren, die aus einer validierten Idee oder einem Marktproblem schnell ein eigenständiges, skalierbares Unternehmen bauen wollen und dafür ein operatives Team statt nur Beratung suchen."
    },
    {
      question: "Ersetzt ihr das Gründerteam?",
      answer:
        "Nein. Wir können ein Gründer- oder Management-Team rekrutieren, einsetzen und operativ unterstützen. Das Ziel ist aber ein eigenständiges Startup mit klarer Verantwortung, nicht eine dauerhaft abhängige Agenturbeziehung."
    }
  ],
  ventureStudio: [
    {
      question: "Was ist ein Venture Studio?",
      answer:
        "Ein Venture Studio ist ein operativer Company Builder. Es nimmt validierte Ideen oder Marktprobleme und baut daraus eigenständige Unternehmen: mit MVP, Go-to-Market, Back-Office, Teamaufbau, Kapital und Fundraising-Unterstützung."
    },
    {
      question: "Wie unterscheidet sich ein Venture Studio von einer Agentur?",
      answer:
        "Eine Agentur liefert Leistungen gegen Honorar. Ein Venture Studio baut Unternehmen und arbeitet mit Ownership-Logik: These, Validierung, Produkt, Vertrieb, Founder-Team, Governance, Ausgründung und Kapitalfähigkeit."
    },
    {
      question: "Ist ein Venture Studio dasselbe wie ein Accelerator?",
      answer:
        "Nein. Ein Accelerator begleitet vorhandene Teams über ein Programm. Ein Venture Studio baut operativ mit, stellt Infrastruktur und Team bereit, investiert Zeit und Kapital und hält dafür Anteile am neuen Startup."
    },
    {
      question: "Arbeitet Veytra mit Beteiligungen?",
      answer:
        "Ja, wenn wir als operativer Co-Builder eigenes Kapital, Team und Risiko einbringen. Bei Corporate-Projekten kann das Modell aus Build-Budget plus gemeinsamer Equity bestehen. Die Struktur wird vor Projektstart transparent vereinbart."
    },
    {
      question: "Welche Startups passen in ein Venture Studio?",
      answer:
        "Passend sind digitale, skalierbare Geschäftsmodelle mit klarem Marktproblem, schneller MVP-Fähigkeit und realistischem Potenzial für wiederholbaren Vertrieb. Reine Beratungsangebote oder sehr lokale Geschäftsmodelle passen meist weniger gut."
    },
    {
      question: "Wie startet die Zusammenarbeit?",
      answer:
        "Wir prüfen Idee, Marktproblem, Zielgruppe, vorhandene Ressourcen, Kapitalbedarf und Deal-Erwartung. Wenn die Venture-Logik stimmt, definieren wir Gate-Kriterien, MVP-Scope, Phasenplan und Beteiligungs- oder Build-Budget-Modell."
    }
  ],
  aiVentureStudio: [
    {
      question: "Was ist ein AI Venture Studio?",
      answer:
        "Ein AI Venture Studio nutzt KI, um Venture Building schneller zu machen: Research, Interview-Auswertung, Prototyping, Produktflows, Content, Sales-Automation und Fundraising-Vorbereitung werden beschleunigt. Die operative Verantwortung bleibt beim Studio-Team."
    },
    {
      question: "Was ist der Unterschied zu einem klassischen Venture Studio?",
      answer:
        "Der Kern bleibt Company Building. Der Unterschied liegt in der Arbeitsgeschwindigkeit: KI hilft, Märkte schneller zu analysieren, MVPs schneller zu spezifizieren, Go-to-Market-Varianten schneller zu testen und Back-Office-Prozesse früher zu automatisieren."
    },
    {
      question: "Kann KI eine Geschäftsidee validieren?",
      answer:
        "KI kann Hypothesen, Datenpunkte und Muster liefern. Echte Validierung entsteht erst durch reale Kunden: Gespräche, Zahlungsbereitschaft, Pilotkunden, Nutzung und wiederholbare Nachfrage."
    },
    {
      question: "Welche AI-Ventures sind geeignet?",
      answer:
        "Geeignet sind AI-Produkte, AI-gestützte Workflows, B2B-Automatisierung, Datenprodukte, Vertical SaaS und interne Tools mit klarem Effizienz- oder Umsatzhebel. Entscheidend ist nicht der AI-Hype, sondern ein zahlungsbereites Problem."
    },
    {
      question: "Übernehmt ihr auch technische Umsetzung?",
      answer:
        "Ja. Wir übernehmen MVP-Scope, UI/UX, technische Architektur und Entwicklung. Je nach Venture bauen wir selbst, ergänzen Spezialisten oder rekrutieren früh einen CTO beziehungsweise ein technisches Führungsteam."
    },
    {
      question: "Wie startet ein AI-Venture-Studio-Projekt?",
      answer:
        "Wir klären zuerst Marktproblem, Datenlage, Zielgruppe, Use Case, rechtliche Grenzen und MVP-Scope. Danach starten Research, Prototyping, Kundentests und die Entscheidung, ob das Venture gebaut, angepasst oder gestoppt wird."
    }
  ],
  founders: [
    {
      question: "Ist Veytra ein technischer Co-Founder?",
      answer:
        "Veytra ersetzt keinen einzelnen CTO im klassischen Sinn, übernimmt aber in der frühen Phase viele Aufgaben, die sonst ein technischer Co-Founder oder Produktteam tragen würde: Scope, Architektur, MVP, Validierung und Produktentscheidungen."
    },
    {
      question: "Muss ich schon gegründet haben?",
      answer:
        "Nein. Gerade vor der Gründung kann Veytra sinnvoll sein, weil wir prüfen, ob Idee, Markt, Rolle, Modell und Aufbau überhaupt stark genug für den nächsten Schritt sind."
    },
    {
      question: "Muss ich eine fertige Idee haben?",
      answer:
        "Nein. Eine klare Beobachtung, Problemnähe, Branchenwissen oder Kundenzugang kann reichen. Aus diesem Material entwickeln wir zuerst eine prüfbare Venture-These."
    },
    {
      question: "Was passiert, wenn meine Idee nicht tragfähig ist?",
      answer:
        "Dann wird nicht aus Prinzip weitergebaut. Genau dafür gibt es Validierung: Schwache Annahmen werden angepasst oder gestoppt, bevor unnötig Zeit und Budget in einen falschen Build fließen."
    },
    {
      question: "Baut Veytra auch nur MVPs?",
      answer:
        "Ein MVP kann Teil der Zusammenarbeit sein. Veytra denkt aber nicht nur in Umsetzung, sondern in Venture-Logik: Markt, Angebot, Produktkern, Go-to-Market, Kennzahlen und nächste Entscheidung."
    },
    {
      question: "Wie unterscheidet sich Veytra von einer Agentur?",
      answer:
        "Eine Agentur baut meist nach Briefing. Veytra hinterfragt, priorisiert, validiert und baut mit. Ziel ist kein abgearbeitetes Projekt, sondern ein prüfbares Geschäftsmodell."
    },
    {
      question: "Wie funktioniert eine Beteiligung?",
      answer:
        "Eine Beteiligung ist möglich, wenn Veytra operativ Verantwortung, Risiko und Aufbauarbeit übernimmt. Sie hängt von Gründer-Fit, Kapitalbedarf, Reifegrad, Marktpotenzial und Rollenverteilung ab."
    },
    {
      question: "Kann ich auch ohne großes Budget starten?",
      answer:
        "Grundsätzlich ja, wenn Markt- und Gründer-Fit stark genug sind. Nicht jede Idee eignet sich für ein Equity-Modell; häufig startet die Zusammenarbeit phasenweise mit These und Validierung."
    },
    {
      question: "Eignet sich Veytra für nicht-technische Gründer?",
      answer:
        "Ja. Besonders dann, wenn du Problemnähe, Fachwissen, Kundenzugang oder Branchenverständnis einbringst, aber Produktteam, technische Umsetzung und Go-to-Market-Struktur fehlen."
    },
    {
      question: "Welche Arten von Ventures baut Veytra mit Gründern?",
      answer:
        "Vor allem digitale Geschäftsmodelle wie B2B-SaaS, AI-Produkte, Plattformen, Marktplätze, produktisierte Services, Automatisierungen und Vertical-SaaS-Ansätze."
    },
    {
      question: "Wie schnell kann ein erster MVP entstehen?",
      answer:
        "Das hängt von Scope, Datenlage, Komplexität und Entscheidungswegen ab. Ziel ist immer ein schlanker Produktkern, der schnell echte Signale erzeugt, statt eine große Roadmap blind zu bauen."
    },
    {
      question: "Bleibe ich als Gründer in der Kontrolle?",
      answer:
        "Ja. Veytra übernimmt operative Aufbauarbeit und Sparring, aber deine Rolle, Verantwortung und Entscheidungslogik werden transparent geklärt. Ziel ist ein handlungsfähiges Venture, keine Abhängigkeit."
    }
  ],
  companies: [
    {
      question: "Ist Veytra eine Beratung oder ein Umsetzungspartner?",
      answer:
        "Veytra ist ein operatives Venture Studio für Unternehmen. Wir beraten nicht nur zur Strategie, sondern bauen Venture-These, MVP, Go-to-Market, Validierung und operative Struktur aktiv mit auf."
    },
    {
      question: "Was unterscheidet euch von einer Agentur?",
      answer:
        "Eine Agentur liefert ein Gewerk. Veytra arbeitet auf Venture-Logik: Marktproblem, Produktkern, Nachfrage, Ownership, Governance und Skalierungsentscheidung werden zusammen gedacht."
    },
    {
      question: "Wann lohnt sich Corporate Venture Building?",
      answer:
        "Wenn ein Unternehmen Kundenzugang, Daten, Branchenwissen oder eine Marktchance besitzt, der Aufbau intern aber zu langsam ist oder kein freies Produktteam verfügbar ist."
    },
    {
      question: "Welche Vorhaben eignen sich für Unternehmen?",
      answer:
        "Geeignet sind neue digitale Geschäftsmodelle, AI-Produkte, B2B-SaaS, Plattformen, Automatisierungsprodukte, datenbasierte Angebote, Spin-offs und MVPs für neue Kundensegmente."
    },
    {
      question: "Wie schnell kann ein MVP entstehen?",
      answer:
        "Das hängt von Scope, Datenzugang, Entscheidungswegen und technischer Komplexität ab. Ziel ist immer ein schlanker MVP, der echte Nachfrage messbar macht, bevor eine große Roadmap finanziert wird."
    },
    {
      question: "Muss das Venture ausgegründet werden?",
      answer:
        "Nein. Ein Venture kann intern skaliert, angepasst, gestoppt oder als GmbH beziehungsweise Joint Venture ausgegründet werden. Die passende Struktur wird anhand der Marktsignale vorbereitet."
    },
    {
      question: "Wie funktioniert Equity bei Corporate Ventures?",
      answer:
        "Die Beteiligungslogik hängt von Build-Budget, Risiko, Veytra-Beitrag, IP, Datenzugang und Zielstruktur ab. Sie wird früh vorbereitet und bei Bedarf mit Legal- und Steuerexperten finalisiert."
    },
    {
      question: "Was passiert, wenn die Validierung negativ ist?",
      answer:
        "Dann wird nicht aus Prinzip weitergebaut. Kampagne, MVP oder Produktpfad werden gestoppt oder angepasst. Ziel ist, Budget zu schützen und klare Entscheidungen früher zu treffen."
    },
    {
      question: "Können interne Teams eingebunden werden?",
      answer:
        "Ja. Veytra ergänzt interne Teams und übernimmt vor allem die frühe Aufbauphase. Unternehmenswissen, Vertrieb, Fachbereiche und Produktteams können gezielt in Gates, Tests und Übergabe eingebunden werden."
    },
    {
      question: "Eignet sich das auch für den Mittelstand?",
      answer:
        "Ja. Gerade mittelständische Unternehmen haben oft Kundennähe, Prozesswissen und Branchenvertrauen, aber kein separates Venture-Team. Daraus können neue digitale Geschäftsmodelle entstehen."
    },
    {
      question: "Welche Rolle spielt AI?",
      answer:
        "AI ist kein Selbstzweck. Sie wird relevant, wenn Daten, Fachlogik oder Prozesse in ein nützliches Produkt, eine Automatisierung oder ein skalierbares Geschäftsmodell übersetzt werden können."
    }
  ],
  startups: [
    {
      question: "Ist Veytra eine Agentur für Startups?",
      answer:
        "Nein. Veytra arbeitet nicht nur nach Briefing. Wir hinterfragen Scope, Markt, Funnel und Prioritäten und bauen operativ an den Signalen mit, die die nächste Entscheidung ermöglichen."
    },
    {
      question: "Für welche Startup-Phase eignet sich Veytra?",
      answer:
        "Vor allem für Pre-Seed-, MVP-, Seed- und frühe PMF-Phasen, wenn Produkt, Go-to-Market, Daten, Growth oder Fundraising-Readiness operativ geschärft werden müssen."
    },
    {
      question: "Helft ihr auch, wenn wir schon ein MVP haben?",
      answer:
        "Ja. Gerade dann wird Veytra relevant: Wir prüfen Produktkern, Nutzung, Funnel, Tracking, Pricing, Zielkunde und nächste Tests, damit aus dem MVP belastbarere Signale entstehen."
    },
    {
      question: "Könnt ihr Product-Market-Fit garantieren?",
      answer:
        "Nein. Product-Market-Fit lässt sich nicht garantieren. Veytra hilft aber, schneller belastbare Markt-, Produkt- und Growth-Signale zu erzeugen und bessere Entscheidungen zu treffen."
    },
    {
      question: "Unterstützt Veytra beim Fundraising?",
      answer:
        "Wir strukturieren Produkt-, Markt- und Growth-Signale so, dass die nächste Funding-Story belastbarer wird: Milestones, Kennzahlen, Roadmap, Datenraum und Investor-Logik."
    },
    {
      question: "Wie unterscheidet ihr euch von einem Accelerator?",
      answer:
        "Ein Accelerator arbeitet oft mit Programmen, Mentoren und Demo Days. Veytra arbeitet operativ am Produkt, Funnel, Tracking, Build und an der nächsten Geschäftsentscheidung."
    },
    {
      question: "Arbeitet ihr auch gegen Equity?",
      answer:
        "Ja, wenn Team-Fit, Marktpotenzial, Momentum und Rolle passen. Equity ergibt nur Sinn, wenn Veytra echte operative Verantwortung übernimmt."
    },
    {
      question: "Können wir mit einem kleinen Build-Sprint starten?",
      answer:
        "Ja. Ein klar begrenzter Sprint kann sinnvoll sein, um einen Engpass zu prüfen: Produktkern, Funnel, Tracking, AI-Funktion, Onboarding oder Fundraising-Readiness."
    },
    {
      question: "Helft ihr bei AI-Produkten?",
      answer:
        "Ja. Wir helfen, AI-Funktionen so zu strukturieren, dass daraus ein konkreter Kundennutzen, ein wiederholbarer Use Case und ein zahlbares Produkt entsteht."
    },
    {
      question: "Baut ihr auch technische MVPs oder nur Strategie?",
      answer:
        "Wir arbeiten nicht nur strategisch. Veytra kann MVPs, Produktlogik, Landingpages, Tracking, Automatisierungen, AI-Funktionen und interne Tools operativ mitbauen."
    },
    {
      question: "Wie schnell kann ein Sprint starten?",
      answer:
        "Das hängt von Scope, Datenzugang und Entscheidungswegen ab. Ziel ist ein klar abgegrenzter Sprint, der schnell nutzbare Signale erzeugt, statt eine große Roadmap zu öffnen."
    },
    {
      question: "Bleibt unser Team in der Kontrolle?",
      answer:
        "Ja. Veytra ergänzt das Team operativ. Rollen, Verantwortlichkeiten, Entscheidungen und Ownership werden vorab geklärt."
    },
    {
      question: "Was passiert, wenn sich eine Annahme als falsch herausstellt?",
      answer:
        "Dann wird sie nicht künstlich weiterfinanziert. Der Sprint wird angepasst, gestoppt oder neu ausgerichtet, damit Budget und Fokus nicht in die falsche Richtung laufen."
    }
  ]
};
