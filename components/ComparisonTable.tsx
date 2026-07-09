import { comparisonRows } from "@/content/services";
import { cn } from "@/lib/utils";

export function ComparisonTable() {
  return (
    <div data-reveal="fade" className="overflow-x-auto border border-neutral-200">
      <table className="min-w-[780px] border-collapse bg-white text-left">
        <caption className="sr-only">
          Vergleich zwischen Beratung, Agentur, Accelerator und Venture Studio
        </caption>
        <thead>
          <tr className="border-b border-neutral-200 bg-neutral-50">
            <th scope="col" className="px-5 py-4 text-sm font-semibold text-neutral-950">
              Modell
            </th>
            <th scope="col" className="px-5 py-4 text-sm font-semibold text-neutral-950">
              Fokus
            </th>
            <th scope="col" className="px-5 py-4 text-sm font-semibold text-neutral-950">
              Grenze
            </th>
            <th scope="col" className="px-5 py-4 text-sm font-semibold text-neutral-950">
              Passend, wenn
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr
              key={row.model}
              className={cn(
                "border-b border-neutral-200 last:border-b-0",
                row.highlighted && "bg-neutral-950 text-white"
              )}
            >
              <th
                scope="row"
                className={cn(
                  "px-5 py-5 text-sm font-semibold align-top",
                  row.highlighted ? "text-white" : "text-neutral-950"
                )}
              >
                {row.model}
              </th>
              <td className={cn("px-5 py-5 text-sm leading-6 align-top", row.highlighted ? "text-neutral-100" : "text-neutral-600")}>
                {row.focus}
              </td>
              <td className={cn("px-5 py-5 text-sm leading-6 align-top", row.highlighted ? "text-neutral-100" : "text-neutral-600")}>
                {row.limitation}
              </td>
              <td className={cn("px-5 py-5 text-sm leading-6 align-top", row.highlighted ? "text-neutral-100" : "text-neutral-600")}>
                {row.fit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
