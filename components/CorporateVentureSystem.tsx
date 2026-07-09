"use client";

import { useEffect, useRef, useState } from "react";

type CorporateVentureStage = {
  label: string;
  tag: string;
  title: string;
  body: string;
  decision: string;
  output: string;
};

type CorporateVentureSystemProps = {
  stages: CorporateVentureStage[];
};

export function CorporateVentureSystem({ stages }: CorporateVentureSystemProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const stageRefs = useRef<Array<HTMLElement | null>>([]);
  const activeStage = stages[activeIndex] ?? stages[0];
  const progress = stages.length > 1 ? (activeIndex / (stages.length - 1)) * 100 : 0;

  useEffect(() => {
    let frame = 0;

    const updateActiveStage = () => {
      const focusLine = window.innerHeight * 0.52;
      let closestIndex = activeIndexRef.current;
      let closestDistance = Number.POSITIVE_INFINITY;

      stageRefs.current.forEach((node, index) => {
        if (!node) return;

        const rect = node.getBoundingClientRect();
        const isNearViewport = rect.bottom > 0 && rect.top < window.innerHeight;
        if (!isNearViewport) return;

        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - focusLine);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndexRef.current) {
        activeIndexRef.current = closestIndex;
        setActiveIndex(closestIndex);
      }

      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveStage);
    };

    updateActiveStage();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [stages.length]);

  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:96px_96px] opacity-35" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />

      <div className="sticky top-0 z-20 hidden border-b border-white/10 bg-neutral-950/88 backdrop-blur md:block">
        <div className="mx-auto max-w-[1240px] px-5 py-4 md:px-8">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
                Corporate Venture System
              </p>
              <p className="mt-1 text-sm font-semibold text-white">{activeStage?.title}</p>
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
              {String(activeIndex + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")}
            </p>
          </div>
          <div className="mt-4 h-px bg-white/10">
            <div
              className="h-px bg-white transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
        <div data-reveal="slide" className="grid gap-6 border-b border-white/10 pb-10 lg:grid-cols-[0.52fr_0.48fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
              Ablauf
            </p>
            <h2 className="mt-5 text-2xl font-semibold leading-tight md:text-3xl">
              Vom ersten Gespräch zur validierten Venture-Entscheidung.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/[0.66] lg:justify-self-end">
            Jede Phase hat einen klaren Zweck: einordnen, auswählen, vertraglich sauber starten,
            validieren und bei starken Signalen gründen oder skalieren.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {stages.map((stage, index) => (
            <article
              key={stage.title}
              ref={(node) => {
                stageRefs.current[index] = node;
              }}
              data-index={index}
              data-active={activeIndex === index ? "true" : "false"}
              className="corporate-system-panel relative overflow-hidden border border-white/10 bg-white/[0.035] p-5 md:p-6"
            >
              <div className="relative z-10">
                <div className="grid gap-6 lg:grid-cols-[70px_0.24fr_0.38fr_0.38fr] lg:items-start">
                  <p className="text-sm font-semibold tabular-nums text-white/[0.44]">
                    {stage.label}
                  </p>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.44]">
                      {stage.tag}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-tight text-white md:text-2xl">
                      {stage.title}
                    </h3>
                  </div>
                  <p className="text-base leading-8 text-white/[0.68]">{stage.body}</p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <p className="border border-white/10 bg-white/[0.025] p-4 text-sm leading-7 text-white/[0.68]">
                      {stage.decision}
                    </p>
                    <p className="border border-white/10 bg-white/[0.025] p-4 text-sm leading-7 text-white/[0.68]">
                      {stage.output}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
