import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site-config";

type PageMeta = {
  path: string;
  title: string;
  description: string;
  /** Alt text for the Open Graph / Twitter image. */
  imageAlt?: string;
  noindex?: boolean;
};

/** Builds complete per-page metadata (canonical, Open Graph, Twitter, robots). */
export function buildMetadata({ path, title, description, imageAlt, noindex }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const image = {
    url: absoluteUrl("/opengraph-image"),
    width: 1200,
    height: 630,
    alt: imageAlt ?? `${siteConfig.name} — ${siteConfig.tagline}`,
  };
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}
