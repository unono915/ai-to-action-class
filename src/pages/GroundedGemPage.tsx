import { CopyButton } from '../components/CopyButton'
import { groundedGemCaution, groundedGemInstructions } from '../data/prompts'

const steps = ['Gem의 Knowledge 영역을 엽니다.', '파일 또는 Notebook을 추가합니다.', '자료 기반 응답 지침을 넣습니다.']

export function GroundedGemPage() {
  return (
    <section aria-label="자료 기반 Gem" className="px-4 py-6">
      <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="text-2xl font-bold text-neutral-900">7. 자료 기반 Gem</h2>
        <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700">
          선택 심화
        </span>
        <span className="text-sm text-neutral-500">권장 6분</span>
      </div>

      <p className="mb-2 text-neutral-600">
        수업 자료나 Notebook 기반 자료를 Gem의 지식으로 연결하면 제공한 자료를
        우선 근거로 답하도록 유도할 수 있습니다.
      </p>
      <p className="mb-6 text-sm text-neutral-500">
        계정과 관리자 설정에 따라 기능이 보이지 않을 수 있습니다.
      </p>

      <ol className="mb-6 list-decimal space-y-2 pl-5 text-neutral-800">
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <div className="mb-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
        <pre className="whitespace-pre-wrap text-sm text-neutral-800">
          {groundedGemInstructions}
        </pre>
      </div>
      <div className="mb-6">
        <CopyButton text={groundedGemInstructions} label="지침 복사" />
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        {groundedGemCaution}
      </div>
    </section>
  )
}
