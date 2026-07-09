"use client";

import { useState } from "react";

type StartupStage = {
  label: string;
  problem: string;
  help: string;
};

type StartupStageSwitcherProps = {
  stages: StartupStage[];
};

export function StartupStageSwitcher({ stages }: StartupStageSwitcherProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = stages[activeIndex] ?? stages[0];

  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-24">
        <div data-reveal="slide" className="grid gap-6 border-b border-neutral-200 pb-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Startup-Stages
            </p>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-neutral-950 md:text-3xl">
              Je nach Phase lösen wir unterschiedliche Engpässe.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-neutral-600 lg:justify-self-end">
            Die Aufgabe verändert sich mit der Reife des Startups. Deshalb beginnt Veytra nicht mit
            einem Standardpaket, sondern mit der Frage: Welche Entscheidung muss als Nächstes möglich werden?
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.44fr_0.56fr]">
          <div data-reveal="slide" className="grid gap-2">
            {stages.map((stage, index) => (
              <button
                key={stage.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className="startup-stage-tab grid min-h-16 grid-cols-[54px_1fr] items-center gap-4 border border-neutral-200 bg-white p-4 text-left transition hover:border-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                data-active={activeIndex === index ? "true" : "false"}
              >
                <span className="text-sm font-semibold tabular-nums text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-neutral-950">{stage.label}</span>
              </button>
            ))}
          </div>

          <article data-reveal="scale" className="startup-stage-panel relative overflow-hidden border border-neutral-200 bg-white p-6 shadow-[0_28px_90px_rgba(23,23,23,0.06)] md:p-8">
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-6 border-b border-neutral-200 pb-8">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Aktive Phase
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-neutral-950 md:text-4xl">
                    {activeStage.label}
                  </h3>
                </div>
                <span className="hidden border border-neutral-200 bg-neutral-50 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500 sm:inline-flex">
                  Signal Fit
                </span>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Problem
                  </p>
                  <p className="mt-4 text-base font-medium leading-8 text-neutral-800">
                    {activeStage.problem}
                  </p>
                </div>
                <div className="border border-neutral-200 bg-white p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Veytra hilft
                  </p>
                  <p className="mt-4 text-base font-medium leading-8 text-neutral-800">
                    {activeStage.help}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
