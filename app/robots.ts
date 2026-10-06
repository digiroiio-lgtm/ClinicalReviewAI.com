import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site-config";

// Crawling is allowed by default. /domain is kept out of the index with a noindex meta tag
// (not a Disallow rule) so crawlers can still see the directive.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
  };
}
