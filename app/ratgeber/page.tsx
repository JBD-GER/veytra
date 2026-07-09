import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { RatgeberArchive } from "@/components/RatgeberArchive";
import { StructuredData } from "@/components/StructuredData";
import { publishedRatgeberSlugs } from "@/content/ratgeber-articles";
import {
  featuredRatgeberPosts,
  ratgeberArticleStandard,
  ratgeberAudienceOptions,
  ratgeberCategories,
  ratgeberPostPlans,
  ratgeberResearchSignals
} from "@/content/ratgeber";
import { createMetadata } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

const pageTitle = "Ratgeber: Venture Studio, MVP, AI Ventures & Startup-Aufbau";
const pageDescription =
  "Der Veytra Ratgeber als SEO-Content-Hub: 100 geplante Longform-Beiträge zu Venture Studio, AI Venture Building, MVP, Corporate Ventures, GTM, SaaS, Fundraising und SEO.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/ratgeber"
});

const dateTimeFormatter = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Europe/Berlin"
});

const categoryCounts = new Map<string, number>();

ratgeberPostPlans.forEach((post) => {
  categoryCounts.set(post.categoryId, (categoryCounts.get(post.categoryId) || 0) + 1);
});

const totalWordTarget = ratgeberPostPlans.reduce((sum, post) => sum + post.wordCountTarget, 0);

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: pageTitle,
  description: pageDescription,
  url: `${getSiteUrl()}/ratgeber`,
  inLanguage: "de-DE",
  mainEntity: {
    "@type": "ItemList",
    name: "Geplante Veytra Ratgeber-Beiträge",
    numberOfItems: ratgeberPostPlans.length,
    itemListElement: featuredRatgeberPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `${getSiteUrl()}/ratgeber#${post.slug}`
    }))
  }
};

function formatPublishAt(value: string) {
  return dateTimeFormatter.format(new Date(value));
}

