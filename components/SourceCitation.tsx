import { getSource, type SourceId } from "@/lib/sources";

/** Inline numbered citation. `refs` is the page's ordered source list (also passed to <SourceCitation>). */
export function Cite({ id, refs }: { id: SourceId; refs: readonly SourceId[] }) {
  const n = refs.indexOf(id) + 1;
  if (n === 0) throw new Error(`Cite: source "${id}" is not in this page's refs list`);
  return (
    <sup className="cite">
      <a href={`#source-${id}`} aria-label={`Source ${n}: ${getSource(id).title}`}>[{n}]</a>
    </sup>
  );
}

/** Visible source list; every entry links to the primary source. */
export function SourceCitation({ refs }: { refs: readonly SourceId[] }) {
  return (
    <section id="sources" className="section sources" aria-labelledby="sources-heading">
      <div className="container">
        <h2 id="sources-heading">Sources and Further Reading</h2>
        <p className="section-intro">
          Regulatory and formal-requirement statements on this page are drawn from the sources below. Requirements differ by payer, program, plan type and jurisdiction, so consult current primary sources and qualified advisors for any specific situation.
        </p>
        <ol>
          {refs.map((id) => {
            const s = getSource(id);
            return (
              <li key={id} id={`source-${id}`}>
                <a href={s.url} target="_blank" rel="noopener">{s.title}</a> — {s.publisher}
                <span className="supports">Used for: {s.supports}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
