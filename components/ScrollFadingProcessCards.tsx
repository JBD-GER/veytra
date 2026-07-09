"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

export type ScrollFadingProcessCard = {
  label: string;
  eyebrow: string;
  title: string;
  body: string;
  meta?: string[];
};

type ScrollFadingProcessCardsProps = {
  cards: ScrollFadingProcessCard[];
  tone?: "light" | "dark";
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function ScrollFadingProcessCards({ cards, tone = "light" }: ScrollFadingProcessCardsProps) {
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const isDark = tone === "dark";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;

    if (prefersReducedMotion || isMobileViewport) {
      itemRefs.current.forEach((item) => {
        if (!item) return;
        item.style.opacity = "1";
        item.style.transform = "none";
        item.style.filter = "none";
        item.style.clipPath = "inset(0 0 0 0)";
        item.style.setProperty("--process-card-line", "100%");
      });
      return;
    }

    let frame = 0;

    const update = () => {
      const viewportHeight = window.innerHeight;
      const targetCenter = viewportHeight * 0.56;
      const activeRange = viewportHeight * 0.62;

      itemRefs.current.forEach((item) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - targetCenter);
        const intensity = clamp(1 - distance / activeRange, 0, 1);
        const eased = 1 - Math.pow(1 - intensity, 3);
        const opacity = 0.16 + eased * 0.84;
        const translateY = (1 - eased) * 38;
        const scale = 0.97 + eased * 0.03;
        const blur = (1 - eased) * 1.7;
        const clip = (1 - eased) * 5;
        const line = 10 + eased * 90;

        item.style.opacity = opacity.toFixed(3);
        item.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`;
        item.style.filter = `blur(${blur.toFixed(2)}px)`;
        item.style.clipPath = `inset(${clip.toFixed(2)}% 0 ${clip.toFixed(2)}% 0)`;
        item.style.setProperty("--process-card-line", `${line.toFixed(1)}%`);
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
    <div className="grid gap-4">
      {cards.map((item, index) => (
        <article
          key={`${item.label}-${item.title}`}
          ref={(element) => {
            itemRefs.current[index] = element;
          }}
          className={`relative overflow-hidden border p-5 will-change-transform transition-[border-color,background-color] duration-300 md:p-8 ${
            isDark
              ? "border-neutral-800 bg-white/[0.035] hover:border-neutral-600 hover:bg-white/[0.055]"
              : "border-neutral-200 bg-white hover:border-neutral-950"
          }`}
          style={{ "--process-card-line": "12%" } as CSSProperties}
        >
          <div
            className={`pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,currentColor_1px,transparent_1px),linear-gradient(180deg,currentColor_1px,transparent_1px)] bg-[size:92px_92px] ${
              isDark ? "text-white opacity-[0.05]" : "text-neutral-950 opacity-[0.035]"
            }`}
          />
          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <p className={`text-sm font-semibold tabular-nums ${isDark ? "text-neutral-500" : "text-neutral-500"}`}>
                {item.label}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                {item.eyebrow}
              </p>
            </div>

            <div className="mt-6 grid gap-5 md:mt-7 md:gap-7 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
              <h3 className={`text-xl font-semibold leading-tight md:text-3xl ${isDark ? "text-white" : "text-neutral-950"}`}>
                {item.title}
              </h3>
              <div>
                <p className={`text-sm leading-7 md:text-lg md:leading-9 ${isDark ? "text-neutral-300" : "text-neutral-600"}`}>
                  {item.body}
                </p>
                {item.meta?.length ? (
                  <div className="mt-6 grid gap-2 sm:grid-cols-3 md:mt-7 md:gap-3">
                    {item.meta.map((meta) => (
                      <span
                        key={meta}
                        className={`border px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] md:px-4 md:py-3 md:text-xs ${
                          isDark
                            ? "border-white/10 bg-white/[0.03] text-neutral-300"
                            : "border-neutral-200 bg-neutral-50 text-neutral-600"
                        }`}
                      >
                        {meta}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <div className={`mt-8 h-px ${isDark ? "bg-white/10" : "bg-neutral-200"}`}>
              <div className={`h-px w-[var(--process-card-line)] ${isDark ? "bg-white" : "bg-neutral-950"}`} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
