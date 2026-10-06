import Link from "next/link";

export type EntityGroup = {
  title: string;
  items: { term: string; text: string; href?: string }[];
};

/** Makes entity relationships explicit as "X → related concept: how" lists. */
export function EntityMap({ groups }: { groups: EntityGroup[] }) {
  return (
    <div className="entity-map">
      {groups.map((g) => (
        <article className="card" key={g.title}>
          <h3>{g.title}</h3>
          <ul>
            {g.items.map((i) => (
              <li key={i.term}>
                <strong>→ {i.href ? <Link href={i.href}>{i.term}</Link> : i.term}:</strong> {i.text}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
