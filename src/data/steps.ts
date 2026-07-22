import type { ExternalLinkKey } from './links'

// 8단계 정의. 1차 기반 구축 단계에서는 레이아웃과 이동 확인용
// 최소 placeholder 콘텐츠만 담는다. 상세 콘텐츠는 2차 작업에서 채운다.

export type StepId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type Step = {
  id: StepId
  title: string
  shortTitle: string
  /** 실습 모드 상단 한 줄 설명 */
  summary: string
  /** 발표 모드 중앙에 크게 보여줄 핵심 메시지 */
  presentationHeadline: string
  /** 실습 모드 '지금 할 일' placeholder 항목 */
  practiceTodos: string[]
  /** 실습 모드 완료 기준 placeholder */
  completionCriteria: string[]
  /** 실습 모드 주의할 점 placeholder */
  cautions: string[]
  /** 이 단계에서 노출할 외부 링크 키 */
  externalLinks: ExternalLinkKey[]
  /** 권장 소요 시간(분) */
  durationMinutes?: number
}

export const steps: Step[] = [
  {
    id: 1,
    title: '시작하기',
    shortTitle: '시작하기',
    summary: '오늘의 목표와 준비물을 확인합니다.',
    presentationHeadline: '판단하는 AI, 움직이는 수업',
    practiceTodos: [
      '오늘 가져갈 결과물 4가지를 확인합니다.',
      '준비물(Chrome·웹캠·Google 로그인·교과 개념)을 점검합니다.',
      '실습 모드로 다음 단계로 이동합니다.',
    ],
    completionCriteria: ['준비물 점검 완료'],
    cautions: ['민감정보는 입력하지 않습니다.'],
    externalLinks: [],
    durationMinutes: 5,
  },
  {
    id: 2,
    title: '왜 이런 수업인가',
    shortTitle: '수업 철학',
    summary: '판단을 행동으로 연결하는 수업의 의미를 살펴봅니다.',
    presentationHeadline: '판단을 행동으로 연결하면 수업이 달라집니다.',
    practiceTodos: [
      '분류 모델 수업이 판단에서 끝날 때의 한계를 생각합니다.',
      '판단 뒤 행동으로 이어지는 구조를 확인합니다.',
    ],
    completionCriteria: ['수업 설계 관점 이해'],
    cautions: ['AI가 항상 더 잘 판단하는 것은 아님을 기억합니다.'],
    externalLinks: [],
    durationMinutes: 8,
  },
  {
    id: 3,
    title: '분류 모델 만들기',
    shortTitle: '모델 만들기',
    summary: 'Teachable Machine으로 손 모양(O·X·배경) 분류 모델을 만듭니다.',
    presentationHeadline: '먼저 판단하는 모델을 만들어 봅니다.',
    practiceTodos: [
      'Teachable Machine에 접속합니다.',
      '이미지 프로젝트로 O·X·배경 레이블을 만듭니다.',
      '웹캠 데이터를 수집하고 모델을 훈련합니다.',
    ],
    completionCriteria: ['O·X·배경 데이터 수집', '모델 훈련 완료'],
    cautions: ['레이블별 데이터 수를 비슷하게 맞춥니다.'],
    externalLinks: ['teachableMachine', 'sampleModel'],
    durationMinutes: 15,
  },
  {
    id: 4,
    title: '판단을 행동으로',
    shortTitle: '행동 연결',
    summary: '모델의 판단 결과에 텍스트·이미지 행동을 연결합니다.',
    presentationHeadline: '이제 판단에 따라 무엇을 할지 정합니다.',
    practiceTodos: [
      '모델을 내보내고 URL을 복사합니다.',
      '행동 연결 사이트에 모델 URL을 입력합니다.',
      '레이블별 텍스트·이미지를 설정하고 웹캠으로 테스트합니다.',
    ],
    completionCriteria: ['모델 불러오기', '텍스트·이미지 출력 확인'],
    cautions: ['모델 업로드가 끝난 뒤 URL을 복사합니다.'],
    externalLinks: ['actionRunner', 'sampleModel'],
    durationMinutes: 12,
  },
  {
    id: 5,
    title: '내 교과로 확장하기',
    shortTitle: '교과 확장',
    summary: '내 교과에서 AI 모델을 활용할 아이디어를 구체화합니다.',
    presentationHeadline: '이 판단을 내 수업 어디에 연결할까요?',
    practiceTodos: [
      '교과별 사례를 살펴봅니다.',
      '아이디어 코치 Gem과 대화하며 아이디어를 구체화합니다.',
      'Padlet에 결과를 공유합니다.',
    ],
    completionCriteria: ['내 교과 아이디어 초안 작성'],
    cautions: ['사람의 적성·성격 판단에는 사용하지 않습니다.'],
    externalLinks: ['subjectIdeaGem', 'padlet'],
    durationMinutes: 12,
  },
  {
    id: 6,
    title: '나만의 Gem 만들기',
    shortTitle: 'Gem 만들기',
    summary: '학생의 개념 이해를 점검하는 나만의 Gem 지침을 설계합니다.',
    presentationHeadline: '개념을 되묻는 질문 파트너를 만듭니다.',
    practiceTodos: [
      '개념 체크 Gem의 역할과 대화 순서를 정합니다.',
      '프롬프트 빌더로 지침을 구성합니다.',
      '지침을 복사해 Gemini Gems에서 테스트합니다.',
    ],
    completionCriteria: ['Gem 지침 초안 작성'],
    cautions: ['정답을 바로 알려주지 않도록 설계합니다.'],
    externalLinks: [],
    durationMinutes: 15,
  },
  {
    id: 7,
    title: '자료 기반 Gem',
    shortTitle: '자료 기반',
    summary: '선택 심화: 수업 자료에 근거해 답하는 Gem을 안내합니다.',
    presentationHeadline: '자료에 근거하는 Gem — 선택 심화',
    practiceTodos: [
      'Gem의 Knowledge 영역에 자료를 연결하는 방법을 확인합니다.',
      '자료 기반 응답 지침을 복사합니다.',
    ],
    completionCriteria: ['자료 기반 지침 확인'],
    cautions: ['자료를 연결해도 오류가 완전히 사라지지는 않습니다.'],
    externalLinks: [],
    durationMinutes: 6,
  },
  {
    id: 8,
    title: '공유와 마무리',
    shortTitle: '공유·마무리',
    summary: '오늘 수업에 가져갈 한 가지를 정리하고 공유합니다.',
    presentationHeadline: '내 수업의 작은 질문 하나부터 시작합니다.',
    practiceTodos: [
      '실천 계획 한 문장을 작성합니다.',
      'Padlet에 공유합니다.',
    ],
    completionCriteria: ['실천 계획 작성'],
    cautions: [],
    externalLinks: ['padlet'],
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
