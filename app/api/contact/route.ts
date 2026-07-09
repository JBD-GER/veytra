import { NextResponse } from "next/server";
import { Resend } from "resend";

import { createContactEmailHtml, createContactEmailText } from "@/lib/contact";
import { validateContactPayload } from "@/lib/validations";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Die Anfrage konnte nicht gelesen werden." },
      { status: 400 }
    );
  }

  const validation = validateContactPayload(body);

  if (!validation.success) {
    return NextResponse.json(
      {
        success: false,
        message: validation.errors.form || "Bitte prüfe die markierten Felder.",
        errors: validation.errors
      },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Der E-Mail-Versand ist noch nicht konfiguriert. Bitte setze RESEND_API_KEY, CONTACT_TO_EMAIL und CONTACT_FROM_EMAIL."
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const subject = `Neue Venture Studio Anfrage von ${validation.data.name}`;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html: createContactEmailHtml(validation.data),
      text: createContactEmailText(validation.data),
      ...(validation.data.email ? { replyTo: validation.data.email } : {})
    });

    if (error) {
      return NextResponse.json(
        { success: false, message: "Die Anfrage konnte nicht gesendet werden." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Danke. Deine Anfrage wurde gesendet. Wir melden uns mit einer Einschätzung zu Fit, MVP-Scope und Deal-Modell."
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Die Anfrage konnte nicht gesendet werden." },
      { status: 502 }
    );
  }
}
