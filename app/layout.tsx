import type { Metadata } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";

import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StructuredData } from "@/components/StructuredData";
import { TrackingManager } from "@/components/TrackingManager";
import { TrackingPlaceholders } from "@/components/TrackingPlaceholders";
import { organizationSchema, professionalServiceSchema, websiteSchema } from "@/lib/schema";
import { site, getSiteUrl } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Veytra | Venture Studio für Startup-Aufbau",
    template: "%s | Veytra"
  },
  description: site.description,
  openGraph: {
    title: "Veytra | Venture Studio für Startup-Aufbau",
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Venture Studio für Startup-Aufbau"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Veytra | Venture Studio für Startup-Aufbau",
    description: site.description,
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="de" className={geistSans.variable}>
      <body>
        <TrackingPlaceholders />
        <TrackingManager />
        <StructuredData data={[organizationSchema(), professionalServiceSchema(), websiteSchema()]} />
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
