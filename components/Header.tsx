import Link from "next/link";
import { getSaleHref, isExternalHref, navigation, siteConfig } from "@/lib/site-config";

function SaleLink({ className, children }: { className?: string; children: React.ReactNode }) {
  const href = getSaleHref();
  return isExternalHref(href) ? (
    <a className={className} href={href} target="_blank" rel="noopener nofollow">
      {children}
    </a>
  ) : (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="7" fill="#0b1f3a" />
      <path d="M9 9h10l4 4v10H9z" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12.5 17.5l2.4 2.4 4.6-5" fill="none" stroke="#5fd0c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Server-rendered header. Mobile navigation uses <details>, so it needs no client JavaScript. */
export function Header() {
  return (
    <header className="site-header">
      <div className="container bar">
        <Link href="/" className="brand" aria-label={`${siteConfig.name} home`}>
          <Logo />
          <span>
            ClinicalReview<span className="ai">AI</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <SaleLink className="btn btn-secondary btn-sm header-cta">Domain for Sale</SaleLink>

        <details className="nav-mobile">
          <summary aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            Menu
          </summary>
          <nav className="panel" aria-label="Mobile primary">
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li className="panel-cta">
                <SaleLink>Domain for Sale</SaleLink>
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
