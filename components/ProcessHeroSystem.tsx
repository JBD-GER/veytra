import Link from "next/link";

const heroSteps = [
  "Ideen",
  "Vertrag",
  "Validierung",
  "Gründung"
];

const quickLinks = [
  { label: "Startschuss", href: "#startschuss" },
  { label: "Vertrag", href: "#vertrag" },
  { label: "Company Build", href: "#company-build" },
  { label: "Stop-Logik", href: "#stop-logik" }
];

export function ProcessHeroSystem() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-neutral-50">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,23,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(23,23,23,0.035)_1px,transparent_1px)] bg-[size:112px_112px] opacity-70" />

      <div className="relative mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:px-8 md:py-28 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div data-reveal="slide" className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Prozess
          </p>
          <h1 className="mt-6 text-3xl font-semibold leading-tight text-neutral-950 md:text-5xl">
            Venture-Studio-Prozess: von der Idee zum validierten MVP.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600 md:mt-7 md:text-xl md:leading-9">
            Veytra baut nicht einfach ein Produkt. Wir prüfen die Chance, regeln die Zusammenarbeit
            schriftlich, bauen einen testbaren Produktkern und entscheiden anhand echter
            Marktsignale, ob daraus ein Unternehmen wird.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-950 bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
            >
              Venture prüfen lassen
            </Link>
            <Link
              href="/preise"
              className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-950 transition hover:border-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
            >
              Modelle ansehen
            </Link>
          </div>
          <div data-reveal="slide" data-reveal-delay="120ms" className="mt-7 grid gap-2 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-neutral-200 bg-white/80 px-4 py-3 text-sm font-semibold text-neutral-800 shadow-[0_12px_40px_rgba(23,23,23,0.04)] transition hover:border-neutral-950"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div data-reveal="scale" className="overflow-hidden border border-neutral-200 bg-white/90 p-4 shadow-[0_30px_90px_rgba(23,23,23,0.08)] backdrop-blur md:p-7">
          <div className="flex flex-col gap-4 border-b border-neutral-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Venture Build System
              </p>
              <p className="mt-2 text-lg font-semibold text-neutral-950">Gate-basierter Prozess</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500 sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-neutral-950 process-hero-pulse" />
              Live Flow
            </div>
          </div>

          <div className="relative mt-5 min-h-[310px] overflow-hidden border border-neutral-200 bg-neutral-50 md:mt-7 md:min-h-[360px]">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,23,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(23,23,23,0.05)_1px,transparent_1px)] bg-[size:48px_48px] md:bg-[size:58px_58px]" />
            <svg
              aria-hidden="true"
              viewBox="0 0 620 360"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <path
                d="M52 240 C128 152 178 198 238 146 C301 92 351 110 410 168 C465 222 512 188 568 84"
                stroke="#d4d4d4"
                strokeWidth="2"
              />
              <path
                className="process-hero-flow"
                d="M52 240 C128 152 178 198 238 146 C301 92 351 110 410 168 C465 222 512 188 568 84"
                pathLength="1"
                stroke="#171717"
                strokeDasharray="1"
                strokeLinecap="round"
                strokeWidth="3"
              />
            </svg>

            <div className="absolute inset-x-3 bottom-4 grid grid-cols-2 gap-2 md:inset-x-10 md:bottom-6 md:grid-cols-4 md:gap-3">
              {heroSteps.map((step, index) => (
                <div key={step} className="min-h-[60px] border border-neutral-200 bg-white/95 p-3 md:min-h-[78px]">
                  <p className="text-[10px] font-semibold tabular-nums text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-xs font-semibold leading-tight text-neutral-950 md:mt-3 md:text-base">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="absolute left-[8.8%] top-[62.2%] h-4 w-4 rounded-full border border-neutral-950 bg-white" />
            <div className="absolute left-[38%] top-[37%] h-4 w-4 rounded-full border border-neutral-950 bg-white" />
            <div className="absolute left-[66%] top-[45%] h-4 w-4 rounded-full border border-neutral-950 bg-white process-hero-pulse" />
            <div className="absolute left-[91%] top-[21%] h-4 w-4 rounded-full border border-neutral-950 bg-neutral-950" />
          </div>
        </div>
      </div>
    </section>
  );
}
