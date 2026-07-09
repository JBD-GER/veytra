import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anfrage eingegangen",
  description: "Bestätigung, dass die Anfrage bei Veytra eingegangen ist.",
  robots: {
    index: false,
    follow: false
  }
};

const steps = [
  {
    number: "01",
    title: "Anfrage prüfen",
    body: "Wir ordnen ein, ob es um Unternehmen, Gründer, Startup oder Investor geht und welcher nächste Schritt sinnvoll ist."
  },
  {
    number: "02",
    title: "Rückmeldung vorbereiten",
    body: "Wenn der Fit passt, melden wir uns mit einer konkreten Einschätzung und einem passenden Gesprächsvorschlag."
  },
  {
    number: "03",
    title: "Nächste Entscheidung",
    body: "Danach geht es um Audit, Validierung, MVP-Scope, Build-Modell oder Aufnahme in den passenden Investorendialog."
  }
];

export default function RequestConfirmedPage() {
  return (
    <section className="relative min-h-[calc(100svh-88px)] overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:76px_76px] opacity-35" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/20" />

      <div className="relative mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-24">
        <div data-reveal="slide" className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Anfrage eingegangen</p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.01em] md:text-6xl">
            Danke. Deine Anfrage ist bei Veytra angekommen.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-white/68 md:text-xl md:leading-9">
            Wir prüfen jetzt den Kontext und melden uns mit einer passenden Einschätzung. Falls etwas dringend ist,
            kannst du zusätzlich direkt per E-Mail antworten.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-[6px] bg-white px-5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
            >
              Zur Startseite
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white/25 px-5 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/10"
            >
              Case Studies ansehen
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              data-reveal="slide"
              data-reveal-delay={`${index * 70}ms`}
              className="relative overflow-hidden border border-white/12 bg-white/[0.035] p-5 md:p-7"
            >
              <span className="text-sm font-semibold text-white/42">{step.number}</span>
              <h2 className="mt-8 text-2xl font-semibold leading-tight text-white">{step.title}</h2>
              <p className="mt-4 text-base leading-8 text-white/58">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
