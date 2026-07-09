const ventureDossiers = [
  {
    stage: "01",
    title: "AI SaaS",
    signal: "Smoke-Test positiv",
    metric: "43 qualifizierte Leads",
    tags: ["B2B", "Pre-Seed"]
  },
  {
    stage: "02",
    title: "Automation OS",
    signal: "MVP in Nutzung",
    metric: "erste Zahlungsbereitschaft",
    tags: ["Produkt", "Growth"]
  },
  {
    stage: "03",
    title: "Commerce Engine",
    signal: "CAC-Indikation sichtbar",
    metric: "skalierbarer Funnel",
    tags: ["Datenraum", "Investor Fit"]
  }
];

const signalStack = [
  { label: "Nachfrage", value: "82%" },
  { label: "Produktkern", value: "68%" },
  { label: "Go-to-Market", value: "74%" },
  { label: "Kapitalpfad", value: "59%" }
];

const dealroomSteps = ["Sourcing", "Signal", "Dossier", "Investor Fit"];

export function InvestorDealflowVisual() {
  return (
    <div className="relative overflow-hidden border border-neutral-200 bg-neutral-950 p-5 text-white shadow-[0_28px_90px_rgba(23,23,23,0.18)] md:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-white/[0.08] blur-3xl" />

      <div className="relative flex items-start justify-between gap-5 border-b border-white/[0.12] pb-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
            Investor Dealroom
          </p>
          <p className="mt-2 text-xl font-semibold leading-tight text-white">
            Validierte Ventures statt kalter Pitchdecks.
          </p>
        </div>
        <div className="hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/[0.55] sm:flex">
          <span className="investor-terminal-pulse h-2 w-2 rounded-full bg-white" />
          Live Signals
        </div>
      </div>

      <div className="relative mt-6 grid gap-5 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="relative min-h-[380px] overflow-hidden border border-white/10 bg-white/[0.035] p-4">
          <div className="investor-terminal-scan" />
          <div className="relative z-10 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-white/[0.45]">
            <span>Deal Dossiers</span>
            <span>Pre-Seed Access</span>
          </div>

          <div className="relative z-10 mt-6 grid gap-3">
            {ventureDossiers.map((item, index) => (
              <article
                key={item.title}
                className="investor-terminal-ticket border border-white/[0.12] bg-neutral-950/[0.78] p-4 backdrop-blur"
                style={{ animationDelay: `${index * 180}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold tabular-nums text-white/[0.45]">
                      {item.stage}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold leading-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="border border-white/[0.12] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-white/[0.6]">
                    geprüft
                  </p>
                </div>
                <div className="mt-5 grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-2">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/[0.35]">
                      Signal
                    </p>
                    <p className="mt-1 text-sm font-medium leading-6 text-white/[0.82]">{item.signal}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/[0.35]">
                      Indikation
                    </p>
                    <p className="mt-1 text-sm font-medium leading-6 text-white/[0.82]">{item.metric}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/[0.55]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="border border-white/10 bg-white/[0.035] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
              Signal Stack
            </p>
            <div className="mt-5 grid gap-4">
              {signalStack.map((item, index) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between gap-4 text-xs font-semibold text-white/[0.75]">
                    <span>{item.label}</span>
                    <span className="tabular-nums text-white/[0.45]">{item.value}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden bg-white/10">
                    <div
                      className="investor-terminal-meter h-full bg-white"
                      style={{ width: item.value, animationDelay: `${index * 130}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.035] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
              Von Zugang zu Entscheidung
            </p>
            <div className="mt-5 grid gap-3">
              {dealroomSteps.map((step, index) => (
                <div
                  key={step}
                  className="investor-terminal-step flex items-center gap-3 border border-white/10 bg-neutral-950/50 px-3 py-3"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <span className="flex h-7 w-7 items-center justify-center border border-white/[0.14] text-[10px] font-semibold tabular-nums text-white/[0.45]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-white/[0.85]">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/10 bg-white p-4 text-neutral-950">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Investment-Fit
            </p>
            <p className="mt-3 text-sm font-medium leading-7 text-neutral-700">
              Wir bringen nur dann Gespräche zusammen, wenn These, Marktphase, Kapitalbedarf und
              Investor-Profil zueinander passen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
