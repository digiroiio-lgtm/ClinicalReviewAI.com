import { siteConfig } from "@/lib/site-config";

/**
 * tone="footer": the sitewide editorial disclaimer (plain paragraph).
 * tone="oversight": the human-oversight statement.
 * tone="note": an inline informational callout with custom children.
 */
export function DisclaimerBox({
  tone = "note",
  title,
  children,
}: {
  tone?: "footer" | "oversight" | "caution" | "note";
  title?: string;
  children?: React.ReactNode;
}) {
  if (tone === "footer") {
    return <p role="note">{siteConfig.disclaimer}</p>;
  }
  const cls = tone === "oversight" ? "callout-oversight" : tone === "caution" ? "callout-caution" : "callout-note";
  return (
    <aside className={`callout ${cls}`}>
      <span className="callout-title">{title ?? (tone === "oversight" ? "Human oversight" : "Please note")}</span>
      {children ?? <p>{siteConfig.humanOversightStatement}</p>}
    </aside>
  );
}
