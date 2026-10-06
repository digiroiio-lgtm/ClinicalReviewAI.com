import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { DomainAssetCta } from "@/components/DomainAssetCta";
import { EvidenceGrid } from "@/components/EvidenceGrid";
import { FAQ } from "@/components/FAQ";
import { PageIntro } from "@/components/PageIntro";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import type { SourceId } from "@/lib/sources";

const PATH = "/medical-necessity-review-software";
const META_TITLE = "Medical Necessity Review Software: What Buyers Evaluate";
const DESCRIPTION =
  "Understand medical necessity review software: core capabilities, criteria management, evidence mapping, evaluation questions and the limits of automation.";

export const metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: DESCRIPTION,
  imageAlt: "Medical necessity review software: capabilities and buyer considerations",
});

const REFS: SourceId[] = ["cfr-422-101", "cms-4201-f", "cfr-422-566", "cfr-438-210", "cfr-2560-503-1"];

export default function MedicalNecessityReviewSoftwarePage() {
  return (
    <>
      <PageIntro
        path={PATH}
        crumb="Medical Necessity Review Software"
        title="Medical Necessity Review Software: Capabilities and Buyer Considerations"
        metaTitle={META_TITLE}
        description={DESCRIPTION}
        eyebrow="Category guide"
        definition="Medical necessity review software supports the workflow in which clinical reviewers compare documented clinical facts with the medical necessity criteria that apply to a request. Common functions include case intake, criteria management, evidence-to-criteria mapping, reviewer worksheets and audit trails. AI features may help organize evidence, but determinations require qualified clinical judgment."
      />

      <ArticleSection
        id="what-is-medical-necessity-review-software"
        title="What Is Medical Necessity Review Software?"
        intro="It is workflow software built around one question: does the documentation support the applicable medical necessity standard for this request?"
      >
        <p>
          The category serves the process explained in <Link href="/medical-necessity-review">medical necessity review</Link>. Typical users are health plans, utilization management organizations and provider-side review teams. Because the standard for medical necessity differs by program, plan and contract, software in this category is usually configurable around an organization&apos;s own criteria and policies rather than embedding a single universal definition.
        </p>
        <p>
          Some products are traditional workflow systems with no AI. Others add AI to organize evidence or flag gaps, as described in <Link href="/ai-clinical-review-software">AI clinical review software</Link>. Both are part of the broader category.
        </p>
      </ArticleSection>

      <ArticleSection
        id="core-capabilities"
        title="Core Capabilities"
        tone="alt"
        intro="Buyers typically look for the following functions."
      >
        <EvidenceGrid
          items={[
            { icon: "scale", title: "Criteria and policy management", text: "Store, version and assign the criteria or policies reviewers apply, with effective dates and ownership." },
            { icon: "document", title: "Case intake", text: "Receive requests and documents, validate required fields and open a review case." },
            { icon: "search", title: "Evidence-to-criteria mapping", text: "Show which documented facts relate to each criteria element, with links to source text." },
            { icon: "gap", title: "Gap identification", text: "Flag criteria elements with no apparent supporting documentation." },
            { icon: "list", title: "Reviewer worksheet", text: "Structured space to record findings, rationale and the criteria applied." },
            { icon: "queue", title: "Routing and escalation", text: "Send cases to reviewers by expertise and escalate to physician or specialty reviewers." },
            { icon: "summary", title: "Determination documentation", text: "Record outcomes and reasons in a form that can be explained and reviewed." },
            { icon: "shield", title: "Audit trail and reporting", text: "Track actions, versions and review activity for oversight." },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="workflow"
        title="Typical Workflow in Medical Necessity Review Software"
        intro="The software structures the process. The clinical decision belongs to the reviewer."
      >
        <ProcessSteps
          label="Medical necessity review software workflow"
          steps={[
            { label: "Request", detail: "Case is created from the request." },
            { label: "Documentation", detail: "Records are collected and indexed." },
            { label: "Criteria", detail: "Applicable criteria are attached." },
            { label: "Evidence Mapping", detail: "Facts are mapped to criteria elements." },
            { label: "Clinical Reviewer", detail: "A qualified professional evaluates the case.", human: true },
            { label: "Decision / Escalation", detail: "Outcome and rationale are documented.", human: true },
          ]}
          caption="Highlighted steps require qualified professional judgment."
        />
      </ArticleSection>

      <ArticleSection
        id="criteria-and-governance"
        title="Criteria, Governance and Regulation"
        tone="alt"
        intro="Where criteria come from and how they are governed are central buying questions."
      >
        <p>
          Organizations may develop criteria in-house, adopt published guidelines or license criteria content from third parties. Software should make it clear which criteria version was applied to each case. Regulation can also shape the process. Medicare Advantage rules set requirements on coverage criteria and require medical necessity determinations to consider factors such as the enrollee&apos;s medical history, physician recommendations and clinical notes.<Cite id="cfr-422-101" refs={REFS} /> CMS&apos;s 2024 Medicare Advantage final rule also addresses utilization management, including annual review of utilization management policies by a committee.<Cite id="cms-4201-f" refs={REFS} /> Medicaid managed care rules address authorization of services and who may make adverse decisions,<Cite id="cfr-438-210" refs={REFS} /> and claims-procedure rules for employee benefit plans address appeals.<Cite id="cfr-2560-503-1" refs={REFS} /> These rules apply to specific programs and should not be assumed to apply elsewhere.
        </p>
      </ArticleSection>

      <ArticleSection
        id="evaluation-questions"
        title="Evaluation Questions for Buyers"
        intro="These questions help compare options without ranking vendors. This site does not review or endorse products."
      >
        <ComparisonTable
          caption="Questions to ask when evaluating medical necessity review software"
          columns={["Area", "Question", "What a good answer looks like"]}
          rows={[
            ["Criteria", "Can we use our own criteria and licensed content, with versions?", "Configurable, version-controlled and auditable per case."],
            ["Evidence mapping", "Does every mapped fact link to source text?", "Yes, with one-click verification."],
            ["AI features", "What does AI do, and how is it validated?", "Task-specific validation evidence; AI output labeled as draft."],
            ["Reviewer control", "Can reviewers override and annotate everything?", "Yes; no automatic outcomes by default."],
            ["Escalation", "How are physician or specialty reviews handled?", "Built-in routing with documented rationale."],
            ["Explainability", "Can we reproduce why a case was flagged or routed?", "Logs show inputs, rules and versions."],
            ["Privacy and security", "How is protected health information handled?", "Documented controls and contract terms; independent assessment."],
            ["Integration", "How does it connect to our existing systems?", "Documented interfaces matching our environment."],
            ["Reporting", "What oversight reporting is available?", "Activity, turnaround and override reporting."],
            ["Cost model", "How are licensing, usage and support structured?", "Transparent terms that fit expected volume."],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="ai-assisted-vs-manual"
        title="AI-Assisted vs Manual Medical Necessity Review"
        tone="alt"
      >
        <ComparisonTable
          caption="Manual compared with AI-assisted medical necessity review"
          columns={["Dimension", "Manual", "AI-assisted"]}
          rows={[
            ["Organizing documents", "Reviewer sorts and reads.", "Software indexes and proposes relevant passages."],
            ["Finding evidence per criterion", "Reviewer searches the record.", "Software suggests candidates; reviewer verifies."],
            ["Spotting gaps", "Reviewer notices absences.", "Software flags apparent gaps; reviewer judges significance."],
            ["Applying criteria to the individual", "Reviewer.", "Reviewer."],
            ["Determination", "Authorized professional.", "Authorized professional."],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="limitations"
        title="Limitations and Human Oversight"
        intro="Software cannot supply clinical judgment."
      >
        <ul>
          <li>Criteria require interpretation of individual circumstances that records may state only indirectly.</li>
          <li>Extraction or mapping errors can mislead reviewers, so verification against source text is essential.</li>
          <li>Software does not establish coverage; coverage also depends on plan terms and eligibility.</li>
          <li>Medicare Advantage rules require physician or other appropriate professional review of certain adverse medical necessity decisions.<Cite id="cfr-422-566" refs={REFS} /></li>
        </ul>
        <DisclaimerBox tone="oversight">
          <p>{siteConfig.humanOversightStatement}</p>
          <p>See <Link href="/medical-necessity-review#human-clinical-judgment">what requires human clinical judgment</Link>.</p>
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection id="faq" title="Medical Necessity Review Software FAQs" tone="alt">
        <FAQ
          items={[
            { q: "Does the software decide whether care is medically necessary?", a: "It should not. It organizes evidence and criteria for a qualified reviewer, who makes the determination under applicable rules." },
            { q: "Can this page tell me whether my treatment is medically necessary?", a: "No. This is general education about a software category. For your own care or coverage, speak with your treating clinician and your health plan." },
            { q: "Which automation steps are most common?", a: <p>Intake, document classification, completeness checks and routing. See <Link href="/clinical-review-automation">clinical review automation</Link>.</p> },
          ]}
        />
      </ArticleSection>

      <DomainAssetCta category="utilization management technology" />
      <RelatedLinks current={PATH} />
      <SourceCitation refs={REFS} />
    </>
  );
}
