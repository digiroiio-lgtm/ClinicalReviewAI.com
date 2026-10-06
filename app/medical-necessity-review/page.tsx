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

const PATH = "/medical-necessity-review";
const META_TITLE = "Medical Necessity Review: Process, Evidence & AI";
const DESCRIPTION =
  "Understand medical necessity review, the clinical evidence that may be examined and how AI can support structured healthcare review workflows.";

export const metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: DESCRIPTION,
  imageAlt: "Medical necessity review: process, evidence and AI support",
});

const REFS: SourceId[] = ["ssa-1862", "cfr-422-101", "cfr-438-210", "cfr-422-566", "cfr-2560-503-1", "nist-ai-rmf"];

export default function MedicalNecessityReviewPage() {
  return (
    <>
      <PageIntro
        path={PATH}
        crumb="Medical Necessity Review"
        title="Medical Necessity Review: Process, Evidence and AI Support"
        metaTitle={META_TITLE}
        description={DESCRIPTION}
        eyebrow="Clinical review workflow"
        definition="Medical necessity review is the evaluation of whether a requested or delivered healthcare service meets the medical necessity standard that applies in a particular program, plan or organization. A qualified reviewer compares clinical documentation with that standard and the supporting criteria. AI can help organize evidence for this review, but the determination requires clinical judgment."
      />

      <ArticleSection
        id="what-is-medical-necessity-review"
        title="What Is Medical Necessity Review?"
        intro="It is a type of clinical review in which the question being answered is whether a service meets an applicable medical necessity standard."
      >
        <p>
          There is no single, universal definition of medical necessity. The standard that applies depends on the program, plan, contract and jurisdiction. In Medicare, for example, the Social Security Act generally excludes items and services that are not &quot;reasonable and necessary&quot; for the diagnosis or treatment of illness or injury.<Cite id="ssa-1862" refs={REFS} /> Medicaid managed care regulations require contracts to address how medically necessary services are defined,<Cite id="cfr-438-210" refs={REFS} /> and private plans typically define the term in plan documents.
        </p>
        <p>
          Because definitions differ, a medical necessity review is always tied to a specific standard and a specific set of criteria. It is related to, but not the same as, <Link href="/what-is-clinical-review#clinical-vs-utilization-review">utilization review</Link> and <Link href="/prior-authorization-review">prior authorization review</Link>. Medical necessity is often one of the questions those workflows answer.
        </p>
      </ArticleSection>

      <ArticleSection
        id="why-medical-necessity-is-reviewed"
        title="Why Is Medical Necessity Reviewed?"
        tone="alt"
        intro="Organizations review medical necessity to apply their coverage or program rules consistently and to document why a decision was reached."
      >
        <ul>
          <li><strong>Apply the benefit or program rules.</strong> Coverage often depends on whether a service meets the applicable standard.</li>
          <li><strong>Support appropriate use of services.</strong> Reviewers consider whether the service fits the documented clinical situation.</li>
          <li><strong>Promote consistency.</strong> Using stated criteria helps similar cases receive similar treatment.</li>
          <li><strong>Create an explainable record.</strong> Documented rationale supports communication, appeals and oversight.</li>
        </ul>
        <p>
          Medicare Advantage rules illustrate how this can be regulated: they require plans to make medical necessity determinations based on specified coverage criteria and to consider factors such as the enrollee&apos;s medical history, physician recommendations and clinical notes.<Cite id="cfr-422-101" refs={REFS} /> Other programs have their own rules.
        </p>
      </ArticleSection>

      <ArticleSection
        id="what-evidence-may-be-considered"
        title="What Evidence May Be Considered?"
        intro="The evidence depends on the service, the criteria and the organization. The categories below are common examples, not a requirement that applies everywhere."
      >
        <EvidenceGrid
          items={[
            { icon: "record", title: "Diagnosis documentation", text: "The documented condition or conditions that the service is intended to address." },
            { icon: "gap", title: "Symptoms", text: "Documented symptoms, functional status and their duration or severity." },
            { icon: "list", title: "Previous treatment", text: "Therapies already tried, and the documented response or reasons they were not suitable." },
            { icon: "document", title: "Clinical notes", text: "Treating clinician assessments, rationale and plan of care." },
            { icon: "search", title: "Test results", text: "Laboratory, imaging and other diagnostic findings relevant to the criteria." },
            { icon: "summary", title: "Medication history", text: "Current and past medications, dosing and documented outcomes." },
            { icon: "queue", title: "Treatment plan", text: "The requested service, its frequency, setting and expected course." },
            { icon: "scale", title: "Criteria or guidelines", text: "The coverage policy, clinical criteria or guideline the organization applies." },
          ]}
        />
        <DisclaimerBox tone="note" title="Not every organization uses the same evidence">
          <p>Payers, providers and programs choose their own criteria sources and documentation requirements. Reviewers should apply the criteria that govern the specific request, and nothing here describes what any specific organization requires.</p>
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection
        id="medical-necessity-review-process"
        title="Medical Necessity Review Process"
        tone="alt"
        intro="A typical process moves from a request to a documented decision, with escalation when needed."
      >
        <ProcessSteps
          label="Medical necessity review process"
          steps={[
            { label: "Request", detail: "A service is requested or a case is selected for review." },
            { label: "Documentation", detail: "Clinical records are collected and checked for completeness." },
            { label: "Criteria", detail: "The applicable criteria or policy is identified." },
            { label: "Evidence Review", detail: "Documented facts are compared with the criteria." },
            { label: "Clinical Judgment", detail: "A qualified reviewer interprets the case in context.", human: true },
            { label: "Decision", detail: "A determination is reached by an authorized person.", human: true },
            { label: "Documentation / Escalation", detail: "Rationale is recorded; complex cases are escalated.", human: true },
          ]}
          caption="Steps and terminology vary by organization. Highlighted steps require qualified professional judgment."
        />
      </ArticleSection>

      <ArticleSection
        id="how-ai-can-assist"
        title="How Can AI Assist Medical Necessity Review?"
        intro="AI can reduce the time reviewers spend finding and organizing evidence. It does not decide whether criteria are met."
      >
        <ComparisonTable
          caption="AI-assisted tasks in medical necessity review"
          columns={["AI-assisted task", "What it does", "What the reviewer still does"]}
          rows={[
            ["Document organization", "Sorts and labels submitted documents and builds an index.", "Confirms the right documents are present and relevant."],
            ["Evidence extraction", "Highlights facts related to each criterion element.", "Verifies each fact in the source and reads surrounding context."],
            ["Missing-data identification", "Flags documentation the criteria expect but the submission lacks.", "Decides whether a gap matters and whether to request more information."],
            ["Summary generation", "Drafts a structured case summary.", "Checks the summary for errors and omissions."],
            ["Guideline retrieval", "Finds the policy or criteria text that may apply.", "Confirms the correct, current criteria govern this request."],
            ["Reviewer prioritization", "Orders or routes cases by workflow rules.", "Reviews every case that requires clinical judgment."],
          ]}
        />
        <p>
          Organizations that support this workflow with technology can review typical capabilities and buying questions in <Link href="/medical-necessity-review-software">medical necessity review software</Link>.
        </p>
      </ArticleSection>

      <section id="human-clinical-judgment" className="section" aria-labelledby="human-heading" style={{ background: "var(--teal-soft)", borderTop: "1px solid #a8d5cf", borderBottom: "1px solid #a8d5cf" }}>
        <div className="container prose">
          <h2 id="human-heading">What Requires Human Clinical Judgment?</h2>
          <p className="lead">
            Most of the review itself. Software can assemble evidence; people decide what it means.
          </p>
          <ul>
            <li><strong>Applying criteria to an individual.</strong> Criteria are written in general terms. Whether a person&apos;s documented circumstances satisfy them requires interpretation.</li>
            <li><strong>Weighing conflicting or ambiguous evidence.</strong> Records often disagree or leave gaps.</li>
            <li><strong>Recognizing atypical presentations</strong> and situations that criteria do not anticipate.</li>
            <li><strong>Making the determination,</strong> especially an adverse one. Medicare Advantage rules require that certain adverse medical necessity decisions be reviewed by a physician or other appropriate health care professional with relevant expertise,<Cite id="cfr-422-566" refs={REFS} /> and Medicaid managed care rules address who may decide to deny or reduce a requested service.<Cite id="cfr-438-210" refs={REFS} /></li>
            <li><strong>Escalating</strong> to a physician, specialist or committee when the case warrants.</li>
            <li><strong>Documenting the rationale</strong> so the decision can be explained and, where applicable, appealed.</li>
          </ul>
          <DisclaimerBox tone="oversight">
            <p>{siteConfig.humanOversightStatement}</p>
          </DisclaimerBox>
        </div>
      </section>

      <ArticleSection
        id="limitations-of-automated-review"
        title="Limitations of Automated Medical Necessity Review"
        intro="Automation can make mistakes that are hard to see and can scale them quickly, which is why validation and human review matter."
      >
        <ul>
          <li><strong>Criteria are not always machine-readable.</strong> Some require interpretation of narrative notes or context the record does not state explicitly.</li>
          <li><strong>Output reflects input quality.</strong> Missing pages, poor scans and inconsistent documentation degrade results.</li>
          <li><strong>Tools can be wrong with confidence.</strong> Summaries and extractions may contain errors or invented content.</li>
          <li><strong>Criteria change.</strong> Policies and guidelines are updated, and tools must use current, correct versions.</li>
          <li><strong>Fairness and explainability need attention.</strong> Organizations should be able to explain how a result was reached and monitor for uneven performance.</li>
          <li><strong>Process rules still apply.</strong> Employee benefit plan claims procedures, for example, include requirements for appeals and for consulting appropriate health care professionals where medical judgment is involved.<Cite id="cfr-2560-503-1" refs={REFS} /></li>
        </ul>
        <p>
          General AI risk-management guidance, such as the NIST AI Risk Management Framework, can help organizations structure validation and monitoring.<Cite id="nist-ai-rmf" refs={REFS} /> More detail on risks is available in <Link href="/ai-clinical-review#risks">AI clinical review risks</Link>.
        </p>
        <DisclaimerBox tone="caution" title="No coverage guarantees and no individual advice">
          <p>
            This page does not say whether any service is medically necessary or covered for any person, and nothing here guarantees coverage or any review outcome. For questions about your own care or coverage, speak with your treating clinician and your health plan or program.
          </p>
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection id="faq" title="Medical Necessity Review FAQs" tone="alt">
        <FAQ
          items={[
            { q: "Is medical necessity defined the same way everywhere?", a: "No. The definition and the criteria used depend on the program, plan, contract and jurisdiction." },
            { q: "Can AI make a medical necessity determination?", a: "AI can organize evidence and flag gaps. The determination itself involves clinical judgment and should be made by an appropriately qualified person under applicable rules." },
            { q: "How does medical necessity review relate to prior authorization?", a: <p>Prior authorization is a request process before a service is delivered. Medical necessity review is one question that process may need to answer. See <Link href="/prior-authorization-review">prior authorization review</Link>.</p> },
            { q: "Does a medical necessity review guarantee coverage?", a: "No. Coverage depends on the plan or program terms, eligibility and other factors beyond medical necessity." },
          ]}
        />
      </ArticleSection>

      <RelatedLinks current={PATH} />
      <SourceCitation refs={REFS} />
    </>
  );
}
