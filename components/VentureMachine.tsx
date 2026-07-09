"use client";

import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    label: "01",
    title: "Ideen finden",
    signal: "Opportunity",
    text: "Marktprobleme, Zielgruppen, Nischen und digitale Hebel werden zu einer klaren Venture-These verdichtet."
  },
  {
    label: "02",
    title: "Mit dem Markt validieren",
    signal: "Demand",
    text: "Interviews, Nachfrage, Wettbewerb und Kaufabsicht zeigen, ob die Idee ein echtes Geschäftsmodell tragen kann."
  },
  {
    label: "03",
    title: "Produktkern bauen",
    signal: "MVP",
    text: "Aus den stärksten Signalen entsteht ein erster Produktkern: SaaS, App, Shop, Service, AI-Tool oder Automatisierung."
  },
  {
    label: "04",
    title: "Launch starten",
    signal: "Market",
    text: "Positionierung, Sales, Google Ads, Meta Ads, Content, Tracking und Funnels bringen das Venture in den Markt."
  },
  {
    label: "05",
    title: "Zahlen auswerten",
    signal: "Score",
    text: "Nach dem Launch zählen messbare Signale: Leads, Conversion, Kosten pro Anfrage, Umsatzsignal und Wiederholung."
  }
];

const resultItems = [
  {
    title: "Schneller Launch",
    text: "Nach der Ideenfestlegung entsteht zügig ein testbarer Produktkern."
  },
  {
    title: "Weniger Risiko",
    text: "Markt, Nachfrage und Kosten werden früher sichtbar, bevor zu viel Kapital gebunden ist."
  },
  {
    title: "Mehr Gewinn",
    text: "Produkt, Marketing und Vertrieb werden auf ein skalierbares Geschäftsmodell ausgerichtet."
  }
];

