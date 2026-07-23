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
    title: '수업 나눔',
    shortTitle: '수업 나눔',
    summary: '실제 수업 한 편을 처음부터 끝까지 따라가며 나눕니다.',
    presentationHeadline: '판단을 행동으로 연결하면 수업이 달라집니다.',
    durationMinutes: 12,
  },
  {
    id: 3,
    title: '분류 모델 만들기',
    shortTitle: '모델 만들기',
    summary:
      'Teachable Machine에서 손 모양 모델을 만들고 다음 단계에서 사용할 URL을 복사합니다.',
    presentationHeadline: 'O·X·배경 모델과 공유 URL을 만듭니다.',
    durationMinutes: 15,
  },
  {
    id: 4,
    title: '판단을 행동으로',
    shortTitle: '행동 연결',
    summary:
      '모델 URL을 연결하고 손동작에 따라 문구와 이미지가 바뀌는지 확인합니다.',
    presentationHeadline: '손동작에 따라 문구와 이미지가 바뀌게 합니다.',
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
    summary: '수업 정보를 반영한 메타 프롬프트로 Gem 요청사항과 지식 초안을 설계합니다.',
    presentationHeadline: 'Gem을 만들기 전에 설계 프롬프트부터 만듭니다.',
    durationMinutes: 15,
  },
  {
    id: 7,
    title: '근거 자료 연결하기',
    shortTitle: '지식 연결',
    summary:
      '선택 확장: 검토한 자료를 Gemini Notebook에 모아 Gem의 지식으로 연결합니다.',
    presentationHeadline: '검토한 노트북을 Gem의 지식으로 연결하기 — 선택 확장',
    durationMinutes: 6,
  },
  {
    id: 8,
    title: '공유와 마무리',
    shortTitle: '공유·마무리',
    summary: '두 연구와 오늘의 실습을 연결해 AI 시대 교사의 설계 역할을 정리합니다.',
    presentationHeadline: '학생이 더 깊이 생각하도록 돕는 AI를 설계합니다.',
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
