/** Direct-answer block placed immediately under the H1 (target: 40–80 words). */
export function DefinitionBox({ label = "Short answer", children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="definition">
      <span className="label">{label}</span>
      <p>{children}</p>
    </div>
  );
}
