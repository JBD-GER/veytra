import { navigationItems } from "@/content/navigation";

export const getSiteUrl = () =>
  (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export const site = {
  name: "Veytra",
  description:
    "Venture Studio für Gründer und Unternehmen: Veytra entwickelt Venture-Thesen, de-riskt Marktprobleme und baut daraus eigenständige Firmen.",
  locale: "de_DE",
  navigation: navigationItems,
  contactEmail: "info@veytra.de",
  company: {
    name: "Veytra",
    legalName: "Flaaq Holding GmbH",
    address: "Großer Kamp 5a, 31633 Leese, Deutschland",
    representative: "Christoph Pfad",
    phone: "05761 8429666",
    email: "info@veytra.de",
    registerCourt: "Amtsgericht Hannover",
    registerNumber: "HRB 230241",
    vatId: "DE460472563"
  },
  social: [] as string[]
};

export const sitePaths = [
  "/",
  "/venture-studio",
  "/ai-venture-studio",
  "/inkubator-hannover",
  "/leistungen",
  "/studio-os",
  "/prozess",
  "/preise",
  "/geschichte",
  "/ratgeber",
  "/fuer-gruender",
  "/fuer-startups",
  "/fuer-unternehmen",
  "/fuer-investoren",
  "/case-studies",
  "/kontakt",
  "/impressum",
  "/datenschutz",
  "/agb"
];
