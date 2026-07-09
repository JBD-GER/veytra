"use client";

import { useRouter } from "next/navigation";
import { FormEvent, ReactNode, useState } from "react";

type SubmitState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
  errors: Record<string, string>;
};

const initialState: SubmitState = {
  status: "idle",
  message: "",
  errors: {}
};

const audienceOptions = ["Unternehmen", "Gründer", "Startup", "Investor"];

export function ContactForm() {
  const router = useRouter();
  const [state, setState] = useState<SubmitState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "loading", message: "", errors: {} });

    const payload = {
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      phone: String(formData.get("phone") || ""),
      audience: String(formData.get("audience") || ""),
      message: String(formData.get("message") || ""),
      privacyAccepted: formData.get("privacyAccepted") === "on",
      website: String(formData.get("website") || "")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as {
        success: boolean;
        message?: string;
        errors?: Record<string, string>;
      };

      if (!response.ok || !result.success) {
        setState({
          status: "error",
          message: result.message || "Die Anfrage konnte nicht gesendet werden.",
          errors: result.errors || {}
        });
        return;
      }

      form.reset();
      window.dispatchEvent(new Event("veytra:lead-conversion"));
      setState({
        status: "success",
        message: result.message || "Danke. Deine Anfrage wurde gesendet. Du wirst weitergeleitet.",
        errors: {}
      });
      window.setTimeout(() => router.push("/anfrage-bestaetigt"), 250);
    } catch {
      setState({
        status: "error",
        message: "Die Anfrage konnte gerade nicht gesendet werden. Bitte versuche es später erneut.",
        errors: {}
      });
    }
  }

  const isLoading = state.status === "loading";

  return (
    <form onSubmit={handleSubmit} className="contact-form-shell relative overflow-hidden border border-neutral-200 bg-white p-5 shadow-[0_28px_90px_rgba(23,23,23,0.08)] md:p-7" noValidate>
      <div className="relative z-10">
        <div className="mb-7 flex flex-col gap-4 border-b border-neutral-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Anfrage</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-neutral-950 md:text-3xl">
              Kurz einordnen. Dann sprechen.
            </h2>
          </div>
          <div className="inline-flex w-fit items-center gap-2 border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
            <span className="h-2 w-2 rounded-full bg-neutral-950" />
            Fit Check
          </div>
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Vorname" htmlFor="firstName" error={state.errors.firstName} required>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              className="form-field"
              required
              minLength={2}
            />
          </Field>

          <Field label="Nachname" htmlFor="lastName" error={state.errors.lastName} required>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              className="form-field"
              required
              minLength={2}
            />
          </Field>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Field label="E-Mail" htmlFor="email" error={state.errors.email} required>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="form-field"
              required
            />
          </Field>

          <Field label="Telefonnummer" htmlFor="phone" error={state.errors.phone} required>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              className="form-field"
              required
            />
          </Field>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Field label="Firmenname" htmlFor="company">
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="form-field"
              placeholder="Optional"
            />
          </Field>

          <Field label="Ich bin / Wir sind" htmlFor="audience" error={state.errors.audience} required>
            <select id="audience" name="audience" className="form-field" required defaultValue="">
              <option value="" disabled>
                Bitte auswählen
              </option>
              {audienceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="mt-5">
          <Field label="Worum geht es?" htmlFor="message">
            <textarea
              id="message"
              name="message"
              rows={5}
              className="form-field"
              placeholder="Optional: Idee, Marktproblem, aktueller Stand oder gewünschter nächster Schritt."
            />
          </Field>
        </div>

        <label className="mt-5 flex gap-3 border border-neutral-200 bg-neutral-50 p-4 text-sm leading-6 text-neutral-600">
          <input
            id="privacyAccepted"
            name="privacyAccepted"
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 accent-neutral-950"
            required
          />
          <span>
            Ich stimme zu, dass Veytra meine Angaben zur Bearbeitung der Anfrage verarbeitet. Die{" "}
            <a href="/datenschutz" className="font-medium text-neutral-950 underline">
              Datenschutzerklärung
            </a>{" "}
            habe ich gelesen.
            {state.errors.privacyAccepted ? (
              <span className="mt-2 block text-neutral-950">{state.errors.privacyAccepted}</span>
            ) : null}
          </span>
        </label>

        {state.message ? (
          <div
            className={`mt-5 border px-4 py-3 text-sm leading-6 ${
              state.status === "success"
                ? "border-neutral-950 bg-neutral-950 text-white"
                : "border-neutral-300 bg-neutral-50 text-neutral-700"
            }`}
            role="status"
            aria-live="polite"
          >
            {state.message}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isLoading}
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-[6px] border border-neutral-950 bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300"
        >
          {isLoading ? "Wird gesendet" : "Anfrage senden"}
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

function Field({ label, htmlFor, required = false, error, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500 md:text-xs"
      >
        {label}
        {required ? <span className="text-neutral-500"> *</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-2 text-sm leading-6 text-neutral-700">{error}</p> : null}
    </div>
  );
}
