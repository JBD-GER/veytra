"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

type AudienceFit = {
  title: string;
  href: string;
  body: string;
};

type ScrollFadingAudienceCardsProps = {
  audiences: AudienceFit[];
};

type AudienceDetail = {
  label: string;
  outcome: string;
  signals: string[];
};

const detailsByTitle: Record<string, AudienceDetail> = {
  Unternehmen: {
    label: "Corporate Venture",
    outcome: "Aus interner Marktchance wird ein testbares neues Geschäft.",
    signals: ["Distribution", "Daten", "Neue Erlöse"]
  },
  Gründer: {
    label: "Founder Build",
    outcome: "Aus Nähe zum Problem wird ein Venture mit Produktkern.",
    signals: ["These", "MVP", "Launch"]
  },
  Startups: {
    label: "Growth Sprint",
    outcome: "Aus vorhandenem Produkt wird ein klarerer Wachstumshebel.",
    signals: ["Produkt", "Growth", "Kapitalpfad"]
  }
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function ScrollFadingAudienceCards({ audiences }: ScrollFadingAudienceCardsProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.style.opacity = "1";
        card.style.transform = "none";
        card.style.filter = "none";
        card.style.clipPath = "inset(0 0 0 0)";
        card.style.setProperty("--audience-line", "100%");
      });

      if (progressRef.current) {
        progressRef.current.style.transform = "scaleY(1)";
      }

      return;
    }

    let frame = 0;

    const update = () => {
      const viewportHeight = window.innerHeight;
      const isCompact = window.innerWidth < 768;
      const targetCenter = viewportHeight * 0.55;
      const activeRange = viewportHeight * 0.62;
      const section = sectionRef.current;

      if (section && progressRef.current) {
        const rect = section.getBoundingClientRect();
        const progress = clamp((viewportHeight * 0.72 - rect.top) / (rect.height + viewportHeight * 0.08), 0, 1);
        progressRef.current.style.transform = `scaleY(${progress.toFixed(4)})`;
      }

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        if (isCompact) {
          card.style.opacity = "1";
          card.style.transform = "none";
          card.style.filter = "none";
          card.style.clipPath = "inset(0 0 0 0)";
          card.style.setProperty("--audience-line", "100%");
          return;
        }

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - targetCenter);
        const intensity = clamp(1 - distance / activeRange, 0, 1);
        const eased = 1 - Math.pow(1 - intensity, 3);
        const side = index % 2 === 0 ? -1 : 1;
        const translateX = (1 - eased) * 34 * side;
        const translateY = (1 - eased) * 22;
        const scale = 0.975 + eased * 0.025;
        const opacity = 0.22 + eased * 0.78;
        const blur = (1 - eased) * 1.2;
        const line = 18 + eased * 82;

        card.style.opacity = opacity.toFixed(3);
        card.style.transform = `translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`;
        card.style.filter = `blur(${blur.toFixed(2)}px)`;
        card.style.clipPath = `inset(0 ${(1 - eased) * 4}% 0 0)`;
        card.style.setProperty("--audience-line", `${line.toFixed(1)}%`);
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
    <div ref={sectionRef} className="relative mt-12 md:mt-14">
      <div className="pointer-events-none absolute left-5 top-0 hidden h-full w-px bg-white/10 md:block">
        <div
          ref={progressRef}
          className="h-full origin-top bg-white transition-transform duration-100"
          style={{ transform: "scaleY(0)" }}
        />
      </div>

      <div className="grid gap-4 md:pl-14">
        {audiences.map((item, index) => {
          const detail = detailsByTitle[item.title] ?? {
            label: "Venture Build",
            outcome: "Aus Potenzial wird ein prüfbares Geschäftsmodell.",
            signals: ["Markt", "Produkt", "Launch"]
          };

          return (
            <Link
              key={item.title}
              href={item.href}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="group relative overflow-hidden border border-white/10 bg-white/[0.035] p-6 text-white will-change-transform transition-[border-color,background-color] duration-300 hover:border-white/40 hover:bg-white/[0.06] md:p-8"
              style={{ "--audience-line": "22%" } as CSSProperties}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:96px_96px] opacity-[0.08]" />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-white/80 opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-sm tabular-nums text-neutral-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      {detail.label}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-neutral-200 underline decoration-white/30 underline-offset-8 transition group-hover:decoration-white">
                    Mehr erfahren
                  </span>
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-neutral-400 md:text-base md:leading-8">
                      {detail.outcome}
                    </p>
                  </div>
                  <div>
                    <p className="text-base leading-8 text-neutral-300 md:text-lg md:leading-9">
                      {item.body}
                    </p>
                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {detail.signals.map((signal) => (
                        <span
                          key={signal}
                          className="border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-300"
                        >
                          {signal}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 h-px w-full bg-white/10">
                  <div className="h-px w-[var(--audience-line)] bg-white transition-[width] duration-100" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
