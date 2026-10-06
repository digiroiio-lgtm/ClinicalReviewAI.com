import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { EntityMap } from "@/components/EntityMap";
import { EvidenceGrid } from "@/components/EvidenceGrid";
import { FAQ } from "@/components/FAQ";
import { PageIntro } from "@/components/PageIntro";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import type { SourceId } from "@/lib/sources";

const PATH = "/ai-clinical-review";
const META_TITLE = "AI Clinical Review: Uses, Workflow & Limitations";
const DESCRIPTION =
  "Explore how AI can assist clinical documentation analysis, evidence extraction and review workflows while keeping qualified professionals in control.";

export const metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: DESCRIPTION,
  imageAlt: "AI clinical review: uses, workflow and limitations",
});

const REFS: SourceId[] = ["cfr-422-101", "fda-cds", "nist-ai-rmf", "goddard-2012", "hhs-hipaa-privacy"];

export default function AiClinicalReviewPage() {
  return (
    <>
      <PageIntro
        path={PATH}
        crumb="AI Clinical Review"
        title="AI Clinical Review: How Artificial Intelligence Can Assist Healthcare Teams"
        metaTitle={META_TITLE}
        description={DESCRIPTION}
        eyebrow="Methodology and limits"
        definition="AI clinical review applies artificial intelligence methods, such as language models, document extraction and rule-based comparison, to prepare clinical information for review by qualified professionals. It can read records, extract facts, draft summaries and flag gaps. It does not diagnose, recommend treatment or make autonomous determinations; those remain human responsibilities."
        definitionLabel="Short answer"
      />

      <ArticleSection
        id="what-is-ai-clinical-review"
        title="What Is AI Clinical Review?"
        intro="AI clinical review is an AI-assisted version of the clinical review process, in which software handles preparation tasks and people handle judgment."
      >
        <p>
          In a conventional <Link href="/what-is-clinical-review">clinical review</Link>, a reviewer reads records, finds relevant evidence, compares it with criteria and reaches a documented conclusion. AI clinical review keeps that structure and changes who or what performs the early, repetitive steps. Software may classify documents, extract data, assemble a chronology and highlight text that relates to a criterion. The reviewer then evaluates the case, using the software&apos;s output as a starting point that must be verified.
        </p>
        <p>
          The term is descriptive rather than a product category or a regulatory designation. Different organizations will implement different tools, from rule-based checklists to language-model summarizers, and each carries different strengths and risks.
        </p>
        <EntityMap
          groups={[
            {
              title: "AI Clinical Review",
              items: [
                { term: "Document Analysis", text: "reading, classifying and structuring clinical documents." },
                { term: "Evidence Extraction", text: "locating facts in a record that relate to a review question." },
                { term: "Summarization", text: "drafting case summaries and chronologies for verification." },
                { term: "Missing Information Detection", text: "flagging documentation expected but not present." },
                { term: "Workflow Prioritization", text: "routing and ordering cases for reviewers." },
                { term: "Human Oversight", text: "qualified professionals verify output and make decisions." },
              ],
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="what-ai-can-assist-with"
        title="What Can AI Assist With?"
        tone="alt"
        intro="The tasks below prepare information for a reviewer. Each output should be treated as a draft that a person checks against the source record."
      >
        <EvidenceGrid
          items={[
            { icon: "document", title: "Clinical document extraction", text: "Pulling structured fields such as dates, providers, diagnoses and medications from unstructured documents." },
            { icon: "summary", title: "Medical record summarization", text: "Drafting condensed summaries of long records, with links back to source passages where the tool supports it." },
            { icon: "search", title: "Evidence identification", text: "Highlighting passages that may relate to a specific review question or criterion." },
            { icon: "list", title: "Chronology generation", text: "Ordering events from many documents into a timeline a reviewer can scan." },
            { icon: "gap", title: "Missing documentation detection", text: "Comparing a submission with a checklist and flagging items that are absent." },
            { icon: "scale", title: "Guideline retrieval", text: "Finding policies, criteria or guideline text that may apply to the request." },
            { icon: "check", title: "Rule-based comparison", text: "Applying explicit, human-authored rules to extracted data, such as whether a required element is present." },
            { icon: "record", title: "Clinical coding support", text: "Where appropriate, suggesting standardized codes for a human coder or reviewer to confirm." },
            { icon: "queue", title: "Case prioritization", text: "Ordering or routing cases using defined workflow rules, such as due dates or required expertise." },
            { icon: "shield", title: "Reviewer workflow support", text: "Assembling a review package, tracking status and recording what the reviewer examined." },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="ai-clinical-review-workflow"
        title="AI Clinical Review Workflow"
        intro="The workflow ends with a person. AI output flows toward review, not toward a decision."
      >
        <ProcessSteps
          label="AI clinical review workflow"
          steps={[
            { label: "Clinical Record", detail: "Source documents are received." },
            { label: "Data Extraction", detail: "Facts and structure are extracted." },
            { label: "Relevant Evidence", detail: "Passages tied to the review question are identified." },
            { label: "Structured Summary", detail: "A draft summary is assembled." },
            { label: "Review Criteria", detail: "Criteria or rules are matched to the case." },
            { label: "Human Clinical Review", detail: "A qualified reviewer verifies and evaluates.", human: true },
            { label: "Decision / Escalation", detail: "The reviewer decides or escalates.", human: true },
          ]}
          caption="Software prepares and organizes. The highlighted steps belong to qualified professionals."
        />
        <p>
          Buyers assessing products that implement this workflow can use the <Link href="/ai-clinical-review-software">software evaluation criteria</Link>; the steps that suit rules-based or AI automation are mapped in <Link href="/clinical-review-automation">clinical review automation</Link>.
        </p>
        <h3>Inputs and outputs</h3>
        <ComparisonTable
          caption="Inputs and outputs of each AI-assisted stage"
          columns={["Stage", "Input", "Output for the reviewer"]}
          rows={[
            ["Data extraction", "Clinical notes, results, referral documents", "Structured fields and a document index"],
            ["Evidence identification", "Extracted data and the review question", "Highlighted passages linked to criteria elements"],
            ["Structured summary", "Extracted facts and chronology", "Draft summary to verify against source documents"],
            ["Criteria matching", "Evidence and the organization's criteria", "Elements that appear met, unmet or unclear"],
            ["Human review", "All of the above and the full record", "A reviewer's documented determination or escalation"],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="what-ai-should-not-decide"
        title="What Should AI Not Decide Autonomously?"
        tone="alt"
        intro="Decisions that require licensed professional judgment or that can adversely affect a person's care should not be delegated to software."
      >
        <ul>
          <li><strong>Diagnosis.</strong> Determining what condition a person has.</li>
          <li><strong>Treatment.</strong> Selecting or recommending a course of care.</li>
          <li><strong>Final medical necessity determinations.</strong> Applying criteria to the individual circumstances of a case.</li>
          <li><strong>Adverse patient-care decisions.</strong> Denials or reductions of requested services.</li>
          <li><strong>Complex clinical interpretation.</strong> Conflicting, atypical or ambiguous information.</li>
          <li><strong>Any decision requiring licensed professional judgment.</strong></li>
        </ul>
        <DisclaimerBox tone="oversight">
          <p>{siteConfig.humanOversightStatement}</p>
          <p>
            Regulation reflects this. In Medicare Advantage, for example, medical necessity determinations must be based on factors including the individual enrollee&apos;s medical history, physician recommendations and clinical notes.<Cite id="cfr-422-101" refs={REFS} /> Software that provides diagnosis or treatment support may also be subject to FDA oversight depending on how it functions.<Cite id="fda-cds" refs={REFS} />
          </p>
        </DisclaimerBox>
      </ArticleSection>

      <ArticleSection
        id="risks"
        title="Risks of AI Clinical Review"
        intro="These risks are well recognized. Organizations adopting AI tools typically need controls for each, including testing, monitoring and human verification."
      >
        <ComparisonTable
          caption="Principal risks and common mitigations"
          columns={["Risk", "What can go wrong", "Typical mitigation"]}
          rows={[
            ["Hallucinations", "A generative tool states facts that are not in the record.", "Require citations to source text; reviewer verifies each material statement."],
            ["Incomplete records", "Missing pages or poor scans lead to partial or wrong output.", "Completeness checks; show reviewers what was and was not processed."],
            ["Outdated evidence", "A tool references superseded guidelines or policies.", "Version-controlled, dated criteria sources with clear ownership."],
            ["Incorrect extraction", "A value, date or medication is misread.", "Display source snippets beside extracted values; sample-based quality checks."],
            ["Missing context", "A fact is accurate but misleading when taken alone.", "Reviewer reads the underlying record for material findings."],
            ["Bias", "Output quality or prioritization differs across populations.", "Evaluate performance across groups; monitor outcomes over time."],
            ["Automation bias", "Reviewers over-trust confident-looking output.", "Training; interface design that encourages independent verification."],
            ["False positives", "A tool flags a gap or issue that does not exist.", "Treat flags as prompts, not findings; track and tune."],
            ["False negatives", "A tool misses relevant evidence or a real gap.", "Do not rely on tool output as proof of absence; reviewer reads key records."],
            ["Data privacy", "Protected health information is exposed or misused.", "Access controls, contracts and security review aligned to applicable law."],
            ["Explainability", "Reviewers cannot see why the tool produced an output.", "Prefer outputs traceable to source text and explicit criteria."],
          ]}
        />
        <p>
          Automation bias, the tendency to over-rely on automated advice, has been documented in a systematic review of clinical decision support studies.<Cite id="goddard-2012" refs={REFS} /> The NIST AI Risk Management Framework provides general guidance on managing AI risks including validity, reliability, transparency, explainability, privacy and harmful bias.<Cite id="nist-ai-rmf" refs={REFS} /> Where clinical records are protected health information, the HIPAA Privacy Rule governs how covered entities and their business associates may use and disclose it.<Cite id="hhs-hipaa-privacy" refs={REFS} /> Whether a particular tool or arrangement meets legal requirements depends on the facts and should be assessed by qualified advisors.
        </p>
      </ArticleSection>

      <ArticleSection id="faq" title="AI Clinical Review FAQs" tone="alt">
        <FAQ
          items={[
            { q: "How is AI clinical review different from clinical decision support?", a: "Clinical decision support generally helps clinicians make care decisions about patients. AI clinical review is concerned with preparing records and evidence for a review process. The categories can overlap, and some software may be regulated by the FDA depending on its function." },
            { q: "Can AI clinical review be used without human review?", a: "This site takes the position that decisions requiring clinical judgment should have qualified human review. Applicable laws and program rules may also require it for certain decisions." },
            { q: "Does this site endorse any AI tool?", a: "No. ClinicalReviewAI.com is an informational resource and does not review, rate or endorse specific products." },
            { q: "How accurate is AI clinical review?", a: "Accuracy depends on the tool, the data and the task, and must be evaluated for each use. This site does not make accuracy claims." },
          ]}
        />
      </ArticleSection>

      <RelatedLinks current={PATH} />
      <SourceCitation refs={REFS} />
    </>
  );
}
