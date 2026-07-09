"use client";

import { useMemo, useState } from "react";

import type { RatgeberCategory, RatgeberPostPlan } from "@/content/ratgeber";

type RatgeberArchiveProps = {
  posts: RatgeberPostPlan[];
  categories: RatgeberCategory[];
  audienceOptions: string[];
};

const dateTimeFormatter = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Europe/Berlin"
});

function formatPublishAt(value: string) {
  return dateTimeFormatter.format(new Date(value));
}

export function RatgeberArchive({ posts, categories, audienceOptions }: RatgeberArchiveProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeAudience, setActiveAudience] = useState("all");
  const [query, setQuery] = useState("");

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();

    posts.forEach((post) => {
      counts.set(post.categoryId, (counts.get(post.categoryId) || 0) + 1);
    });

    return counts;
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory = activeCategory === "all" || post.categoryId === activeCategory;
      const matchesAudience = activeAudience === "all" || post.audience.includes(activeAudience);
      const matchesQuery =
        !normalizedQuery ||
        [post.title, post.focusKeyword, post.summary, post.categoryLabel, post.searchIntent]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesAudience && matchesQuery;
    });
  }, [activeAudience, activeCategory, posts, query]);

  return (
    <section id="ratgeber-archiv" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
          <aside className="lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Ratgeber-Archiv
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              {filteredPosts.length} von {posts.length} geplanten SEO-Beiträgen
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-600">
              Jeder Beitrag ist als Longform-Artikel mit Veröffentlichungszeit, Meta-Daten,
              Hero-Bildprompt und Zwischen-Grafiken geplant.
            </p>

            <div className="mt-7 grid gap-4">
              <label className="block">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  Suche
                </span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="form-field mt-2"
                  placeholder="Thema, Keyword oder Intent"
                />
              </label>

              <label className="block">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  Zielgruppe
                </span>
                <select
                  value={activeAudience}
                  onChange={(event) => setActiveAudience(event.target.value)}
                  className="form-field mt-2"
                >
                  <option value="all">Alle Zielgruppen</option>
                  {audienceOptions.map((audience) => (
                    <option key={audience} value={audience}>
                      {audience}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </aside>

          <div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`min-h-10 border px-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 ${
                  activeCategory === "all"
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-950"
                }`}
              >
                Alle Kategorien
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

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {filteredPosts.map((post, index) => (
                <article
                  id={post.slug}
                  key={post.slug}
                  data-reveal="slide"
                  data-reveal-delay={`${Math.min(index, 8) * 35}ms`}
                  className="overflow-hidden border border-neutral-200 bg-white transition hover:-translate-y-1 hover:border-neutral-950 hover:shadow-[0_20px_60px_rgba(23,23,23,0.08)]"
                >
                  <div
                    className="relative min-h-36 bg-neutral-950 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(10,10,10,0.78), rgba(10,10,10,0.24)), url(${post.coverImage})`
                    }}
                  >
                    <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
                      <span className="border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                        {post.categoryLabel}
                      </span>
                      <span className="border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                        {post.readingTime}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
                      <time dateTime={post.publishAt}>{formatPublishAt(post.publishAt)} Uhr</time>
                      <span aria-hidden="true">/</span>
                      <span>{post.wordCountTarget.toLocaleString("de-DE")} Wörter</span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold leading-tight text-neutral-950">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-neutral-600">{post.summary}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">
                        {post.focusKeyword}
                      </span>
                      <span className="border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">
                        {post.audience}
                      </span>
                    </div>

                    <details className="mt-5 border-t border-neutral-200 pt-4">
                      <summary className="cursor-pointer text-sm font-semibold text-neutral-950">
                        SEO- und Bildplanung
                      </summary>
                      <div className="mt-4 grid gap-4 text-sm leading-7 text-neutral-600">
                        <div>
                          <p className="font-semibold text-neutral-950">Meta Title</p>
                          <p>{post.metaTitle}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-950">Meta Description</p>
                          <p>{post.metaDescription}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-950">Hero-Bildprompt</p>
                          <p>{post.heroImagePrompt}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-950">Chronologische Struktur</p>
                          <ol className="mt-2 grid gap-2">
                            {post.outline.slice(0, 4).map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ol>
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-950">Zwischen-Grafiken</p>
                          <ul className="mt-2 grid gap-2">
                            {post.inlineGraphicPrompts.map((prompt) => (
                              <li key={prompt}>{prompt}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </details>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 ? (
              <div className="mt-8 border border-neutral-200 bg-neutral-50 p-6 text-sm leading-7 text-neutral-600">
                Für diese Kombination ist noch kein Beitrag geplant.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

