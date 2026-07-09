"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { CaseStudy } from "@/content/case-studies";

type CaseStudyShowcaseProps = {
  studies: CaseStudy[];
};

export function CaseStudyShowcase({ studies }: CaseStudyShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const caseRefs = useRef<Array<HTMLElement | null>>([]);
  const activeStudy = studies[activeIndex] ?? studies[0];
  const progress = studies.length > 1 ? ((activeIndex + 1) / studies.length) * 100 : 100;

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
        rootMargin: "-22% 0px -28% 0px",
        threshold: [0.28, 0.42, 0.56]
      }
    );

    caseRefs.current.forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.052)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:96px_96px] opacity-35" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 pt-8 md:hidden">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
          Cases
        </p>
        <div className="-mx-5 mt-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max gap-2">
            {studies.map((study, index) => (
              <a
                key={study.slug}
                href={`#${study.slug}`}
                className="border border-white/10 bg-white/[0.035] px-3 py-2 text-left text-white transition active:scale-[0.98]"
              >
                <span className="block text-[10px] font-semibold tabular-nums text-white/[0.45]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block max-w-[140px] truncate text-sm font-semibold">
                  {study.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-20 hidden border-b border-white/10 bg-neutral-950/88 backdrop-blur md:block">
        <div className="mx-auto grid max-w-[1240px] gap-4 px-5 py-4 md:px-8 lg:grid-cols-[0.35fr_0.65fr] lg:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
              Case Studies
            </p>
            <p className="mt-1 text-sm font-semibold text-white">{activeStudy.name}</p>
          </div>
          <div>
            <div className="flex items-center justify-between gap-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/[0.45]">
              <span>{activeStudy.category}</span>
              <span>
                {String(activeIndex + 1).padStart(2, "0")} / {String(studies.length).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-3 h-px bg-white/10">
              <div
                className="h-px bg-white transition-[width] duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1240px] gap-10 px-5 md:px-8 xl:grid-cols-[230px_1fr]">
        <aside className="hidden xl:block">
          <div className="sticky top-28 py-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.38]">
              Projekte
            </p>
            <div className="mt-5 grid gap-2">
              {studies.map((study, index) => (
                <a
                  key={study.slug}
                  href={`#${study.slug}`}
                  className={`group border px-3 py-3 text-left transition ${
                    activeIndex === index
                      ? "border-white bg-white text-neutral-950"
                      : "border-white/10 bg-white/[0.025] text-white/[0.55] hover:border-white/35 hover:text-white"
                  }`}
                >
                  <span className="block text-[10px] font-semibold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 block text-sm font-semibold">{study.name}</span>
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div>
          {studies.map((study, index) => (
            <article
              id={study.slug}
              key={study.slug}
              ref={(node) => {
                caseRefs.current[index] = node;
              }}
              data-index={index}
              data-active={activeIndex === index ? "true" : "false"}
              className="case-presentation scroll-mt-20 border-b border-white/10 py-10 last:border-b-0 md:min-h-[calc(100svh-72px)] md:scroll-mt-24 md:py-24"
            >
              <div className="grid gap-7 md:gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:items-center">
                <div className="case-presentation-copy">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5 md:items-center md:pb-6">
                    <div>
                      <p className="text-sm font-semibold tabular-nums text-white/[0.45]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
                        {study.category}
                      </p>
                    </div>
                    <Link
                      href={study.url}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 rounded-[6px] border border-white/15 px-3 py-2 text-xs font-medium text-white transition hover:border-white hover:bg-white hover:text-neutral-950 md:px-4 md:text-sm"
                    >
                      Live ansehen
                    </Link>
                  </div>

                  <h2 className="mt-6 text-3xl font-semibold leading-[1.05] tracking-tight md:mt-8 md:text-6xl">
                    {study.name}
                  </h2>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/[0.68] md:mt-7 md:text-lg md:leading-9">
                    {study.shortDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 md:mt-8">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-white/[0.62]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="case-browser relative overflow-hidden border border-white/15 bg-white p-2 shadow-[0_28px_80px_rgba(0,0,0,0.42)] md:p-4 md:shadow-[0_32px_110px_rgba(0,0,0,0.45)]">
                  <div className="flex items-center gap-2 border-b border-white/10 px-2 pb-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-950/[0.32]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-950/[0.2]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-950/[0.14]" />
                    <span className="ml-auto hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500 sm:inline">
                      {study.slug}
                    </span>
                  </div>
                  <div className="mt-3 overflow-hidden border border-neutral-200 bg-white">
                    <Image
                      src={study.screenshot}
                      alt={`Screenshot der Startseite von ${study.name}`}
                      width={1440}
                      height={1000}
                      sizes="(min-width: 1280px) 620px, (min-width: 1024px) 54vw, calc(100vw - 40px)"
                      className="aspect-[4/3] w-full object-cover object-top md:aspect-[16/10]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-7 grid gap-3 md:mt-10 lg:grid-cols-3">
                <div className="case-detail-panel border border-white/10 bg-white/[0.035] p-4 md:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.42]">
                    Marktproblem
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/[0.66]">{study.challenge}</p>
                </div>
                <div className="case-detail-panel border border-white/10 bg-white/[0.035] p-4 md:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.42]">
                    Studio-Arbeit
                  </p>
                  <ul className="mt-4 grid gap-2">
                    {study.build.map((item) => (
                      <li key={item} className="text-sm leading-6 text-white/[0.68]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="case-detail-panel border border-white/10 bg-white/[0.035] p-4 md:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.42]">
                    Venture-Logik
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/[0.66]">{study.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
