import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { RatgeberPostBrowser } from "@/components/RatgeberPostBrowser";
import { StructuredData } from "@/components/StructuredData";
import { ratgeberCategories } from "@/content/ratgeber";
import { ratgeberArticlePreviews } from "@/content/ratgeber-articles";
import { createMetadata } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

const categoryById: Map<string, (typeof ratgeberCategories)[number]> = new Map(
  ratgeberCategories.map((category) => [category.id, category])
);

export function generateStaticParams() {
  return ratgeberCategories.map((category) => ({
    category: category.id
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = categoryById.get(categoryId);

  if (!category) {
    return {};
  }

  return createMetadata({
    title: `${category.label}: Ratgeber & Blogbeiträge`,
    description: `${category.description} Aktuelle Veytra Beiträge in der Kategorie ${category.label}.`,
    path: `/ratgeber/kategorie/${category.id}`
  });
}

export default async function RatgeberCategoryPage({ params }: CategoryPageProps) {
  const { category: categoryId } = await params;
  const category = categoryById.get(categoryId);

  if (!category) {
    notFound();
  }

  const articles = ratgeberArticlePreviews
    .filter((article) => article.categoryId === category.id)
    .sort(
      (articleA, articleB) => new Date(articleB.publishAt).getTime() - new Date(articleA.publishAt).getTime()
    );

  const pageUrl = `${getSiteUrl()}/ratgeber/kategorie/${category.id}`;
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.label}: Ratgeber & Blogbeiträge`,
    description: category.description,
    url: pageUrl,
    inLanguage: "de-DE",
    mainEntity: {
      "@type": "ItemList",
      name: `${category.label} Beiträge`,
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.title,
        url: `${getSiteUrl()}/ratgeber/${article.slug}`
      }))
    }
  };

  return (
    <>
      <StructuredData data={collectionPageSchema} />

      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <Image
          src={category.coverImage}
          alt={category.coverAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.96),rgba(10,10,10,0.76),rgba(10,10,10,0.42))]" />

        <div className="relative mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <Link
            href="/ratgeber"
            className="inline-flex text-sm font-medium text-neutral-300 underline underline-offset-4 transition hover:text-white"
          >
            Zurück zum Ratgeber
          </Link>

          <div className="mt-10 max-w-4xl" data-reveal="slide">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
              Ratgeber Kategorie
            </p>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">{category.label}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-200 md:text-xl md:leading-9">
              {category.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                {category.intent}
              </span>
              <span className="border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                {articles.length} {articles.length === 1 ? "Beitrag" : "Beiträge"}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <div className="mb-10 max-w-3xl" data-reveal="slide">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Beiträge
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
              Aktuelle Artikel in {category.shortLabel}.
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-600 md:text-lg">
              Hier erscheinen ausschließlich veröffentlichte Ratgeber-Beiträge dieser Kategorie.
            </p>
          </div>

          <RatgeberPostBrowser
            articles={articles}
            categories={ratgeberCategories}
            showFilters={false}
            emptyTitle="Noch keine Beiträge in dieser Kategorie"
            emptyDescription="Diese Kategorie ist bereits vorbereitet. Sobald ein Beitrag fertig veröffentlicht ist, erscheint er hier."
          />
        </div>
      </section>
    </>
  );
}
