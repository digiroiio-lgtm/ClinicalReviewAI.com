import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { Hero } from "@/components/Hero";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  path: "/domain",
  title: "Acquire ClinicalReviewAI.com | Domain Details",
  description: "ClinicalReviewAI.com is available for acquisition. Details about the domain name and associated informational website asset.",
  noindex: true, // robots: noindex, follow. Also excluded from sitemap.ts.
});

const applications = [
  "Clinical workflow software",
  "Utilization management technology",
  "Prior authorization technology",
  "Medical review software",
  "Healthcare AI",
  "Payer technology",
  "Clinical documentation intelligence",
  "Healthtech infrastructure",
];

export default function DomainPage() {
  const inquiryUrl = siteConfig.saleUrlOverride;
  const external = /^(https?:|mailto:)/i.test(inquiryUrl);
  return (
    <>
      <Hero
        title="Acquire ClinicalReviewAI.com"
        top={<Breadcrumbs trail={[{ name: "Domain Details", path: "/domain" }]} />}
        subtitle="ClinicalReviewAI.com is a premium category domain for organizations building at the intersection of artificial intelligence, healthcare workflows and clinical review."
        actions={
          inquiryUrl ? (
            <a className="btn btn-primary" href={inquiryUrl} {...(external ? { target: "_blank", rel: "noopener nofollow" } : {})}>
              Make an Inquiry
            </a>
          ) : (
            <span className="btn btn-muted" role="note">Inquiry link not yet configured</span>
          )
        }
      />

      <section className="section" aria-labelledby="applications-heading">
        <div className="container prose">
          <h2 id="applications-heading">Potential Applications</h2>
          <p>The name fits organizations working in categories such as:</p>
          <ul className="domain-list">
            {applications.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="included-heading">
        <div className="container prose">
          <h2 id="included-heading">What Is Being Acquired</h2>
          <p>
            The buyer is acquiring the domain name and the associated informational website asset: the educational content, site structure and search foundation described on this site.
          </p>
          <DisclaimerBox tone="note" title="What ClinicalReviewAI.com is not">
            <p>
              ClinicalReviewAI.com is not represented as an operating healthcare provider, insurer or clinical AI company. It does not offer clinical software, patient services or coverage decisions, and it makes no claims of regulatory clearance, certification or compliance.
            </p>
          </DisclaimerBox>
        </div>
      </section>
    </>
  );
}
