import { useMemo, useState } from 'react'
import { SubjectCard } from '../components/SubjectCard'
import { ResourceButton } from '../components/ResourceButton'
import { modelTypeFilters, subjectExamples, type ModelType } from '../data/subjectExamples'

type IdeaDraft = {
  topic: string
  modelType: string
  labels: string
  action: string
}

const emptyDraft: IdeaDraft = { topic: '', modelType: '', labels: '', action: '' }

export function SubjectIdeasPage() {
  const [filter, setFilter] = useState<'all' | ModelType>('all')
  const [draft, setDraft] = useState<IdeaDraft>(emptyDraft)
  const [saved, setSaved] = useState<IdeaDraft | null>(null)

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
        <span className="text-sm text-neutral-500">권장 12분</span>
      </div>

      <p className="mb-6 text-lg font-medium text-neutral-800">
        모델을 만드는 것보다 중요한 것은 그 모델의 판단을 내 수업의 어떤 활동과
        연결할 것인가입니다.
      </p>

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
        <p className="mb-3 text-sm text-neutral-600">
          Gem은 다음 순서로 질문합니다: 교과·학년 → 개념 → 관찰 대상 → 모델 유형 →
          레이블 → 데이터 수집 → 판단 뒤 행동 → 수업 흐름 → 한계 점검
        </p>
        <div className="mb-4">
          <ResourceButton linkKey="subjectIdeaGem" />
        </div>

        <p className="mb-3 text-sm text-neutral-600">
          Gem과 나눈 대화 결과를 아래에 정리한 뒤 Padlet에 공유하세요.
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-neutral-700">수업 주제</span>
            <input
              type="text"
              value={draft.topic}
              onChange={(event) => setDraft({ ...draft, topic: event.target.value })}
              className="w-full rounded-md border border-neutral-300 p-2 focus-visible:ring-2 focus-visible:ring-brand-500"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-neutral-700">모델 유형</span>
            <input
              type="text"
              value={draft.modelType}
              onChange={(event) => setDraft({ ...draft, modelType: event.target.value })}
              className="w-full rounded-md border border-neutral-300 p-2 focus-visible:ring-2 focus-visible:ring-brand-500"
            />
          </label>
          <label className="block text-sm sm:col-span-2">
            <span className="mb-1 block font-medium text-neutral-700">레이블</span>
            <input
              type="text"
              value={draft.labels}
              onChange={(event) => setDraft({ ...draft, labels: event.target.value })}
              className="w-full rounded-md border border-neutral-300 p-2 focus-visible:ring-2 focus-visible:ring-brand-500"
            />
          </label>
          <label className="block text-sm sm:col-span-2">
            <span className="mb-1 block font-medium text-neutral-700">판단 뒤 행동</span>
            <input
              type="text"
              value={draft.action}
              onChange={(event) => setDraft({ ...draft, action: event.target.value })}
              className="w-full rounded-md border border-neutral-300 p-2 focus-visible:ring-2 focus-visible:ring-brand-500"
            />
          </label>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setSaved(draft)}
            className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-100"
          >
            저장
          </button>
          <ResourceButton linkKey="padlet" />
          {saved && (
            <span className="text-xs text-green-700" role="status">
              이 화면에 임시로 저장되었습니다.
            </span>
          )}
        </div>

        <p className="mt-3 text-xs text-neutral-500">
          이 입력값은 새로고침하면 사라집니다. 결과를 남기려면 Padlet에 공유하세요.
        </p>
      </div>
    </section>
  )
}
