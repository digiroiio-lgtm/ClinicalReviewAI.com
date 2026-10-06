import Link from "next/link";
import { getSaleHref, isExternalHref, siteConfig } from "@/lib/site-config";

/**
 * Slim sitewide banner. Destination: NEXT_PUBLIC_DOMAIN_SALE_URL, falling back to /domain.
 * Intentionally low-contrast and one line so it stays secondary to the editorial content.
 */
export function DomainSaleBanner() {
  const href = getSaleHref();
  const external = isExternalHref(href);
  const content = (
    <>
      <span className="only-desktop">{siteConfig.name} is available for acquisition → View Domain Details</span>
      <span className="only-mobile">This domain is for sale →</span>
    </>
  );
  return (
    <aside className="sale-banner" aria-label="Domain availability">
      <div className="container">
        {external ? (
          <a href={href} target="_blank" rel="noopener nofollow">
            {content}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        ) : (
          <Link href={href}>{content}</Link>
        )}
      </div>
    </aside>
  );
}
