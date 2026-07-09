import { ratgeberPostPlans, type RatgeberPostPlan } from "@/content/ratgeber";

export type ArticleGraphic = {
  title: string;
  caption: string;
  items: {
    label: string;
    title: string;
    text: string;
  }[];
};

export type ArticleSection = {
  id: string;
  title: string;
  kicker?: string;
  paragraphs: string[];
  graphic?: ArticleGraphic;
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type RatgeberArticle = {
  slug: string;
  plan: RatgeberPostPlan;
  author: string;
  updatedAt: string;
  intro: string[];
  sections: ArticleSection[];
  faqs: ArticleFaq[];
  relatedSlugs: string[];
};

export type RatgeberArticlePreview = {
  slug: string;
  title: string;
  categoryId: RatgeberPostPlan["categoryId"];
  categoryLabel: string;
  publishAt: string;
  readingTime: string;
  summary: string;
  focusKeyword: string;
  coverImage: string;
  imageAlt: string;
};

const planBySlug = new Map(ratgeberPostPlans.map((post) => [post.slug, post]));

function getPlan(slug: string) {
  const plan = planBySlug.get(slug);

  if (!plan) {
    throw new Error(`Missing Ratgeber plan for article: ${slug}`);
  }

  return plan;
}

export const ratgeberArticles: RatgeberArticle[] = [
  {
    slug: "was-ist-ein-venture-studio-und-wann-lohnt-sich-das-modell",
    plan: getPlan("was-ist-ein-venture-studio-und-wann-lohnt-sich-das-modell"),
    author: "Veytra Redaktion",
    updatedAt: "2026-07-21T08:30:00+02:00",
    intro: [
      "Ein Venture Studio ist kein klassischer Dienstleister, kein reiner Investor und kein Accelerator mit festem Programm. Ein Venture Studio ist eine operative Company-Building-Struktur: Es findet, prüft und baut neue Geschäftsmodelle mit eigenem Team, wiederholbarem Prozess und klarer Beteiligungslogik. Für Gründer, Unternehmen und Investoren ist das Modell interessant, wenn eine Chance nicht nur Kapital oder Beratung braucht, sondern echte Umsetzungskraft.",
      "Die zentrale Frage lautet deshalb nicht: Wer kann eine App bauen? Die bessere Frage lautet: Wer kann aus einer unsicheren Marktannahme ein belastbares Venture machen? Genau dort beginnt der Unterschied. Ein gutes Venture Studio verbindet Research, Validierung, Produktentwicklung, Go-to-Market, Operations und Kapitalfähigkeit zu einem System, das frühe Risiken schneller sichtbar macht."
    ],
    sections: [
      {
        id: "definition",
        kicker: "Definition",
        title: "Was ein Venture Studio wirklich macht",
        paragraphs: [
          "Ein Venture Studio entwickelt neue Unternehmen nicht nur auf Folien, sondern durch praktische Arbeit am Markt. Am Anfang steht häufig eine Idee, ein Branchenproblem, ein Kundenzugang, ein Datensatz oder eine Technologiechance. Das Studio übersetzt diesen Rohstoff in eine Venture-These: Für wen entsteht welcher Nutzen, warum ist das Problem dringend, wie könnte Geld verdient werden und welche Annahmen müssen zuerst geprüft werden?",
          "Danach folgt nicht automatisch ein großes Produktprojekt. Ein Studio entscheidet bewusst, welche Lernschleife als Nächstes nötig ist. Das kann eine Interviewserie sein, ein Smoke Test, eine Landingpage, ein Concierge MVP, ein AI-Prototyp oder ein erster Softwarekern. Entscheidend ist, dass jede Phase eine Geschäftsmodellfrage beantwortet. Das Studio baut also nicht einfach mehr Produkt, sondern reduziert Unsicherheit."
        ],
        graphic: {
          title: "Venture-Studio-System",
          caption: "Ein Studio verbindet mehrere Disziplinen, die in frühen Ventures sonst oft getrennt oder gar nicht vorhanden sind.",
          items: [
            {
              label: "01",
              title: "Research",
              text: "Problem, Markt, Wettbewerb, Zielgruppe und Timing werden zu einer prüfbaren These."
            },
            {
              label: "02",
              title: "Build",
              text: "Aus der These entsteht der kleinste Produktkern, der ein echtes Marktsignal erzeugen kann."
            },
            {
              label: "03",
              title: "Launch",
              text: "Positionierung, Funnel, Sales und Feedback zeigen, ob Nachfrage wiederholbar wird."
            },
            {
              label: "04",
              title: "Company",
              text: "Bei starken Signalen folgen Rollen, Governance, Kapitalpfad und operative Skalierung."
            }
          ]
        }
      },
      {
        id: "unterschied",
        title: "Warum das Modell anders ist als Beratung, Agentur oder Investor",
        paragraphs: [
          "Beratung hilft häufig bei Strategie, Analyse und Entscheidungsvorlagen. Agenturen helfen bei Umsetzung. Investoren liefern Kapital, Netzwerk und Erwartungsdruck. Alle drei Rollen können wertvoll sein, aber sie lösen nicht automatisch das Kernproblem früher Ventures: Es gibt zu viele offene Annahmen und zu wenige Menschen, die sie operativ testen.",
          "Ein Venture Studio ist näher am Maschinenraum. Es arbeitet an Markt, Produkt und Organisation gleichzeitig. Wenn die Zielgruppe nicht reagiert, wird nicht nur das Design angepasst, sondern die These neu geprüft. Wenn ein MVP technisch funktioniert, aber niemand zahlen will, ist das kein kleiner Bug, sondern ein Geschäftsmodellproblem. Diese Verantwortung macht das Studio-Modell anspruchsvoll, aber auch wirksam."
        ]
      },
      {
        id: "wann-lohnt-es-sich",
        title: "Wann sich ein Venture Studio lohnt",
        paragraphs: [
          "Das Modell lohnt sich besonders, wenn eine Idee operativ komplexer ist als ein einzelnes Projekt. Gründer profitieren, wenn ihnen Produktteam, technische Führung, Go-to-Market-Erfahrung oder Kapitalpfad fehlen. Unternehmen profitieren, wenn sie zwar Kundenzugang, Branchenwissen oder Daten besitzen, aber neue digitale Geschäftsmodelle außerhalb der Linienorganisation schneller testen wollen.",
          "Ein Studio lohnt sich nicht für jede Situation. Wenn Ziel, Scope und Lösung bereits vollständig klar sind, kann eine spezialisierte Agentur besser passen. Wenn ein Startup bereits ein starkes Team, klare Traktion und Investoreninteresse hat, kann Kapital wichtiger sein als Co-Building. Das Venture-Studio-Modell ist vor allem dort stark, wo die Kombination aus Unsicherheit, Geschwindigkeit und Umsetzungskraft zählt."
        ]
      },
      {
        id: "prozess",
        title: "Der typische Ablauf von These bis Company Build",
        paragraphs: [
          "Ein sauberer Studio-Prozess beginnt mit Einordnung. Die Idee wird nicht gefeiert, sondern zerlegt: Zielkunde, Schmerz, bestehende Alternativen, Zahlungsbereitschaft, Wettbewerb, Vertriebskanal, technische Machbarkeit und regulatorische Risiken. Daraus entsteht eine erste Priorisierung. Welche Annahme kann das Venture sofort zerstören? Welche Annahme kann es deutlich stärker machen?",
          "Erst danach beginnt der MVP-Scope. Ein MVP ist im Studio-Kontext kein kleines Produkt mit halber Qualität, sondern ein Produktkern mit klarem Testzweck. Nach dem Launch werden Signale ausgewertet: Gespräche, Conversion, Nutzung, Wiederkehr, Einwände, Zahlungsbereitschaft und Akquisekosten. Daraus folgt eine Entscheidung: stoppen, pivotieren, weiter testen oder in Company Build überführen."
        ],
        graphic: {
          title: "Chronologischer Build-Pfad",
          caption: "Ein Venture Studio arbeitet in Entscheidungsschleifen, nicht in starren Projektphasen.",
          items: [
            {
              label: "These",
              title: "Ausgangslage klären",
              text: "Problem, Zielkunde, Nutzenversprechen und Marktannahmen werden präzise formuliert."
            },
            {
              label: "Test",
              title: "Marktsignal erzeugen",
              text: "Interviews, Landingpages, Angebote oder Prototypen prüfen Nachfrage und Kaufdruck."
            },
            {
              label: "MVP",
              title: "Produktkern bauen",
              text: "Nur die Funktionen werden gebaut, die zur nächsten Geschäftsmodellentscheidung führen."
            },
            {
              label: "Scale",
              title: "Struktur schaffen",
              text: "Bei starken Signalen entstehen Team, Prozesse, Kapitalpfad und echte Venture-Organisation."
            }
          ]
        }
      },
      {
        id: "deal-modell",
        title: "Wie Deal-Modelle in Venture Studios gedacht werden",
        paragraphs: [
          "Weil ein Venture Studio operativ mitbaut, muss die Zusammenarbeit anders bewertet werden als ein normaler Auftrag. Es gibt Cash-Modelle, Equity-Modelle und hybride Modelle. Je mehr Risiko, Teamleistung, Produktentwicklung und Go-to-Market-Verantwortung ein Studio übernimmt, desto eher entsteht eine Beteiligungskomponente. Je klarer und bezahlter der Auftrag ist, desto näher liegt ein Cash-Modell.",
          "Fair wird ein Deal, wenn Beiträge transparent gemacht werden: Wer bringt Kapital, wer bringt IP, wer bringt Kundenzugang, wer baut Produkt, wer verkauft, wer übernimmt Geschäftsführung, wer trägt laufende Kosten? Ein guter Studio-Deal versteckt diese Fragen nicht. Er macht sie früh sichtbar, damit spätere Finanzierungsrunden, Rollen und Erwartungen nicht kollidieren."
        ]
      },
      {
        id: "entscheidung",
        title: "Wie du entscheidest, ob ein Venture Studio zu dir passt",
        paragraphs: [
          "Die beste Entscheidungsfrage lautet: Braucht das Vorhaben nur Umsetzung oder braucht es einen Partner für Risikoabbau, Produktlogik und Marktzugang? Wenn die Antwort nur Umsetzung ist, reicht oft ein klassisches Projekt. Wenn aber Zielgruppe, Angebot, MVP-Scope, Sales Motion und Kapitalpfad noch offen sind, kann ein Venture Studio den entscheidenden Unterschied machen.",
          "Achte bei der Auswahl auf operative Substanz. Ein Studio sollte erklären können, wie es validiert, wie es MVPs scoped, wie es Marktsignale misst, welche Rollen es übernimmt und wie es mit Stop-Entscheidungen umgeht. Ein Studio, das jede Idee bauen will, ist verdächtig. Ein gutes Studio ist bereit, auch Nein zu sagen, wenn die Signale nicht reichen."
        ]
      }
    ],
    faqs: [
      {
        question: "Was ist der wichtigste Unterschied zwischen Venture Studio und Agentur?",
        answer:
          "Eine Agentur setzt in der Regel ein definiertes Projekt um. Ein Venture Studio arbeitet früher und breiter: Es prüft die Venture-These, reduziert Marktrisiko, baut den MVP und hilft beim Go-to-Market."
      },
      {
        question: "Für wen eignet sich ein Venture Studio besonders?",
        answer:
          "Für Gründer ohne vollständiges Produkt- und Growth-Team, für Unternehmen mit neuen digitalen Geschäftsideen und für Startups, die schneller zu klaren Markt- und Produktentscheidungen kommen müssen."
      },
      {
        question: "Muss ein Venture Studio immer Anteile bekommen?",
        answer:
          "Nein. Es gibt Cash-, Equity- und hybride Modelle. Eine Beteiligung ist vor allem dann plausibel, wenn das Studio substanziell Risiko und operative Aufbauarbeit übernimmt."
      }
    ],
    relatedSlugs: [
      "venture-studio-vs-accelerator-der-unterschied-fuer-gruender",
      "venture-studio-vs-agentur-warum-umsetzung-allein-nicht-reicht"
    ]
  },
  {
    slug: "venture-studio-vs-accelerator-der-unterschied-fuer-gruender",
    plan: getPlan("venture-studio-vs-accelerator-der-unterschied-fuer-gruender"),
    author: "Veytra Redaktion",
    updatedAt: "2026-07-22T10:00:00+02:00",
    intro: [
      "Accelerator und Venture Studio werden oft in einem Atemzug genannt, weil beide Gründer in frühen Phasen unterstützen. Trotzdem sind die Modelle grundverschieden. Ein Accelerator ist meist ein zeitlich begrenztes Programm mit Mentoring, Netzwerk, Workshops und manchmal Kapital. Ein Venture Studio ist ein operativer Baupartner, der selbst Research, Produkt, Go-to-Market und Company Build übernimmt.",
      "Für Gründer ist dieser Unterschied wichtig, weil er entscheidet, welche Art Hilfe sie wirklich bekommen. Wer vor allem Zugang, Sparring, Demo Day und Investorenkontakte sucht, kann in einem Accelerator sehr gut aufgehoben sein. Wer dagegen ein fehlendes Produktteam, unklare Validierung, technische Architektur, Sales-Struktur oder operative Co-Founder-Kapazität braucht, sollte ein Venture Studio prüfen."
    ],
    sections: [
      {
        id: "accelerator",
        kicker: "Ausgangspunkt",
        title: "Was ein Accelerator leistet",
        paragraphs: [
          "Ein Accelerator beschleunigt Gründer vor allem durch Programmstruktur. Typisch sind Kohorten, feste Laufzeiten, Mentoren, Workshops, Investorentermine und klare Pitch-Meilensteine. Das ist besonders wertvoll, wenn Gründer bereits ein Team, eine Idee und erste Umsetzungskraft haben, aber Orientierung, Feedback und Zugang zum Startup-Ökosystem suchen.",
          "Die Verantwortung für Umsetzung bleibt jedoch größtenteils beim Gründerteam. Ein Accelerator wird selten selbst den MVP bauen, den Sales-Prozess führen oder das Produkt täglich weiterentwickeln. Er kann Impulse geben, Türen öffnen und Druck erzeugen. Aber er ersetzt kein operatives Produkt-, Tech- oder Growth-Team."
        ],
        graphic: {
          title: "Programm vs. operatives Build-System",
          caption: "Der Accelerator arbeitet meist am Kontext des Startups, das Studio arbeitet direkt am Venture mit.",
          items: [
            {
              label: "Accelerator",
              title: "Mentoring und Netzwerk",
              text: "Hilft bei Pitch, Feedback, Zugang, Investorenvorbereitung und Startup-Grundlagen."
            },
            {
              label: "Studio",
              title: "Bauen und validieren",
              text: "Übernimmt Research, MVP, Produktentscheidungen, Go-to-Market und operative Lernschleifen."
            },
            {
              label: "Team",
              title: "Gründerverantwortung",
              text: "Im Accelerator bleibt die operative Umsetzung stärker beim bestehenden Team."
            },
            {
              label: "Venture",
              title: "Gemeinsame Verantwortung",
              text: "Im Studio-Modell wird Aufbauarbeit häufig gemeinsam getragen und vertraglich abgebildet."
            }
          ]
        }
      },
      {
        id: "studio",
        title: "Was ein Venture Studio anders macht",
        paragraphs: [
          "Ein Venture Studio beginnt oft früher als ein Accelerator. Es kann eine Idee mitentwickeln, ein Marktproblem prüfen, Interviews führen, Prototypen bauen, technische Entscheidungen treffen und erste Nachfragekanäle aufsetzen. Dadurch entsteht nicht nur Unterstützung um das Gründerteam herum, sondern zusätzliche operative Kapazität im Venture selbst.",
          "Dieser Unterschied verändert auch die Dynamik. Ein Studio fragt nicht nur, wie ein Pitch überzeugender wird. Es fragt, ob das Problem stark genug ist, ob der MVP das richtige Lernziel hat, ob der Vertriebskanal erreichbar ist und ob das Geschäftsmodell später kapitalfähig werden kann. Es ist näher an der täglichen Arbeit und damit auch näher an harten Entscheidungen."
        ]
      },
      {
        id: "wann-accelerator",
        title: "Wann ein Accelerator die bessere Wahl ist",
        paragraphs: [
          "Ein Accelerator passt gut, wenn ein Gründerteam bereits stark genug ist, um Produkt und Vertrieb selbst zu treiben. Dann kann ein Programm helfen, das Tempo zu erhöhen, blinde Flecken sichtbar zu machen und Zugang zu Mentoren oder Investoren zu schaffen. Besonders wertvoll ist das, wenn ein Startup kurz vor einer Finanzierungsrunde steht oder mehr Struktur für Kommunikation und Pitch braucht.",
          "Auch für Teams, die lernen wollen, wie andere Gründer denken, kann eine Kohorte hilfreich sein. Der soziale Druck einer festen Gruppe, regelmäßige Termine und Demo-Day-Deadlines schaffen Fokus. Wer aber erwartet, dass im Accelerator plötzlich das fehlende Produktteam entsteht, wird meistens enttäuscht."
        ]
      },
      {
        id: "wann-studio",
        title: "Wann ein Venture Studio sinnvoller ist",
        paragraphs: [
          "Ein Venture Studio ist sinnvoller, wenn die Lücke nicht nur Wissen, sondern Umsetzung ist. Das gilt zum Beispiel für Gründer mit starkem Branchenzugang, aber ohne technische Co-Founder. Es gilt für Unternehmen mit Kundenzugang und Daten, aber ohne Venture-Team. Und es gilt für frühe Startups, deren MVP zwar existiert, deren Go-to-Market, Produktlogik oder Kapitalpfad aber noch unscharf ist.",
          "Das Studio-Modell eignet sich auch dann, wenn die Idee erst noch de-riskt werden muss. Ein Accelerator kann Feedback zur Idee geben, aber ein Studio baut Tests, führt Gespräche, erstellt Angebotslogik und bringt erste Artefakte in den Markt. Damit entstehen belastbarere Signale als durch Meinungen im Workshop."
        ],
        graphic: {
          title: "Entscheidungspfad für Gründer",
          caption: "Die richtige Wahl hängt weniger vom Label ab als von der Art der Lücke im Venture.",
          items: [
            {
              label: "Zugang",
              title: "Netzwerk fehlt",
              text: "Wenn vor allem Kontakte, Pitchfeedback und Investorenintro fehlen, passt ein Accelerator oft gut."
            },
            {
              label: "Team",
              title: "Build-Kapazität fehlt",
              text: "Wenn Produkt, Tech oder Growth operativ fehlen, ist ein Studio meist näher am Problem."
            },
            {
              label: "These",
              title: "Marktrisiko ist hoch",
              text: "Wenn Zielkunde, Zahlungsbereitschaft oder MVP-Scope offen sind, braucht es Validierung."
            },
            {
              label: "Scale",
              title: "Team ist bereit",
              text: "Wenn Umsetzung steht und nur Kapitalzugang fehlt, kann ein Accelerator reichen."
            }
          ]
        }
      },
      {
        id: "equity",
        title: "Equity, Kapital und Erwartungen unterscheiden sich deutlich",
        paragraphs: [
          "Acceleratoren arbeiten häufig mit kleinen Tickets, Programmleistung und einem standardisierten Beteiligungsmodell. Das kann für Gründer attraktiv sein, wenn die Konditionen fair sind und der Zugang zum Netzwerk echten Wert liefert. Der Umfang der Leistung bleibt aber begrenzt, weil ein Accelerator viele Teams gleichzeitig betreut.",
          "Ein Venture Studio investiert häufig wesentlich mehr operative Zeit pro Venture. Deshalb sind die Deal-Modelle individueller. Je nachdem, ob das Studio Produktteam, Technologie, Go-to-Market, Kapital oder Management-Kapazität einbringt, kann eine Beteiligung höher ausfallen. Das ist nicht automatisch gut oder schlecht. Entscheidend ist, ob der Gegenwert substanziell und transparent ist."
        ]
      },
      {
        id: "entscheidung",
        title: "Wie Gründer die richtige Entscheidung treffen",
        paragraphs: [
          "Gründer sollten zuerst ehrlich klären, welche Lücke sie schließen müssen. Fehlt Feedback oder fehlt Umsetzung? Fehlt Kapital oder fehlt ein Produktkern? Fehlt Netzwerk oder fehlt ein wiederholbarer Sales-Prozess? Sobald diese Frage klar ist, wird die Wahl deutlich einfacher.",
          "Ein guter Test ist die Kalenderfrage: Was passiert in den nächsten vier Wochen konkret? Beim Accelerator entstehen wahrscheinlich Gespräche, Mentoring-Sessions und Pitch-Iterationen. Beim Studio sollten Research, MVP-Scope, Markttests, Produktentscheidungen oder Sales-Artefakte entstehen. Wenn du operative Ergebnisse brauchst, sollte die Zusammenarbeit genau daran gemessen werden."
        ]
      }
    ],
    faqs: [
      {
        question: "Ist ein Venture Studio besser als ein Accelerator?",
        answer:
          "Nicht grundsätzlich. Ein Accelerator passt besser, wenn ein Team vor allem Programmstruktur, Feedback und Netzwerk braucht. Ein Venture Studio passt besser, wenn operative Build-Kapazität, Validierung und Go-to-Market fehlen."
      },
      {
        question: "Kann ein Startup erst Accelerator und später Studio nutzen?",
        answer:
          "Ja, das kann sinnvoll sein. Ein Accelerator kann Orientierung und Kontakte liefern, während ein Studio später konkrete Produkt-, Tech- oder Growth-Lücken schließen kann."
      },
      {
        question: "Warum nimmt ein Venture Studio oft mehr Equity?",
        answer:
          "Weil es häufig mehr operative Leistung und Risiko übernimmt. Die Beteiligung sollte aber immer im Verhältnis zu Teambeitrag, Kapital, IP, Verantwortung und Laufzeit bewertet werden."
      }
    ],
    relatedSlugs: [
      "was-ist-ein-venture-studio-und-wann-lohnt-sich-das-modell",
      "venture-studio-vs-agentur-warum-umsetzung-allein-nicht-reicht"
    ]
  },
  {
    slug: "venture-studio-vs-agentur-warum-umsetzung-allein-nicht-reicht",
    plan: getPlan("venture-studio-vs-agentur-warum-umsetzung-allein-nicht-reicht"),
    author: "Veytra Redaktion",
    updatedAt: "2026-07-23T13:30:00+02:00",
    intro: [
      "Viele Gründer und Unternehmen starten mit der Frage: Welche Agentur kann unsere App, Plattform oder Website bauen? Diese Frage ist verständlich, aber oft zu spät im Prozess. Bei frühen Ventures ist nicht nur die Umsetzung unsicher, sondern auch das Geschäftsmodell. Wer ist der erste Zielkunde? Welches Problem ist dringend genug? Welches Angebot wird gekauft? Welcher MVP-Scope ist wirklich nötig?",
      "Genau hier unterscheidet sich ein Venture Studio von einer Agentur. Eine Agentur ist stark, wenn ein Briefing, ein Zielbild und ein klarer Scope existieren. Ein Venture Studio ist stark, wenn genau diese Dinge noch entstehen müssen. Es liefert nicht nur Umsetzung, sondern hilft dabei, die richtige Umsetzung überhaupt erst zu bestimmen."
    ],
    sections: [
      {
        id: "agentur",
        kicker: "Rollenklärung",
        title: "Was eine Agentur gut kann",
        paragraphs: [
          "Eine gute Agentur kann Design, Entwicklung, Branding, Marketing oder Kampagnen professionell umsetzen. Wenn ein Unternehmen bereits weiß, was gebaut werden soll, warum es gebaut wird und wie Erfolg gemessen wird, kann eine Agentur enorm wertvoll sein. Sie bringt Spezialisten, Qualität, Projektmanagement und Produktionsgeschwindigkeit.",
          "Das Problem entsteht, wenn ein Venture noch gar kein klares Briefing haben kann. Dann wird ein unsicheres Geschäftsmodell in einen festen Scope gepresst. Features werden geplant, bevor bewiesen ist, dass sie gebraucht werden. Budgets fließen in Oberflächen, bevor klar ist, welcher Marktkanal funktioniert. Eine Agentur kann diese Fragen mitdenken, aber ihr Auftrag ist meistens Lieferung, nicht Venture-Verantwortung."
        ],
        graphic: {
          title: "Delivery vs. Venture-Verantwortung",
          caption: "Agentur und Studio unterscheiden sich vor allem darin, wer Marktrisiko und Geschäftsmodellfragen aktiv bearbeitet.",
          items: [
            {
              label: "Briefing",
              title: "Agentur",
              text: "Setzt einen definierten Scope um und optimiert Qualität, Zeitplan und Produktion."
            },
            {
              label: "These",
              title: "Studio",
              text: "Prüft, ob Scope, Zielkunde, Problem und Angebot überhaupt richtig gewählt sind."
            },
            {
              label: "Output",
              title: "Projekt",
              text: "Am Ende steht häufig ein abgenommenes Produkt oder eine Kampagne."
            },
            {
              label: "Outcome",
              title: "Venture",
              text: "Am Ende zählt, ob Marktsignale, Nutzung, Zahlungsbereitschaft und Lernfortschritt entstehen."
            }
          ]
        }
      },
      {
        id: "studio",
        title: "Was ein Venture Studio zusätzlich übernimmt",
        paragraphs: [
          "Ein Venture Studio arbeitet vor dem Briefing. Es hinterfragt Zielgruppe, Problem, Angebot, Preislogik, Vertriebskanal und MVP-Scope. Aus einer Idee wird nicht sofort ein Lastenheft, sondern eine Abfolge von Annahmen. Welche Annahme muss zuerst geprüft werden? Welche Entscheidung wird nach dem Test möglich? Welche Produktteile sind dafür nötig und welche nur Wunschliste?",
          "Das Studio übernimmt damit eine andere Verantwortung. Es will nicht nur liefern, sondern Risiko reduzieren. Wenn der Markt nicht reagiert, ist das Ergebnis nicht automatisch ein gescheitertes Projekt. Es ist ein wichtiges Signal, das zu Pivot, Stop oder neuer Positionierung führen kann. Diese Lernlogik ist der Kern des Studio-Ansatzes."
        ]
      },
      {
        id: "briefing-falle",
        title: "Die Briefing-Falle bei neuen Geschäftsmodellen",
        paragraphs: [
          "Die Briefing-Falle entsteht, wenn ein Team so tut, als wäre ein neues Geschäftsmodell bereits verstanden. Dann werden Anforderungen formuliert, obwohl die wichtigsten Fragen offen sind. Das erzeugt Scheinsicherheit: Alle können über Funktionen, Seiten, Designs und Timelines sprechen, aber niemand weiß, ob ein Kunde später kauft.",
          "Ein Venture Studio versucht, diese Falle zu vermeiden. Es beginnt mit Problembeweisen, Gesprächssignalen, Landing-Page-Tests, Angebotslogik oder manuellen Serviceprototypen. Erst wenn klarer ist, welcher Nutzen wirklich zählt, wird Software schwerer gemacht. Das spart nicht nur Budget, sondern schützt auch vor Produkten, die professionell aussehen und trotzdem am Markt vorbeigehen."
        ],
        graphic: {
          title: "Vom Briefing zur Venture-These",
          caption: "Bei frühen Ventures muss aus einem Wunsch zuerst eine überprüfbare These werden.",
          items: [
            {
              label: "Wunsch",
              title: "Wir brauchen eine Plattform",
              text: "Die Lösung ist bereits benannt, aber Problem, Nutzer und Zahlungslogik sind oft noch unklar."
            },
            {
              label: "These",
              title: "Wer zahlt wofür?",
              text: "Zielkunde, Schmerz, Alternative und Nutzenversprechen werden präzise formuliert."
            },
            {
              label: "Test",
              title: "Signal vor Scope",
              text: "Interviews, Angebot, Landingpage oder Concierge-Test prüfen die stärkste Annahme."
            },
            {
              label: "MVP",
              title: "Gezielt bauen",
              text: "Der Produktkern wird erst danach auf das wichtigste Lernziel ausgerichtet."
            }
          ]
        }
      },
      {
        id: "kosten",
        title: "Warum der billigere Projektpreis teuer werden kann",
        paragraphs: [
          "Eine Agentur kann auf den ersten Blick günstiger wirken, weil ein konkreter Scope bepreist wird. Das ist fair, wenn dieser Scope stimmt. Wenn der Scope aber auf falschen Annahmen basiert, wird ein günstiges Projekt teuer. Nicht wegen schlechter Umsetzung, sondern weil das falsche Produkt gebaut wird.",
          "Ein Studio-Prozess kann am Anfang unbequemer wirken, weil er Fragen stellt, bevor gebaut wird. Genau darin liegt der Wert. Ein nicht gebautes Feature, eine gestoppte Idee oder ein kleinerer MVP können wirtschaftlich viel besser sein als eine große Umsetzung, die erst nach Monaten zeigt, dass Nachfrage fehlt."
        ]
      },
      {
        id: "go-to-market",
        title: "Go-to-Market gehört nicht ans Ende",
        paragraphs: [
          "In klassischen Projekten wird Go-to-Market oft nach der Produktentwicklung geplant. Bei Ventures ist das gefährlich. Der Vertriebskanal beeinflusst Produkt, Preis, Onboarding, Messaging und sogar die technische Architektur. Ein B2B-SaaS, das über Founder-led Sales startet, braucht andere Artefakte als ein Self-Serve-Produkt mit SEO-Funnel.",
          "Ein Venture Studio denkt Go-to-Market deshalb von Anfang an mit. Schon während der Validierung entstehen Zielkundenlisten, Gesprächsleitfäden, Positionierung, Angebotsseiten, Pilotlogik und Tracking. Das Produkt wird nicht isoliert gebaut, sondern als Teil einer Markteintrittsmaschine."
        ]
      },
      {
        id: "entscheidung",
        title: "Wann Agentur, wann Venture Studio?",
        paragraphs: [
          "Eine Agentur ist die richtige Wahl, wenn du ein klares Projekt mit definiertem Ziel, Scope, Budget und Erfolgskriterium hast. Das kann eine Website, ein Rebranding, eine Kampagne oder eine klar spezifizierte Produktentwicklung sein. Dann solltest du nach Qualität, Referenzen, Geschwindigkeit und Spezialisierung auswählen.",
          "Ein Venture Studio ist die bessere Wahl, wenn die offenen Fragen strategischer sind: Welche Zielgruppe zuerst? Welcher MVP? Welches Geschäftsmodell? Welcher Kanal? Welche Rolle braucht das Team? Welche Signale rechtfertigen mehr Kapital? In diesem Fall ist Umsetzung nur ein Teil der Aufgabe. Die eigentliche Arbeit besteht darin, herauszufinden, was überhaupt gebaut werden sollte."
        ]
      }
    ],
    faqs: [
      {
        question: "Kann eine Agentur kein MVP bauen?",
        answer:
          "Doch, viele Agenturen können MVPs technisch sehr gut bauen. Der Unterschied liegt darin, ob vorher Markt, Zielkunde, Scope und Geschäftsmodell ausreichend validiert wurden."
      },
      {
        question: "Ist ein Venture Studio immer teurer als eine Agentur?",
        answer:
          "Nicht zwingend. Ein Studio kann am Anfang mehr Strategie- und Validierungsarbeit leisten, verhindert aber oft unnötige Produktumfänge. Wirtschaftlich zählt nicht nur Projektpreis, sondern Risiko pro Lernfortschritt."
      },
      {
        question: "Wann sollte ich trotzdem eine Agentur wählen?",
        answer:
          "Wenn Ziel, Anforderungen, Erfolgskriterien und Marktlogik klar sind. Dann ist ein spezialisierter Umsetzungspartner oft effizienter als ein Venture-Studio-Modell."
      }
    ],
    relatedSlugs: [
      "was-ist-ein-venture-studio-und-wann-lohnt-sich-das-modell",
      "venture-studio-vs-accelerator-der-unterschied-fuer-gruender"
    ]
  }
];

export const publishedRatgeberSlugs = ratgeberArticles.map((article) => article.slug);

export const ratgeberArticlePreviews: RatgeberArticlePreview[] = ratgeberArticles.map((article) => ({
  slug: article.slug,
  title: article.plan.title,
  categoryId: article.plan.categoryId,
  categoryLabel: article.plan.categoryLabel,
  publishAt: article.plan.publishAt,
  readingTime: article.plan.readingTime,
  summary: article.plan.summary,
  focusKeyword: article.plan.focusKeyword,
  coverImage: article.plan.coverImage,
  imageAlt: article.plan.imageAlt
}));

export function getRatgeberArticle(slug: string) {
  return ratgeberArticles.find((article) => article.slug === slug);
}
