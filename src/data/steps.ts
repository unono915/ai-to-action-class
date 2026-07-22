// 8단계 정의. 각 단계의 실습 상세 콘텐츠는 src/pages의 전용 페이지 컴포넌트가
// 담당하고, 여기서는 내비게이션·헤더·발표 모드 표지에 필요한 공통 메타데이터만 관리한다.

export type StepId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type Step = {
  id: StepId
  title: string
  shortTitle: string
  /** 실습 모드 상단 한 줄 설명 */
  summary: string
  /** 발표 모드 중앙에 크게 보여줄 핵심 메시지 */
  presentationHeadline: string
  /** 권장 소요 시간(분) */
  durationMinutes: number
}

export const steps: Step[] = [
  {
    id: 1,
    title: '시작하기',
    shortTitle: '시작하기',
    summary: '오늘의 목표와 준비물을 확인합니다.',
    presentationHeadline: '판단하는 AI, 움직이는 수업',
    durationMinutes: 5,
  },
  {
    id: 2,
    title: '왜 이런 수업인가',
    shortTitle: '수업 철학',
    summary: '실제 수업 사례로 ‘판단을 행동으로 잇는’ 철학을 나눕니다.',
    presentationHeadline: '판단을 행동으로 연결하면 수업이 달라집니다.',
    durationMinutes: 10,
  },
  {
    id: 3,
    title: '분류 모델 만들기',
    shortTitle: '모델 만들기',
    summary: 'Teachable Machine으로 손 모양(O·X·배경) 분류 모델을 만듭니다.',
    presentationHeadline: '먼저 판단하는 모델을 만들어 봅니다.',
    durationMinutes: 15,
  },
  {
    id: 4,
    title: '판단을 행동으로',
    shortTitle: '행동 연결',
    summary: '모델의 판단 결과에 텍스트·이미지 행동을 연결합니다.',
    presentationHeadline: '이제 판단에 따라 무엇을 할지 정합니다.',
    durationMinutes: 12,
  },
  {
    id: 5,
    title: '내 교과로 확장하기',
    shortTitle: '교과 확장',
    summary: '내 교과에서 AI 모델을 활용할 아이디어를 구체화합니다.',
    presentationHeadline: '이 판단을 내 수업 어디에 연결할까요?',
    durationMinutes: 12,
  },
  {
    id: 6,
    title: '나만의 Gem 만들기',
    shortTitle: 'Gem 만들기',
    summary: '학생의 개념 이해를 점검하는 나만의 Gem 지침을 설계합니다.',
    presentationHeadline: '개념을 되묻는 질문 파트너를 만듭니다.',
    durationMinutes: 15,
  },
  {
    id: 7,
    title: '자료 기반 Gem',
    shortTitle: '자료 기반',
    summary: '선택 심화: 수업 자료에 근거해 답하는 Gem을 안내합니다.',
    presentationHeadline: '자료에 근거하는 Gem — 선택 심화',
    durationMinutes: 6,
  },
  {
    id: 8,
    title: '공유와 마무리',
    shortTitle: '공유·마무리',
    summary: '오늘 수업에 가져갈 한 가지를 정리하고 공유합니다.',
    presentationHeadline: '내 수업의 작은 질문 하나부터 시작합니다.',
    durationMinutes: 7,
  },
]

export const TOTAL_STEPS = steps.length

export const MIN_STEP = 1
export const MAX_STEP = TOTAL_STEPS

export function getStep(id: number): Step {
  return steps.find((step) => step.id === id) ?? steps[0]
}

/** 1..8 범위를 벗어나면 안전하게 보정한다. */
export function clampStep(value: number): StepId {
  if (Number.isNaN(value)) return MIN_STEP as StepId
  const rounded = Math.round(value)
  if (rounded < MIN_STEP) return MIN_STEP as StepId
  if (rounded > MAX_STEP) return MAX_STEP as StepId
  return rounded as StepId
}
