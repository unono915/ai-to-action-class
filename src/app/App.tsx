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
import { clampSlide, slideCountForStep } from '../data/presentationSlides'
import { AppHeader } from '../components/AppHeader'
import { StepNavigation } from '../components/StepNavigation'
import { BottomNavigation } from '../components/BottomNavigation'
import { PresentationControls } from '../components/PresentationControls'
import { PresentationDeck } from '../components/PresentationDeck'
import { HelpPanel } from '../components/HelpPanel'
import { StartPage } from '../pages/StartPage'
import { LessonSharingPage } from '../pages/LessonSharingPage'
import { TeachableMachinePage } from '../pages/TeachableMachinePage'
import { ActionRunnerPage } from '../pages/ActionRunnerPage'
import { SubjectIdeasPage } from '../pages/SubjectIdeasPage'
import { GemBuilderPage } from '../pages/GemBuilderPage'
import { GroundedGemPage } from '../pages/GroundedGemPage'
import { SharePage } from '../pages/SharePage'

export default function App() {
  const { state, setMode, setStep, setSlidePosition } = useQueryState()
  const { mode, step } = state
  const isPresent = mode === 'present'

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

  // 실습 모드: 단계 단위 이동.
  const goPrevStep = useCallback(() => {
    if (step > MIN_STEP) goToStep((step - 1) as StepId)
  }, [step, goToStep])

  const goNextStep = useCallback(() => {
    if (step < MAX_STEP) goToStep((step + 1) as StepId)
  }, [step, goToStep])

  // 발표 모드: 슬라이드 단위 이동(단계 경계를 넘어 이어진다).
  const slide = clampSlide(step, state.slide)
  const slideCount = slideCountForStep(step)
  const atFirstSlide = step <= MIN_STEP && slide <= 1
  const atLastSlide = step >= MAX_STEP && slide >= slideCount

  const goPrevSlide = useCallback(() => {
    if (slide > 1) {
      setSlidePosition(step, slide - 1)
    } else if (step > MIN_STEP) {
      const prevStep = (step - 1) as StepId
      setSlidePosition(prevStep, slideCountForStep(prevStep))
    }
  }, [step, slide, setSlidePosition])

  const goNextSlide = useCallback(() => {
    if (slide < slideCount) {
      setSlidePosition(step, slide + 1)
    } else if (step < MAX_STEP) {
      setSlidePosition((step + 1) as StepId, 1)
    }
  }, [step, slide, slideCount, setSlidePosition])

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

  // 발표 모드에서 좌우 방향키·Space·PageUp/Down으로 슬라이드를 이동한다.
  useKeyboardNavigation({
    onPrev: goPrevSlide,
    onNext: goNextSlide,
    enabled: isPresent,
  })

  const isCompleted = completedSteps.includes(step)

  const renderPracticeContent = () => {
    switch (step) {
      case 1:
        return <StartPage onStartMode={startMode} />
      case 2:
        return <LessonSharingPage />
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
        return <SharePage onRestart={restart} />
      default:
        return null
    }
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
        {/* 좌측 단계 메뉴는 실습 모드에서만 노출한다(발표 모드는 슬라이드에 집중). */}
        {!isPresent && (
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
        )}

        {/* 중앙 콘텐츠 */}
        <main id="main-content" className="min-w-0 flex-1">
          {isPresent ? (
            <PresentationDeck step={step} slide={slide} />
          ) : (
            renderPracticeContent()
          )}
        </main>
      </div>

      {/* 하단 고정 컨트롤: 실습은 단계 이동·완료, 발표는 슬라이드 이동·타이머 */}
      <footer className="sticky bottom-0 z-20 border-t border-neutral-200 bg-white/95 backdrop-blur">
        {isPresent ? (
          <PresentationControls
            slide={slide}
            slideCount={slideCount}
            step={step}
            totalSteps={MAX_STEP}
            recommendedMinutes={getStep(step).durationMinutes}
            atStart={atFirstSlide}
            atEnd={atLastSlide}
            onPrev={goPrevSlide}
            onNext={goNextSlide}
          />
        ) : (
          <BottomNavigation
            step={step}
            isCompleted={isCompleted}
            onPrev={goPrevStep}
            onNext={goNextStep}
            onToggleComplete={toggleComplete}
          />
        )}
      </footer>

      <HelpPanel open={helpOpen} onClose={() => setHelpOpen(false)} />
    </div>
  )
}
