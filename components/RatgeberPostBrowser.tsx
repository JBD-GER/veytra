"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import type { RatgeberCategory } from "@/content/ratgeber";
import type { RatgeberArticlePreview } from "@/content/ratgeber-articles";

type RatgeberPostBrowserProps = {
  articles: RatgeberArticlePreview[];
  categories: RatgeberCategory[];
  showFilters?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
};

const dateTimeFormatter = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Europe/Berlin"
});

function formatPublishAt(value: string) {
  return dateTimeFormatter.format(new Date(value));
}

export function RatgeberPostBrowser({
  articles,
  categories,
  showFilters = true,
  emptyTitle = "Noch keine veröffentlichten Beiträge",
  emptyDescription = "In dieser Kategorie sind noch keine fertigen Ratgeber online."
}: RatgeberPostBrowserProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();

    articles.forEach((article) => {
      counts.set(article.categoryId, (counts.get(article.categoryId) || 0) + 1);
    });

    return counts;
  }, [articles]);

  const sortedArticles = useMemo(
    () =>
      [...articles].sort(
        (articleA, articleB) =>
          new Date(articleB.publishAt).getTime() - new Date(articleA.publishAt).getTime()
      ),
    [articles]
  );

  const filteredArticles = useMemo(() => {
    if (activeCategory === "all") {
      return sortedArticles;
    }

    return sortedArticles.filter((article) => article.categoryId === activeCategory);
  }, [activeCategory, sortedArticles]);

  return (
    <div>
      {showFilters ? (
        <div className="flex flex-wrap gap-2" aria-label="Ratgeber-Kategorien filtern">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`min-h-10 border px-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 ${
              activeCategory === "all"
                ? "border-neutral-950 bg-neutral-950 text-white"
                : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-950"
            }`}
          >
            Alle ({articles.length})
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`min-h-10 border px-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 ${
                activeCategory === category.id
                  ? "border-neutral-950 bg-neutral-950 text-white"
                  : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-950"
              }`}
            >
              {category.shortLabel} ({categoryCounts.get(category.id) || 0})
            </button>
          ))}
        </div>
      ) : null}

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article, index) => (
          <article
            key={article.slug}
            data-reveal="slide"
            data-reveal-delay={`${Math.min(index, 8) * 45}ms`}
            className="group overflow-hidden border border-neutral-200 bg-white transition hover:-translate-y-1 hover:border-neutral-950 hover:shadow-[0_20px_60px_rgba(23,23,23,0.08)]"
          >
            <Link href={`/ratgeber/${article.slug}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950">
              <div className="relative aspect-[16/9] bg-neutral-950">
                <Image
                  src={article.coverImage}
                  alt={article.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.02),rgba(10,10,10,0.5))]" />
                <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center gap-2">
                  <span className="border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                    {article.categoryLabel}
                  </span>
                  <span className="border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                    {article.readingTime}
                  </span>
                </div>
              </div>
            </Link>

            <div className="p-5 md:p-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
                <time dateTime={article.publishAt}>{formatPublishAt(article.publishAt)} Uhr</time>
                <span aria-hidden="true">/</span>
                <span>{article.focusKeyword}</span>
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-tight text-neutral-950">
                <Link href={`/ratgeber/${article.slug}`} className="transition hover:text-neutral-600">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{article.summary}</p>

              <Link
                href={`/ratgeber/${article.slug}`}
                className="mt-5 inline-flex min-h-10 items-center justify-center rounded-[6px] border border-neutral-950 bg-neutral-950 px-4 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
              >
                Artikel lesen
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredArticles.length === 0 ? (
        <div className="mt-8 border border-neutral-200 bg-neutral-50 p-6">
          <h3 className="text-lg font-semibold text-neutral-950">{emptyTitle}</h3>
          <p className="mt-3 text-sm leading-7 text-neutral-600">{emptyDescription}</p>
        </div>
      ) : null}
    </div>
  );
}
