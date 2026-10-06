import Link from "next/link";

export type RelatedItem = { href: string; title: string; text: string };

export const pillarLinks: Record<string, RelatedItem> = {
  "/what-is-clinical-review": { href: "/what-is-clinical-review", title: "What Is Clinical Review?", text: "Definition, purpose, participants and process." },
  "/ai-clinical-review": { href: "/ai-clinical-review", title: "AI Clinical Review", text: "What AI can and cannot assist with, and the risks." },
  "/medical-necessity-review": { href: "/medical-necessity-review", title: "Medical Necessity Review", text: "Process, evidence and where judgment stays human." },
  "/prior-authorization-review": { href: "/prior-authorization-review", title: "Prior Authorization Review", text: "Clinical workflow and where AI may assist." },
  "/use-cases": { href: "/use-cases", title: "AI Clinical Review Use Cases", text: "Ten workflows from goal to human-reviewed output." },
};

/** Internal links to the other pillar pages (excludes the current path). */
export function RelatedLinks({ current, heading = "Continue Exploring" }: { current?: string; heading?: string }) {
  const items = Object.values(pillarLinks).filter((l) => l.href !== current);
  return (
    <section className="section section-alt" aria-labelledby="related-heading">
      <div className="container">
        <h2 id="related-heading">{heading}</h2>
        <nav className="related" aria-label="Related pages">
          {items.map((l) => (
            <Link key={l.href} href={l.href}>
              <strong>{l.title}</strong>
              <span>{l.text}</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
