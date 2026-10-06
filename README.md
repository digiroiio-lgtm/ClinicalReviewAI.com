# ClinicalReviewAI.com

Informational website about **AI-assisted clinical review for healthcare workflows**. It is an authoritative
category resource, not a software product, healthcare provider or health plan. The domain is available for
acquisition (see `/domain`).

Stack: Next.js (App Router) · TypeScript · static rendering · no client-side UI JavaScript of our own
(mobile menu and FAQ use native `<details>`).

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run verify       # typecheck + lint + production build + site checks
```

`npm run check:links` (after `npm run build`) starts the production server and verifies, for every route:
status 200, exactly one `<h1>`, unique titles/descriptions, canonical URLs, Open Graph/Twitter tags,
JSON-LD validity and allowed types, direct-answer length (40–80 words), internal links and `#fragments`,
sitemap and robots output, `/domain` noindex + sitemap exclusion, sale banner and footer disclaimer on every
page (including 404), and a scan for risky claims (percentages, HIPAA/FDA status claims, credentials, SaaS UI).

## Configuration

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_DOMAIN_SALE_URL` | Destination for the sitewide sale banner, header CTA and the `/domain` “Make an Inquiry” button. Empty → banner links to `/domain`, and the inquiry button shows a “not yet configured” state. Inlined at build time, so redeploy after changing it. |

Copy `.env.example` to `.env.local` for local use.

## Structure

```
app/            routes (/, 5 pillar pages, /domain), robots.ts, sitemap.ts, OG image, 404, icon
components/     Header, Footer, DomainSaleBanner, Breadcrumbs, Hero, DefinitionBox, ComparisonTable,
                ProcessSteps, EvidenceGrid, UseCaseCard, FAQ, ArticleSection, DisclaimerBox,
                SourceCitation (+ Cite), plus PageIntro, RelatedLinks, EntityMap, JsonLd, Icon
lib/site-config.ts   origin, name, nav, sale URL logic, disclaimer, indexable pages (single source of truth)
lib/sources.ts       reusable citation registry (primary sources for healthcare/regulatory claims)
lib/metadata.ts      per-page metadata builder (canonical, OG, Twitter, robots)
lib/jsonld.ts        WebSite / WebPage / Article / BreadcrumbList builders
scripts/check-site.mjs   post-build verification
```

## Editorial rules (YMYL)

- General education only: no diagnosis, treatment, coverage determinations or individualized advice.
- Every regulatory or formal-requirement statement cites a source from `lib/sources.ts` via `<Cite>`; prefer
  statutes, regulations and agency guidance, and state that requirements vary by program and jurisdiction.
- No invented people, credentials, customers, studies, statistics, certifications or product claims.
- Structured data must mirror visible content. Do not add Physician/MedicalOrganization/Review/AggregateRating types.
- Re-verify every URL and the factual statements it supports before launch and on each content update.
- Update `publishedDate` / `modifiedDate` in `lib/site-config.ts` when content is materially revised.

## Adding a page

1. Create `app/<slug>/page.tsx` using `buildMetadata`, `PageIntro`, `ArticleSection` and `SourceCitation`.
2. Add it to `indexablePages` (sitemap) and, if it is a pillar, to `navigation` / `pillarLinks`.
3. Run `npm run verify`.
