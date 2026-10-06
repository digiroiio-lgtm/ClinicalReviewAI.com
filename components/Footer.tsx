import Link from "next/link";
import { navigation, siteConfig } from "@/lib/site-config";
import { DisclaimerBox } from "./DisclaimerBox";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h2>{siteConfig.name}</h2>
            <p>{siteConfig.tagline}</p>
            <p>An independent informational resource. It is not a healthcare provider, health plan or clinical software product.</p>
          </div>
          <nav aria-label="Footer">
            <h2>Explore</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li><Link href="/domain">Domain Details</Link></li>
            </ul>
          </nav>
          <section id="editorial-standards" aria-labelledby="editorial-standards-heading">
            <h2 id="editorial-standards-heading">Editorial Standards</h2>
            <ul>
              <li>Content is informational and educational only.</li>
              <li>Healthcare and regulatory claims should be sourced; primary sources are preferred.</li>
              <li>No individualized medical, coverage or legal advice is provided.</li>
              <li>AI-generated or AI-assisted content must be reviewed by a person before publishing.</li>
              <li>Terminology and requirements vary by payer, provider, jurisdiction and organization.</li>
            </ul>
          </section>
        </div>
        <div className="footer-disclaimer">
          <DisclaimerBox tone="footer" />
          <p className="footer-bottom">© {new Date().getFullYear()} {siteConfig.name}</p>
        </div>
      </div>
    </footer>
  );
}
