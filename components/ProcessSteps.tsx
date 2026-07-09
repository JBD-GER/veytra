import type { ProcessStep } from "@/content/services";

type ProcessStepsProps = {
  steps: ProcessStep[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid gap-4">
      {steps.map((step, index) => (
        <li
          key={step.title}
          data-reveal="slide"
          data-reveal-delay={`${Math.min(index, 5) * 70}ms`}
          className="grid gap-5 border border-neutral-200 bg-white p-6 md:grid-cols-[120px_1fr_1fr] md:p-8"
        >
          <div className="text-sm font-medium tabular-nums text-neutral-500">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-neutral-950">{step.title}</h3>
            <p className="mt-3 text-base leading-8 text-neutral-600">{step.description}</p>
          </div>
          <div className="border-t border-neutral-200 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Ergebnis
            </p>
            <p className="mt-3 text-base leading-8 text-neutral-700">{step.outcome}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
