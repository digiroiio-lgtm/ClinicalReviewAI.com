import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { EvidenceGrid } from "@/components/EvidenceGrid";
import { FAQ } from "@/components/FAQ";
import { PageIntro } from "@/components/PageIntro";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import type { SourceId } from "@/lib/sources";

const PATH = "/prior-authorization-review";
const META_TITLE = "Prior Authorization Review: Process & AI Assistance";
const DESCRIPTION =
  "Learn how prior authorization clinical review works and where AI may assist document intake, evidence extraction, completeness checks and reviewer workflows.";

export const metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: DESCRIPTION,
  imageAlt: "Prior authorization review: clinical workflow and AI assistance",
});

const REFS: SourceId[] = ["cms-0057-f", "cfr-422-566", "cfr-438-210", "cfr-2560-503-1", "nist-ai-rmf"];

export default function PriorAuthorizationReviewPage() {
  return (
    <>
      <PageIntro
        path={PATH}
        crumb="Prior Authorization Review"
        title="Prior Authorization Review: Clinical Workflow and AI Assistance"
        metaTitle={META_TITLE}
        description={DESCRIPTION}
        eyebrow="Payer and provider workflow"
        definition="Prior authorization review is the process by which a health plan or its delegate evaluates a request for approval of a service before it is delivered. Administrative staff check the request, and clinical reviewers evaluate documentation against applicable criteria. AI may help with intake, extraction and completeness checks, while clinical determinations remain with qualified professionals."
      />

      <ArticleSection
        id="what-is-prior-authorization-review"
        title="What Is Prior Authorization Review?"
        intro="Prior authorization (also called pre-authorization or pre-certification) is a requirement that certain services be approved by a payer before they are delivered."
      >
        <p>
          The review has an administrative part, such as verifying eligibility, benefits and request completeness, and a clinical part, in which a qualified reviewer evaluates whether the documentation supports approval under the applicable criteria. Which services require prior authorization, which criteria apply and how quickly decisions are due vary by payer, program and jurisdiction.
        </p>
        <p>
          In the United States, federal rules apply to certain payers. For example, CMS&apos;s Interoperability and Prior Authorization final rule (CMS-0057-F) establishes decision timeframes for certain impacted payers beginning in 2026, generally 72 hours for expedited requests and seven calendar days for standard requests, and requires those payers to provide a reason when a request is denied.<Cite id="cms-0057-f" refs={REFS} /> The rule&apos;s scope is specific, so it should not be read as a description of every payer or plan.
        </p>
      </ArticleSection>

      <ArticleSection
        id="what-happens-during-clinical-review"
        title="What Happens During Clinical Review?"
        tone="alt"
        intro="Not every request reaches a clinical reviewer. Where clinical review occurs, it generally follows these ideas."
      >
        <ul>
          <li><strong>The reviewer confirms what is being requested</strong>: the service, setting, timing and the condition it addresses.</li>
          <li><strong>The reviewer identifies the criteria</strong> that govern the request, such as a coverage policy or clinical guideline adopted by the payer.</li>
          <li><strong>The reviewer compares the documentation to the criteria,</strong> noting what is supported, unsupported or missing.</li>
          <li><strong>The reviewer applies clinical judgment</strong> to the individual case and may escalate to a physician or specialist.</li>
          <li><strong>The outcome is documented,</strong> with the rationale. An approval may be issued, more information requested, or a case escalated for a possible adverse determination.</li>
        </ul>
        <p>
          Regulations may specify who reviews certain outcomes. For example, Medicare Advantage rules require that certain adverse medical necessity decisions be reviewed by a physician or other appropriate health care professional with expertise in the relevant field,<Cite id="cfr-422-566" refs={REFS} /> and Medicaid managed care rules address who may decide to deny or reduce a service request.<Cite id="cfr-438-210" refs={REFS} />
        </p>
        <p>
          See also: <Link href="/medical-necessity-review">medical necessity review</Link>, which is often the clinical question at the center of this process.
        </p>
      </ArticleSection>

      <ArticleSection
        id="what-documentation-may-be-required"
        title="What Documentation May Be Required?"
        intro="Documentation requirements are set by the payer and the criteria for the specific service. Typical categories include the following."
      >
        <EvidenceGrid
          items={[
            { icon: "document", title: "Request form or submission", text: "Patient, provider, service, diagnosis and date information." },
            { icon: "record", title: "Clinical notes", text: "Recent assessments supporting the request and the treatment plan." },
            { icon: "search", title: "Test and imaging results", text: "Diagnostic findings that the criteria reference." },
            { icon: "list", title: "Prior treatment history", text: "Therapies tried, their duration and documented response." },
            { icon: "summary", title: "Medication records", text: "Current and previous medications relevant to the request." },
            { icon: "scale", title: "Letters of medical necessity", text: "Provider statements explaining why the service is requested, where required." },
          ]}
        />
        <DisclaimerBox tone="note" title="Check the requirements that apply">
          <p>This list is illustrative. A payer&apos;s own published requirements govern any given request.</p>
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection
        id="why-reviews-take-time"
        title="Why Do Prior Authorization Reviews Take Time?"
        tone="alt"
        intro="Several workflow factors can add time. These are general observations, not measurements."
      >
        <ul>
          <li><strong>Incomplete submissions.</strong> Missing documentation leads to requests for more information and repeated cycles.</li>
          <li><strong>Unstructured documents.</strong> Faxes, scans and free-text notes must be read, sorted and interpreted.</li>
          <li><strong>Criteria complexity.</strong> Criteria may have many elements that must each be located in the record.</li>
          <li><strong>Handoffs.</strong> Requests may pass between intake staff, clinical reviewers and physician reviewers.</li>
          <li><strong>Case complexity.</strong> Complicated or atypical cases need more time and, often, more expertise.</li>
          <li><strong>Regulatory timeframes and routing.</strong> Some requests are expedited and must be identified and prioritized correctly.</li>
        </ul>
        <p>These are the parts of the process that AI-assisted tools are generally intended to address.</p>
      </ArticleSection>

      <ArticleSection
        id="where-can-ai-assist"
        title="Where Can AI Assist?"
        intro="AI is best suited to preparation and routing tasks that precede clinical judgment."
      >
        <ComparisonTable
          caption="Where AI may assist prior authorization review"
          columns={["Stage", "AI-assisted task", "Output"]}
          rows={[
            ["Intake", "Read incoming requests and attachments from multiple formats.", "Digitized, indexed request."],
            ["Document classification", "Label documents such as notes, results and letters.", "Organized document set."],
            ["Clinical information extraction", "Extract diagnoses, dates, medications and results.", "Structured data with source references."],
            ["Completeness checks", "Compare the submission with a required-items list.", "List of items present and apparently missing."],
            ["Evidence summarization", "Draft a summary of relevant findings.", "Draft summary for verification."],
            ["Criteria retrieval", "Find the policy or criteria that may apply.", "Candidate criteria for reviewer confirmation."],
            ["Reviewer routing", "Route by service type, required expertise or due date.", "Case assigned to an appropriate reviewer."],
            ["Workflow prioritization", "Order cases by urgency and deadlines under defined rules.", "Prioritized work queue."],
          ]}
        />
        <p>
          Which of these steps can be automated with rules or AI, and which should not be, is covered in <Link href="/clinical-review-automation">clinical review automation</Link>.
        </p>
      </ArticleSection>

      <section id="where-human-review-remains" className="section" aria-labelledby="human-heading" style={{ background: "var(--teal-soft)", borderTop: "1px solid #a8d5cf", borderBottom: "1px solid #a8d5cf" }}>
        <div className="container prose">
          <h2 id="human-heading">Where Should Human Review Remain?</h2>
          <ul>
            <li><strong>Clinical interpretation.</strong> Deciding what the documented facts mean for this individual.</li>
            <li><strong>Adverse determinations.</strong> Denials or reductions should involve an appropriately qualified human reviewer where rules require and as a matter of safe practice.</li>
            <li><strong>Urgent and complex cases.</strong> Cases with potential patient-safety implications need timely human attention.</li>
            <li><strong>Exceptions and ambiguity.</strong> Cases that criteria do not clearly address.</li>
            <li><strong>Communication of rationale.</strong> Explaining decisions in terms that providers and patients can understand.</li>
          </ul>
          <DisclaimerBox tone="oversight">
            <p>{siteConfig.humanOversightStatement}</p>
          </DisclaimerBox>
        </div>
      </section>

      <ArticleSection
        id="prior-authorization-review-workflow"
        title="Prior Authorization Review Workflow"
        intro="A simplified view. Real workflows include eligibility checks, peer-to-peer discussions and other steps that differ by payer."
      >
        <ProcessSteps
          label="Prior authorization review workflow"
          steps={[
            { label: "Request", detail: "A provider submits a service request." },
            { label: "Clinical Documentation", detail: "Supporting records are received." },
            { label: "Completeness Check", detail: "Required items are verified." },
            { label: "Evidence Review", detail: "Facts are extracted and organized." },
            { label: "Criteria", detail: "Applicable criteria are identified." },
            { label: "Clinical Reviewer", detail: "A qualified reviewer evaluates the case.", human: true },
            { label: "Decision / Escalation", detail: "Outcome is documented or escalated.", human: true },
          ]}
          caption="Software can support the earlier steps. The highlighted steps remain with qualified professionals."
        />
      </ArticleSection>

      <ArticleSection
        id="risks-of-over-automation"
        title="Risks of Over-Automation"
        tone="alt"
        intro="Over-automation occurs when software output effectively becomes the decision. In prior authorization, the consequences can reach patient care."
      >
        <ul>
          <li><strong>Patient safety.</strong> Delays or inappropriate denials can affect access to care, which is why timely human review of urgent and complex cases matters.</li>
          <li><strong>Context.</strong> Tools can miss clinical nuance that a reviewer would catch in the full record.</li>
          <li><strong>Fairness.</strong> Criteria applied through software can produce uneven results across populations if not monitored.</li>
          <li><strong>Explainability.</strong> Payers must be able to give reasons for decisions, and federal rules for certain payers require a specific reason for denials.<Cite id="cms-0057-f" refs={REFS} /> Reasons need to be traceable to criteria and evidence.</li>
          <li><strong>Appeal rights, where applicable.</strong> Programs and plans commonly provide internal appeals, and federal claims-procedure rules address appeals for covered employee benefit plans.<Cite id="cfr-2560-503-1" refs={REFS} /> Automation should not undermine a person&apos;s ability to understand and contest a decision.</li>
          <li><strong>Human oversight.</strong> Clear accountability for decisions, plus monitoring of tool performance, is part of responsible practice. NIST&apos;s AI Risk Management Framework offers general guidance on governing and monitoring AI systems.<Cite id="nist-ai-rmf" refs={REFS} /></li>
        </ul>
        <DisclaimerBox tone="caution" title="No individualized insurance advice">
          <p>
            This page describes workflows in general terms. It does not assess any specific request, plan or coverage decision. For questions about your own authorization, contact your clinician&apos;s office and your health plan.
          </p>
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection id="faq" title="Prior Authorization Review FAQs">
        <FAQ
          items={[
            { q: "Is prior authorization review the same as medical necessity review?", a: <p>No. Prior authorization is a request-and-approval process. Medical necessity review is one question a clinical reviewer may answer within it. See <Link href="/medical-necessity-review">medical necessity review</Link>.</p> },
            { q: "Can AI approve or deny prior authorization requests?", a: "AI can help prepare requests for review. Decisions that require clinical judgment, particularly adverse determinations, should be made by qualified professionals under the rules that apply." },
            { q: "Do prior authorization rules vary?", a: "Yes. Requirements differ by payer, program, plan type, service and jurisdiction." },
          ]}
        />
      </ArticleSection>

      <RelatedLinks current={PATH} />
      <SourceCitation refs={REFS} />
    </>
  );
}
