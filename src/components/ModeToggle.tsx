import type { Mode } from '../app/appState'

type Props = {
  mode: Mode
  onChange: (mode: Mode) => void
}

const options: { value: Mode; label: string }[] = [
  { value: 'practice', label: '실습 모드' },
  { value: 'present', label: '발표 모드' },
]

/**
 * 실습/발표 모드 전환. 두 개의 버튼으로 구현하고 현재 모드를
 * aria-pressed로 표시한다.
 */
export function ModeToggle({ mode, onChange }: Props) {
  return (
    <div
      className="inline-flex rounded-lg border border-neutral-300 bg-white p-0.5"
      role="group"
      aria-label="화면 모드 전환"
    >
      {options.map((option) => {
        const active = option.value === mode
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={active}
            className={
              active
                ? 'rounded-md bg-brand-600 px-3 py-1.5 text-sm font-semibold text-white'
                : 'rounded-md px-3 py-1.5 text-sm font-medium text-neutral-600 hover:bg-neutral-100'
            }
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
