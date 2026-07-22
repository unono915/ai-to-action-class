import { steps, type StepId } from '../data/steps'

type Props = {
  currentStep: StepId
  completedSteps: StepId[]
  onSelect: (step: StepId) => void
}

/**
 * 8단계 내비게이션. 현재 단계는 aria-current로 표시하고
 * 완료 단계는 체크 표시와 텍스트로 함께 구분한다(색상 단독 의존 금지).
 */
export function StepNavigation({
  currentStep,
  completedSteps,
  onSelect,
}: Props) {
  return (
    <nav aria-label="강의 단계" className="w-full">
      <ol className="flex flex-col gap-1">
        {steps.map((step) => {
          const isCurrent = step.id === currentStep
          const isDone = completedSteps.includes(step.id)
          return (
            <li key={step.id}>
              <button
                type="button"
                onClick={() => onSelect(step.id)}
                aria-current={isCurrent ? 'step' : undefined}
                className={
                  isCurrent
                    ? 'flex w-full items-center gap-2 rounded-md bg-brand-50 px-3 py-2 text-left text-sm font-semibold text-brand-800 ring-1 ring-brand-200'
                    : 'flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium text-neutral-700 hover:bg-neutral-100'
                }
              >
                <span
                  className={
                    isDone
                      ? 'flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white'
                      : 'flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-bold text-neutral-700'
                  }
                >
                  {isDone ? '✓' : step.id}
                </span>
                <span className="flex-1">{step.shortTitle}</span>
                {isDone && (
                  <span className="text-xs font-normal text-green-700">완료</span>
                )}
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
