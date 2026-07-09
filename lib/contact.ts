import { escapeHtml } from "@/lib/utils";
import type { ContactPayload } from "@/lib/validations";

export function createContactEmailHtml(data: ContactPayload) {
  const rows = [
    ["Name", data.name],
    ["E-Mail", data.email || "Nicht angegeben"],
    ["Telefon", data.phone || "Nicht angegeben"],
    ["Gruppe", data.audience || data.stage || "Nicht angegeben"],
    ["Unternehmen", data.company || "Nicht angegeben"],
    ["Vorhaben", data.project || "Nicht angegeben"],
    ["Budgetrahmen", data.budget || "Nicht angegeben"],
    ["Nachricht", data.message || "Nicht angegeben"]
  ];

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#171717;">
      <h1 style="font-size:20px;margin:0 0 20px;">Neue Venture Studio Anfrage</h1>
      <table style="border-collapse:collapse;width:100%;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border-top:1px solid #e5e5e5;padding:12px 16px 12px 0;font-weight:700;vertical-align:top;width:180px;">${escapeHtml(label)}</td>
                <td style="border-top:1px solid #e5e5e5;padding:12px 0;white-space:pre-wrap;">${escapeHtml(value)}</td>
              </tr>
            `
          )
          .join("")}
      </table>
    </div>
  `;
}

export function createContactEmailText(data: ContactPayload) {
  return [
    "Neue Venture Studio Anfrage",
    "",
    `Name: ${data.name}`,
    `E-Mail: ${data.email || "Nicht angegeben"}`,
    `Telefon: ${data.phone || "Nicht angegeben"}`,
    `Gruppe: ${data.audience || data.stage || "Nicht angegeben"}`,
    `Unternehmen: ${data.company || "Nicht angegeben"}`,
    "",
    "Vorhaben:",
    data.project || "Nicht angegeben",
    "",
    `Budgetrahmen: ${data.budget || "Nicht angegeben"}`,
    "",
    "Nachricht:",
    data.message || "Nicht angegeben"
  ].join("\n");
}
