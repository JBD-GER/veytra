import type { Metadata } from "next";

import { site, getSiteUrl } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({ title, description, path }: MetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = path === "/" ? "/" : path;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
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
      title,
      description,
      images: ["/opengraph-image"]
    }
  };
}
