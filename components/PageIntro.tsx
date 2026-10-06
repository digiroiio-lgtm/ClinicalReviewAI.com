import { articleJsonLd, webPageJsonLd, type Crumb } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "./Breadcrumbs";
import { DefinitionBox } from "./DefinitionBox";
import { Hero } from "./Hero";
import { JsonLd } from "./JsonLd";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

/**
 * Standard top-of-page block for pillar pages: breadcrumbs, H1, direct answer, byline.
 * Emits WebPage + Article + BreadcrumbList JSON-LD that mirrors the visible content.
 */
export function PageIntro({
  path,
  crumb,
  title,
  metaTitle,
  description,
  definition,
  definitionLabel,
  eyebrow,
}: {
  path: string;
  crumb: string;
  title: string;
  metaTitle: string;
  description: string;
  definition: React.ReactNode;
  definitionLabel?: string;
  eyebrow?: string;
}) {
  const trail: Crumb[] = [{ name: crumb, path }];
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({ path, title: metaTitle, description }),
          articleJsonLd({ path, headline: title, description }),
        ]}
      />
      <Hero title={title} eyebrow={eyebrow} top={<Breadcrumbs trail={trail} />}>
        <DefinitionBox label={definitionLabel}>{definition}</DefinitionBox>
        <p className="byline">
          By {siteConfig.name} · Published {formatDate(siteConfig.publishedDate)} · Last reviewed {formatDate(siteConfig.modifiedDate)} ·{" "}
          <a href="#editorial-standards">Editorial standards</a>
        </p>
      </Hero>
    </>
  );
}
