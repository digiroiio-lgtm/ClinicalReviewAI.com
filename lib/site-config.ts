import type { Metadata } from "next";

/** Single source of truth for site-wide values. */
export const SITE_ORIGIN = "https://clinicalreviewai.com";

export const siteConfig = {
  name: "ClinicalReviewAI.com",
  shortName: "ClinicalReviewAI",
  domain: "clinicalreviewai.com",
  tagline: "AI-assisted clinical review for healthcare workflows.",
  description:
    "Learn how AI can assist clinical review, documentation analysis, medical necessity workflows and prior authorization while preserving human oversight.",
  origin: SITE_ORIGIN,
  locale: "en_US",
  /** First publication / last editorial review date shown on pillar pages (ISO 8601). */
  publishedDate: "2026-10-06",
  modifiedDate: "2026-10-06",
  /**
   * Destination for the domain-sale banner and inquiry CTA. Inlined at build time.
   * Empty string → the banner links to the internal /domain page.
   */
  saleUrlOverride: (process.env.NEXT_PUBLIC_DOMAIN_SALE_URL ?? "").trim(),
  domainPagePath: "/domain",
  disclaimer:
    "ClinicalReviewAI.com provides general educational information about clinical review and AI-assisted healthcare workflows. It does not provide medical, legal, insurance or regulatory advice and is not a substitute for qualified professional judgment.",
  humanOversightStatement:
    "AI can support clinical review workflows, but qualified healthcare professionals remain responsible for decisions requiring clinical judgment.",
} as const;

export type NavItem = { label: string; href: string };

export const navigation: NavItem[] = [
  { label: "Clinical Review", href: "/what-is-clinical-review" },
  { label: "AI Review", href: "/ai-clinical-review" },
  { label: "Medical Necessity", href: "/medical-necessity-review" },
  { label: "Prior Authorization", href: "/prior-authorization-review" },
  { label: "Use Cases", href: "/use-cases" },
];

/** The six indexable pages, in sitemap order. */
export const indexablePages = [
  { path: "/", priority: 1 },
  { path: "/what-is-clinical-review", priority: 0.9 },
  { path: "/ai-clinical-review", priority: 0.9 },
  { path: "/medical-necessity-review", priority: 0.9 },
  { path: "/prior-authorization-review", priority: 0.9 },
  { path: "/use-cases", priority: 0.8 },
] as const;

export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${path}`;
}

/** True when the sale URL points away from this site (http(s) or mailto). */
export function isExternalHref(href: string): boolean {
  return /^(https?:|mailto:)/i.test(href);
}

/** Where the sale banner / header CTA should point. */
export function getSaleHref(): string {
  return siteConfig.saleUrlOverride || siteConfig.domainPagePath;
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  applicationName: siteConfig.name,
  title: { default: "AI Clinical Review | ClinicalReviewAI.com", template: "%s" },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false, email: false, address: false },
};
