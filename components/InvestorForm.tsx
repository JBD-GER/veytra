import Link from "next/link";

export function InvestorForm({ idPrefix }: { idPrefix: string }) {
  return (
    <div id={idPrefix}>
      <p className="mb-5 text-sm leading-7 text-neutral-600">
        Auch für neue Investorenvorhaben beginnt die Zusammenarbeit mit dem
        First Audit für 599 € zzgl. MwSt. Du erhältst eine schriftliche
        Einschätzung und zwei Calls. Rechnung in 1–2 Werktagen, Start nach
        Zahlungseingang.
      </p>
      <Link
        href="/kontakt#anfrage"
        className="flex min-h-12 items-center justify-center rounded-md bg-neutral-950 px-5 text-sm font-medium text-white"
      >
        First Audit beauftragen
      </Link>
    </div>
  );
}
