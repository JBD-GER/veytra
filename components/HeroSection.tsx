import Link from "next/link";

const buildSteps = [
  {
    title: "Opportunity",
    body: "Markt, Problem, Timing"
  },
  {
    title: "Validation",
    body: "Zielgruppe, Angebot, Nachfrage"
  },
  {
    title: "Product",
    body: "MVP, Lösung, Nutzererlebnis"
  },
  {
    title: "Build",
    body: "Tech, Marke, Struktur"
  },
  {
    title: "Launch",
    body: "Go-to-Market, Vertrieb, erste Kunden"
  },
  {
    title: "Growth",
    body: "Optimierung, Automatisierung, Skalierung"
  }
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-neutral-950 text-white">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="relative mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:min-h-[calc(100svh-5rem)] md:px-8 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div data-reveal="slide" className="max-w-5xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Venture Studio für neue Geschäftsmodelle
          </p>
          <h1 className="max-w-5xl text-3xl font-semibold leading-[1.08] text-white min-[390px]:text-4xl md:text-5xl">
            Venture Studio & AI Venture Studio für neue Geschäftsmodelle.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300 md:mt-8 md:text-xl md:leading-9">
            Veytra entwickelt, validiert und baut neue, technologiegetriebene Ventures -
            von intelligentem SaaS und Connected IoT-Produkten über maßgeschneiderte Apps
            bis hin zu AI-Lösungen und automatisierten Geschäftsmodellen. Nicht als
            Dienstleister, sondern als operativer Geschäftspartner bis zum Launch und darüber
            hinaus.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
            <Link
              href="/kontakt"
              className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white bg-white px-5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Venture anfragen
            </Link>
            <Link
              href="/prozess"
              className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-700 px-5 text-sm font-medium text-white transition hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Prozess ansehen
            </Link>
          </div>
          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3 md:mt-12">
            {[
              ["Modell", "Co-Founder, nicht Dienstleister"],
              ["Fokus", "Idee, Markt, Produkt, Launch"],
              ["Growth", "Google Ads, Meta Ads, Sales"]
            ].map(([label, value]) => (
              <div key={label} className="border border-neutral-800 bg-white/[0.03] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">{label}</p>
                <p className="mt-3 text-sm font-medium leading-6 text-neutral-200">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal="scale" data-reveal-delay="140ms" className="relative overflow-hidden rounded-[8px] border border-neutral-800 bg-white/[0.03] p-4 md:p-6">
          <div className="absolute inset-0 [background:linear-gradient(135deg,rgba(255,255,255,.07),transparent_36%,rgba(255,255,255,.03)_72%,transparent)]" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              WIE WIR VENTURES AUFBAUEN
            </p>

            <div className="relative mt-6">
              <div className="absolute left-[11px] top-3 h-[calc(100%-1.5rem)] w-px bg-neutral-800" />
              <ol className="grid gap-2">
                {buildSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="relative grid grid-cols-[24px_1fr] gap-3 rounded-[6px] border border-transparent px-2 py-2.5 transition hover:border-neutral-800 hover:bg-white/[0.025]"
                  >
                    <div className="relative z-10 mt-1.5">
                      <span className="block h-2.5 w-2.5 rounded-full border border-neutral-500 bg-neutral-950" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-sm font-semibold leading-tight text-white md:text-base">{step.title}</h3>
                        <span className="text-xs tabular-nums text-neutral-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-5 text-neutral-400">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 border-t border-neutral-800 pt-5">
              <p className="text-sm leading-7 text-neutral-300">
                Die Form folgt dem Markt: Software, AI-Produkt, Plattform, Service,
                Commerce-Modell oder Connected Product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
