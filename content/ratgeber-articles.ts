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
  },
  {
    slug: "wie-arbeitet-ein-venture-studio-schritt-fuer-schritt",
    plan: getPlan("wie-arbeitet-ein-venture-studio-schritt-fuer-schritt"),
    author: "Veytra Redaktion",
    updatedAt: "2026-07-24T16:00:00+02:00",
    intro: [
      "Ein Venture Studio wirkt von außen oft wie ein Team, das schneller baut als klassische Produktorganisationen. Das stimmt teilweise, greift aber zu kurz. Die eigentliche Stärke eines Studios liegt nicht darin, sofort mehr Software zu produzieren. Sie liegt darin, frühe Unsicherheit in eine klare Reihenfolge von Entscheidungen zu bringen: Welches Problem ist stark genug, welcher Zielkunde ist erreichbar, welche Lösung muss zuerst bewiesen werden und wann lohnt sich der nächste Build-Schritt?",
      "Der Prozess ist deshalb weniger eine lineare Projektstraße als eine Entscheidungsmaschine. Jede Phase soll eine bestimmte Art Risiko kleiner machen. Erst wird verstanden, dann getestet, dann gebaut, dann gelauncht, dann entschieden. Wer das Studio-Modell bewerten will, sollte genau diese Logik verstehen. Denn sie entscheidet, ob ein Studio wirklich Company Building betreibt oder nur ein anderes Wort für Produktentwicklung benutzt."
    ],
    sections: [
      {
        id: "prozesslogik",
        kicker: "Grundprinzip",
        title: "Warum ein Venture-Studio-Prozess anders beginnt",
        paragraphs: [
          "Ein klassisches Produktprojekt startet häufig mit Anforderungen. Ein Venture-Studio-Prozess startet mit Annahmen. Das ist ein wichtiger Unterschied. Anforderungen klingen bereits entschieden: Diese Funktion, diese Zielgruppe, dieser Launch-Termin. Annahmen sind ehrlicher: Wir glauben, dass ein bestimmtes Problem dringend ist, dass eine Zielgruppe zahlen würde und dass ein bestimmter Produktkern diese Nachfrage sichtbar machen kann.",
          "Diese Offenheit schützt vor falscher Sicherheit. Frühphasen-Ventures scheitern selten, weil ein Button nicht sauber gestaltet wurde. Sie scheitern, weil das Problem zu schwach war, der Kanal nicht erreichbar war, der Preis nicht passte oder das Team zu spät gemerkt hat, dass es für die falsche Zielgruppe baut. Ein Studio-Prozess sortiert deshalb zuerst die Fragen, die ein Venture wirklich zerstören könnten."
        ],
        graphic: {
          title: "Die fünf Entscheidungsebenen",
          caption: "Ein Venture Studio arbeitet von Marktunsicherheit zu operativer Company-Readiness.",
          items: [
            {
              label: "01",
              title: "Problem",
              text: "Ist der Schmerz stark, häufig und wirtschaftlich relevant genug?"
            },
            {
              label: "02",
              title: "Zielkunde",
              text: "Ist klar, wer zuerst angesprochen wird und warum gerade diese Gruppe erreichbar ist?"
            },
            {
              label: "03",
              title: "Angebot",
              text: "Gibt es ein Nutzenversprechen, das Gespräche, Interesse oder Zahlungsbereitschaft erzeugt?"
            },
            {
              label: "04",
              title: "Produktkern",
              text: "Welche kleinste Lösung erzeugt ein echtes Signal statt nur interne Zufriedenheit?"
            }
          ]
        }
      },
      {
        id: "research",
        title: "Phase 1: Problemraum, Markt und Venture-These klären",
        paragraphs: [
          "Am Anfang steht keine große Roadmap, sondern ein präziser Problemraum. Das Studio sammelt Hinweise: Kundengespräche, bestehende Workarounds, Marktbewegungen, regulatorische Veränderungen, neue technische Möglichkeiten, Datenzugänge oder wiederkehrende operative Schmerzen in einer Branche. Daraus entsteht eine erste Venture-These. Sie beschreibt nicht nur die Idee, sondern die Logik dahinter.",
          "Eine gute These beantwortet mehrere Fragen in einfacher Sprache. Wer hat welches Problem? Warum ist es jetzt relevant? Wie lösen Kunden das Problem heute? Warum sind bestehende Lösungen unbefriedigend? Welche Zahlungsbereitschaft könnte entstehen? Welche unfairen Vorteile könnte das Venture haben? Ohne diese Antworten wird ein MVP schnell zum Designobjekt. Mit ihnen wird er zu einem gezielten Test."
        ]
      },
      {
        id: "validierung",
        title: "Phase 2: Validierung vor Produktumfang",
        paragraphs: [
          "Nach der These folgt Validierung. Damit sind nicht drei freundliche Gespräche gemeint, in denen Menschen sagen, dass eine Idee interessant klingt. Validierung bedeutet, Marktsignale so zu gestalten, dass sie eine Entscheidung möglich machen. Das kann ein Interviewprogramm sein, eine manuelle Concierge-Lösung, ein Pilotangebot, eine Landingpage, ein Sales-Skript oder ein Fake-Door-Test.",
          "Wichtig ist die Reihenfolge. Ein Studio prüft zuerst die riskantesten Annahmen. Wenn niemand das Problem wichtig findet, ist ein Prototyp zu früh. Wenn alle das Problem erkennen, aber niemand Budget hat, muss die Monetarisierung geklärt werden. Wenn Nachfrage existiert, aber Vertrauen fehlt, braucht das Venture vielleicht Referenzen, Compliance oder einen anderen Einstieg. Validierung ist also kein Haken auf einer Checkliste, sondern eine Lernschleife."
        ],
        graphic: {
          title: "Validierungsschleife",
          caption: "Jede Schleife muss eine echte Build- oder Stop-Entscheidung vorbereiten.",
          items: [
            {
              label: "These",
              title: "Annahme formulieren",
              text: "Die stärkste Unsicherheit wird als überprüfbarer Satz beschrieben."
            },
            {
              label: "Test",
              title: "Signal erzeugen",
              text: "Ein kleines Experiment prüft Verhalten, nicht nur Meinung."
            },
            {
              label: "Lernen",
              title: "Muster auswerten",
              text: "Einwände, Conversion, Gesprächsqualität und Zahlungsbereitschaft werden verdichtet."
            },
            {
              label: "Entscheid",
              title: "Nächsten Schritt wählen",
              text: "Das Team baut, pivotiert, testet enger oder stoppt bewusst."
            }
          ]
        }
      },
      {
        id: "mvp-scope",
        title: "Phase 3: MVP-Scope aus dem Lernziel ableiten",
        paragraphs: [
          "Erst wenn klar ist, welches Signal gebraucht wird, entsteht der MVP-Scope. Ein MVP ist im Studio-Prozess nicht die günstigste Version einer großen Produktvision. Er ist die kleinste Produktform, die eine bestimmte Geschäftsmodellfrage beantwortet. Deshalb kann ein guter MVP technisch sehr einfach sein und trotzdem strategisch hochwertig.",
          "Der Scope wird bewusst eng gehalten. Welche Nutzerhandlung muss möglich sein? Welche Daten müssen entstehen? Welche Qualität ist nötig, damit ein Kunde das Produkt ernst nimmt? Welche Teile können manuell, mit No-Code oder durch bestehende Tools ersetzt werden? Diese Fragen verhindern, dass das Team Funktionen baut, die zwar professionell wirken, aber keinen Lernwert erzeugen."
        ]
      },
      {
        id: "build-launch",
        title: "Phase 4: Build, Launch und Go-to-Market zusammenführen",
        paragraphs: [
          "Sobald gebaut wird, laufen Produkt und Go-to-Market parallel. Das ist einer der größten Unterschiede zu vielen klassischen Projekten. Ein Studio baut nicht monatelang im Stillen, um danach Marketing zu starten. Während der Produktkern entsteht, werden Zielkundenlisten, Outreach-Texte, Angebotsseiten, Demo-Flows, Pilotpakete und Feedbackmechaniken vorbereitet.",
          "Der Launch ist dadurch kein großes Ereignis, sondern ein kontrollierter Marktkontakt. Das Venture wird einer kleinen, passenden Zielgruppe gezeigt. Das Team misst nicht nur Klicks, sondern Gesprächsqualität, Aktivierung, Wiederkehr, Einwände, Zahlungsbereitschaft und operative Reibung. Diese Daten sind wichtiger als eine perfekte Oberfläche, weil sie zeigen, ob aus Interesse ein Geschäft entstehen kann."
        ]
      },
      {
        id: "entscheidung",
        title: "Phase 5: Lernen, entscheiden und Company Build vorbereiten",
        paragraphs: [
          "Nach dem ersten Launch beginnt der entscheidende Teil. Ein Studio muss bereit sein, harte Signale ernst zu nehmen. Wenn niemand reagiert, reicht kein neues Farbschema. Wenn Nutzer aktiv werden, aber nicht zahlen, muss das Angebot neu geprüft werden. Wenn Kunden kaufen, aber Onboarding zu teuer ist, wird die Operations-Frage zentral. Jede Erkenntnis verändert die nächste Priorität.",
          "Bei starken Signalen verschiebt sich der Fokus. Dann geht es nicht mehr nur um MVP und Validierung, sondern um Company Build: Rollen, Verantwortlichkeiten, technische Architektur, Support, Metriken, Finanzierung, Governance und wiederholbare Sales Motion. Genau hier zeigt sich, ob das Studio ein Venture nur gestartet oder wirklich auf die nächste Reifestufe vorbereitet hat."
        ]
      },
      {
        id: "timeline",
        title: "Wie eine realistische 90-Tage-Timeline aussehen kann",
        paragraphs: [
          "In den ersten 30 Tagen sollte ein Studio vor allem Klarheit schaffen: These, Problemraum, Zielkunden, Interviewmuster, Wettbewerbslogik und erste Testartefakte. In den Tagen 31 bis 60 entsteht meist der fokussierte MVP oder ein belastbarer Prototyp. Parallel wird der Go-to-Market vorbereitet, damit der Build nicht isoliert bleibt.",
          "Zwischen Tag 61 und 90 entscheidet sich, ob das Venture mehr Ressourcen verdient. Gute Signale können Pilotkunden, wiederholbare Gespräche, klare Zahlungsbereitschaft, starke Nutzung oder ein strategischer Datenvorteil sein. Schwache Signale sind ebenfalls wertvoll, wenn sie früh genug kommen. Der Prozess ist dann erfolgreich, wenn er nicht nur etwas gebaut hat, sondern die richtige nächste Entscheidung ermöglicht."
        ]
      }
    ],
    faqs: [
      {
        question: "Wie lange dauert ein Venture-Studio-Prozess?",
        answer:
          "Die erste belastbare Schleife dauert häufig 30 bis 90 Tage. Ein vollständiger Company-Build kann deutlich länger laufen, weil nach MVP und Launch Team, Sales, Operations und Finanzierung aufgebaut werden müssen."
      },
      {
        question: "Startet ein Venture Studio immer mit einem MVP?",
        answer:
          "Nein. Ein gutes Studio startet mit der riskantesten Annahme. Manchmal ist ein Interview- oder Angebotstest sinnvoller als sofortige Produktentwicklung."
      },
      {
        question: "Woran erkenne ich einen guten Studio-Prozess?",
        answer:
          "Er macht Annahmen sichtbar, setzt kleine Tests vor große Builds, verbindet Produkt mit Go-to-Market und führt regelmäßig zu klaren Entscheidungen: weiterbauen, pivotieren, enger testen oder stoppen."
      }
    ],
    relatedSlugs: [
      "was-ist-ein-venture-studio-und-wann-lohnt-sich-das-modell",
      "venture-studio-vs-agentur-warum-umsetzung-allein-nicht-reicht",
      "venture-studio-equity-welche-beteiligung-ist-fair"
    ]
  },
  {
    slug: "venture-studio-equity-welche-beteiligung-ist-fair",
    plan: getPlan("venture-studio-equity-welche-beteiligung-ist-fair"),
    author: "Veytra Redaktion",
    updatedAt: "2026-07-28T08:30:00+02:00",
    intro: [
      "Equity ist im Venture-Studio-Modell eine der sensibelsten Fragen. Gründer wollen nicht zu früh zu viele Anteile abgeben. Studios wollen nicht wie eine Agentur bezahlt werden, wenn sie Produkt, Technologie, Validierung, Go-to-Market und unternehmerisches Risiko übernehmen. Beide Perspektiven sind verständlich. Fair wird ein Deal erst, wenn die Beiträge sauber benannt werden.",
      "Die Frage lautet deshalb nicht: Wie viel Prozent nimmt ein Venture Studio? Die bessere Frage lautet: Welcher Wert wird eingebracht, welches Risiko wird getragen und welche Alternative hätte das Gründerteam? Ein Studio-Anteil kann zu hoch sein, wenn nur Beratung geliefert wird. Er kann aber auch sehr rational sein, wenn das Studio eine Co-Founder-Lücke schließt und das Venture dadurch überhaupt erst finanzierbar wird."
    ],
    sections: [
      {
        id: "fairness",
        kicker: "Deal-Logik",
        title: "Warum Venture-Studio-Equity nicht pauschal bewertet werden kann",
        paragraphs: [
          "Bei einem Investor ist der Deal vergleichsweise leicht zu verstehen: Kapital gegen Anteile. Bei einem Venture Studio ist die Gleichung komplexer. Das Studio bringt oft Zeit, Team, Produktentwicklung, Tech-Führung, Design, Validierung, Sales-Struktur, Netzwerk und operative Verantwortung ein. Manchmal kommt Kapital hinzu, manchmal nicht. Manchmal existiert bereits ein Gründerteam, manchmal entsteht es erst mit dem Studio.",
          "Deshalb sind Prozentzahlen ohne Kontext gefährlich. Zehn Prozent können teuer sein, wenn dafür nur ein paar Workshops geliefert werden. Dreißig Prozent können fair sein, wenn das Studio über Monate ein vollständiges Produktteam stellt, das Marktrisiko mitträgt und eine Idee von null zu ersten Kunden bringt. Fairness entsteht nicht aus einem Standardwert, sondern aus nachvollziehbarer Beitragslogik."
        ],
        graphic: {
          title: "Equity entsteht aus Beiträgen",
          caption: "Ein Studio-Anteil sollte aus konkreten Leistungen und Risiken abgeleitet werden.",
          items: [
            {
              label: "Kapital",
              title: "Cash und Vorfinanzierung",
              text: "Wer laufende Kosten trägt, reduziert das finanzielle Risiko der anderen Seite."
            },
            {
              label: "Team",
              title: "Operator-Zeit",
              text: "Produkt, Tech, Design und Growth ersetzen oder ergänzen frühe Founder-Kapazität."
            },
            {
              label: "Risiko",
              title: "Unbezahlte Aufbauarbeit",
              text: "Equity ist plausibler, wenn das Studio nicht vollständig cash bezahlt wird."
            },
            {
              label: "IP",
              title: "Wissen und Assets",
              text: "Frameworks, Code, Datenzugang oder Branchenwissen können den Build beschleunigen."
            }
          ]
        }
      },
      {
        id: "beitraege",
        title: "Welche Leistungen hinter Studio-Beteiligung stehen sollten",
        paragraphs: [
          "Ein Studio-Anteil sollte niemals nur mit dem Label Venture Studio begründet werden. Entscheidend ist, welche Leistungen tatsächlich übernommen werden. Baut das Studio den MVP? Führt es technische Architektur und Produktstrategie? Validiert es den Markt? Baut es den ersten Sales-Prozess? Hilft es bei Recruiting, Fundraising und Governance? Je operativer und längerfristiger die Verantwortung, desto eher ist Equity nachvollziehbar.",
          "Auch die Qualität der Leistung zählt. Ein Studio, das nur Ressourcen bereitstellt, ist näher an einer Agentur. Ein Studio, das Geschäftsmodellentscheidungen trägt, Zielkundenkontakte herstellt, Stop-Entscheidungen akzeptiert und echte Company-Building-Arbeit übernimmt, bringt einen anderen Wert ein. Gründer sollten deshalb nicht nur Prozente verhandeln, sondern den konkreten Leistungsumfang schriftlich klären."
        ]
      },
      {
        id: "deal-modelle",
        title: "Cash, Equity oder Hybrid: die drei typischen Modelle",
        paragraphs: [
          "Im Cash-Modell zahlt das Gründerteam oder Unternehmen das Studio wie einen Dienstleister. Das ist einfach, reduziert Verwässerung und passt, wenn Budget vorhanden ist und das Studio kein großes Risiko übernehmen soll. Der Nachteil: Das Studio verhält sich ökonomisch weniger wie ein Mitgründer und mehr wie ein Auftragnehmer, selbst wenn es strategisch mitdenkt.",
          "Im Equity-Modell übernimmt das Studio mehr Risiko und bekommt dafür Anteile. Das kann für Gründer ohne großes Startbudget attraktiv sein, erhöht aber die Verwässerung. Hybride Modelle kombinieren beides: reduzierter Cash-Anteil plus Equity. In der Praxis sind Hybridmodelle oft am sinnvollsten, weil sie Commitment auf beiden Seiten schaffen und trotzdem nicht die komplette Leistung in Anteile übersetzen."
        ],
        graphic: {
          title: "Deal-Modelle im Vergleich",
          caption: "Die passende Struktur hängt von Budget, Risiko, Reifegrad und benötigter Studio-Leistung ab.",
          items: [
            {
              label: "Cash",
              title: "Wenig Verwässerung",
              text: "Gut bei klarem Auftrag und vorhandenem Budget, aber weniger Risiko-Sharing."
            },
            {
              label: "Equity",
              title: "Starkes Alignment",
              text: "Plausibel bei hoher operativer Leistung und geringem Anfangsbudget."
            },
            {
              label: "Hybrid",
              title: "Geteilte Logik",
              text: "Kombiniert laufende Finanzierung mit echter Beteiligung am Venture-Erfolg."
            },
            {
              label: "Milestone",
              title: "Stufenmodell",
              text: "Equity kann an konkrete Beiträge, Phasen oder Zielerreichung gekoppelt werden."
            }
          ]
        }
      },
      {
        id: "cap-table",
        title: "Wie Studio-Equity den Cap Table und Fundraising beeinflusst",
        paragraphs: [
          "Ein fairer Studio-Deal muss investorentauglich bleiben. Wenn zu früh zu viele Anteile vergeben werden, kann das spätere Finanzierungsrunden erschweren. Investoren wollen sehen, dass Gründer ausreichend motiviert bleiben, dass Rollen klar sind und dass der Cap Table nicht durch passive oder unklare Beteiligte blockiert wird.",
          "Das bedeutet nicht, dass Studio-Equity schlecht ist. Im Gegenteil: Ein guter Studio-Anteil kann Investoren Vertrauen geben, wenn dadurch ein starkes Produktteam, klare Validierung und bessere Execution entstehen. Kritisch wird es, wenn das Studio viel Equity hält, aber nach dem MVP kaum Verantwortung trägt. Deshalb sollten Vesting, Rollen, IP-Rechte und zukünftige Mitarbeit früh geregelt werden."
        ]
      },
      {
        id: "kontrolle",
        title: "Kontrolle, Governance und Founder-Motivation mitdenken",
        paragraphs: [
          "Equity ist nicht nur wirtschaftlich, sondern auch psychologisch. Gründer müssen das Gefühl behalten, ihr Unternehmen zu bauen. Ein Studio sollte deshalb erklären können, welche Entscheidungen gemeinsam getroffen werden, wo Gründer die Führung behalten und welche Kontrollrechte wirklich nötig sind. Zu viel Governance in einer frühen Phase kann Geschwindigkeit zerstören.",
          "Gleichzeitig braucht ein gemeinsamer Build klare Regeln. Wer entscheidet über Pivot, Budget, Technologie, Hiring und Fundraising? Was passiert, wenn Gründer oder Studio weniger leisten als vereinbart? Wie werden neue Co-Founder aufgenommen? Ein fairer Deal schützt beide Seiten, ohne das junge Venture mit Konzernlogik zu überladen."
        ]
      },
      {
        id: "bewertung",
        title: "Wie Gründer Fairness konkret bewerten können",
        paragraphs: [
          "Gründer sollten einen Studio-Deal wie eine Build-or-buy-Entscheidung betrachten. Was würde es kosten, ein vergleichbares Produkt-, Tech- und Growth-Team selbst aufzubauen? Wie lange würde Recruiting dauern? Welche Fehlerwahrscheinlichkeit hätte das Team ohne Studio? Welche Signale kann das Studio schneller erzeugen? Diese Fragen machen Equity greifbarer als reine Prozentdiskussionen.",
          "Hilfreich ist eine einfache Beitragsmatrix. Auf der einen Seite stehen Kapital, Teamzeit, IP, Netzwerk, Vertrieb, Produktverantwortung und Risiko. Auf der anderen Seite stehen Cash-Vergütung, Equity, Kontrollrechte und Laufzeit. Wenn beide Seiten diese Matrix ehrlich ausfüllen, entsteht eine bessere Verhandlung. Nicht weich, sondern klar."
        ]
      },
      {
        id: "red-flags",
        title: "Red Flags bei Venture-Studio-Deals",
        paragraphs: [
          "Vorsicht ist geboten, wenn ein Studio hohe Anteile fordert, aber keine konkreten Deliverables, Laufzeiten oder Rollen benennt. Ebenso kritisch sind unklare IP-Regeln, fehlendes Vesting, pauschale Kontrollrechte oder die Erwartung, dass Gründer trotz hoher Abgabe weiterhin alle operative Last allein tragen.",
          "Gute Studios haben kein Problem mit Transparenz. Sie können erklären, wie sie arbeiten, welche Ressourcen real eingesetzt werden, welche Entscheidungen nach 30, 60 und 90 Tagen anstehen und wie der Deal bei Erfolg oder Abbruch funktioniert. Je klarer diese Punkte sind, desto weniger wird Equity zur Glaubensfrage."
        ]
      }
    ],
    faqs: [
      {
        question: "Wie viel Equity ist für ein Venture Studio fair?",
        answer:
          "Das hängt von Leistung, Risiko, Kapitalbeitrag, Laufzeit und Reifegrad ab. Kleine Beratungsleistungen rechtfertigen wenig Equity, operative Co-Founder-Arbeit mit Produkt, Tech und Go-to-Market kann deutlich höhere Anteile rechtfertigen."
      },
      {
        question: "Ist ein Hybridmodell besser als reines Equity?",
        answer:
          "Häufig ja. Hybridmodelle verbinden laufende Finanzierung mit echtem Risiko-Sharing und verhindern, dass entweder Gründer zu stark verwässern oder das Studio zu wenig Commitment hat."
      },
      {
        question: "Was muss in einem Studio-Deal unbedingt geregelt sein?",
        answer:
          "Leistungsumfang, IP-Rechte, Vesting, Rollen, Entscheidungsrechte, Laufzeit, Abbruchlogik, mögliche Finanzierungsrunden und die Frage, welche Verantwortung das Studio nach dem MVP weiter trägt."
      }
    ],
    relatedSlugs: [
      "wie-arbeitet-ein-venture-studio-schritt-fuer-schritt",
      "was-ist-ein-venture-studio-und-wann-lohnt-sich-das-modell",
      "venture-building-ohne-technischen-co-founder-was-wirklich-fehlt"
    ]
  },
  {
    slug: "venture-building-ohne-technischen-co-founder-was-wirklich-fehlt",
    plan: getPlan("venture-building-ohne-technischen-co-founder-was-wirklich-fehlt"),
    author: "Veytra Redaktion",
    updatedAt: "2026-07-29T10:00:00+02:00",
    intro: [
      "Viele nicht-technische Gründer kennen den Satz: Du brauchst einen technischen Co-Founder. Der Satz ist nicht falsch, aber oft zu grob. Was wirklich fehlt, ist selten nur jemand, der Code schreibt. Es fehlen technische Produktentscheidungen, Architektur, Priorisierung, Qualitätsmaßstäbe, Recruiting-Fähigkeit, Sicherheitsgefühl und die Fähigkeit, aus einer Geschäftsidee einen belastbaren Produktkern zu formen.",
      "Ein Venture Studio kann diese Lücke nicht in jeder Situation ersetzen, aber es kann sie sichtbar machen und temporär schließen. Gerade in der frühen Phase geht es darum, nicht aus Unsicherheit zu viel zu bauen, nicht an falsche Entwickler zu delegieren und nicht technische Schulden aufzunehmen, bevor überhaupt klar ist, ob der Markt reagiert. Wer ohne technischen Co-Founder startet, braucht deshalb keine Panik, sondern eine saubere Build-Strategie."
    ],
    sections: [
      {
        id: "luecke",
        kicker: "Rollenverständnis",
        title: "Was ein technischer Co-Founder wirklich übernimmt",
        paragraphs: [
          "Ein technischer Co-Founder ist nicht einfach ein Senior Developer mit Anteilen. In einem frühen Startup verbindet diese Rolle Produktverständnis, Architektur, Umsetzung, Teamaufbau, technische Risikobewertung und unternehmerische Priorisierung. Sie entscheidet, was gebaut wird, was bewusst nicht gebaut wird und welche technische Basis für die nächsten Lernschleifen reicht.",
          "Genau deshalb ist die Lücke größer als sie auf den ersten Blick wirkt. Wer nur jemanden für die Programmierung sucht, übersieht die Führungsarbeit dahinter. Ein falscher Scope, eine unnötig komplexe Architektur oder ein schlecht gewählter Technologie-Stack können ein junges Venture monatelang verlangsamen. Der technische Co-Founder schützt nicht nur den Code, sondern die Lernfähigkeit des Unternehmens."
        ],
        graphic: {
          title: "Die fünf Aufgaben der technischen Gründerrolle",
          caption: "Die Rolle reicht von Produktlogik bis Teamaufbau und kann nicht vollständig auf reine Entwicklung reduziert werden.",
          items: [
            {
              label: "Produkt",
              title: "Scope übersetzen",
              text: "Aus Geschäftsfragen werden technische MVP-Entscheidungen mit klarem Lernziel."
            },
            {
              label: "Tech",
              title: "Architektur wählen",
              text: "Der Stack muss schnell genug für Tests und stabil genug für die nächsten Schritte sein."
            },
            {
              label: "Qualität",
              title: "Risiko steuern",
              text: "Sicherheit, Daten, Wartbarkeit und Kosten werden passend zur Phase bewertet."
            },
            {
              label: "Team",
              title: "Aufbau vorbereiten",
              text: "Spätere Entwickler, CTOs oder Produktrollen brauchen klare Grundlagen."
            }
          ]
        }
      },
      {
        id: "agentur-falle",
        title: "Warum reine Entwicklung die Lücke selten schließt",
        paragraphs: [
          "Viele Gründer versuchen, den fehlenden technischen Co-Founder durch Freelancer oder Agenturen zu ersetzen. Das kann funktionieren, wenn der Scope klar ist. In frühen Ventures ist er das aber oft nicht. Dann wird eine Idee in Tickets übersetzt, obwohl die wichtigste Frage noch offen ist: Welches Produkt muss überhaupt entstehen, damit ein belastbares Marktsignal sichtbar wird?",
          "Ohne technische Führung entsteht schnell eine asymmetrische Situation. Gründer können schwer einschätzen, ob Aufwand realistisch ist, ob ein Feature nötig ist oder ob eine technische Entscheidung langfristig schadet. Gute Umsetzungspartner helfen dabei, aber sie tragen selten dieselbe unternehmerische Verantwortung wie ein Co-Founder. Genau hier kann ein Studio-Modell sinnvoll sein."
        ]
      },
      {
        id: "studio",
        title: "Wie ein Venture Studio die technische Lücke temporär schließen kann",
        paragraphs: [
          "Ein Venture Studio kann in der frühen Phase als operatives Produkt- und Tech-Team agieren. Es hilft, die Idee in Annahmen zu zerlegen, den MVP-Scope zu definieren, passende Technologien auszuwählen und den ersten Produktkern zu bauen. Gleichzeitig bleibt die Frage im Blick, ob das Venture später einen eigenen CTO, ein internes Produktteam oder eine andere technische Struktur braucht.",
          "Der Vorteil liegt in der Kombination aus Build und Entscheidung. Ein Studio sollte nicht blind bauen, sondern erklären, warum bestimmte technische Abkürzungen sinnvoll sind und andere gefährlich wären. Es kann manuelle Prozesse bewusst zulassen, wenn sie Lernen beschleunigen, und trotzdem eine Architektur vorbereiten, die bei echten Signalen nicht sofort zerfällt."
        ],
        graphic: {
          title: "Build-or-Recruit-Entscheidung",
          caption: "Nicht jede Phase braucht sofort einen festen CTO, aber jede Phase braucht technische Verantwortung.",
          items: [
            {
              label: "0-30",
              title: "These und Prototyp",
              text: "Studio oder technischer Advisor können reichen, wenn noch vor allem gelernt wird."
            },
            {
              label: "31-60",
              title: "MVP und erste Nutzer",
              text: "Operative Tech-Führung wird wichtiger, weil Produktentscheidungen Wirkung zeigen."
            },
            {
              label: "61-90",
              title: "Pilot und Daten",
              text: "Bei echten Kunden müssen Stabilität, Sicherheit und Support klarer werden."
            },
            {
              label: "Scale",
              title: "Eigenes Team",
              text: "Bei wiederholbarer Nachfrage sollte interne technische Führung aufgebaut werden."
            }
          ]
        }
      },
      {
        id: "mvp",
        title: "Der richtige MVP ohne technischen Co-Founder",
        paragraphs: [
          "Ohne technischen Co-Founder ist der MVP-Scope besonders kritisch. Das Team sollte nicht versuchen, die vollständige Vision extern bauen zu lassen. Besser ist ein Produktkern, der eine klare Frage beantwortet: Reagiert die Zielgruppe? Löst der Workflow ein echtes Problem? Entsteht Zahlungsbereitschaft? Kann ein manueller Prozess später automatisiert werden?",
          "Ein guter MVP darf technische Kompromisse enthalten, solange sie bewusst sind. Nicht alles muss skalieren, bevor Nachfrage bewiesen ist. Aber die Kompromisse dürfen das Venture nicht blockieren. Datenmodell, Nutzerrechte, Integrationen und Kernlogik sollten so geplant werden, dass ein späterer CTO nicht alles neu bauen muss, nur um weiterzulernen."
        ]
      },
      {
        id: "recruiting",
        title: "Wann du trotzdem einen technischen Co-Founder suchen solltest",
        paragraphs: [
          "Ein Studio kann die technische Lücke schließen, aber nicht jedes Venture sollte dauerhaft ohne eigene technische Führung bleiben. Wenn Technologie selbst der Kern des Vorteils ist, wenn komplexe Daten, AI, Infrastruktur, Security oder tiefe Produktinnovation entscheidend sind, wird ein echter technischer Co-Founder oder CTO früher wichtig.",
          "Der richtige Zeitpunkt hängt von den Signalen ab. Vor der Validierung kann eine Vollzeit-CTO-Suche Monate kosten und das Venture verlangsamen. Nach ersten starken Signalen kann sie genau richtig sein, weil es dann konkreter wird: Welche Architektur muss skaliert werden, welche Rollen werden gebraucht, welche technischen Risiken sind wirklich kritisch? Ein Studio kann diesen Übergang vorbereiten."
        ]
      },
      {
        id: "ownership",
        title: "Ownership, Equity und Verantwortung sauber klären",
        paragraphs: [
          "Wenn ein Studio die technische Co-Founder-Lücke füllt, muss der Deal sauber sein. Wird das Studio cash bezahlt, beteiligt oder hybrid vergütet? Wem gehört der Code? Welche Rechte hat das Venture an wiederverwendbaren Komponenten? Welche Verantwortung trägt das Studio nach Launch? Diese Fragen sollten früh geklärt werden, weil sie später Fundraising und Teamaufbau beeinflussen.",
          "Auch Gründer sollten ihre eigene Rolle klar definieren. Ohne technischen Co-Founder müssen sie nicht selbst programmieren, aber sie müssen Produktentscheidungen verstehen, Kundensignale einordnen und Prioritäten setzen. Das Studio kann führen und bauen, aber es sollte den Gründer nicht aus der Verantwortung nehmen. Gute Zusammenarbeit macht Gründer technikfähiger, nicht abhängiger."
        ]
      },
      {
        id: "fahrplan",
        title: "Ein realistischer Fahrplan für die ersten 90 Tage",
        paragraphs: [
          "In den ersten 30 Tagen sollte das Team Problem, Zielkunde, MVP-Lernziel und technische Risiken sortieren. Zwischen Tag 31 und 60 entsteht ein fokussierter Produktkern oder Prototyp, der echte Nutzer- oder Kundensignale erzeugt. Zwischen Tag 61 und 90 wird entschieden, ob ein internes Tech-Setup vorbereitet, ein CTO gesucht oder der Studio-Build verlängert wird.",
          "Dieser Fahrplan verhindert zwei typische Fehler: zu früh eine teure technische Organisation aufzubauen oder zu lange ohne echte technische Verantwortung zu bleiben. Ohne technischen Co-Founder zu starten ist möglich. Aber nur, wenn der Build nicht als ausgelagerte Programmierung verstanden wird, sondern als bewusste Venture-Entscheidung."
        ]
      }
    ],
    faqs: [
      {
        question: "Kann ich ein Startup ohne technischen Co-Founder starten?",
        answer:
          "Ja, besonders wenn die ersten Marktrisiken wichtiger sind als tiefe Technologie. Du brauchst aber trotzdem technische Verantwortung für MVP-Scope, Architektur, Qualität und spätere Teamfähigkeit."
      },
      {
        question: "Ist ein Venture Studio ein Ersatz für einen CTO?",
        answer:
          "Temporär kann ein Studio viele CTO- und Produktaufgaben übernehmen. Langfristig braucht ein technologiegetriebenes Venture oft eigene technische Führung, vor allem bei Skalierung, Daten, AI oder komplexer Infrastruktur."
      },
      {
        question: "Was sollte ich nicht an eine Agentur auslagern?",
        answer:
          "Die grundlegende Produkt- und Geschäftsmodellentscheidung. Eine Agentur kann einen definierten Scope bauen, aber Zielkunde, MVP-Lernziel, technische Risikologik und Go-to-Market sollten nicht unklar bleiben."
      }
    ],
    relatedSlugs: [
      "venture-studio-equity-welche-beteiligung-ist-fair",
      "wie-arbeitet-ein-venture-studio-schritt-fuer-schritt",
      "venture-studio-vs-agentur-warum-umsetzung-allein-nicht-reicht"
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
