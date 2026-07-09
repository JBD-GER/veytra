import type { MetadataRoute } from "next";

import { publishedRatgeberSlugs } from "@/content/ratgeber-articles";
import { getSiteUrl, sitePaths } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  const staticPaths: MetadataRoute.Sitemap = sitePaths.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" as const : "monthly" as const,
    priority: path === "/" ? 1 : path === "/kontakt" ? 0.8 : 0.7
  }));

  const articlePaths = publishedRatgeberSlugs.map((slug) => ({
    url: `${baseUrl}/ratgeber/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  return [...staticPaths, ...articlePaths];
}
