"use client";

import { useEffect, useRef, useState } from "react";

type StoryMilestone = {
  date: string;
  label: string;
  title: string;
  body: string;
};

type StoryMilestonesProps = {
  milestones: StoryMilestone[];
};

export function StoryMilestones({ milestones }: StoryMilestonesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const milestoneRefs = useRef<Array<HTMLElement | null>>([]);
  const progress =
    milestones.length > 1 ? Math.min(100, Math.max(0, (activeIndex / (milestones.length - 1)) * 100)) : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!activeEntry) {
          return;
        }

        const index = Number((activeEntry.target as HTMLElement).dataset.index);
        if (!Number.isNaN(index)) {
          setActiveIndex(index);
        }
      },
      {
        rootMargin: "-30% 0px -34% 0px",
        threshold: [0.18, 0.34, 0.5, 0.66]
      }
    );

    milestoneRefs.current.forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, [milestones.length]);

  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:74px_74px] opacity-30 md:bg-[size:104px_104px] md:opacity-35" />
      <div className="relative mx-auto max-w-[1240px] px-5 py-14 md:px-8 md:py-24">
        <div data-reveal="slide" className="border-b border-white/10 pb-8 md:pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
            Milestones
          </p>
          <h2 className="mt-5 max-w-5xl text-2xl font-semibold leading-tight md:text-4xl">
            Von eigenen Builds zum Venture Studio.
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-8 text-white/[0.66] md:text-lg md:leading-9">
            Veytra wurde nicht am Whiteboard erfunden. Die Studio-Logik entstand aus eigenen
            Projekten, validierten Ideen und der Erfahrung, dass Produkt, Markt und Launch zusammen
            gedacht werden müssen.
          </p>
        </div>

        <div className="relative mt-4">
          <div className="pointer-events-none absolute bottom-0 left-[18px] top-0 w-px bg-white/10 md:left-8" />
          <div
            className="pointer-events-none absolute left-[18px] top-0 w-px bg-white transition-[height] duration-700 ease-out md:left-8"
            style={{ height: `${progress}%` }}
          />

          {milestones.map((milestone, index) => (
            <article
              key={`${milestone.date}-${milestone.title}`}
              ref={(node) => {
                milestoneRefs.current[index] = node;
              }}
              data-index={index}
              data-active={activeIndex === index ? "true" : "false"}
              aria-current={activeIndex === index ? "step" : undefined}
              className="story-milestone relative flex min-h-[58svh] items-center border-b border-white/10 py-12 last:border-b-0 sm:min-h-[52svh] md:min-h-[82svh] md:py-20"
            >
              <span className="story-milestone-dot absolute left-[9px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 rounded-full border border-white/30 bg-neutral-950 md:left-[23px]" />
              <div className="story-milestone-content max-w-5xl pl-14 md:pl-24">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
                  <p className="text-sm font-semibold tabular-nums text-white/[0.45]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
                    {milestone.label}
                  </p>
                </div>
                <p className="mt-8 text-xl font-semibold tracking-tight text-white/[0.55] md:text-2xl">
                  {milestone.date}
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl md:mt-5 md:text-7xl">
                  {milestone.title}
                </h3>
                <p className="mt-6 max-w-3xl text-base leading-8 text-white/[0.68] md:mt-8 md:text-xl md:leading-10">
                  {milestone.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
