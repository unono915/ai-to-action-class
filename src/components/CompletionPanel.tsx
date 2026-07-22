import { useState } from 'react'

type Props = {
  items: string[]
  title?: string
}

/**
 * 완료 기준 체크리스트. 세션별 임시 체크 상태로 개인정보를 담지 않으며
 * 새로고침 시 초기화된다(전체 단계 완료 여부만 localStorage에 저장됨).
 */
export function CompletionPanel({ items, title = '완료 기준' }: Props) {
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  const toggle = (index: number) => {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4">
      <h3 className="mb-2 text-sm font-semibold text-neutral-700">{title}</h3>
      <ul className="space-y-2 text-sm text-neutral-700">
        {items.map((item, index) => (
          <li key={index}>
            <label className="flex cursor-pointer items-start gap-2">
              <input
                type="checkbox"
                checked={Boolean(checked[index])}
                onChange={() => toggle(index)}
                className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-brand-600 focus-visible:ring-2 focus-visible:ring-brand-500"
              />
              <span className={checked[index] ? 'text-neutral-400 line-through' : ''}>
                {item}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