export default function GuidePage() {
  return (
    <>
      <StructuredData data={collectionPageSchema} />

      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.34]"
          style={{ backgroundImage: "url(/images/studio-workbench.png)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.96),rgba(10,10,10,0.78),rgba(10,10,10,0.48))]" />

        <div className="relative mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-4xl" data-reveal="slide">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
              Veytra Ratgeber
            </p>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              Ein SEO-Content-Hub für Venture Studio, MVPs und AI-native Geschäftsmodelle.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-200 md:text-xl md:leading-9">
              Der Ratgeber wird als redaktionelle Wissensbasis aufgebaut: kategorisiert,
              suchintentionsbasiert, mit Longform-Artikeln, Bildplanung, strukturierten
              Meta-Daten und einem klaren Weg von Recherche zu Venture-Anfrage.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#ratgeber-archiv"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white bg-white px-5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Beiträge ansehen
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white/40 px-5 text-sm font-medium text-white transition hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Venture anfragen
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-reveal="fade">
            {[
              ["100", "geplante SEO-Beiträge"],
              [ratgeberCategories.length.toString(), "strategische Kategorien"],
              [`${Math.round(totalWordTarget / 1000).toLocaleString("de-DE")}k+`, "Zielwörter im Plan"],
              ["1-3", "Grafiken je Artikel"]
            ].map(([value, label]) => (
              <div key={label} className="border border-white/10 bg-white/[0.04] p-4">
                <p className="text-3xl font-semibold leading-none">{value}</p>
                <p className="mt-3 text-sm leading-6 text-neutral-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
            <div data-reveal="slide">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Kategorien
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
                Die Themen folgen der echten Venture-Entscheidung.
              </h2>
              <p className="mt-5 text-base leading-8 text-neutral-600 md:text-lg">
                Statt loser Blogideen ist der Ratgeber als Topical Map geplant: Grundlagen,
                AI, Validierung, Corporate Build, GTM, SaaS, Fundraising, Pricing, Operations
                und SEO greifen ineinander.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {ratgeberCategories.map((category, index) => (
                <article
                  key={category.id}
                  data-reveal="slide"
                  data-reveal-delay={`${index * 40}ms`}
                  className="border border-neutral-200 bg-white p-5 transition hover:border-neutral-950"
                >
                  <div
                    className="mb-5 h-28 bg-neutral-950 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(10,10,10,0.72), rgba(10,10,10,0.18)), url(${category.coverImage})`
                    }}
                    role="img"
                    aria-label={category.coverAlt}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold leading-tight text-neutral-950">
                      {category.label}
                    </h3>
                    <span className="shrink-0 border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs font-semibold text-neutral-600">
                      {categoryCounts.get(category.id) || 0}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{category.description}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                    {category.intent}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <div className="mb-10 max-w-3xl" data-reveal="slide">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Start der Redaktion
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Featured-Beiträge für den ersten Content-Sprint.
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-600 md:text-lg">
              Diese Beiträge decken die wichtigsten Suchpfade ab: Was ist ein Venture Studio,
              wie entsteht ein AI-MVP, wie wird Validierung belastbar und wie wird SEO selbst
              zum Nachfragekanal.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredRatgeberPosts.map((post, index) => (
              <article
                key={post.slug}
                data-reveal="slide"
                data-reveal-delay={`${index * 60}ms`}
                className="overflow-hidden border border-neutral-200 bg-white"
              >
                <div
                  className="min-h-40 bg-neutral-950 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(10,10,10,0.76), rgba(10,10,10,0.2)), url(${post.coverImage})`
                  }}
                  role="img"
                  aria-label={post.imageAlt}
                />
                <div className="p-5 md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                    {post.categoryLabel}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold leading-tight text-neutral-950">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{post.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-neutral-600">
                    <time dateTime={post.publishAt}>{formatPublishAt(post.publishAt)} Uhr</time>
                    <span>/</span>
                    <span>{post.focusKeyword}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
            <div data-reveal="slide">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Redaktionsstandard
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
                Jeder geplante Artikel ist als vollständiger SEO-Beitrag vorbereitet.
              </h2>
              <p className="mt-5 text-base leading-8 text-neutral-600 md:text-lg">
                Die Planung legt fest, wie die späteren Artikel geschrieben, bebildert,
                strukturiert und technisch ausgezeichnet werden sollen.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="border border-neutral-200 bg-neutral-50 p-5">
                <h3 className="text-lg font-semibold text-neutral-950">Format</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {ratgeberArticleStandard.format}. Zielumfang: {ratgeberArticleStandard.targetLength}.
                </p>
              </article>
              <article className="border border-neutral-200 bg-neutral-50 p-5">
                <h3 className="text-lg font-semibold text-neutral-950">Pflichtdaten</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {ratgeberArticleStandard.requiredMetadata.slice(0, 4).join(", ")} und
                  strukturierte Artikel-Daten.
                </p>
              </article>
              <article className="border border-neutral-200 bg-neutral-50 p-5">
                <h3 className="text-lg font-semibold text-neutral-950">Schreiblogik</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  Chronologische H2-Struktur, erklärender Fließtext, interne Links und konkrete
                  Venture-Kontexte statt reiner Checklisten.
                </p>
              </article>
              <article className="border border-neutral-200 bg-neutral-50 p-5">
                <h3 className="text-lg font-semibold text-neutral-950">Bildplanung</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  Pro Beitrag sind ein Hero-Bildprompt, Alt-Text und 1 bis 3 Prompts für
                  erklärende Zwischen-Grafiken hinterlegt.
                </p>
              </article>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {ratgeberResearchSignals.map((signal) => (
              <a
                key={signal.url}
                href={signal.url}
                className="border border-neutral-200 bg-white p-4 text-sm leading-7 text-neutral-600 transition hover:border-neutral-950"
                target="_blank"
                rel="noreferrer"
              >
                <span className="block font-semibold text-neutral-950">{signal.source}</span>
                <span className="mt-3 block">{signal.signal}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <RatgeberArchive
        posts={ratgeberPostPlans}
        categories={ratgeberCategories}
        audienceOptions={ratgeberAudienceOptions}
        publishedSlugs={publishedRatgeberSlugs}
      />

      <CTASection
        title="Aus Ratgeber-Traffic soll ein echtes Venture-Signal werden?"
        description="Wir verbinden Content, Validierung, MVP und Go-to-Market so, dass nicht nur gelesen, sondern gelernt und gebaut wird."
        primaryLabel="Venture prüfen lassen"
        secondaryLabel="Kontakt aufnehmen"
        secondaryHref="/kontakt"
      />
    </>
  );
}
