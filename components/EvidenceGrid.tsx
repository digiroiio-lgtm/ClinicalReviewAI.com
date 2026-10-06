import Link from "next/link";
import { Icon, type IconName } from "./Icon";

export type EvidenceItem = { title: string; text: string; icon?: IconName; href?: string; linkLabel?: string };

/** Card grid for evidence types, capabilities and review types. Headings are h3 under the section's h2. */
export function EvidenceGrid({ items, columns = 3 }: { items: EvidenceItem[]; columns?: 2 | 3 }) {
  return (
    <div className={`grid ${columns === 2 ? "grid-2" : "grid-3"}`}>
      {items.map((it) => (
        <article className="card" key={it.title}>
          {it.icon ? (
            <span className="icon">
              <Icon name={it.icon} />
            </span>
          ) : null}
          <h3>{it.title}</h3>
          <p>{it.text}</p>
          {it.href ? (
            <Link className="card-link" href={it.href}>
              {it.linkLabel ?? "Learn more"} →
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  );
}
