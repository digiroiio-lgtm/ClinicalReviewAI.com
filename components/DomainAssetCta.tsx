import Link from "next/link";
import { getSaleHref, isExternalHref, siteConfig } from "@/lib/site-config";

/** Subtle end-of-page asset note. Uses the same destination as the sitewide sale banner. */
export function DomainAssetCta({ category }: { category: string }) {
  const href = getSaleHref();
  const label = "View Domain Details";
  return (
    <aside className="section" aria-label="Domain acquisition note">
      <div className="container">
        <p className="small muted" style={{ borderTop: "1px solid var(--line)", paddingTop: "1.25rem", margin: 0 }}>
          Building in {category}? {siteConfig.name} is available for acquisition.{" "}
          {isExternalHref(href) ? (
            <a href={href} target="_blank" rel="noopener nofollow">{label}<span className="visually-hidden"> (opens in a new tab)</span></a>
          ) : (
            <Link href={href}>{label}</Link>
          )}{" "}→
        </p>
      </div>
    </aside>
  );
}
