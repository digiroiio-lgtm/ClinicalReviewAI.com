import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const steps = ["Clinical Record", "Evidence Extraction", "Structured Summary", "Human Clinical Review"];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f5f7fa", padding: 72, color: "#0b1f3a" }}>
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
          ClinicalReview<span style={{ color: "#0f766e" }}>AI</span>.com
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.1, maxWidth: 980 }}>AI-Assisted Clinical Review for Healthcare Workflows</div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#475569" }}>Qualified professionals stay in control.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24 }}>
          {steps.map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ display: "flex", padding: "12px 20px", borderRadius: 10, border: "2px solid", borderColor: i === steps.length - 1 ? "#0f766e" : "#bcc9d8", background: i === steps.length - 1 ? "#e6f4f2" : "#fff" }}>{s}</div>
              {i < steps.length - 1 ? <div style={{ color: "#64748b" }}>→</div> : null}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
