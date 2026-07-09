import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { getRatgeberArticle, ratgeberArticles, type ArticleGraphic } from "@/content/ratgeber-articles";
import { absoluteUrl } from "@/lib/utils";

type RatgeberArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  dateStyle: "long",
  timeStyle: "short",
  timeZone: "Europe/Berlin"
});

export function generateStaticParams() {
  return ratgeberArticles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: RatgeberArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getRatgeberArticle(slug);

  if (!article) {
    return {};
  }

  const canonical = `/ratgeber/${article.slug}`;
  const imageUrl = article.plan.coverImage;

  return {
    title: article.plan.metaTitle,
    description: article.plan.metaDescription,
    alternates: {
      canonical
    },
    openGraph: {
      title: article.plan.metaTitle,
      description: article.plan.metaDescription,
      url: canonical,
      siteName: "Veytra",
      locale: "de_DE",
      type: "article",
      publishedTime: article.plan.publishAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.plan.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: article.plan.metaTitle,
      description: article.plan.metaDescription,
      images: [imageUrl]
    }
  };
}

function formatDate(value: string) {
  return dateFormatter.format(new Date(value));
}

export default async function RatgeberArticlePage({ params }: RatgeberArticlePageProps) {
  const { slug } = await params;
  const article = getRatgeberArticle(slug);

  if (!article) {
    notFound();
  }

  const articleUrl = absoluteUrl(`/ratgeber/${article.slug}`);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.plan.title,
    description: article.plan.metaDescription,
    image: absoluteUrl(article.plan.coverImage),
    datePublished: article.plan.publishAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: article.author
    },
    publisher: {
      "@type": "Organization",
      name: "Veytra",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icon.svg")
      }
    },
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    inLanguage: "de-DE",
    articleSection: article.plan.categoryLabel,
    keywords: [article.plan.focusKeyword, article.plan.categoryLabel, article.plan.searchIntent]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const relatedArticles = article.relatedSlugs
    .map((relatedSlug) => getRatgeberArticle(relatedSlug))
    .filter((relatedArticle): relatedArticle is NonNullable<typeof relatedArticle> => Boolean(relatedArticle));

  return (
    <>
      <StructuredData data={[articleSchema, faqSchema]} />

      <article className="bg-white">
        <header className="relative overflow-hidden bg-neutral-950 text-white">
          <Image
            src={article.plan.coverImage}
            alt={article.plan.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.96),rgba(10,10,10,0.74),rgba(10,10,10,0.38))]" />

          <div className="relative mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
            <Link
              href="/ratgeber"
              className="inline-flex text-sm font-medium text-neutral-300 underline underline-offset-4 transition hover:text-white"
            >
              Zurück zum Ratgeber
            </Link>

            <div className="mt-10 max-w-4xl">
              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-300">
                <span>{article.plan.categoryLabel}</span>
                <span aria-hidden="true">/</span>
                <time dateTime={article.plan.publishAt}>{formatDate(article.plan.publishAt)} Uhr</time>
                <span aria-hidden="true">/</span>
                <span>{article.plan.readingTime}</span>
              </div>
              <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-5xl">
                {article.plan.title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-200 md:text-xl md:leading-9">
                {article.plan.summary}
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["Keyword", article.plan.focusKeyword],
                ["Zielgruppe", article.plan.audience],
                ["Suchintention", article.plan.searchIntent]
              ].map(([label, value]) => (
                <div key={label} className="border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
                    {label}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-6 text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
          <aside className="lg:sticky lg:top-24">
            <div className="border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                Inhalt
              </p>
              <nav className="mt-5 grid gap-3 text-sm leading-6">
                {article.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="text-neutral-700 hover:text-neutral-950">
                    {section.title}
                  </a>
                ))}
                <a href="#faq" className="text-neutral-700 hover:text-neutral-950">
                  Häufige Fragen
                </a>
              </nav>
            </div>
          </aside>

          <div>
            <div className="border-b border-neutral-200 pb-10">
              {article.intro.map((paragraph) => (
                <p key={paragraph} className="mt-0 text-lg leading-9 text-neutral-700 first:mt-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid gap-14 py-12">
              {article.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  {section.kicker ? (
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      {section.kicker}
                    </p>
                  ) : null}
                  <h2 className="text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
                    {section.title}
                  </h2>
                  <div className="mt-6 grid gap-5 text-base leading-8 text-neutral-700 md:text-lg md:leading-9">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.graphic ? <ArticleGraphicBlock graphic={section.graphic} /> : null}
                </section>
              ))}
            </div>

            <section id="faq" className="scroll-mt-24 border-y border-neutral-200 py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                FAQ
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
                Häufige Fragen zum Thema
              </h2>
              <div className="mt-8 grid gap-4">
                {article.faqs.map((faq) => (
                  <details key={faq.question} className="border border-neutral-200 bg-neutral-50 p-5">
                    <summary className="cursor-pointer text-base font-semibold text-neutral-950">
                      {faq.question}
                    </summary>
                    <p className="mt-4 text-sm leading-7 text-neutral-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {relatedArticles.length > 0 ? (
              <section className="py-12">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Weiter lesen
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {relatedArticles.map((relatedArticle) => (
                    <Link
                      key={relatedArticle.slug}
                      href={`/ratgeber/${relatedArticle.slug}`}
                      className="border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 hover:border-neutral-950"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                        {relatedArticle.plan.categoryLabel}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold leading-tight text-neutral-950">
                        {relatedArticle.plan.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-neutral-600">
                        {relatedArticle.plan.summary}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </article>

      <CTASection
        title="Soll aus der Lektüre ein konkreter Venture-Test werden?"
        description="Schick uns Idee, Marktproblem oder Startup-Situation. Wir prüfen, ob ein Venture-Studio-Ansatz sinnvoll ist und welcher nächste Test die größte Klarheit bringt."
        primaryLabel="Venture prüfen lassen"
        secondaryLabel="Ratgeber ansehen"
        secondaryHref="/ratgeber"
      />
    </>
  );
}

function ArticleGraphicBlock({ graphic }: { graphic: ArticleGraphic }) {
  return (
    <figure className="mt-8 border border-neutral-200 bg-neutral-950 p-5 text-white md:p-6">
      <figcaption>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
          Grafik
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-tight">{graphic.title}</h3>
        <p className="mt-3 text-sm leading-7 text-neutral-300">{graphic.caption}</p>
      </figcaption>
      <div className="mt-6 grid gap-3 md:grid-cols-4">
        {graphic.items.map((item) => (
          <div key={`${item.label}-${item.title}`} className="border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">
              {item.label}
            </p>
            <h4 className="mt-3 text-base font-semibold leading-tight">{item.title}</h4>
            <p className="mt-3 text-sm leading-6 text-neutral-300">{item.text}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}

