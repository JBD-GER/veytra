import type { FAQItem } from "@/content/faqs";

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">
      {items.map((item, index) => (
        <article
          key={item.question}
          data-reveal="slide"
          data-reveal-delay={`${Math.min(index, 5) * 50}ms`}
          className="grid gap-4 py-6 md:grid-cols-[0.8fr_1.2fr] md:gap-10"
        >
          <h3 className="text-lg font-semibold leading-7 text-neutral-950">{item.question}</h3>
          <p className="text-base leading-8 text-neutral-600">{item.answer}</p>
        </article>
      ))}
    </div>
  );
}
