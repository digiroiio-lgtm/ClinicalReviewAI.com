export function Hero({
  title,
  eyebrow,
  subtitle,
  variant = "page",
  actions,
  top,
  children,
}: {
  title: string;
  eyebrow?: string;
  subtitle?: React.ReactNode;
  variant?: "home" | "page";
  actions?: React.ReactNode;
  /** Rendered above the eyebrow, e.g. breadcrumbs. */
  top?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className={`hero ${variant === "home" ? "hero-home" : ""}`} aria-labelledby="page-title">
      <div className="container hero-inner">
        {top}
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 id="page-title">{title}</h1>
        {subtitle ? <p className="lead">{subtitle}</p> : null}
        {children}
        {actions ? <div className="actions">{actions}</div> : null}
      </div>
    </section>
  );
}
