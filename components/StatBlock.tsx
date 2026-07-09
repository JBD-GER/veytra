type StatBlockProps = {
  items: Array<{
    label: string;
    value: string;
    description: string;
  }>;
};

export function StatBlock({ items }: StatBlockProps) {
  return (
    <div className="grid border border-neutral-200 bg-white md:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={item.label}
          data-reveal="slide"
          data-reveal-delay={`${index * 80}ms`}
          className="border-b border-neutral-200 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            {item.label}
          </p>
          <p className="mt-4 text-2xl font-semibold text-neutral-950">{item.value}</p>
          <p className="mt-3 text-sm leading-6 text-neutral-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
