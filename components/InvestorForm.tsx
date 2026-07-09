"use client";

import { useRouter } from "next/navigation";
import { FormEvent, ReactNode, useState } from "react";

type SubmitState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
  errors: Record<string, string>;
};

type InvestorFormProps = {
  idPrefix: string;
};

const initialState: SubmitState = {
  status: "idle",
  message: "",
  errors: {}
};

export function InvestorForm({ idPrefix }: InvestorFormProps) {
  const router = useRouter();
  const [state, setState] = useState<SubmitState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "loading", message: "", errors: {} });

    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const consent = formData.get("privacy") === "on";

    if (!consent) {
      setState({
        status: "error",
        message: "Bitte bestätige die Datenschutzhinweise.",
        errors: {
          privacy: "Bitte bestätige die Datenschutzhinweise."
        }
      });
      return;
    }

    const payload = {
      name: `${firstName} ${lastName}`.trim(),
      email: String(formData.get("email") || ""),
      company: "",
      project: "Auf die Investorenliste fuer fruehe Venture-Projekte aufnehmen",
      stage: "Investor",
      budget: "",
      message: "Bitte pruefen, ob mein Investment-Fokus zur Veytra-Investorenliste passt.",
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
        message: "Danke. Deine Anfrage wurde gesendet. Du wirst weitergeleitet.",
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
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${idPrefix}-website`}>Website</label>
        <input id={`${idPrefix}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Vorname" htmlFor={`${idPrefix}-first-name`} error={state.errors.name} required>
          <input
            id={`${idPrefix}-first-name`}
            name="firstName"
            type="text"
            autoComplete="given-name"
            className="form-field"
            required
          />
        </Field>

        <Field label="Nachname" htmlFor={`${idPrefix}-last-name`} required>
          <input
            id={`${idPrefix}-last-name`}
            name="lastName"
            type="text"
            autoComplete="family-name"
            className="form-field"
            required
          />
        </Field>
      </div>

      <Field label="E-Mail" htmlFor={`${idPrefix}-email`} error={state.errors.email} required>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          className="form-field"
          required
        />
      </Field>

      <label className="flex gap-3 border border-neutral-200 bg-neutral-50 p-3 text-sm leading-6 text-neutral-600 md:p-4">
        <input
          id={`${idPrefix}-privacy`}
          name="privacy"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-neutral-950"
          required
        />
        <span>
          Ich stimme zu, dass Veytra meine Angaben zur Bearbeitung der Anfrage verarbeitet. Die
          Hinweise in der{" "}
          <a href="/datenschutz" className="font-medium text-neutral-950 underline">
            Datenschutzerklärung
          </a>{" "}
          habe ich gelesen.
          {state.errors.privacy ? (
            <span className="mt-2 block text-neutral-950">{state.errors.privacy}</span>
          ) : null}
        </span>
      </label>

      {state.message ? (
        <div
          className={`border px-4 py-3 text-sm leading-6 ${
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
        className="inline-flex min-h-12 w-full items-center justify-center rounded-[6px] border border-neutral-950 bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-300"
      >
        {isLoading ? "Wird gesendet" : "Investorenliste anfragen"}
      </button>
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
        className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500 md:text-xs"
      >
        {label}
        {required ? <span className="text-neutral-500"> *</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-2 text-sm leading-6 text-neutral-700">{error}</p> : null}
    </div>
  );
}
