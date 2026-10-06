import Link from "next/link";
import { ArticleSection } from "@/components/ArticleSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQ } from "@/components/FAQ";
import { PageIntro } from "@/components/PageIntro";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Cite, SourceCitation } from "@/components/SourceCitation";
import { UseCaseCard, type UseCase } from "@/components/UseCaseCard";
import { buildMetadata } from "@/lib/metadata";
import type { SourceId } from "@/lib/sources";

const PATH = "/use-cases";
const META_TITLE = "AI Clinical Review Use Cases in Healthcare";
const DESCRIPTION =
  "Explore AI clinical review use cases across documentation review, medical necessity, prior authorization, utilization management and case summarization.";

export const metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: DESCRIPTION,
  imageAlt: "AI clinical review use cases in healthcare",
});

const REFS: SourceId[] = ["cfr-2560-503-1", "nist-ai-rmf"];

const useCases: UseCase[] = [
  {
    id: "clinical-documentation-review",
    title: "Clinical Documentation Review",
    goal: "Help reviewers identify the information needed to evaluate a clinical case.",
    input: "Clinical notes, test results, medication history and related medical documentation.",
    aiTask: "Extract relevant information, create a structured summary and identify potentially missing documentation.",
    human: "A qualified healthcare professional evaluates the case in context.",
    output: "A structured review package supporting the human review process.",
  },
  {
    id: "medical-necessity-review",
    title: "Medical Necessity Review",
    goal: "Help reviewers compare documented clinical facts with the medical necessity criteria that apply to a request.",
    input: "The request, clinical documentation and the applicable criteria or policy.",
    aiTask: "Organize evidence by criteria element, retrieve candidate criteria and flag elements that appear unsupported or undocumented.",
    human: "A qualified clinical reviewer applies the criteria to the individual case and makes or escalates the determination.",
    output: "An evidence-by-criterion worksheet and a reviewer's documented determination or escalation.",
  },
  {
    id: "prior-authorization-support",
    title: "Prior Authorization Support",
    goal: "Reduce manual intake and completeness checking so reviewers receive organized, reviewable requests.",
    input: "Prior authorization requests with attachments in varied formats.",
    aiTask: "Classify documents, extract key clinical information, check completeness against a required-items list and route cases to appropriate reviewers.",
    human: "A clinical reviewer evaluates the evidence; an authorized reviewer makes any determination.",
    output: "A prioritized, routed case with organized documentation and a list of apparent gaps.",
  },
  {
    id: "utilization-review",
    title: "Utilization Review",
    goal: "Support evaluation of the appropriateness of services, settings and timing of care.",
    input: "Admission, continued-stay or post-service documentation and the organization's utilization criteria.",
    aiTask: "Extract clinical status updates, build a timeline of the episode of care and match findings to relevant criteria elements.",
    human: "A utilization reviewer interprets the clinical picture and applies criteria, escalating to a physician advisor when needed.",
    output: "A concise episode summary and a documented review outcome.",
  },
  {
    id: "case-summarization",
    title: "Case Summarization",
    goal: "Give reviewers a faster way to understand long or fragmented records.",
    input: "Multi-document records spanning multiple encounters or providers.",
    aiTask: "Generate a chronology and a structured draft summary, with references to the source passages where the tool supports it.",
    human: "The reviewer verifies the summary against the source record and corrects omissions or errors.",
    output: "A verified summary included in the review file.",
  },
  {
    id: "appeals-documentation-review",
    title: "Appeals Documentation Review",
    goal: "Help reviewers re-examine a contested determination with all relevant documentation in view.",
    input: "The original request, the prior determination and rationale, new documentation and appeal correspondence.",
    aiTask: "Assemble the case history, highlight what changed between submissions and align evidence with the criteria at issue.",
    human: "A qualified reviewer, appropriately independent of the original decision where required, evaluates the appeal. Benefit-plan claims procedures include rules about appeal review and consulting appropriate health care professionals.",
    output: "An organized appeal file and the reviewer's documented decision.",
  },
  {
    id: "clinical-evidence-extraction",
    title: "Clinical Evidence Extraction",
    goal: "Locate the facts in a record that bear on a specific review question.",
    input: "Clinical documents and a defined review question or criteria list.",
    aiTask: "Find and highlight passages related to each criterion element and present them with their source locations.",
    human: "The reviewer checks each highlighted passage in context and searches for evidence the tool did not surface.",
    output: "An evidence index linked to source documents.",
  },
  {
    id: "quality-review-support",
    title: "Quality Review Support",
    goal: "Support structured review of selected cases for quality-improvement and consistency purposes.",
    input: "Selected case records and the quality criteria or review tool the organization uses.",
    aiTask: "Extract data elements, pre-populate a review form for reviewer confirmation and flag variations from expected documentation.",
    human: "A qualified reviewer assesses the case and decides which findings are meaningful.",
    output: "A completed review form and aggregated, human-validated findings.",
  },
  {
    id: "complex-case-prioritization",
    title: "Complex Case Prioritization",
    goal: "Help the right cases reach the right reviewers at the right time.",
    input: "Incoming cases with attributes such as service type, due date and documentation volume.",
    aiTask: "Apply defined workflow rules, and where used, models, to order cases, flag potential complexity and suggest reviewer expertise needed.",
    human: "Supervisors and reviewers decide assignment and handle urgent or complex cases; prioritization does not substitute for clinical triage or determination.",
    output: "A prioritized work queue with routing suggestions that humans can override.",
  },
  {
    id: "claims-related-clinical-review-support",
    title: "Claims-Related Clinical Review Support",
    goal: "Help reviewers evaluate clinical questions that arise during claims processing.",
    input: "Claims data, associated clinical documentation and applicable payment or coverage policies.",
    aiTask: "Link claim lines to supporting documentation, extract relevant clinical facts and flag items for clinical reviewer attention.",
    human: "A qualified clinical reviewer evaluates the clinical question; coverage and payment decisions follow the organization's policies and applicable rules.",
    output: "A case file connecting claim details to clinical evidence, with a documented reviewer outcome.",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <PageIntro
        path={PATH}
        crumb="Use Cases"
        title="AI Clinical Review Use Cases"
        metaTitle={META_TITLE}
        description={DESCRIPTION}
        eyebrow="From goal to human-reviewed output"
        definition="AI clinical review use cases are healthcare workflows in which software prepares clinical information, such as extracted evidence, summaries and completeness checks, for qualified professionals to review. In each use case below, AI performs an assistive task, a human reviewer evaluates the case, and the output supports a human decision rather than replacing it."
      />

      <ArticleSection
        id="overview"
        title="Ten Use Cases at a Glance"
        intro="Every use case follows the same pattern: Goal → Input → AI-Assisted Task → Human Reviewer → Output."
      >
        <ComparisonTable
          caption="AI clinical review use cases and their primary AI-assisted task"
          columns={["Use case", "Primary AI-assisted task", "Human reviewer's role"]}
          rows={[
            ["Clinical documentation review", "Extraction, summary, gap flagging", "Evaluates the case in context"],
            ["Medical necessity review", "Evidence-by-criterion organization", "Applies criteria and decides"],
            ["Prior authorization support", "Intake, classification, completeness checks", "Reviews evidence and decides"],
            ["Utilization review", "Timeline and criteria matching", "Interprets and applies criteria"],
            ["Case summarization", "Chronology and draft summary", "Verifies against source"],
            ["Appeals documentation review", "Case history assembly", "Re-examines the determination"],
            ["Clinical evidence extraction", "Passage identification", "Checks evidence in context"],
            ["Quality review support", "Form pre-population", "Assesses and validates"],
            ["Complex case prioritization", "Rule-based ordering and routing", "Assigns and handles cases"],
            ["Claims-related clinical review support", "Linking claims to documentation", "Evaluates the clinical question"],
          ]}
        />
        <DisclaimerBox tone="oversight" title="No autonomous medical conclusions">
          <p>
            None of these use cases involves software making diagnoses, recommending treatment or issuing final determinations. The reviewer step in each use case is required, not optional. See <Link href="/ai-clinical-review#what-ai-should-not-decide">what AI should not decide autonomously</Link>.
          </p>
        </DisclaimerBox>
      </ArticleSection>

      <section className="section section-alt" aria-labelledby="detail-heading">
        <div className="container">
          <h2 id="detail-heading">Use Cases in Detail</h2>
          <p className="section-intro">
            Descriptions are illustrative and general. Actual workflows depend on the organization, the review type and the rules that apply. Related guides: <Link href="/medical-necessity-review">medical necessity review</Link> and <Link href="/prior-authorization-review">prior authorization review</Link>.
          </p>
          {useCases.map((u) => (
            <UseCaseCard key={u.id} useCase={u} />
          ))}
          <p className="small muted">
            Federal claims-procedure requirements for employee benefit plans address internal appeals and consultation with appropriate health care professionals for medical-judgment questions.<Cite id="cfr-2560-503-1" refs={REFS} />
          </p>
        </div>
      </section>

      <ArticleSection
        id="choosing-and-governing"
        title="What to Consider Before Using AI in Any Use Case"
        intro="These questions apply to every use case above."
      >
        <ul>
          <li><strong>Where does a person decide?</strong> Define the human review step and what the reviewer must verify.</li>
          <li><strong>Can output be traced to source text?</strong> Verification depends on it.</li>
          <li><strong>How will performance be validated and monitored?</strong> Accuracy must be evaluated for the specific task and data; this site does not make accuracy claims.</li>
          <li><strong>How is patient data protected?</strong> Protected health information carries legal obligations that depend on the organization and jurisdiction.</li>
          <li><strong>Which risks have owners?</strong> Frameworks such as the NIST AI Risk Management Framework describe governance and risk-management practices.<Cite id="nist-ai-rmf" refs={REFS} /></li>
        </ul>
        <p>
          Buyers comparing tools for these workflows can start with <Link href="/ai-clinical-review-software">AI clinical review software</Link> and <Link href="/medical-necessity-review-software">medical necessity review software</Link>.
        </p>
        <p>
          For a full discussion of risks, see <Link href="/ai-clinical-review#risks">risks of AI clinical review</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="faq" title="Use Case FAQs" tone="alt">
        <FAQ
          items={[
            { q: "Which use case is the best starting point?", a: "That depends on the organization. Many begin with tasks that prepare information for review, such as extraction and summarization, because a reviewer can check the output directly." },
            { q: "Do these use cases describe a product from this website?", a: "No. ClinicalReviewAI.com is an informational website and does not offer clinical software or services." },
            { q: "Are any outcomes or time savings promised?", a: "No. This site does not publish accuracy, time-saving or outcome statistics, and results depend on the tool, data and workflow." },
          ]}
        />
      </ArticleSection>

      <RelatedLinks current={PATH} />
      <SourceCitation refs={REFS} />
    </>
  );
}
