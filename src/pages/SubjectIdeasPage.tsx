import { useMemo, useState } from 'react'
import { SubjectCard } from '../components/SubjectCard'
import { ResourceButton } from '../components/ResourceButton'
import { actionExtensions } from '../data/practiceWorkflows'
import { modelTypeFilters, subjectExamples, type ModelType } from '../data/subjectExamples'
import { getStep } from '../data/steps'

export function SubjectIdeasPage() {
  const [filter, setFilter] = useState<'all' | ModelType>('all')

  const filteredExamples = useMemo(
    () =>
      filter === 'all'
        ? subjectExamples
        : subjectExamples.filter((example) => example.modelTypes.includes(filter)),
    [filter],
  )

  return (
    <section aria-label="내 교과로 확장하기" className="px-4 py-6">
      <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="text-2xl font-bold text-neutral-900">5. 내 교과로 확장하기</h2>
        <span className="text-sm text-neutral-500">
          권장 {getStep(5).durationMinutes}분
        </span>
      </div>

      <p className="mb-6 text-lg font-medium text-neutral-800">
        모델을 만드는 것보다 중요한 것은 그 모델의 판단을 내 수업의 어떤 활동과
        연결할 것인가입니다.
      </p>

      <div className="mb-6 rounded-lg border border-neutral-200 bg-white p-4">
        <p className="text-sm font-semibold text-neutral-800">
          판단 뒤 행동은 더 넓게 확장할 수 있습니다
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {actionExtensions.map((item) => (
            <span
              key={item}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div
        role="group"
        aria-label="모델 유형 필터"
        className="mb-4 flex flex-wrap gap-2"
      >
        {modelTypeFilters.map((option) => {
          const active = option.value === filter
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setFilter(option.value)}
              aria-pressed={active}
              className={
                active
                  ? 'rounded-full bg-brand-600 px-3 py-1.5 text-sm font-semibold text-white'
                  : 'rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100'
              }
            >
              {option.label}
            </button>
          )
        })}
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredExamples.map((example) => (
          <SubjectCard key={example.id} example={example} />
        ))}
      </div>

      <div className="rounded-lg border border-neutral-200 bg-white p-4">
        <h3 className="mb-2 text-base font-bold text-neutral-900">
          아이디어 코치 Gem과 대화하기
        </h3>
        <p className="mb-4 text-sm text-neutral-600">
          Gem과 간단한 질문을 주고받으며 내 교과에 맞는 수업 아이디어를
          얻어가세요! 나온 아이디어는 Padlet에 공유해 함께 나눕니다.
        </p>
        <div className="flex flex-wrap gap-3">
          <ResourceButton linkKey="subjectIdeaGem" />
          <ResourceButton linkKey="padlet" />
        </div>
      </div>
    </section>
  )
}
