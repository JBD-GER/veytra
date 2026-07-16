export type NavigationItem = {
  label: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { label: "Venture Studio", href: "/venture-studio" },
  { label: "AI Venture Studio", href: "/ai-venture-studio" },
  { label: "Inkubator Hannover", href: "/inkubator-hannover" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Studio OS", href: "/studio-os" },
  { label: "Prozess", href: "/prozess" },
  { label: "Preise", href: "/preise" },
  { label: "Geschichte", href: "/geschichte" },
  { label: "Ratgeber", href: "/ratgeber" },
  { label: "Für Unternehmen", href: "/fuer-unternehmen" },
  { label: "Für Gründer", href: "/fuer-gruender" },
  { label: "Für Startups", href: "/fuer-startups" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Kontakt", href: "/kontakt" }
];

export const legalNavigationItems: NavigationItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" }
];
