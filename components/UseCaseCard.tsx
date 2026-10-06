export type UseCase = {
  id: string;
  title: string;
  goal: string;
  input: string;
  aiTask: string;
  human: string;
  output: string;
};

/** Goal → Input → AI-Assisted Task → Human Reviewer → Output. */
export function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <article className="usecase" id={useCase.id} aria-labelledby={`${useCase.id}-h`}>
      <h3 id={`${useCase.id}-h`}>{useCase.title}</h3>
      <p className="flow">Goal → Input → AI-Assisted Task → Human Reviewer → Output</p>
      <dl>
        <div className="row"><dt>Goal</dt><dd>{useCase.goal}</dd></div>
        <div className="row"><dt>Input</dt><dd>{useCase.input}</dd></div>
        <div className="row"><dt>AI-Assisted Task</dt><dd>{useCase.aiTask}</dd></div>
        <div className="row human"><dt>Human Reviewer</dt><dd>{useCase.human}</dd></div>
        <div className="row"><dt>Output</dt><dd>{useCase.output}</dd></div>
      </dl>
    </article>
  );
}
