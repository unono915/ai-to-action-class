import { useCallback, useEffect, useState } from 'react'
import { STORAGE_KEYS, type Mode } from './appState'
import { useQueryState } from '../hooks/useQueryState'
import { usePersistedState } from '../hooks/usePersistedState'
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation'
import {
  clampStep,
  getStep,
  MAX_STEP,
  MIN_STEP,
  type StepId,
} from '../data/steps'
import { AppHeader } from '../components/AppHeader'
import { StepNavigation } from '../components/StepNavigation'
import { BottomNavigation } from '../components/BottomNavigation'
import { PresentationView } from '../components/PresentationView'
import { HelpPanel } from '../components/HelpPanel'
import { StartPage } from '../pages/StartPage'
import { PhilosophyPracticePage } from '../pages/PhilosophyPracticePage'
import { PhilosophyPresentation } from '../pages/PhilosophyPresentation'
import { TeachableMachinePage } from '../pages/TeachableMachinePage'
import { ActionRunnerPage } from '../pages/ActionRunnerPage'
import { SubjectIdeasPage } from '../pages/SubjectIdeasPage'
import { GemBuilderPage } from '../pages/GemBuilderPage'
import { GroundedGemPage } from '../pages/GroundedGemPage'
import { SharePage } from '../pages/SharePage'

export default function App() {
  const { state, setMode, setStep } = useQueryState()
  const { mode, step } = state

  const [completedSteps, setCompletedSteps] = usePersistedState<StepId[]>(
    STORAGE_KEYS.completedSteps,
    [],
  )
  const [, setLastStep] = usePersistedState<StepId>(
    STORAGE_KEYS.lastStep,
    MIN_STEP as StepId,
  )

  const [navOpen, setNavOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)

  // 현재 단계를 마지막 단계로 저장한다.
  useEffect(() => {
    setLastStep(step)
  }, [step, setLastStep])

  const goToStep = useCallback(
    (next: StepId) => {
      setStep(clampStep(next))
      setNavOpen(false)
    },
    [setStep],
  )

  const goPrev = useCallback(() => {
    if (step > MIN_STEP) goToStep((step - 1) as StepId)
  }, [step, goToStep])

  const goNext = useCallback(() => {
    if (step < MAX_STEP) goToStep((step + 1) as StepId)
  }, [step, goToStep])

  const toggleComplete = useCallback(() => {
    setCompletedSteps((prev) =>
      prev.includes(step)
        ? prev.filter((id) => id !== step)
        : [...prev, step].sort((a, b) => a - b),
    )
  }, [step, setCompletedSteps])

  const startMode = useCallback(
    (nextMode: Mode) => {
      setMode(nextMode)
    },
    [setMode],
  )

  const restart = useCallback(() => {
    setMode('practice')
    goToStep(1)
  }, [setMode, goToStep])

  // 발표 모드에서 좌우 방향키 이동을 활성화한다.
  // 2단계는 자체 장면 이동(PhilosophyPresentation)이 키보드를 담당하므로 제외한다.
  useKeyboardNavigation({
    onPrev: goPrev,
    onNext: goNext,
    enabled: mode === 'present' && step !== 2,
  })

  const currentStep = getStep(step)
  const isCompleted = completedSteps.includes(step)

  const renderPracticeContent = () => {
    switch (step) {
      case 1:
        return <StartPage onStartMode={startMode} />
      case 2:
        return <PhilosophyPracticePage />
      case 3:
        return <TeachableMachinePage />
      case 4:
        return <ActionRunnerPage />
      case 5:
        return <SubjectIdeasPage />
      case 6:
        return <GemBuilderPage />
      case 7:
        return <GroundedGemPage />
      case 8:
        return (
          <SharePage
            onJumpToStep={goToStep}
            onOpenHelp={() => setHelpOpen(true)}
            onRestart={restart}
          />
        )
      default:
        return null
    }
  }

  const renderPresentationContent = () => {
    if (step === 2) {
      return (
        <PhilosophyPresentation
          durationMinutes={currentStep.durationMinutes}
          onExitPrev={goPrev}
          onExitNext={goNext}
        />
      )
    }
    return <PresentationView step={currentStep} />
  }

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="sr-only sr-only-focusable">
        본문으로 건너뛰기
      </a>

      <AppHeader
        mode={mode}
        step={step}
        completedCount={completedSteps.length}
        onModeChange={setMode}
        onToggleNav={() => setNavOpen((open) => !open)}
        onOpenHelp={() => setHelpOpen(true)}
      />

      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-6 px-4 py-6">
        {/* 좌측 단계 메뉴 (넓은 화면 고정, 좁은 화면 토글) */}
        <aside
          className={
            navOpen
              ? 'fixed inset-0 z-40 block bg-black/30 lg:static lg:z-auto lg:block lg:bg-transparent'
              : 'hidden lg:block'
          }
          onClick={() => setNavOpen(false)}
        >
          <div
            className="h-full w-64 max-w-[80vw] shrink-0 border-r border-neutral-200 bg-white p-3 lg:w-56 lg:border-r-0 lg:bg-transparent lg:p-0"
            onClick={(event) => event.stopPropagation()}
          >
            <StepNavigation
              currentStep={step}
              completedSteps={completedSteps}
              onSelect={goToStep}
            />
          </div>
        </aside>

        {/* 중앙 콘텐츠 */}
        <main id="main-content" className="min-w-0 flex-1">
          {mode === 'present' ? renderPresentationContent() : renderPracticeContent()}
        </main>
      </div>

      {/* 하단 고정 이전·다음 */}
      <footer className="sticky bottom-0 z-20 border-t border-neutral-200 bg-white/95 backdrop-blur">
        <BottomNavigation
          step={step}
          mode={mode}
          isCompleted={isCompleted}
          onPrev={goPrev}
          onNext={goNext}
          onToggleComplete={toggleComplete}
        />
      </footer>

      <HelpPanel open={helpOpen} onClose={() => setHelpOpen(false)} />
    </div>
  )
}
