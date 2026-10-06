export type Step = { label: string; detail?: string; human?: boolean };

/** Horizontal (desktop) / vertical (mobile) workflow. Steps flagged `human` are highlighted. */
export function ProcessSteps({ steps, caption, label }: { steps: Step[]; caption?: string; label: string }) {
  return (
    <figure style={{ margin: 0 }}>
      <ol className="process" aria-label={label} style={{ ["--cols" as string]: steps.length }}>
        {steps.map((s) => (
          <li key={s.label} className={s.human ? "human" : undefined}>
            <span className="step-label">{s.label}</span>
            {s.detail ? <span className="step-detail">{s.detail}</span> : null}
          </li>
        ))}
      </ol>
      {caption ? <figcaption className="process-caption">{caption}</figcaption> : null}
    </figure>
  );
}
