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
import type { SourceId } from "@/lib/sources";

const PATH = "/what-is-clinical-review";
const META_TITLE = "What Is Clinical Review? Process, Purpose & Examples";
const DESCRIPTION =
  "Learn how clinical review works, what information is examined, who performs reviews and how clinical review relates to medical and utilization review.";

export const metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: DESCRIPTION,
  imageAlt: "What is clinical review? Process, purpose and examples",
});

const REFS: SourceId[] = ["usc-11151", "cfr-422-566", "cfr-438-210", "ssa-1862", "fda-cds"];

export default function WhatIsClinicalReviewPage() {
  return (
    <>
      <PageIntro
        path={PATH}
        crumb="What Is Clinical Review?"
        title="What Is Clinical Review?"
        metaTitle={META_TITLE}
        description={DESCRIPTION}
        eyebrow="Definition and process"
        definition="Clinical review is the structured evaluation of clinical information, such as medical records, test results and treatment history, by a qualified professional to answer a defined question about a case. Depending on the setting, that question may concern documentation, appropriateness of care, medical necessity or quality. Terminology and requirements vary by payer, provider, jurisdiction and organization."
      />

      <ArticleSection
        id="purpose"
        title="What Is the Purpose of Clinical Review?"
        intro="The purpose is to ground a decision or assessment in documented clinical facts, applied criteria and professional judgment."
      >
        <p>Organizations use clinical review for several overlapping reasons:</p>
        <ul>
          <li><strong>Check documentation.</strong> Confirm that the record contains the information needed to evaluate a request or a case.</li>
          <li><strong>Assess appropriateness.</strong> Evaluate whether a service, setting or level of care is consistent with applicable criteria and the documented clinical situation.</li>
          <li><strong>Evaluate medical necessity.</strong> Apply an organization&apos;s or program&apos;s definition of medical necessity to the evidence (see <Link href="/medical-necessity-review">medical necessity review</Link>).</li>
          <li><strong>Support consistency and quality.</strong> Apply the same criteria in a repeatable way and identify cases that need closer attention.</li>
          <li><strong>Create a record.</strong> Document findings and rationale so that decisions can be explained, escalated or revisited.</li>
        </ul>
        <p>
          Clinical review is therefore a process with an accountable human reviewer. The reviewer uses <em>clinical evidence</em>, <em>criteria</em> and <em>clinical judgment</em>; software may help prepare the material, but responsibility for the conclusion stays with the person and organization performing the review.
        </p>
      </ArticleSection>

      <ArticleSection
        id="information-examined"
        title="What Information Is Examined During Clinical Review?"
        tone="alt"
        intro="Reviewers examine clinical documentation relevant to the question being asked. The exact materials depend on the review type and the organization."
      >
        <EvidenceGrid
          items={[
            { icon: "record", title: "Clinical notes", text: "History, examination findings, assessments and plans documented by treating clinicians." },
            { icon: "search", title: "Diagnostic results", text: "Laboratory, imaging, pathology and other test results." },
            { icon: "list", title: "Treatment history", text: "Prior treatments, medications, procedures and documented response or outcome." },
            { icon: "document", title: "Request details", text: "The service, setting, dates and provider information being reviewed." },
            { icon: "scale", title: "Criteria and guidelines", text: "Policies, coverage criteria or clinical guidelines the organization uses for the review." },
            { icon: "shield", title: "Prior determinations", text: "Earlier review outcomes, correspondence and appeal history when relevant." },
          ]}
        />
        <p>
          Clinical evidence in this context means the documented facts about the individual case, and, where criteria require it, evidence-based guidelines or published research the organization has adopted. Organizations do not all rely on the same criteria or evidence sources.
        </p>
      </ArticleSection>

      <ArticleSection
        id="who-performs-clinical-reviews"
        title="Who Performs Clinical Reviews?"
        intro="Qualified healthcare professionals perform clinical reviews. Which professionals, and with what credentials, depends on the setting and the applicable rules."
      >
        <ul>
          <li><strong>Clinical reviewers</strong> such as nurses or other licensed clinicians who apply criteria to documentation, often at the first level of review.</li>
          <li><strong>Physician reviewers or medical directors</strong> who handle complex cases, escalations or specific adverse determinations.</li>
          <li><strong>Specialty reviewers</strong> with expertise in the clinical field relevant to the case.</li>
          <li><strong>Committees</strong> that handle policy, quality or contested cases.</li>
        </ul>
        <p>
          Some rules specify who must review particular decisions. For example, U.S. Medicare Advantage regulations require that certain adverse medical necessity decisions be reviewed by a physician or other appropriate health care professional with expertise in the relevant field,<Cite id="cfr-422-566" refs={REFS} /> and Medicaid managed care regulations address who may make decisions to deny or reduce a requested service.<Cite id="cfr-438-210" refs={REFS} /> These examples show that requirements are program-specific, not universal.
        </p>
      </ArticleSection>

      <ArticleSection
        id="when-is-clinical-review-required"
        title="When Is Clinical Review Required?"
        tone="alt"
        intro="There is no single rule. Clinical review is triggered by organizational policy, program rules, contracts or the nature of the case."
      >
        <p>Common triggers include:</p>
        <ul>
          <li>A request for a service that requires approval before delivery (see <Link href="/prior-authorization-review">prior authorization review</Link>).</li>
          <li>A claim or request that raises a medical necessity question.</li>
          <li>A review of an ongoing hospital stay or course of treatment.</li>
          <li>A contested determination that is being appealed.</li>
          <li>A quality, safety or consistency review of selected cases.</li>
          <li>Documentation that appears incomplete, inconsistent or unusually complex.</li>
        </ul>
        <DisclaimerBox tone="note" title="Rules differ by program">
          <p>Which services need review, how quickly decisions must be made and who must make them depends on the payer, program, plan type and jurisdiction. This page explains general concepts and is not a statement of any specific requirement for any specific case.</p>
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection
        id="clinical-review-process"
        title="What Is the Clinical Review Process?"
        intro="Although details vary, most clinical reviews follow a similar sequence from intake to documented outcome."
      >
        <ProcessSteps
          label="General clinical review process"
          steps={[
            { label: "Intake", detail: "Request or case is received and its review type identified." },
            { label: "Documentation", detail: "Relevant records are gathered and checked for completeness." },
            { label: "Criteria", detail: "Applicable criteria or guidelines are identified." },
            { label: "Evidence Review", detail: "Case facts are compared to the criteria." },
            { label: "Clinical Judgment", detail: "A qualified reviewer interprets the case in context.", human: true },
            { label: "Documented Outcome", detail: "Findings are recorded; complex cases are escalated.", human: true },
          ]}
          caption="Steps vary by organization. Highlighted steps require qualified professional judgment."
        />
        <h3>Escalation and documentation of findings</h3>
        <p>
          When a reviewer cannot resolve a question, for example because documentation conflicts or the case is outside the reviewer&apos;s scope, the case is escalated to another clinician, often one with additional expertise. Reviewers document the information relied upon, the criteria applied and the rationale, so the outcome can be explained and examined later.
        </p>
        <h3>Human accountability</h3>
        <p>
          Every step that involves interpretation or a determination is attributable to an accountable person or body. That accountability is why organizations that introduce software into review processes typically define which steps software may support and which require human decision.
        </p>
      </ArticleSection>

      <ArticleSection
        id="clinical-vs-medical-review"
        title="Clinical Review vs Medical Review"
        tone="alt"
        intro="In everyday use the terms are often interchangeable. When they are distinguished, the difference is usually about who performs the review and how deep it goes."
      >
        <p>
          Some organizations use <strong>clinical review</strong> for review by licensed clinicians such as nurses applying criteria, and <strong>medical review</strong> for review by physicians, particularly for complex or adverse determinations. Others use &quot;medical review&quot; for the whole process. Check the definitions used by the organization or program in question.
        </p>
      </ArticleSection>

      <ArticleSection
        id="clinical-vs-utilization-review"
        title="Clinical Review vs Utilization Review"
        intro="Utilization review is a specific application of clinical review focused on the appropriate use of healthcare resources."
      >
        <p>
          Utilization review (often called utilization management when it is a broader program) evaluates whether services, settings and timing are appropriate, typically against established criteria. It can occur before care (prior authorization), during care (concurrent review) or after care (retrospective review). Clinical review is the broader concept: the evaluation of clinical information by a qualified professional, which utilization review relies on.
        </p>
      </ArticleSection>

      <ArticleSection
        id="clinical-vs-peer-review"
        title="Clinical Review vs Peer Review"
        tone="alt"
        intro="&quot;Peer review&quot; has several meanings, which can cause confusion."
      >
        <ul>
          <li><strong>Hospital or professional peer review</strong> evaluates the competence or conduct of clinicians. U.S. federal law uses the term &quot;professional review action&quot; for certain formal actions of this kind.<Cite id="usc-11151" refs={REFS} /></li>
          <li><strong>Payer peer-to-peer discussions</strong> let a treating clinician discuss a determination with a reviewing clinician.</li>
          <li><strong>Scientific peer review</strong> is evaluation of research before publication.</li>
        </ul>
        <p>Clinical review of a case record, by contrast, evaluates a specific case or request rather than a clinician&apos;s performance.</p>
      </ArticleSection>

      <section className="section" aria-labelledby="comparison-heading">
        <div className="container prose">
          <h2 id="comparison-heading">Clinical, Medical, Utilization and Peer Review Compared</h2>
          <p className="section-intro">A general comparison. Definitions vary by organization, so treat this as orientation rather than a formal taxonomy.</p>
          <ComparisonTable
            caption="General comparison of review terms"
            columns={["Term", "Typical focus", "Typically performed by", "Common timing"]}
            rows={[
              ["Clinical review", "Evaluating clinical information against a defined question", "Licensed clinicians; physicians for complex cases", "Before, during or after care"],
              ["Medical review", "Often review by physicians, or a synonym for clinical review", "Physicians or medical directors", "Varies"],
              ["Utilization review", "Appropriateness of services, setting and timing", "Clinical reviewers and physician advisors", "Prior, concurrent or retrospective"],
              ["Peer review (professional)", "Competence and conduct of clinicians", "Clinician peers and committees", "After events, on a defined schedule or trigger"],
            ]}
          />
        </div>
      </section>

      <ArticleSection
        id="can-ai-assist-clinical-review"
        title="Can AI Assist Clinical Review?"
        tone="alt"
        intro="Yes, in preparation and organization tasks. No, as a replacement for qualified professional judgment."
      >
        <p>
          AI tools can help with extracting information from records, drafting chronologies, identifying passages relevant to a criterion and flagging missing documentation. A reviewer then verifies that material and applies judgment. Software that goes further, such as software intended to analyze medical images or signals or to drive diagnosis or treatment, may fall under FDA oversight as a medical device depending on its function.<Cite id="fda-cds" refs={REFS} /> Medicare&apos;s coverage standard, for example, asks whether an item or service is &quot;reasonable and necessary&quot; for diagnosis or treatment,<Cite id="ssa-1862" refs={REFS} /> a standard applied by people to individual cases.
        </p>
        <p>
          <Link className="more-link" href="/ai-clinical-review">Read the guide to AI clinical review →</Link>
        </p>
        <p>
          Organizations that evaluate tools for these tasks can find a category overview in <Link href="/ai-clinical-review-software">AI clinical review software</Link>.
        </p>
        <DisclaimerBox tone="oversight" />
      </ArticleSection>

      <ArticleSection id="faq" title="Clinical Review FAQs">
        <FAQ
          items={[
            { q: "Is clinical review the same as a doctor visit?", a: "No. Clinical review evaluates records and documentation about a case; it is not an examination or treatment of a patient." },
            { q: "Who is accountable for the outcome of a clinical review?", a: "The reviewer and the organization performing the review. Tools that assist with preparation do not take on that accountability." },
            { q: "Does this page tell me whether my care is medically necessary?", a: "No. Medical necessity depends on your clinical situation, your plan or program and the applicable criteria. Please discuss your situation with your clinician and your plan." },
          ]}
        />
      </ArticleSection>

      <RelatedLinks current={PATH} />
      <SourceCitation refs={REFS} />
    </>
  );
}
