import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DefinitionBox } from "@/components/DefinitionBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { EntityMap } from "@/components/EntityMap";
import { EvidenceGrid } from "@/components/EvidenceGrid";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import { getSaleHref, isExternalHref } from "@/lib/site-config";
import { webPageJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import type { SourceId } from "@/lib/sources";

const TITLE = "AI Clinical Review | ClinicalReviewAI.com";
const DESCRIPTION =
  "Learn how AI can assist clinical review, documentation analysis, medical necessity workflows and prior authorization while preserving human oversight.";

export const metadata = buildMetadata({
  path: "/",
  title: TITLE,
  description: DESCRIPTION,
  imageAlt: "ClinicalReviewAI.com: AI-assisted clinical review for healthcare workflows",
});

const REFS: SourceId[] = ["cfr-422-101", "cfr-422-566", "nist-ai-rmf", "hhs-hipaa-privacy"];

export default function HomePage() {
  const saleHref = getSaleHref();
  const saleExternal = isExternalHref(saleHref);
  return (
    <>
      <JsonLd data={[websiteJsonLd(), webPageJsonLd({ path: "/", title: TITLE, description: DESCRIPTION })]} />

      <Hero
        variant="home"
        eyebrow="AI-assisted clinical review for healthcare workflows"
        title="AI Clinical Review for Faster, More Consistent Healthcare Workflows"
        subtitle="Understand how AI can support clinical documentation review, medical necessity workflows and prior authorization while keeping qualified professionals in control."
        actions={
          <>
            <Link className="btn btn-primary" href="/what-is-clinical-review">Explore Clinical Review</Link>
            {saleExternal ? (
              <a className="btn btn-secondary" href={saleHref} target="_blank" rel="noopener nofollow">Domain for Sale</a>
            ) : (
              <Link className="btn btn-secondary" href={saleHref}>Domain for Sale</Link>
            )}
          </>
        }
      >
        <DefinitionBox label="What is AI clinical review?">
          AI clinical review uses artificial intelligence to help qualified healthcare professionals analyze clinical documentation, identify relevant evidence, summarize patient records and support structured review workflows. It can reduce manual document processing, but clinical conclusions, medical necessity determinations and patient-care decisions should remain under appropriate human oversight.
        </DefinitionBox>
      </Hero>

      <ArticleSection
        id="what-is-clinical-review"
        title="What Is Clinical Review?"
        intro="Clinical review is the structured evaluation of clinical information, such as records, test results and treatment history, to answer a defined question about a case."
      >
        <p>
          The question varies by setting. A reviewer may be assessing whether documentation supports a request, whether a service meets an organization&apos;s criteria, whether care followed an expected process, or whether a case should be escalated to a more specialized clinician. Terminology differs across payers, providers, jurisdictions and organizations, so &quot;clinical review,&quot; &quot;medical review&quot; and &quot;utilization review&quot; overlap but are not always interchangeable.
        </p>
        <p>
          In every variation, the reviewer relies on clinical documentation, applies relevant criteria or evidence, uses clinical judgment, records the findings and remains accountable for the result.
        </p>
        <p>
          <Link className="more-link" href="/what-is-clinical-review">Read the full guide: What Is Clinical Review? →</Link>
        </p>
      </ArticleSection>

      <section className="section section-alt" aria-labelledby="ai-assist-heading">
        <div className="container prose">
          <h2 id="ai-assist-heading">What Can AI Assist With?</h2>
          <p className="section-intro">
            AI tools can take on time-consuming preparation work so that reviewers spend more of their attention on interpretation and judgment. Each task below produces material for a person to check, not a conclusion.
          </p>
          <EvidenceGrid
            items={[
              { icon: "document", title: "Clinical Documents", text: "Classify and organize notes, referrals, letters and attachments so reviewers can find what matters." },
              { icon: "record", title: "Medical Records", text: "Extract structured data such as dates, diagnoses, medications and procedures from record text." },
              { icon: "search", title: "Evidence Extraction", text: "Surface passages in a record that relate to a specific review question or criterion." },
              { icon: "summary", title: "Case Summaries", text: "Draft a chronological, structured summary for a reviewer to verify against the source record." },
              { icon: "gap", title: "Missing Information", text: "Flag documentation that a review process expects but that does not appear in the submission." },
              { icon: "queue", title: "Reviewer Prioritization", text: "Help route and order cases using workflow rules so complex cases reach appropriate reviewers sooner." },
            ]}
          />
          <p>
            <Link className="more-link" href="/ai-clinical-review">See how AI clinical review works →</Link>
          </p>
        </div>
      </section>

      <ArticleSection
        id="workflow"
        title="Clinical Review Workflow"
        intro="A typical AI-assisted workflow keeps a qualified person at the decision point. Exact steps vary by organization and by the type of review."
      >
        <ProcessSteps
          label="AI-assisted clinical review workflow"
          steps={[
            { label: "Clinical Case", detail: "A request, referral or record enters the process." },
            { label: "Documentation", detail: "Records are gathered and organized." },
            { label: "Evidence Extraction", detail: "Relevant facts are pulled from the record." },
            { label: "Structured Review", detail: "Findings are compared to review criteria." },
            { label: "Clinical Professional", detail: "A qualified reviewer evaluates the case.", human: true },
            { label: "Decision / Escalation", detail: "The outcome is documented or escalated.", human: true },
          ]}
          caption="Highlighted steps remain with qualified healthcare professionals."
        />
      </ArticleSection>

      <section className="section section-alt" aria-labelledby="review-types-heading">
        <div className="container prose">
          <h2 id="review-types-heading">Common Review Types</h2>
          <p className="section-intro">Clinical review appears in several related workflows. Each has its own page or use-case entry on this site.</p>
          <EvidenceGrid
            items={[
              { title: "Medical Necessity", text: "Assessing whether a requested service meets applicable medical necessity criteria.", href: "/medical-necessity-review", linkLabel: "Medical necessity review" },
              { title: "Prior Authorization", text: "Clinical evaluation of a request for approval before a service is delivered.", href: "/prior-authorization-review", linkLabel: "Prior authorization review" },
              { title: "Utilization Review", text: "Evaluating the appropriateness, timing and setting of care against established criteria.", href: "/use-cases#utilization-review", linkLabel: "Utilization review use case" },
              { title: "Documentation Review", text: "Checking whether clinical documentation is complete and supports the review question.", href: "/use-cases#clinical-documentation-review", linkLabel: "Documentation review use case" },
              { title: "Appeals Review", text: "Re-examining documentation and rationale when a determination is contested.", href: "/use-cases#appeals-documentation-review", linkLabel: "Appeals review use case" },
              { title: "Quality Review", text: "Examining cases to support quality-improvement and consistency efforts.", href: "/use-cases#quality-review-support", linkLabel: "Quality review use case" },
            ]}
          />
        </div>
      </section>

      <ArticleSection
        id="information-reviewed"
        title="What Information Is Reviewed?"
        intro="The information depends on the review type and the organization. The following are common examples, not a universal list."
      >
        <EvidenceGrid
          columns={3}
          items={[
            { title: "Clinical notes", text: "Provider notes describing history, examination findings and the treatment plan." },
            { title: "Test and imaging results", text: "Laboratory values, imaging reports and other diagnostic results." },
            { title: "Medication and treatment history", text: "Prior therapies, their duration and documented response." },
            { title: "Diagnosis and procedure information", text: "Documented conditions and requested services, sometimes represented by standardized codes." },
            { title: "Criteria and guidelines", text: "Organizational policies, coverage criteria or clinical guidelines the reviewer is asked to apply." },
            { title: "Prior review history", text: "Earlier requests, determinations and correspondence relevant to the case." },
          ]}
        />
        <p>
          Records of this kind are typically protected health information. In the United States, the HIPAA Privacy Rule governs how covered entities and their business associates may use and disclose it.<Cite id="hhs-hipaa-privacy" refs={REFS} />
        </p>
      </ArticleSection>

      <section className="section section-alt" aria-labelledby="comparison-heading">
        <div className="container prose">
          <h2 id="comparison-heading">AI-Assisted vs Manual Clinical Review</h2>
          <p className="section-intro">
            AI assistance mainly changes how much preparation work reviewers do by hand. It does not move clinical judgment or accountability away from people.
          </p>
          <ComparisonTable
            caption="General comparison of manual and AI-assisted clinical review"
            columns={["Dimension", "Manual review", "AI-assisted review"]}
            rows={[
              ["Document volume", "Reviewers read each document in full, which is time-intensive for large records.", "Software can ingest and organize large volumes of documents before a reviewer opens the case."],
              ["Information extraction", "Reviewers locate and transcribe relevant facts by hand.", "Software proposes extracted facts that a reviewer verifies against the source."],
              ["Summarization", "Reviewers write their own summaries.", "Software drafts summaries that require human checking for accuracy and omissions."],
              ["Consistency", "Can vary between reviewers and over time.", "Can apply the same checklist or extraction steps every time; output quality still needs monitoring."],
              ["Clinical context", "Reviewer interprets the full clinical picture.", "Software may miss nuance or context; the reviewer supplies it."],
              ["Clinical judgment", "Performed by a qualified professional.", "Performed by a qualified professional. AI does not replace it."],
              ["Accountability", "Rests with the reviewer and the organization.", "Rests with the reviewer and the organization."],
              ["Final decision", "Made by a qualified professional under organizational policy.", "Made by a qualified professional under organizational policy."],
            ]}
          />
        </div>
      </section>

      <ArticleSection
        id="use-cases"
        title="Key Healthcare Use Cases"
        intro="AI-assisted review can support several workflows. In each, the output is review material for a person, not an autonomous decision."
      >
        <ul>
          <li><strong>Clinical documentation review:</strong> extracting key information and flagging potentially missing documentation.</li>
          <li><strong>Medical necessity and prior authorization support:</strong> organizing evidence against stated criteria before clinical review.</li>
          <li><strong>Utilization review and case summarization:</strong> producing chronologies and structured summaries.</li>
          <li><strong>Appeals and quality review support:</strong> assembling the documentation a reviewer needs to re-examine a case.</li>
        </ul>
        <p>
          <Link className="more-link" href="/use-cases">Explore all AI clinical review use cases →</Link>
        </p>
        <p>
          Teams comparing tools can read about <Link href="/ai-clinical-review-software">AI clinical review software</Link>, what can and cannot be handled through <Link href="/clinical-review-automation">clinical review automation</Link>, and <Link href="/medical-necessity-review-software">medical necessity review software</Link>.
        </p>
      </ArticleSection>

      <section className="section section-alt" id="human-oversight" aria-labelledby="oversight-heading">
        <div className="container prose">
          <h2 id="oversight-heading">Human Oversight</h2>
          <p>
            Human oversight is the central design principle of responsible AI-assisted clinical review. Clinical conclusions, medical necessity determinations and patient-care decisions involve judgment, context and accountability that software cannot assume.
          </p>
          <DisclaimerBox tone="oversight" title="Where people remain in control">
            <ul>
              <li>Interpreting ambiguous or conflicting clinical information.</li>
              <li>Applying criteria to the individual circumstances of a case.</li>
              <li>Making and documenting determinations, and escalating complex cases.</li>
              <li>Recognizing when AI output is incomplete, incorrect or out of date.</li>
            </ul>
            <p>This is consistent with U.S. Medicare Advantage rules that require medical necessity determinations to consider the individual&apos;s medical history, physician recommendations and clinical notes<Cite id="cfr-422-101" refs={REFS} /> and that require review of certain adverse decisions by a physician or other appropriate health care professional.<Cite id="cfr-422-566" refs={REFS} /></p>
          </DisclaimerBox>
          <p>
            For a deeper look at the boundary between assistance and decision-making, see <Link href="/ai-clinical-review#what-ai-should-not-decide">what AI should not decide autonomously</Link>.
          </p>
        </div>
      </section>

      <ArticleSection
        id="risks-limitations"
        title="Risks and Limitations"
        intro="AI-assisted review introduces risks that organizations should identify and manage before relying on any tool."
      >
        <ul>
          <li><strong>Incorrect or fabricated output:</strong> generative systems can produce plausible but wrong statements.</li>
          <li><strong>Incomplete or inconsistent records:</strong> missing pages, scanned text and conflicting entries can mislead a tool.</li>
          <li><strong>Automation bias:</strong> reviewers may over-trust confident-looking output.</li>
          <li><strong>Bias, privacy and explainability:</strong> training data, data handling and the ability to trace output to source text all matter.</li>
        </ul>
        <p>
          Frameworks such as the NIST AI Risk Management Framework describe how organizations can approach these risks systematically.<Cite id="nist-ai-rmf" refs={REFS} /> The full list is covered on the <Link href="/ai-clinical-review#risks">AI clinical review risks</Link> section.
        </p>
      </ArticleSection>

      <section className="section section-alt" aria-labelledby="entities-heading">
        <div className="container prose">
          <h2 id="entities-heading">How the Concepts Fit Together</h2>
          <p className="section-intro">
            Clinical review sits at the center of several related healthcare workflows. AI assistance supports preparation steps around it and always routes to human review.
          </p>
          <EntityMap
            groups={[
              {
                title: "Clinical Review",
                items: [
                  { term: "Medical Review", text: "a closely related term, used differently by different organizations.", href: "/what-is-clinical-review#clinical-vs-medical-review" },
                  { term: "Clinical Documentation", text: "the records a review examines.", href: "/what-is-clinical-review#information-examined" },
                  { term: "Medical Necessity", text: "a common question a review answers.", href: "/medical-necessity-review" },
                  { term: "Utilization Review", text: "review of appropriateness of care and resources.", href: "/what-is-clinical-review#clinical-vs-utilization-review" },
                  { term: "Prior Authorization", text: "review of requests before services are delivered.", href: "/prior-authorization-review" },
                  { term: "Evidence Review", text: "comparing case facts with criteria and guidelines." },
                  { term: "Human Clinical Judgment", text: "the step that determines the outcome." },
                ],
              },
              {
                title: "AI Clinical Review",
                items: [
                  { term: "Document Analysis", text: "reading and classifying records.", href: "/ai-clinical-review#what-ai-can-assist-with" },
                  { term: "Evidence Extraction", text: "locating facts relevant to a criterion." },
                  { term: "Summarization", text: "drafting structured summaries for verification." },
                  { term: "Missing Information Detection", text: "flagging gaps in documentation." },
                  { term: "Workflow Prioritization", text: "routing and ordering cases." },
                  { term: "Human Oversight", text: "required review of AI output before any decision.", href: "/ai-clinical-review#what-ai-should-not-decide" },
                ],
              },
            ]}
          />
        </div>
      </section>

      <ArticleSection id="faq" title="Frequently Asked Questions">
        <FAQ
          items={[
            { q: "What is AI clinical review?", a: "AI clinical review is the use of artificial intelligence to assist qualified healthcare professionals with tasks such as document extraction, summarization, evidence identification and missing-information detection. A qualified person reviews the output and makes any clinical determination." },
            { q: "Does AI replace clinicians in clinical review?", a: "No. AI can support preparation and organization, but decisions that require clinical judgment remain with qualified healthcare professionals." },
            { q: "Can AI decide medical necessity?", a: "Medical necessity determinations involve clinical judgment, applicable criteria and the individual circumstances of a case. AI can help organize evidence for that review; it should not be treated as the decision-maker." },
            { q: "Is clinical review the same as utilization review?", a: "They overlap but are not identical. Utilization review typically focuses on appropriateness, timing and setting of care, while clinical review is a broader term. Definitions vary by organization and jurisdiction." },
            { q: "Does this site give medical or coverage advice?", a: "No. This site provides general educational information only and cannot tell any individual whether a service is medically necessary or covered." },
            { q: "Is ClinicalReviewAI.com a software product?", a: "No. It is an informational website. It is not a healthcare provider, health plan or clinical software vendor, and the domain is available for acquisition." },
          ]}
        />
      </ArticleSection>

      <RelatedLinks heading="Explore the Topic Guides" />
      <SourceCitation refs={REFS} />
    </>
  );
}
