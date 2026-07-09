import Link from "next/link";

import type { CaseStudy } from "@/content/case-studies";

type CaseStudyStripProps = {
  title: string;
  description?: string;
  studies: CaseStudy[];
};

export function CaseStudyStrip({ title, description, studies }: CaseStudyStripProps) {
  return (
    <div data-reveal="fade" className="border border-neutral-200 bg-white">
      <div className="grid gap-6 border-b border-neutral-200 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
        <h3 className="text-2xl font-semibold text-neutral-950">{title}</h3>
        {description ? <p className="text-base leading-8 text-neutral-600">{description}</p> : null}
      </div>
      <div className="divide-y divide-neutral-200">
        {studies.map((study) => (
          <Link
            key={study.slug}
            href={study.url}
            target="_blank"
            rel="noreferrer"
            className="grid gap-4 p-6 transition hover:bg-neutral-50 md:grid-cols-[180px_1fr_auto] md:items-center md:p-8"
          >
            <span className="text-sm font-semibold text-neutral-950">{study.name}</span>
            <span className="text-sm leading-6 text-neutral-600">{study.shortDescription}</span>
            <span className="text-sm text-neutral-500">Live ansehen</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
