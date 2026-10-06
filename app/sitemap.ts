import type { MetadataRoute } from "next";
import { absoluteUrl, indexablePages, siteConfig } from "@/lib/site-config";

// Only the six indexable pages. /domain is intentionally excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePages.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: siteConfig.modifiedDate,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
