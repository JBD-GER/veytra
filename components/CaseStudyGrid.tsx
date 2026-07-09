import Link from "next/link";
import Image from "next/image";

import type { CaseStudy } from "@/content/case-studies";

type CaseStudyGridProps = {
  studies: CaseStudy[];
  compact?: boolean;
};

export function CaseStudyGrid({ studies, compact = false }: CaseStudyGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {studies.map((study, index) => (
        <article
          key={study.slug}
          data-reveal="slide"
          data-reveal-delay={`${Math.min(index, 4) * 70}ms`}
          className="group flex min-h-[440px] flex-col border border-neutral-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-neutral-950 md:p-5"
        >
          <div className="mb-6 overflow-hidden border border-neutral-200 bg-neutral-50">
            <Image
              src={study.screenshot}
              alt={`Screenshot der Startseite von ${study.name}`}
              width={1440}
              height={1000}
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="aspect-[16/8] h-auto w-full object-cover object-top grayscale transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0"
            />
          </div>

          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                {study.category}
              </p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-neutral-950">
                {study.name}
              </h3>
            </div>
            <span className="text-sm tabular-nums text-neutral-400">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <p className="mt-5 flex-1 text-base leading-8 text-neutral-600">
            {compact ? study.shortDescription : study.challenge}
          </p>

          {!compact ? (
            <ul className="mt-6 grid gap-2 border-t border-neutral-200 pt-5">
              {study.build.slice(0, 3).map((item) => (
                <li key={item} className="text-sm leading-6 text-neutral-700">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-2">
            {study.tags.slice(0, compact ? 3 : 4).map((tag) => (
              <span key={tag} className="border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600">
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={study.url}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex text-sm font-medium text-neutral-950 underline"
          >
            Live ansehen
          </Link>
        </article>
      ))}
    </div>
  );
}
