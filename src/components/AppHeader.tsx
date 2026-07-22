import type { Mode } from '../app/appState'
import { eventInfo } from '../data/event'
import { MAX_STEP, type StepId } from '../data/steps'
import { ModeToggle } from './ModeToggle'
import { ProgressBar } from './ProgressBar'

type Props = {
  mode: Mode
  step: StepId
  completedCount: number
  onModeChange: (mode: Mode) => void
  onToggleNav: () => void
  onOpenHelp: () => void
}

/**
 * 상단 고정 헤더: 세션 제목, 현재 단계, 진행률, 모드 전환,
 * 도움말·전체 자료 자리. 좁은 화면에서는 단계 메뉴 토글 버튼을 노출한다.
 */
export function AppHeader({
  mode,
  step,
  completedCount,
  onModeChange,
  onToggleNav,
  onOpenHelp,
}: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3">
        <button
          type="button"
          onClick={onToggleNav}
          className="rounded-md border border-neutral-300 p-2 text-neutral-700 hover:bg-neutral-100 lg:hidden"
          aria-label="단계 메뉴 열기·닫기"
        >
          <span aria-hidden="true">☰</span>
        </button>

        <div className="min-w-0 flex-1">
          <h1 className="truncate text-base font-bold text-neutral-900 sm:text-lg">
            {eventInfo.sessionTitle}
          </h1>
          <p className="truncate text-xs text-neutral-500">
            단계 {step}/{MAX_STEP} · {eventInfo.eventName}
          </p>
        </div>

        <div className="hidden md:block">
          <ProgressBar completedCount={completedCount} totalCount={MAX_STEP} />
        </div>

        <ModeToggle mode={mode} onChange={onModeChange} />

        <button
          type="button"
          onClick={onOpenHelp}
          className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
        >
          도움말
        </button>
      </div>

      {/* 좁은 화면에서 진행률을 별도 줄로 표시 */}
      <div className="mx-auto w-full max-w-6xl px-4 pb-2 md:hidden">
        <ProgressBar completedCount={completedCount} totalCount={MAX_STEP} />
      </div>
    </header>
  )
}
