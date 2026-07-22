import { useState } from 'react'
import { modelTypeLabels, type SubjectExample } from '../data/subjectExamples'

type Props = {
  example: SubjectExample
}

export function SubjectCard({ example }: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="text-base font-bold text-neutral-900">{example.subject}</h3>
        <div className="flex flex-wrap justify-end gap-1">
          {example.modelTypes.map((type) => (
            <span
              key={type}
              className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700"
            >
              {modelTypeLabels[type]}
            </span>
          ))}
        </div>
      </div>

      <p className="text-sm text-neutral-600">
        <span className="font-medium text-neutral-800">레이블: </span>
        {example.labels}
      </p>
      <p className="text-sm text-neutral-600">
        <span className="font-medium text-neutral-800">행동: </span>
        {example.action}
      </p>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="mt-3 text-sm font-semibold text-brand-700 hover:underline"
      >
        {expanded ? '상세 정보 접기 ▴' : '상세 정보 보기 ▾'}
      </button>

      {expanded && (
        <dl className="mt-3 space-y-2 border-t border-neutral-100 pt-3 text-sm">
          <div>
            <dt className="font-medium text-neutral-800">관찰 대상</dt>
            <dd className="text-neutral-600">{example.target}</dd>
          </div>
          <div>
            <dt className="font-medium text-neutral-800">유의점</dt>
            <dd className="text-neutral-600">{example.caution}</dd>
          </div>
        </dl>
      )}
    </div>
  )
}
