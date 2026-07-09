import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { RatgeberPostBrowser } from "@/components/RatgeberPostBrowser";
import { StructuredData } from "@/components/StructuredData";
import { ratgeberCategories } from "@/content/ratgeber";
import { ratgeberArticlePreviews } from "@/content/ratgeber-articles";
import { createMetadata } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

const pageTitle = "Ratgeber für Venture Studio, MVP und AI Ventures";
const pageDescription =
  "Aktuelle Veytra Ratgeber-Beiträge zu Venture Studio, MVP-Validierung, AI Venture Building und Company Building.";

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/ratgeber"
});

const categoryCounts = new Map<string, number>();

ratgeberArticlePreviews.forEach((article) => {
  categoryCounts.set(article.categoryId, (categoryCounts.get(article.categoryId) || 0) + 1);
});

const latestArticles = [...ratgeberArticlePreviews].sort(
  (articleA, articleB) => new Date(articleB.publishAt).getTime() - new Date(articleA.publishAt).getTime()
);

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: pageTitle,
  description: pageDescription,
  url: `${getSiteUrl()}/ratgeber`,
  inLanguage: "de-DE",
  mainEntity: {
    "@type": "ItemList",
    name: "Aktuelle Veytra Ratgeber-Beiträge",
    numberOfItems: latestArticles.length,
    itemListElement: latestArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: article.title,
      url: `${getSiteUrl()}/ratgeber/${article.slug}`
    }))
  }
};

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
              Praxiswissen für Venture Studio, MVPs und AI-native Geschäftsmodelle.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-200 md:text-xl md:leading-9">
              Der Ratgeber sammelt fertige Longform-Beiträge für Gründer, Startups und
              Unternehmen, die neue digitale Geschäftsmodelle strukturierter validieren,
              bauen und in den Markt bringen wollen.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#beitraege"
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

          <div className="mt-12 grid gap-3 sm:grid-cols-3" data-reveal="fade">
            {[
              [ratgeberArticlePreviews.length.toString(), "fertige Beiträge"],
              [ratgeberCategories.length.toString(), "Ratgeber-Kategorien"],
              ["de-DE", "SEO & strukturierte Daten"]
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
          <div data-reveal="slide" className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Kategorien
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Wähle den Einstieg, der zu deiner Venture-Entscheidung passt.
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-600 md:text-lg">
              Die Kategorien bündeln die wichtigsten Fragen rund um Studio-Modell,
              Validierung, AI-Produkte, Go-to-Market, Fundraising und skalierbare
              Geschäftsmodelle.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ratgeberCategories.map((category, index) => (
              <Link
                key={category.id}
                href={`/ratgeber/kategorie/${category.id}`}
                data-reveal="slide"
                data-reveal-delay={`${index * 40}ms`}
                className="group overflow-hidden border border-neutral-200 bg-white transition hover:-translate-y-1 hover:border-neutral-950 hover:shadow-[0_20px_60px_rgba(23,23,23,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
              >
                <div className="relative aspect-[16/9] bg-neutral-950">
                  <Image
                    src={category.coverImage}
                    alt={category.coverAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.04),rgba(10,10,10,0.42))]" />
                </div>
                <div className="p-5">
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="beitraege" className="border-y border-neutral-200 bg-neutral-50 scroll-mt-20">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <div className="mb-10 max-w-3xl" data-reveal="slide">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Aktuelle Beiträge
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Alle fertigen Ratgeber auf einen Blick.
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-600 md:text-lg">
              Standardmäßig werden alle veröffentlichten Beiträge gezeigt. Über die
              Kategorien kannst du die Ansicht direkt auf ein Thema eingrenzen.
            </p>
          </div>

          <RatgeberPostBrowser articles={latestArticles} categories={ratgeberCategories} />
        </div>
      </section>

      <CTASection
        title="Aus Ratgeber-Wissen soll ein echtes Venture-Signal werden?"
        description="Wir verbinden Content, Validierung, MVP und Go-to-Market so, dass nicht nur gelesen, sondern gelernt und gebaut wird."
        primaryLabel="Venture prüfen lassen"
        secondaryLabel="Kontakt aufnehmen"
        secondaryHref="/kontakt"
      />
    </>
  );
}
