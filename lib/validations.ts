export type ContactPayload = {
  name: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  audience?: string;
  project: string;
  stage?: string;
  budget?: string;
  message?: string;
  privacyAccepted?: boolean;
  website?: string;
  auditAccepted?: boolean;
  billingAddress?: string;
};

export type ValidationResult =
  | { success: true; data: ContactPayload }
  | { success: false; errors: Record<string, string> };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+0-9][0-9\s()/.-]{5,}$/;
const audienceOptions = new Set(["Unternehmen", "Gründer", "Startup", "Investor"]);

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactPayload(input: unknown): ValidationResult {
  if (!input || typeof input !== "object") {
    return { success: false, errors: { form: "Die Anfrage konnte nicht gelesen werden." } };
  }

  const body = input as Record<string, unknown>;
  const firstName = asString(body.firstName);
  const lastName = asString(body.lastName);
  const email = asString(body.email);
  const phone = asString(body.phone);
  const audience = asString(body.audience);
  const payload: ContactPayload = {
    name: asString(body.name) || `${firstName} ${lastName}`.trim(),
    firstName,
    lastName,
    email,
    phone,
    company: asString(body.company),
    audience,
    project: asString(body.project) || `Neue Anfrage von ${audience || "Kontaktformular"}`,
    stage: asString(body.stage),
    budget: asString(body.budget),
    message: asString(body.message),
    privacyAccepted: body.privacyAccepted === true,
    auditAccepted: body.auditAccepted === true,
    billingAddress: asString(body.billingAddress),
    website: asString(body.website)
  };

  const errors: Record<string, string> = {};

  if (!payload.auditAccepted) {
    errors.auditAccepted = "Bitte bestätige die kostenpflichtige Beauftragung für 599 € zzgl. MwSt.";
  }
  if ((payload.billingAddress || "").length < 10) {
    errors.billingAddress = "Bitte gib deine vollständige Rechnungsanschrift an.";
  }

  if (payload.website) {
    errors.form = "Die Anfrage konnte nicht verarbeitet werden.";
  }

  {
    if ((payload.firstName || "").length < 2) {
      errors.firstName = "Bitte gib deinen Vornamen an.";
    }

    if ((payload.lastName || "").length < 2) {
      errors.lastName = "Bitte gib deinen Nachnamen an.";
    }

    if (!payload.phone || !phonePattern.test(payload.phone)) {
      errors.phone = "Bitte gib eine gültige Telefonnummer an.";
    }

    if (!payload.email || !emailPattern.test(payload.email)) {
      errors.email = "Bitte gib eine gültige E-Mail-Adresse an.";
    }

    if (!payload.audience || !audienceOptions.has(payload.audience)) {
      errors.audience = "Bitte wähle eine Gruppe aus.";
    }

    if (!payload.privacyAccepted) {
      errors.privacyAccepted = "Bitte bestätige die Datenschutzhinweise.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return { success: true, data: payload };
}
