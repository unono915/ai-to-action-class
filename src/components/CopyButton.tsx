import { useRef, useState } from 'react'

type Props = {
  text: string
  label?: string
  disabled?: boolean
}

/**
 * 텍스트 복사 버튼. Clipboard API 실패 시(비보안 컨텍스트·권한 거부 등)
 * 숨겨진 textarea를 선택해 execCommand('copy')로 대체하고,
 * 그마저 실패하면 직접 선택해 복사하라는 안내를 보여준다.
 */
export function CopyButton({ text, label = '복사', disabled = false }: Props) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  const fallbackRef = useRef<HTMLTextAreaElement>(null)

  const handleCopy = async () => {
    if (disabled) return

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text)
        setStatus('copied')
        return
      }
      throw new Error('clipboard API 사용 불가')
    } catch {
      const el = fallbackRef.current
      if (el) {
        el.style.display = 'block'
        el.focus()
        el.select()
        try {
          const succeeded = document.execCommand('copy')
          setStatus(succeeded ? 'copied' : 'failed')
        } catch {
          setStatus('failed')
        }
      } else {
        setStatus('failed')
      }
    } finally {
      window.setTimeout(() => setStatus('idle'), 2500)
    }
  }

  return (
    <div className="inline-flex flex-col gap-1">
      <button
        type="button"
        onClick={handleCopy}
        disabled={disabled}
        className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400"
      >
        {label}
      </button>
      <textarea
        ref={fallbackRef}
        readOnly
        value={text}
        style={{ display: 'none' }}
        aria-hidden="true"
        className="absolute h-0 w-0 opacity-0"
      />
      <span role="status" aria-live="polite" className="text-xs">
        {status === 'copied' && (
          <span className="text-green-700">복사되었습니다.</span>
        )}
        {status === 'failed' && (
          <span className="text-amber-700">
            자동 복사에 실패했습니다. 텍스트를 직접 선택해 복사해 주세요.
          </span>
        )}
      </span>
    </div>
  )
}
