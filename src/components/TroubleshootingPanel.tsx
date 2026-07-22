import type { TroubleshootingCategory } from '../data/troubleshooting'
import { getEntriesByCategory } from '../data/troubleshooting'

type Props = {
  categories: TroubleshootingCategory[]
}

/**
 * 「문제가 있나요?」 아코디언. 지정된 카테고리의 오류 해결 Q&A만 보여준다.
 */
export function TroubleshootingPanel({ categories }: Props) {
  const entries = categories.flatMap((category) => getEntriesByCategory(category))

  if (entries.length === 0) return null

  return (
    <details className="mt-8 rounded-lg border border-neutral-200 bg-white p-4">
      <summary className="cursor-pointer text-sm font-semibold text-neutral-700">
        문제가 있나요?
      </summary>
      <dl className="mt-3 space-y-3">
        {entries.map((entry) => (
          <div key={entry.id} className="border-t border-neutral-100 pt-3 first:border-t-0 first:pt-0">
            <dt className="text-sm font-medium text-neutral-800">{entry.question}</dt>
            <dd className="mt-1 text-sm text-neutral-600">{entry.answer}</dd>
          </div>
        ))}
      </dl>
    </details>
  )
}
