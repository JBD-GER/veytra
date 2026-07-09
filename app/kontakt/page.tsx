import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { pageSeo } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata(pageSeo.contact);

const nextSteps = [
  {
    kpi: "01",
    title: "Einordnung",
    body: "Wir prüfen, ob dein Thema zu Venture Building, MVP, Validierung, AI oder Company Build passt."
  },
  {
    kpi: "02",
    title: "Rückruf",
    body: "Wenn der Fit erkennbar ist, melden wir uns telefonisch und klären Ziel, Ausgangslage und nächste Entscheidung."
  },
  {
    kpi: "03",
    title: "Vorschlag",
    body: "Danach entsteht ein klarer nächster Schritt: Audit, Validierung, MVP-Scope, Build-Modell oder Investorengespräch."
  }
];

export default function ContactPage() {
  const contactEmail = process.env.CONTACT_TO_EMAIL || site.contactEmail;

  return (
    <>
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:76px_76px] opacity-35" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/20" />

        <div className="relative mx-auto flex min-h-[calc(82svh-88px)] max-w-[1320px] items-center px-5 py-16 md:px-8 md:py-24">
          <div data-reveal="slide" className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Veytra Anfrage</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-0.01em] md:text-6xl lg:text-7xl">
              Venture anfragen. Erst einordnen, dann bauen.
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/68 md:text-xl md:leading-9">
              Für Unternehmen, Gründer, Startups und Investoren, die nicht nur eine Website oder App bestellen
              wollen, sondern ein testbares digitales Geschäftsmodell aufbauen möchten.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#anfrage"
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] bg-white px-5 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
              >
                Anfrage starten
              </Link>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex min-h-12 items-center justify-center rounded-[6px] border border-white/25 px-5 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/10"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="anfrage" className="bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.72fr_1.28fr]">
          <div data-reveal="slide" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Kontaktformular</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-neutral-950 md:text-5xl">
              Sag kurz, wer du bist. Den Rest klären wir im Gespräch.
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
              Das Formular ist bewusst schlank. Wir brauchen nur genug Kontext, um die Anfrage richtig
              einzuordnen und dich nicht durch unnötige Felder zu schicken.
            </p>
            <div className="mt-8 grid gap-3">
              {["Telefonische Rückmeldung", "Keine Newsletter-Anmeldung", "Datenschutz sauber bestätigt"].map((item) => (
                <div key={item} className="flex items-center gap-3 border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-800">
                  <span className="h-2 w-2 rounded-full bg-neutral-950" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div data-reveal="scale">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-8 md:py-24">
          <div data-reveal="slide" className="border-b border-neutral-200 pb-8 md:flex md:items-end md:justify-between md:gap-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Danach</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-neutral-950 md:text-5xl">
                Was nach der Anfrage passiert.
              </h2>
            </div>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 md:mt-0">
              Keine endlose Erstberatung. Die erste Antwort soll klären, ob aus dem Thema ein sinnvoller
              Venture-Schritt entstehen kann.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {nextSteps.map((item, index) => (
              <article
                key={item.title}
                data-reveal="slide"
                data-reveal-delay={`${index * 70}ms`}
                className="contact-step-card relative overflow-hidden border border-neutral-200 bg-white p-5 transition md:p-7"
              >
                <span className="text-sm font-semibold text-neutral-500">{item.kpi}</span>
                <h3 className="mt-8 text-2xl font-semibold leading-tight text-neutral-950">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
