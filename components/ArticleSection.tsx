export function ArticleSection({
  id,
  title,
  intro,
  tone = "default",
  children,
}: {
  id: string;
  title: string;
  intro?: React.ReactNode;
  tone?: "default" | "alt";
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className={`section ${tone === "alt" ? "section-alt" : ""}`} aria-labelledby={`${id}-heading`}>
      <div className="container prose">
        <h2 id={`${id}-heading`}>{title}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
        {children}
      </div>
    </section>
  );
}
