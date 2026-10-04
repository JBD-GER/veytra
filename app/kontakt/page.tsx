import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { AuditOffer, auditSteps } from "@/components/AuditOffer";
import { pageSeo } from "@/content/pages";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(pageSeo.contact);

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:76px_76px] opacity-35" />
        <div className="relative mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            VEYTRA FIRST AUDIT
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
            Erst wissen, ob sich deine Idee verkauft. Dann investieren.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-9 text-white/70">
            Jede neue Zusammenarbeit beginnt mit einem First Audit: Wir
            analysieren Markt, Potenzial und Umsetzungschancen und geben dir
            eine klare Empfehlung für dein Vorhaben.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="#anfrage"
              className="inline-flex min-h-12 items-center rounded-md bg-white px-6 text-sm font-medium text-neutral-950"
            >
              First Audit beauftragen
            </Link>
            <p className="text-base font-medium">
              599 € zzgl. MwSt. · schriftliche Analyse · 2 Calls
            </p>
          </div>
        </div>
      </section>
      <AuditOffer />
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            So läuft dein Audit ab
          </p>
          <h2 className="mt-5 text-3xl font-semibold md:text-5xl">
            Von der Beauftragung zur Entscheidung.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {auditSteps.map((step, i) => (
              <article
                key={step.title}
                className="border border-neutral-200 bg-neutral-50 p-6"
              >
                <span className="text-sm text-neutral-400">0{i + 1}</span>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-base leading-8 text-neutral-600">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="anfrage"
        className="scroll-mt-28 border-t border-neutral-200 bg-neutral-50"
      >
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Dein nächster Schritt
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Klarheit statt teurer Umwege.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Für Gründer, Startups, Unternehmen und Investoren mit einem
              konkreten geschäftlichen Vorhaben. Beschreibe kurz die Idee und
              gib deine Rechnungsdaten an.
            </p>
            <p className="mt-5 text-base leading-8 text-neutral-600">
              Du beauftragst ein klar abgegrenztes Analyseprodukt für 599 €
              zzgl. MwSt. Es gibt keine automatische Folgebeauftragung. Nach
              Zahlungseingang vereinbaren wir das Kennenlernen und Briefing.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
