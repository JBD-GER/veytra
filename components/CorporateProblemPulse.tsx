"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type CorporateProblemPulseProps = {
  statements: string[];
};

export function CorporateProblemPulse({ statements }: CorporateProblemPulseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const statementProgress = Math.min(Math.max(progress * Math.max(statements.length - 1, 1), 0), Math.max(statements.length - 1, 1));

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(rect.height - window.innerHeight, 1);
      const nextProgress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      const nextIndex = Math.min(
        statements.length - 1,
        Math.max(0, Math.round(nextProgress * Math.max(statements.length - 1, 1)))
      );

      setProgress(nextProgress);
      setActiveIndex(nextIndex);
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [statements.length]);

  return (
    <div ref={sectionRef} className="relative">
      <div className="py-14 md:hidden">
        <div data-reveal="slide">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Aktuelle Blockaden
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-neutral-950">
            Wenn Innovation intern zu langsam wird, braucht sie ein anderes Setup.
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Schneller testen", "Ressourcen sparen", "Klar entscheiden"].map((item) => (
              <span key={item} className="border border-neutral-200 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-700">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-3">
          {statements.map((statement, index) => (
            <article
              key={statement}
              data-reveal="slide"
              data-reveal-delay={`${index * 45}ms`}
              className="border border-neutral-200 bg-white p-4"
            >
              <p className="text-sm font-semibold tabular-nums text-neutral-500">
                {String(index + 1).padStart(2, "0")} / {String(statements.length).padStart(2, "0")}
              </p>
              <p className="mt-4 text-lg font-semibold leading-tight text-neutral-950">
                {statement}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div
        className="relative hidden md:block"
        style={{ height: `${Math.max(statements.length * 42, 260)}svh` } as CSSProperties}
      >
      <div className="sticky top-20 z-10 flex min-h-[min(720px,calc(100svh-5rem))] items-start border-y border-neutral-200 bg-neutral-50/92 py-8 backdrop-blur md:py-10">
        <div className="w-full">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Aktuelle Blockade
              </p>
              <p className="mt-1 text-sm font-semibold text-neutral-950">
                {String(activeIndex + 1).padStart(2, "0")} / {String(statements.length).padStart(2, "0")}
              </p>
            </div>
            <div className="hidden gap-2 sm:flex">
              {["Schneller testen", "Ressourcen sparen", "Klar entscheiden"].map((item) => (
                <span key={item} className="border border-neutral-200 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-600">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 h-px bg-neutral-200">
            <div
              className="h-px bg-neutral-950 transition-[width] duration-150 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <div className="mt-9 md:mt-11">
            <p className="text-sm font-semibold tabular-nums text-neutral-500">
              {String(activeIndex + 1).padStart(2, "0")}
            </p>
            <div className="relative mt-6 min-h-[250px] md:min-h-[230px]">
              {statements.map((statement, index) => {
                const distance = Math.abs(index - statementProgress);
                const visibility = Math.max(0, 1 - distance * 1.2);
                const offset = (index - statementProgress) * 32;

                return (
                  <h2
                    key={statement}
                    className="corporate-problem-sentence absolute inset-x-0 top-0 max-w-6xl text-4xl font-semibold leading-[1.06] text-neutral-950 md:text-6xl"
                    style={{
                      filter: `blur(${Math.min(distance * 8, 10)}px)`,
                      opacity: visibility,
                      transform: `translate3d(0, ${offset}px, 0) scale(${0.985 + visibility * 0.015})`,
                      pointerEvents: visibility > 0.85 ? "auto" : "none"
                    } as CSSProperties}
                  >
                    {statement}
                  </h2>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
