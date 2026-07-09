"use client";

import { useEffect, useRef, useState } from "react";

type BuildStep = {
  label: string;
  title: string;
  description: string;
};

type BuildSequenceProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: BuildStep[];
};

export function BuildSequence({ eyebrow, title, description, steps }: BuildSequenceProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const scrollRange = rect.height - window.innerHeight;
      const nextProgress = scrollRange > 0 ? Math.min(Math.max(-rect.top / scrollRange, 0), 1) : 0;

      setProgress(nextProgress);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const activeIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length));
  const activeStep = steps[activeIndex] ?? steps[0];

  return (
    <section ref={sectionRef} className="border-y border-neutral-800 bg-neutral-950 text-white md:min-h-[260vh]">
      <div className="md:sticky md:top-20 md:flex md:min-h-[calc(100svh-5rem)] md:items-center">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:grid-cols-[0.88fr_1.12fr] md:px-8 md:py-0 lg:gap-16">
          <div className="md:self-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              {eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-300 md:text-lg">
              {description}
            </p>

            <div className="mt-9 hidden md:block">
              <div className="h-px bg-neutral-800">
                <div
                  className="h-px origin-left bg-white transition-transform duration-150"
                  style={{ transform: `scaleX(${progress})` }}
                />
              </div>
              <div className="mt-8 min-h-[180px]">
                <p className="text-sm tabular-nums text-neutral-500">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">{activeStep.title}</h3>
                <p className="mt-4 max-w-lg text-base leading-8 text-neutral-300">
                  {activeStep.description}
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative min-h-[560px] overflow-hidden border border-neutral-800 bg-neutral-900/40 p-8">
              <div className="absolute inset-x-8 top-1/2 h-px bg-neutral-800" />
              <div className="absolute inset-y-8 left-1/2 w-px bg-neutral-800" />
              <div
                className="absolute left-1/2 top-8 w-px origin-top bg-white transition-transform duration-150"
                style={{ height: "calc(100% - 4rem)", transform: `scaleY(${progress})` }}
              />

              <div className="relative grid h-[500px] grid-cols-2 gap-5">
                {steps.map((step, index) => {
                  const isActive = index === activeIndex;
                  const isVisible = index <= activeIndex;

                  return (
                    <div
                      key={step.label}
                      className={`flex flex-col justify-between border p-5 transition duration-500 ${
                        isActive
                          ? "border-white bg-white text-neutral-950"
                          : isVisible
                            ? "border-neutral-600 bg-neutral-950 text-white"
                            : "border-neutral-800 bg-neutral-900/40 text-neutral-500"
                      }`}
                      style={{
                        transform: isVisible ? "translateY(0)" : "translateY(18px)",
                        opacity: isVisible ? 1 : 0.45
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                          {step.label}
                        </p>
                        <span className="text-sm tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-10 text-xl font-semibold leading-tight">{step.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-3 md:hidden">
            {steps.map((step, index) => (
              <article key={step.label} className="border border-neutral-800 bg-neutral-900/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  {String(index + 1).padStart(2, "0")} {step.label}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
