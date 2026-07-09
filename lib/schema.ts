import type { FAQItem } from "@/content/faqs";
import { site, getSiteUrl } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.company.name,
    legalName: site.company.legalName,
    url: getSiteUrl(),
    description: site.description
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: getSiteUrl(),
    description: site.description,
    areaServed: ["Deutschland", "DACH"],
    serviceType: [
      "Venture Studio",
      "AI Venture Studio",
      "Corporate Venture Building",
      "Company Building",
      "Venture Validation",
      "Founder Recruiting",
      "Spin-out Setup",
      "Fundraising Readiness"
    ]
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: getSiteUrl(),
    inLanguage: "de-DE"
  };
}

export function faqSchema(items: FAQItem[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    })),
    url: absoluteUrl(path)
  };
}
