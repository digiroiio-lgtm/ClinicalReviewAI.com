import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { DomainAssetCta } from "@/components/DomainAssetCta";
import { FAQ } from "@/components/FAQ";
import { PageIntro } from "@/components/PageIntro";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import type { SourceId } from "@/lib/sources";

const PATH = "/clinical-review-automation";
const META_TITLE = "Clinical Review Automation: What Can Be Automated";
const DESCRIPTION =
  "Explore clinical review automation: which workflow steps can be automated, where human clinical review must remain, and how to assess automation risks.";

export const metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: DESCRIPTION,
  imageAlt: "Clinical review automation: what can be automated and what should not be",
});

const REFS: SourceId[] = ["cms-0057-f", "cfr-422-566", "cfr-422-101", "nist-ai-rmf", "goddard-2012"];

export default function ClinicalReviewAutomationPage() {
  return (
    <>
      <PageIntro
        path={PATH}
        crumb="Clinical Review Automation"
        title="Clinical Review Automation: What Can Be Automated and What Should Not Be"
        metaTitle={META_TITLE}
        description={DESCRIPTION}
        eyebrow="Workflow automation"
        definition="Clinical review automation is the use of software, including rules engines and AI, to perform parts of the clinical review workflow without manual effort. Administrative and preparation steps such as intake, document sorting, data extraction, completeness checks and routing are commonly automated. Interpretation, clinical judgment and determinations that affect patient care should remain with qualified professionals."
      />

      <ArticleSection
        id="what-is-clinical-review-automation"
        title="What Is Clinical Review Automation?"
        intro="It means reducing manual handling in the review process, not removing the reviewer."
      >
        <p>
          A <Link href="/what-is-clinical-review">clinical review</Link> combines administrative work (receiving requests, collecting records, checking completeness, assigning cases) with clinical work (interpreting evidence and deciding). Automation targets the first group and, with AI, parts of the second group&apos;s preparation. It is a broader idea than <Link href="/ai-clinical-review">AI clinical review</Link>, because many automatable steps need no AI at all, only explicit rules.
        </p>
        <p>
          Interest in automation is driven partly by regulatory and operational pressure. In the United States, CMS&apos;s Interoperability and Prior Authorization final rule sets decision timeframes for certain payers beginning in 2026 and includes electronic data-exchange requirements with later compliance dates.<Cite id="cms-0057-f" refs={REFS} /> Applicability depends on the payer and program.
        </p>
      </ArticleSection>

      <ArticleSection
        id="degrees-of-automation"
        title="Degrees of Automation"
        tone="alt"
        intro="Automation is a spectrum. Where an organization sits on it should depend on the risk of the step."
      >
        <ComparisonTable
          caption="Levels of automation in clinical review"
          columns={["Level", "Description", "Example", "Reviewer role"]}
          rows={[
            ["Manual", "People perform every step.", "Reading a fax and keying data.", "Performs all tasks."],
            ["Rules-based automation", "Explicit, human-authored rules run automatically.", "Routing by service type or due date.", "Defines and audits rules; handles cases."],
            ["AI-assisted preparation", "AI proposes extracted facts, summaries or flags.", "Drafting a chronology with source links.", "Verifies output; applies judgment."],
            ["Workflow orchestration", "Software moves cases through steps and tracks status.", "Automatic task creation and deadline tracking.", "Completes review tasks."],
            ["Automated determination", "Software issues the outcome without clinical review.", "Not appropriate for decisions requiring clinical judgment.", "Would be bypassed, so not recommended."],
          ]}
        />
        <p>
          The last row is included to mark a boundary. Program rules can require qualified human review of certain decisions: Medicare Advantage rules, for example, require that certain adverse medical necessity decisions be reviewed by a physician or other appropriate health care professional,<Cite id="cfr-422-566" refs={REFS} /> and require determinations to consider the individual&apos;s medical history, physician recommendations and clinical notes.<Cite id="cfr-422-101" refs={REFS} />
        </p>
      </ArticleSection>

      <ArticleSection
        id="what-can-be-automated"
        title="Which Review Steps Can Be Automated?"
        intro="The table separates steps by the kind of automation that is generally suitable. It is a general framework, not a prescription."
      >
        <ComparisonTable
          caption="Review workflow steps and typical automation suitability"
          columns={["Workflow step", "Automation approach", "Human involvement"]}
          rows={[
            ["Request intake", "Automated capture and validation of required fields.", "Exceptions handled by staff."],
            ["Document classification", "Rules or AI label document types.", "Spot checks; corrections."],
            ["Data extraction", "AI extracts structured fields from text.", "Reviewer verifies material values."],
            ["Completeness check", "Rules compare submission to a checklist.", "Staff decide how to request missing items."],
            ["Criteria retrieval", "Software suggests applicable policy or criteria.", "Reviewer confirms the correct criteria."],
            ["Summarization", "AI drafts summaries and chronologies.", "Reviewer checks for errors and omissions."],
            ["Routing and prioritization", "Rules assign by due date, type and expertise.", "Supervisors override."],
            ["Deadline tracking and notices", "Automated timers and templated communications.", "Staff review communications as required."],
            ["Clinical interpretation and determination", "Not suited to autonomous automation.", "Qualified professional decides and documents."],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="workflow"
        title="Automated Clinical Review Workflow"
        tone="alt"
        intro="Automation clusters at the front of the workflow and in tracking. Judgment sits in the middle and end."
      >
        <ProcessSteps
          label="Automated clinical review workflow"
          steps={[
            { label: "Intake", detail: "Automated capture and validation." },
            { label: "Classification", detail: "Documents are labeled and indexed." },
            { label: "Extraction", detail: "Facts are extracted for review." },
            { label: "Completeness", detail: "Gaps are flagged by rule." },
            { label: "Routing", detail: "Case goes to an appropriate reviewer." },
            { label: "Clinical Review", detail: "A qualified professional evaluates the case.", human: true },
            { label: "Outcome", detail: "Decision or escalation is documented.", human: true },
          ]}
          caption="Automation supports the early steps and tracking. Highlighted steps require human judgment."
        />
      </ArticleSection>

      <ArticleSection
        id="automated-vs-manual"
        title="Automated vs Manual Clinical Review Workflows"
        intro="Automation changes where effort goes, and it introduces risks of its own."
      >
        <ComparisonTable
          caption="Manual and automated workflow comparison"
          columns={["Dimension", "Manual workflow", "Automated workflow"]}
          rows={[
            ["Handling of routine steps", "Staff perform each step by hand.", "Software performs defined steps automatically."],
            ["Consistency of administrative steps", "Can vary by person.", "Applies the same rules each time."],
            ["Error profile", "Fatigue, transcription errors.", "Systematic errors if rules or models are wrong; errors can scale."],
            ["Visibility", "Depends on staff records.", "Status and timing can be tracked automatically."],
            ["Clinical judgment", "Qualified reviewer.", "Qualified reviewer."],
            ["Accountability", "Reviewer and organization.", "Reviewer and organization."],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="risks-and-limitations"
        title="Risks and Limitations of Automation"
        tone="alt"
      >
        <ul>
          <li><strong>Over-automation.</strong> When output effectively becomes the decision, patient safety, fairness and explainability are at risk. See <Link href="/prior-authorization-review#risks-of-over-automation">risks of over-automation</Link>.</li>
          <li><strong>Automation bias.</strong> People tend to over-rely on automated advice; this has been documented in clinical decision support research.<Cite id="goddard-2012" refs={REFS} /></li>
          <li><strong>Error scaling.</strong> A wrong rule or model can affect many cases before it is noticed, so monitoring and change control matter.</li>
          <li><strong>Rule and criteria drift.</strong> Policies change; automated logic must be updated and versioned.</li>
          <li><strong>Edge cases.</strong> Atypical cases need an easy path to human handling.</li>
        </ul>
        <p>
          Organizations commonly track operational signals such as turnaround, how often reviewers override automated suggestions and error rates found in quality checks. General guidance for governing and measuring AI risk is available in the NIST AI Risk Management Framework.<Cite id="nist-ai-rmf" refs={REFS} />
        </p>
        <DisclaimerBox tone="oversight">
          <p>{siteConfig.humanOversightStatement}</p>
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection id="faq" title="Clinical Review Automation FAQs">
        <FAQ
          items={[
            { q: "Is clinical review automation the same as AI?", a: "No. Many steps can be automated with explicit rules and no AI. AI adds the ability to interpret unstructured text, with different risks." },
            { q: "Can clinical review be fully automated?", a: "Administrative steps can be highly automated. Decisions that require clinical judgment should keep qualified human review, and some programs require it." },
            { q: "Where do software options for this live?", a: <p>See the category overview in <Link href="/ai-clinical-review-software">AI clinical review software</Link> and, for a specific workflow, <Link href="/medical-necessity-review-software">medical necessity review software</Link>. This site does not recommend vendors.</p> },
          ]}
        />
      </ArticleSection>

      <DomainAssetCta category="clinical workflow automation" />
      <RelatedLinks current={PATH} />
      <SourceCitation refs={REFS} />
    </>
  );
}
