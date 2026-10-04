import Link from "next/link";

export const auditSteps = [
  {
    title: "Rechnung erhalten & bezahlen",
    body: "Wir erstellen und übermitteln deine Rechnung über 599 € zzgl. MwSt. innerhalb von 1–2 Werktagen nach der Beauftragung. Erst nach vollständigem Zahlungseingang startet das Audit.",
  },
  {
    title: "Call 1: Kennenlernen & Briefing",
    body: "Wir besprechen deine Idee, Zielgruppe, Ausgangslage und Ziele. Gemeinsam klären wir, welche Fragen die Analyse beantworten muss und welche Informationen vorliegen.",
  },
  {
    title: "Analyse & schriftliches Audit",
    body: "Wir prüfen Markt, Wettbewerb, Kundenrelevanz, Verkaufspotenzial und Umsetzbarkeit. Du erhältst eine schriftliche Bewertung mit Chancen, Risiken, offenen Annahmen und konkreten nächsten Schritten.",
  },
  {
    title: "Call 2: Abschlussbesprechung",
    body: "Wir erläutern die Ergebnisse und beantworten deine Fragen. Du gehst mit einer klaren Empfehlung heraus: weiterverfolgen, gezielt anpassen oder vorerst stoppen.",
  },
];

const dimensions = [
  [
    "Markt & Wettbewerb",
    "Wie attraktiv ist der Markt? Welche Alternativen gibt es bereits und wo kann sich dein Angebot sinnvoll unterscheiden?",
  ],
  [
    "Relevanz & Zielgruppe",
    "Löst die Idee ein ausreichend wichtiges Problem? Wer hat den größten Nutzen und einen konkreten Grund, dafür zu bezahlen?",
  ],
  [
    "Verkaufspotenzial",
    "Sind Nutzenversprechen, Erlösmodell und Kundenzugang plausibel? Welche Signale sprechen für Nachfrage und welche Kaufannahmen müssen noch getestet werden?",
  ],
  [
    "Umsetzungschance",
    "Wie realistisch ist die Umsetzung mit deinen Ressourcen? Welche technischen, operativen und wirtschaftlichen Hürden sind entscheidend?",
  ],
  [
    "Risiken & Prioritäten",
    "Welche Annahmen können das Vorhaben scheitern lassen? Was solltest du zuerst prüfen, bevor du mehr Zeit und Geld investierst?",
  ],
  [
    "Klare Entscheidung",
    "Eine begründete Einschätzung zur Verkaufbarkeit deiner Produktidee – inklusive Empfehlung, Prioritäten und nächsten Schritten.",
  ],
];

export function AuditOffer() {
  return (
    <section
      className="border-y border-neutral-200 bg-neutral-50"
      id="first-audit"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Ein klarer Einstieg. Eine fundierte Entscheidung.
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Hat deine Idee eine echte Marktchance?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Bevor du in Entwicklung, Branding oder Vertrieb investierst,
              prüfen wir, ob deine Produktidee verkaufbar erscheint und was für
              eine erfolgreiche Umsetzung fehlen könnte. Du erhältst eine
              unabhängige, nachvollziehbare Einschätzung statt weiterer
              Vermutungen.
            </p>
          </div>
          <aside className="rounded-lg border border-neutral-200 bg-white p-7 shadow-[0_24px_80px_rgba(23,23,23,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              First Audit · einmaliger Fixpreis
            </p>
            <p className="mt-5 text-5xl font-semibold tracking-tight">599 €</p>
            <p className="mt-2 text-sm text-neutral-600">
              zzgl. MwSt. · für geschäftliche Vorhaben
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-6">
              <li>Markt-, Wettbewerbs- und Potenzialanalyse</li>
              <li>Bewertung von Relevanz und Umsetzbarkeit</li>
              <li>Schriftliches Audit mit Handlungsempfehlung</li>
              <li>2 Calls: Briefing und Abschlussbesprechung</li>
            </ul>
            <Link
              href="/kontakt#anfrage"
              className="mt-7 flex min-h-12 items-center justify-center rounded-md bg-neutral-950 px-4 text-sm font-medium text-white"
            >
              First Audit beauftragen
            </Link>
            <p className="mt-4 text-xs leading-6 text-neutral-500">
              Rechnung in 1–2 Werktagen. Analyse und Calls starten nach
              vollständigem Zahlungseingang. Eine spätere Umsetzung wird separat
              vereinbart.
            </p>
          </aside>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dimensions.map(([title, body], i) => (
            <article
              key={title}
              className="border border-neutral-200 bg-white p-6"
            >
              <p className="text-xs text-neutral-400">0{i + 1}</p>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{body}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-neutral-500">
          Die Bewertung basiert auf Recherche und deinen Angaben. Wir benennen
          Datenlücken und Annahmen ausdrücklich. Das Audit gibt eine klare
          Einschätzung zur Verkaufbarkeit; tatsächliche Nachfrage und
          Zahlungsbereitschaft werden durch anschließende Markttests bestätigt.
        </p>
      </div>
    </section>
  );
}
