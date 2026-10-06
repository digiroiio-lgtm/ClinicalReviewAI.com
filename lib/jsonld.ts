import { absoluteUrl, siteConfig } from "./site-config";

export type Crumb = { name: string; path: string };

const publisher = {
  "@type": "Organization",
  name: siteConfig.name,
  url: absoluteUrl("/"),
};

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    url: absoluteUrl("/"),
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher,
  };
}

export function webPageJsonLd(opts: { path: string; title: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(opts.path)}#webpage`,
    url: absoluteUrl(opts.path),
    name: opts.title,
    description: opts.description,
    inLanguage: "en-US",
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
  };
}

export function articleJsonLd(opts: { path: string; headline: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(opts.path)}#article`,
    mainEntityOfPage: { "@id": `${absoluteUrl(opts.path)}#webpage` },
    headline: opts.headline,
    description: opts.description,
    inLanguage: "en-US",
    datePublished: siteConfig.publishedDate,
    dateModified: siteConfig.modifiedDate,
    author: publisher,
    publisher,
  };
}

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}
