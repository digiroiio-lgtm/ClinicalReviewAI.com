/**
 * Reusable citation registry for healthcare / regulatory claims.
 * Prefer primary sources (statutes, regulations, agency guidance, standards bodies).
 * Add a source here, then cite it from a page with <Cite id="..." refs={REFS} />.
 */
export type Source = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  /** What the page relies on this source for. Keep it narrow. */
  supports: string;
};

export const sources = {
  "cms-0057-f": {
    id: "cms-0057-f",
    title: "CMS Interoperability and Prior Authorization Final Rule (CMS-0057-F)",
    publisher: "Centers for Medicare & Medicaid Services (CMS)",
    url: "https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-and-prior-authorization-final-rule-cms-0057-f",
    supports:
      "Federal prior authorization requirements for certain payers, including decision timeframes and reasons for denials.",
  },
  "cms-4201-f": {
    id: "cms-4201-f",
    title: "2024 Medicare Advantage and Part D Final Rule (CMS-4201-F)",
    publisher: "Centers for Medicare & Medicaid Services (CMS)",
    url: "https://www.cms.gov/newsroom/fact-sheets/2024-medicare-advantage-and-part-d-final-rule-cms-4201-f",
    supports: "Medicare Advantage coverage criteria and utilization management requirements.",
  },
  "cfr-422-101": {
    id: "cfr-422-101",
    title: "42 CFR § 422.101 — Requirements relating to basic benefits",
    publisher: "Electronic Code of Federal Regulations (eCFR)",
    url: "https://www.ecfr.gov/current/title-42/section-422.101",
    supports:
      "Medicare Advantage rules on coverage criteria and medical necessity determinations, including consideration of individual medical history and clinical notes.",
  },
  "cfr-422-566": {
    id: "cfr-422-566",
    title: "42 CFR § 422.566 — Who must review organization determinations",
    publisher: "Electronic Code of Federal Regulations (eCFR)",
    url: "https://www.ecfr.gov/current/title-42/section-422.566",
    supports:
      "Medicare Advantage requirement that a physician or other appropriate health care professional review certain adverse medical necessity decisions.",
  },
  "cfr-438-210": {
    id: "cfr-438-210",
    title: "42 CFR § 438.210 — Coverage and authorization of services",
    publisher: "Electronic Code of Federal Regulations (eCFR)",
    url: "https://www.ecfr.gov/current/title-42/section-438.210",
    supports:
      "Medicaid managed care rules on authorization of services, medically necessary services and who may make adverse authorization decisions.",
  },
  "cfr-2560-503-1": {
    id: "cfr-2560-503-1",
    title: "29 CFR § 2560.503-1 — Claims procedure",
    publisher: "Electronic Code of Federal Regulations (eCFR)",
    url: "https://www.ecfr.gov/current/title-29/section-2560.503-1",
    supports:
      "Federal claims-procedure requirements for employee benefit plans, including internal appeals and consultation with appropriate health care professionals.",
  },
  "ssa-1862": {
    id: "ssa-1862",
    title: "Social Security Act § 1862 — Exclusions from coverage",
    publisher: "Social Security Administration",
    url: "https://www.ssa.gov/OP_Home/ssact/title18/1862.htm",
    supports:
      "Medicare's “reasonable and necessary” standard in § 1862(a)(1)(A).",
  },
  "usc-11151": {
    id: "usc-11151",
    title: "42 U.S.C. § 11151 — Definitions (Health Care Quality Improvement Act)",
    publisher: "Legal Information Institute, Cornell Law School",
    url: "https://www.law.cornell.edu/uscode/text/42/11151",
    supports: "Statutory definitions related to professional review actions in hospital peer review.",
  },
  "nist-ai-rmf": {
    id: "nist-ai-rmf",
    title: "Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1",
    publisher: "National Institute of Standards and Technology (NIST)",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    supports:
      "A general framework for identifying and managing AI risks, including validity, reliability, transparency, explainability, privacy and harmful bias.",
  },
  "fda-cds": {
    id: "fda-cds",
    title: "Clinical Decision Support Software: Guidance for Industry and FDA Staff",
    publisher: "U.S. Food and Drug Administration (FDA)",
    url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-decision-support-software",
    supports:
      "FDA's explanation of which clinical decision support software functions may or may not be regulated as medical devices.",
  },
  "hhs-hipaa-privacy": {
    id: "hhs-hipaa-privacy",
    title: "The HIPAA Privacy Rule",
    publisher: "U.S. Department of Health & Human Services (HHS)",
    url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html",
    supports:
      "Overview of how the HIPAA Privacy Rule governs protected health information held by covered entities and their business associates.",
  },
  "goddard-2012": {
    id: "goddard-2012",
    title:
      "Automation bias: a systematic review of frequency, effect mediators, and mitigators",
    publisher: "Goddard K, Roudsari A, Wyatt JC. J Am Med Inform Assoc. 2012;19(1):121–127",
    url: "https://doi.org/10.1136/amiajnl-2011-000089",
    supports:
      "Peer-reviewed review describing automation bias in clinical decision support settings.",
  },
} as const satisfies Record<string, Source>;

export type SourceId = keyof typeof sources;

export function getSource(id: SourceId): Source {
  return sources[id];
}