const nodePositions = [
  ["12%", "74%"],
  ["38%", "54%"],
  ["58%", "61%"],
  ["72%", "36%"],
  ["86%", "23%"]
];

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function VentureMachine() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.style.opacity = "1";
        card.style.transform = "none";
      });
      if (pathRef.current) pathRef.current.style.strokeDashoffset = "0";
      return;
    }

    let frame = 0;

    const update = () => {
      const viewportHeight = window.innerHeight;
      const section = sectionRef.current;
      if (!section) return;
      const isCompact = window.innerWidth < 768;

      if (isCompact) {
        if (pathRef.current) pathRef.current.style.strokeDashoffset = "0";
        cardRefs.current.forEach((card) => {
          if (!card) return;
          card.style.opacity = "1";
          card.style.transform = "none";
        });
        frame = 0;
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      const progress = clamp(
        (viewportHeight * 0.72 - sectionRect.top) / (sectionRect.height - viewportHeight * 0.16),
        0,
        1
      );

      if (pathRef.current) {
        pathRef.current.style.strokeDashoffset = (1 - progress).toFixed(4);
      }

      let nextActiveIndex = 0;
      let smallestDistance = Number.POSITIVE_INFINITY;
      const targetCenter = viewportHeight * 0.56;
      const activeRange = viewportHeight * 0.58;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - targetCenter);
        const intensity = clamp(1 - distance / activeRange, 0, 1);
        const eased = 1 - Math.pow(1 - intensity, 2);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          nextActiveIndex = index;
        }

        card.style.opacity = (0.46 + eased * 0.54).toFixed(3);
        card.style.transform = `translate3d(0, ${((1 - eased) * 18).toFixed(1)}px, 0) scale(${(0.986 + eased * 0.014).toFixed(4)})`;
      });

      setActiveIndex((current) => (current === nextActiveIndex ? current : nextActiveIndex));
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const activeStep = processSteps[activeIndex] ?? processSteps[0];

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-y border-neutral-200 bg-neutral-50">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,23,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(23,23,23,0.035)_1px,transparent_1px)] bg-[size:112px_112px] opacity-60" />

      <div className="relative mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
        <div data-reveal="slide" className="border-b border-neutral-200 pb-10">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Prozess
              </p>
              <h2 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight text-neutral-950 md:text-4xl">
                Von der Idee zu messbaren Marktsignalen.
              </h2>
            </div>
            <p className="max-w-4xl text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
              Der Prozess ist bewusst einfach: erst die richtige Idee finden, dann mit dem Markt
              prüfen, dann bauen, launchen und an echten Zahlen entscheiden.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <div className="hidden md:block lg:sticky lg:top-24">
            <div className="overflow-hidden border border-neutral-200 bg-white/90 p-5 shadow-[0_24px_80px_rgba(23,23,23,0.06)] backdrop-blur md:p-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Signal Flow
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-tight text-neutral-950">
                    {activeStep.signal}
                  </h3>
                </div>
                <p className="text-5xl font-semibold tabular-nums text-neutral-950">
                  {activeStep.label}
                </p>
              </div>

              <div className="relative mt-8 aspect-[1.12] overflow-hidden border border-neutral-200 bg-neutral-50">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,23,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(23,23,23,0.05)_1px,transparent_1px)] bg-[size:54px_54px]" />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 420 330"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                >
                  <path
                    d="M48 244 C100 228 112 180 160 178 C211 176 214 218 258 201 C309 181 297 102 360 76"
                    stroke="#d4d4d4"
                    strokeWidth="2"
                  />
                  <path
                    ref={pathRef}
                    d="M48 244 C100 228 112 180 160 178 C211 176 214 218 258 201 C309 181 297 102 360 76"
                    pathLength="1"
                    stroke="#171717"
                    strokeDasharray="1"
                    strokeDashoffset="1"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </svg>

                {nodePositions.map(([left, top], index) => {
                  const isActive = activeIndex === index;
                  const isDone = activeIndex >= index;

                  return (
                    <div
                      key={processSteps[index]?.label}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left, top }}
                    >
                      <div
                        className={`grid h-10 w-10 place-items-center rounded-full border text-xs font-semibold tabular-nums transition duration-300 ${
                          isActive
                            ? "scale-110 border-neutral-950 bg-neutral-950 text-white shadow-[0_0_0_10px_rgba(23,23,23,0.08)]"
                            : isDone
                              ? "border-neutral-950 bg-white text-neutral-950"
                              : "border-neutral-300 bg-white text-neutral-400"
                        }`}
                      >
                        {processSteps[index]?.label}
                      </div>
                    </div>
                  );
                })}

                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                  {["These", "MVP", "Signal"].map((label, index) => (
                    <div key={label} className="border border-neutral-200 bg-white/80 p-3">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                        {label}
                      </p>
                      <div className="mt-3 h-1 bg-neutral-200">
                        <div
                          className="h-full bg-neutral-950 transition-[width] duration-300"
                          style={{
                            width: activeIndex >= index + 1 ? "100%" : activeIndex === index ? "62%" : "22%"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-neutral-600">
                Jeder Schritt reduziert Unsicherheit: erst Marktlogik, dann Produktkern, dann echte
                Nachfrage und messbare Zahlen.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step, index) => {
              const isActive = activeIndex === index;

              return (
                <article
                  key={step.label}
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  className={`grid gap-5 border bg-white p-5 will-change-transform transition-[border-color,background-color,box-shadow] duration-300 md:grid-cols-[84px_1fr] md:p-6 ${
                    isActive
                      ? "border-neutral-950 shadow-[0_20px_70px_rgba(23,23,23,0.08)]"
                      : "border-neutral-200"
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold tabular-nums text-neutral-500">{step.label}</p>
                    <p className="mt-3 inline-flex border border-neutral-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                      {step.signal}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-950 md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-neutral-600">{step.text}</p>
                    <div className="mt-6 h-px bg-neutral-200">
                      <div
                        className="h-px bg-neutral-950 transition-[width] duration-300"
                        style={{ width: isActive ? "100%" : activeIndex > index ? "100%" : "18%" }}
                      />
                    </div>
                  </div>
                </article>
              );
            })}

            <div data-reveal="fade" className="border border-neutral-200 bg-white p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Ergebnis
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-neutral-950 md:text-3xl">
                    Schneller Launch. Weniger Risiko. Mehr Gewinn.
                  </h3>
                </div>
                <p className="text-base leading-8 text-neutral-600">
                  Das Venture startet früher, lernt schneller am Markt und wird auf bessere
                  wirtschaftliche Entscheidungen ausgerichtet.
                </p>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {resultItems.map((item, index) => (
                  <div key={item.title} className="border border-neutral-200 bg-neutral-50 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                      Ergebnis {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-4 text-lg font-semibold text-neutral-950">{item.title}</p>
                    <p className="mt-3 text-sm leading-6 text-neutral-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
