type Props = {
  completedCount: number
  totalCount: number
}

/**
 * 전체 진행률. 색상 막대와 함께 텍스트 수치를 제공한다.
 */
export function ProgressBar({ completedCount, totalCount }: Props) {
  const percent =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100)

  return (
    <div className="flex items-center gap-2">
      <div
        className="h-2 w-24 overflow-hidden rounded-full bg-neutral-200 sm:w-32"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`전체 진행률 ${percent}퍼센트`}
      >
        <div
          className="h-full rounded-full bg-brand-500 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="whitespace-nowrap text-sm font-medium text-neutral-600">
        {completedCount}/{totalCount} · {percent}%
      </span>
    </div>
  )
}
