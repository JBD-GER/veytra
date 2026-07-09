import type { ServiceModule } from "@/content/services";

type ServiceGridProps = {
  services: ServiceModule[];
};

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <article
          key={service.title}
          data-reveal="slide"
          data-reveal-delay={`${Math.min(index, 5) * 60}ms`}
          className="flex min-h-[320px] flex-col border border-neutral-200 bg-white p-6 transition hover:border-neutral-400"
        >
          <h3 className="text-xl font-semibold leading-snug text-neutral-950">{service.title}</h3>
          <p className="mt-4 flex-1 text-base leading-8 text-neutral-600">{service.description}</p>
          <ul className="mt-6 grid gap-2 border-t border-neutral-200 pt-5">
            {service.results.map((result) => (
              <li key={result} className="text-sm leading-6 text-neutral-700">
                {result}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
