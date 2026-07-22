import { useEffect, useRef } from 'react'
import { ResourceButton } from './ResourceButton'

type Props = {
  open: boolean
  onClose: () => void
}

/**
 * 도움말·전체 자료 패널. 1차에서는 자리와 접근성 구조만 잡는다.
 * Escape 로 닫히고, 열릴 때 닫기 버튼에 포커스를 준다.
 */
export function HelpPanel({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

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
        className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl"
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

        <p className="mb-4 text-sm text-neutral-600">
          단계별 상세 도움말(웹캠·모델 내보내기·행동 연결 등)은 다음 단계에서
          제공됩니다. 아래 버튼으로 주요 도구와 자료에 접근할 수 있습니다.
        </p>

        <div className="flex flex-wrap gap-3">
          <ResourceButton linkKey="teachableMachine" />
          <ResourceButton linkKey="actionRunner" />
          <ResourceButton linkKey="downloads" />
        </div>
      </div>
    </div>
  )
}
