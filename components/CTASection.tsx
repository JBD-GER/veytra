import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title = "Soll aus der Idee ein echtes Startup werden?",
  description = "Wir prüfen Marktproblem, Produktchance, Teambedarf und Deal-Modell. Danach ist klar, ob wir gemeinsam bauen.",
  primaryLabel = "Venture anfragen",
  primaryHref = "/kontakt",
  secondaryLabel,
  secondaryHref
}: CTASectionProps) {
  return (
    <section className="border-y border-neutral-200 bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-16 md:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div data-reveal="slide" className="max-w-3xl">
          <h2 className="text-2xl font-semibold leading-tight md:text-4xl">{title}</h2>
          <p className="mt-5 text-base leading-8 text-neutral-300 md:text-lg">{description}</p>
        </div>
        <div data-reveal="fade" data-reveal-delay="120ms" className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Link
            href={primaryHref}
            className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white bg-white px-5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link
              href={secondaryHref}
              className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-600 px-5 text-sm font-medium text-white transition hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
