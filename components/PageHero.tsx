import Link from "next/link";

type HeroLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  links?: HeroLink[];
};

export function PageHero({ eyebrow, title, description, links = [] }: PageHeroProps) {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-4xl" data-reveal="slide">
          {eyebrow ? (
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-3xl font-semibold leading-tight text-neutral-950 md:text-5xl">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl md:leading-9">
            {description}
          </p>
          {links.length > 0 ? (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    link.variant === "secondary"
                      ? "inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-950 transition hover:border-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                      : "inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-950 bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
