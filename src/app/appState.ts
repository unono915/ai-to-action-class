import { clampStep, type StepId } from '../data/steps'

export type Mode = 'practice' | 'present'

export const DEFAULT_MODE: Mode = 'practice'
export const DEFAULT_STEP: StepId = 1

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

export type AppState = {
  mode: Mode
  step: StepId
}
