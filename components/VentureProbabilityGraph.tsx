"use client";

import { useEffect, useRef, useState } from "react";

const graphStages = [
  { label: "Idee", value: "These", x: 86, y: 274 },
  { label: "Validierung", value: "Signal", x: 226, y: 244 },
  { label: "Produkt", value: "MVP", x: 366, y: 196 },
  { label: "Launch", value: "Nachfrage", x: 506, y: 128 },
  { label: "Capital", value: "VC-ready", x: 646, y: 72 }
];

const activeCopy = [
  "Aus einer rohen Idee wird eine prüfbare Venture-These.",
  "Der Markt zeigt, ob Schmerz, Budget und Zielgruppe real sind.",
  "Der Produktkern wird nur dort gebaut, wo Signale stark genug sind.",
  "Launch, Ads, Sales und Tracking erzeugen messbare Nachfrage.",
  "Mit belastbaren Signalen wird Venture Capital realistischer."
];

export function VentureProbabilityGraph() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => setProgress(1));
      return () => window.cancelAnimationFrame(frame);
    }

    let frame = 0;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const scrollRange = rect.height - window.innerHeight;
      const nextProgress = scrollRange > 0 ? Math.min(Math.max(-rect.top / scrollRange, 0), 1) : 0;
      setProgress(nextProgress);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const activeIndex = Math.min(graphStages.length - 1, Math.floor(progress * graphStages.length));
  const lineProgress = Math.min(Math.max(progress * 1.08, 0), 1);
  const probability = Math.round(18 + lineProgress * 64);
  const capitalReadiness = Math.round(10 + Math.max(lineProgress - 0.45, 0) * 145);

  return (
    <section ref={sectionRef} className="relative border-y border-neutral-800 bg-neutral-950 text-white md:min-h-[280vh]">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="md:sticky md:top-20 md:min-h-[calc(100svh-5rem)]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 md:px-8 md:py-0 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative z-10 py-0 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Mehrwert
            </p>
            <h2 className="mt-5 max-w-xl text-2xl font-semibold leading-tight md:text-4xl">
              Ein Venture Studio erhöht die Wahrscheinlichkeit des Erfolgs.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-neutral-300 md:mt-6 md:text-lg">
              Durch frühe Validierung, fokussierten Produktbau, Launch mit echten Kanälen und
              einen Kapitalpfad, der auf Signalen basiert. So wird aus einer Idee schneller ein
              belastbares, potenziell Venture-Capital-fähiges Geschäftsmodell.
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-2 md:mt-10 md:gap-3">
              {[
                ["Erfolgschance", `${probability}%`],
                ["Risiko", progress > 0.42 ? "sichtbar" : "unklar"],
                ["VC-Readiness", `${Math.min(capitalReadiness, 100)}%`]
              ].map(([label, value]) => (
                <div key={label} className="border border-neutral-800 bg-white/[0.03] p-3 md:p-4">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    {label}
                  </p>
                  <p className="mt-3 text-base font-semibold tabular-nums text-white md:text-xl">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 min-h-[104px] border-l border-neutral-800 pl-5 md:mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                {graphStages[activeIndex]?.label}
              </p>
              <p className="mt-3 max-w-md text-base leading-8 text-neutral-300">
                {activeCopy[activeIndex]}
              </p>
            </div>
          </div>

          <div className="relative z-10 py-0 md:py-20">
            <div className="relative overflow-hidden border border-neutral-800 bg-neutral-950 p-3 shadow-2xl shadow-black/40 md:p-8">
              <div className="absolute inset-0 [background:radial-gradient(circle_at_72%_18%,rgba(255,255,255,.14),transparent_30%),linear-gradient(135deg,rgba(255,255,255,.08),transparent_34%,rgba(255,255,255,.04)_68%,transparent)]" />
              <div className="relative">
                <div className="flex flex-col gap-2 border-b border-neutral-800 pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:pb-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Venture Probability Graph
                  </p>
                  <p className="text-sm text-neutral-500">Signalmodell</p>
                </div>

                <svg
                  viewBox="0 0 760 420"
                  role="img"
                  aria-label="Scroll-Graph für steigende Venture-Erfolgschance mit Veytra"
                  className="mt-4 h-auto w-full md:mt-6"
                >
                  <defs>
                    <linearGradient id="probabilityGlow" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#a3a3a3" />
                      <stop offset="55%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                    <filter id="softGlow">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <rect width="760" height="420" fill="transparent" />
                  {[72, 132, 192, 252, 312, 372].map((y) => (
                    <line key={y} x1="64" x2="704" y1={y} y2={y} stroke="rgba(255,255,255,.08)" />
                  ))}
                  {graphStages.map((stage) => (
                    <g key={stage.label}>
                      <line x1={stage.x} x2={stage.x} y1="56" y2="356" stroke="rgba(255,255,255,.05)" />
                      <text x={stage.x} y="392" textAnchor="middle" fill="#737373" fontSize="14">
                        {stage.label}
                      </text>
                    </g>
                  ))}

                  <path
                    d="M86 302 C196 296 282 284 366 258 C468 226 558 202 646 178"
                    fill="none"
                    stroke="rgba(255,255,255,.22)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="12 14"
                  />
                  <text x="522" y="214" fill="#737373" fontSize="16">
                    ohne System
                  </text>

                  <path
                    d="M86 274 C176 262 238 248 306 220 C408 178 510 104 646 72"
                    fill="none"
                    stroke="rgba(255,255,255,.18)"
                    strokeWidth="18"
                    strokeLinecap="round"
                    filter="url(#softGlow)"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={1 - lineProgress}
                  />
                  <path
                    d="M86 274 C176 262 238 248 306 220 C408 178 510 104 646 72"
                    fill="none"
                    stroke="url(#probabilityGlow)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={1 - lineProgress}
                  />

                  {graphStages.map((stage, index) => {
                    const visible = progress >= index / graphStages.length - 0.02;
                    return (
                      <g
                        key={stage.value}
                        style={{
                          opacity: visible ? 1 : 0,
                          transform: `scale(${visible ? 1 : 0.6})`,
                          transformOrigin: `${stage.x}px ${stage.y}px`,
                          transition: "opacity 420ms ease, transform 420ms ease"
                        }}
                      >
                        <circle cx={stage.x} cy={stage.y} r="14" fill="#ffffff" opacity="0.16" />
                        <circle cx={stage.x} cy={stage.y} r="7" fill="#ffffff" />
                        <text x={stage.x} y={stage.y - 22} textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700">
                          {stage.value}
                        </text>
                      </g>
                    );
                  })}

                  <text x="86" y="46" fill="#ffffff" fontSize="18" fontWeight="700">
                    mit Veytra
                  </text>
                  <text x="64" y="366" fill="#737373" fontSize="13">
                    niedriges Signal
                  </text>
                  <text x="566" y="46" fill="#737373" fontSize="13">
                    funding-fähiger
                  </text>
                </svg>

                <div className="mt-3 grid gap-2 md:mt-4 md:grid-cols-3 md:gap-3">
                  {[
                    ["De-risking", "Risiko wird früher sichtbar"],
                    ["Launch", "Nachfrage wird aktiv erzeugt"],
                    ["Venture Capital", "Kapitalstory basiert auf Signalen"]
                  ].map(([title, body]) => (
                    <div key={title} className="border border-neutral-800 bg-white/[0.03] p-3 md:p-4">
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-neutral-400">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
