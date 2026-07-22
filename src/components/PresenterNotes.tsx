type Props = {
  open: boolean
  onClose: () => void
  recommendedTime?: string
  notes: string[]
}

/**
 * 발표자 메모 패널. 'P' 키 또는 버튼으로 토글되며 참가자에게는 노출되지 않는
 * 발표자 전용 참고용 자리다(실제 화면 공유 시 발표자 기기에서만 열어 사용).
 */
export function PresenterNotes({ open, onClose, recommendedTime, notes }: Props) {
  if (!open) return null

  return (
    <div className="fixed bottom-20 right-4 z-40 w-80 max-w-[90vw] rounded-xl border border-neutral-200 bg-white p-4 shadow-xl">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-bold text-neutral-800">발표자 메모</h3>
        <button
          type="button"
          onClick={onClose}
          aria-label="발표자 메모 닫기"
          className="rounded-md p-1 text-neutral-500 hover:bg-neutral-100"
        >
          <span aria-hidden="true">✕</span>
        </button>
      </div>
      {recommendedTime && (
        <p className="mb-2 text-xs font-medium text-brand-700">
          권장 시간: {recommendedTime}
        </p>
      )}
      <ul className="list-disc space-y-1 pl-4 text-xs text-neutral-600">
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  )
}
