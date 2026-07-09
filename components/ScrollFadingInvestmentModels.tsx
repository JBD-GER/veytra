"use client";

import { useEffect, useRef } from "react";

type InvestmentModel = {
  title: string;
  label: string;
  when: string;
  means: string;
};

type ScrollFadingInvestmentModelsProps = {
  models: InvestmentModel[];
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function ScrollFadingInvestmentModels({ models }: ScrollFadingInvestmentModelsProps) {
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      itemRefs.current.forEach((item) => {
        if (!item) return;
        item.style.opacity = "1";
        item.style.transform = "none";
        item.style.filter = "none";
        item.style.clipPath = "inset(0 0 0 0)";
        item.style.setProperty("--investment-line", "100%");
      });
      return;
    }

    let frame = 0;

    const update = () => {
      const viewportHeight = window.innerHeight;
      const isCompact = window.innerWidth < 768;
      const targetCenter = viewportHeight * 0.56;
      const activeRange = viewportHeight * 0.56;

      itemRefs.current.forEach((item) => {
        if (!item) return;

        if (isCompact) {
          item.style.opacity = "1";
          item.style.transform = "none";
          item.style.filter = "none";
          item.style.clipPath = "inset(0 0 0 0)";
          item.style.setProperty("--investment-line", "100%");
          return;
        }

        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - targetCenter);
        const intensity = clamp(1 - distance / activeRange, 0, 1);
        const eased = 1 - Math.pow(1 - intensity, 3);
        const opacity = 0.12 + eased * 0.88;
        const translateY = (1 - eased) * 42;
        const scale = 0.965 + eased * 0.035;
        const blur = (1 - eased) * 2.2;
        const clip = (1 - eased) * 7;
        const line = 12 + eased * 88;

        item.style.opacity = opacity.toFixed(3);
        item.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`;
        item.style.filter = `blur(${blur.toFixed(2)}px)`;
        item.style.clipPath = `inset(${clip.toFixed(2)}% 0 ${clip.toFixed(2)}% 0)`;
        item.style.setProperty("--investment-line", `${line.toFixed(1)}%`);
      });

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
  }, []);

  return (
    <div className="grid gap-5">
      {models.map((item, index) => (
        <article
          key={item.title}
          ref={(element) => {
            itemRefs.current[index] = element;
          }}
          className="relative overflow-hidden will-change-transform border border-neutral-800 bg-white/[0.035] p-6 transition-[border-color,background-color] duration-300 hover:border-neutral-600 hover:bg-white/[0.055] md:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:84px_84px] opacity-[0.07]" />
          <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm tabular-nums text-neutral-500">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              {item.label}
            </p>
          </div>
          <div className="mt-7 grid gap-8 lg:grid-cols-[0.46fr_0.54fr] lg:items-start">
            <div>
              <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                {item.title}
              </h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border-t border-neutral-800 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Wann sinnvoll
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-300">{item.when}</p>
              </div>
              <div className="border-t border-neutral-800 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Was es bedeutet
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-300">{item.means}</p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 h-px bg-white/10">
            <div className="h-px w-[var(--investment-line)] bg-white transition-[width] duration-100" />
          </div>
          </div>
        </article>
      ))}
    </div>
  );
}
