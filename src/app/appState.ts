import { clampStep, type StepId } from '../data/steps'

export type Mode = 'practice' | 'present'

export const DEFAULT_MODE: Mode = 'practice'
export const DEFAULT_STEP: StepId = 1
export const DEFAULT_SLIDE = 1

export const STORAGE_KEYS = {
  completedSteps: 'ai-to-action-class:v1:completedSteps',
  lastStep: 'ai-to-action-class:v1:lastStep',
  promptBuilder: 'ai-to-action-class:v1:promptBuilder',
} as const

export function isMode(value: string | null): value is Mode {
  return value === 'practice' || value === 'present'
}

export function parseMode(value: string | null): Mode {
  return isMode(value) ? value : DEFAULT_MODE
}

export function parseStep(value: string | null): StepId {
  if (value === null) return DEFAULT_STEP
  const parsed = Number.parseInt(value, 10)
  if (Number.isNaN(parsed)) return DEFAULT_STEP
  return clampStep(parsed)
}

/**
 * 슬라이드 번호는 최소 1로만 보정한다. 상한(단계별 슬라이드 수)은
 * 렌더 시점에 clampSlide로 다시 보정하므로 여기서는 단계 정보를 요구하지 않는다.
 */
export function parseSlide(value: string | null): number {
  if (value === null) return DEFAULT_SLIDE
  const parsed = Number.parseInt(value, 10)
  if (Number.isNaN(parsed) || parsed < 1) return DEFAULT_SLIDE
  return parsed
}

export type AppState = {
  mode: Mode
  step: StepId
  /** 발표 모드 슬라이드 번호(1-based). 실습 모드에서는 무시된다. */
  slide: number
}
