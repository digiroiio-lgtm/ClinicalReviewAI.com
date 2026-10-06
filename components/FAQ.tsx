export type FaqItem = { q: string; a: React.ReactNode };

/** Native <details> accordion: no JavaScript, and answers stay in the DOM for crawlers. */
export function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((it) => (
        <details key={it.q}>
          <summary>
            <h3>{it.q}</h3>
          </summary>
          <div className="answer">{typeof it.a === "string" ? <p>{it.a}</p> : it.a}</div>
        </details>
      ))}
    </div>
  );
}
