import { useEffect, useMemo, useRef, useState } from 'react'
import { ResourceButton } from './ResourceButton'
import {
  categoryLabels,
  troubleshootingEntries,
  type TroubleshootingCategory,
} from '../data/troubleshooting'

type Props = {
  open: boolean
  onClose: () => void
}

const categories = Object.keys(categoryLabels) as TroubleshootingCategory[]

/**
 * 도움말·전체 자료 패널. 카테고리 필터와 검색으로 오류 해결 Q&A를 찾는다.
 * Escape 로 닫히고, 열릴 때 닫기 버튼에 포커스를 준다.
 */
export function HelpPanel({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const [activeCategory, setActiveCategory] = useState<TroubleshootingCategory | 'all'>('all')
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  const filteredEntries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return troubleshootingEntries.filter((entry) => {
      const matchesCategory = activeCategory === 'all' || entry.category === activeCategory
      const matchesQuery =
        normalizedQuery.length === 0 ||
        entry.question.toLowerCase().includes(normalizedQuery) ||
        entry.answer.toLowerCase().includes(normalizedQuery)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-title"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 id="help-title" className="text-lg font-bold text-neutral-900">
            도움말 · 전체 자료
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-neutral-500 hover:bg-neutral-100"
            aria-label="도움말 닫기"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <label className="mb-3 block">
          <span className="sr-only">문제 내용 검색</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="문제 내용을 입력하세요"
            className="w-full rounded-md border border-neutral-300 p-2 text-sm focus-visible:ring-2 focus-visible:ring-brand-500"
          />
        </label>

        <div role="group" aria-label="카테고리" className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            aria-pressed={activeCategory === 'all'}
            className={
              activeCategory === 'all'
                ? 'rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white'
                : 'rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-100'
            }
          >
            전체
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={
                activeCategory === category
                  ? 'rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white'
                  : 'rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-100'
              }
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="mb-4 max-h-72 space-y-3 overflow-y-auto">
          {filteredEntries.length === 0 && (
            <p className="text-sm text-neutral-500">일치하는 도움말이 없습니다.</p>
          )}
          {filteredEntries.map((entry) => (
            <div key={entry.id} className="border-b border-neutral-100 pb-3 last:border-b-0">
              <p className="text-sm font-medium text-neutral-800">▸ {entry.question}</p>
              <p className="mt-1 text-sm text-neutral-600">{entry.answer}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 border-t border-neutral-100 pt-4">
          <ResourceButton linkKey="teachableMachine" />
          <ResourceButton linkKey="actionRunner" />
          <ResourceButton linkKey="downloads" />
        </div>
      </div>
    </div>
  )
}
