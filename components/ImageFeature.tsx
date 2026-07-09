import Image from "next/image";

type ImageFeatureProps = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  reverse?: boolean;
};

export function ImageFeature({ src, alt, eyebrow, title, description, reverse = false }: ImageFeatureProps) {
  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className={`mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div data-reveal="clip" className="overflow-hidden border border-neutral-200 bg-neutral-50">
          <Image
            src={src}
            alt={alt}
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[3/2] h-auto w-full object-cover transition duration-700 ease-out hover:scale-[1.02]"
          />
        </div>
        <div data-reveal="slide" className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            {eyebrow}
          </p>
          <h2 className="mt-5 text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-base leading-8 text-neutral-600 md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
