import { eventInfo } from './event'
import { lessonNarrative } from './lessonNarrative'
import type { LessonImageId } from './lessonImages'
import type { StepId } from './steps'

// 발표 모드 슬라이드 데이터.
// 발표 모드는 실습 모드와 "다른 기능"을 넣는 곳이 아니라,
// 참가자가 보는 것과 같은 내용을 발표용 슬라이드처럼 크게 띄우는 용도다.
// 각 단계의 핵심 내용을 슬라이드로 정리한다(문구 출처: docs/05_SITE_CONTENT_DRAFT.md).

export type Slide = {
  /** 슬라이드 상단 작은 라벨 */
  eyebrow?: string
  /** 크게 보여줄 본문 (여러 줄 가능) */
  lines: string[]
  /** 크게 보여줄 목록 */
  bullets?: string[]
  /** 하단 작은 보조 문구 */
  note?: string
  /** 함께 띄울 수업 교안 이미지 */
  image?: LessonImageId
  /** 교실에서 실제로 오간 말 (따옴표 강조) */
  quote?: { text: string; who: string }
}

// 2단계(왜 이런 수업인가)는 발표자의 실제 수업 사례로 철학을 풀어낸다.
// lessonNarrative를 슬라이드로 매핑한다(이미지·인용 포함).
const philosophySlides: Slide[] = lessonNarrative.map((beat) => ({
  eyebrow: beat.eyebrow,
  lines: beat.heading,
  note: beat.note,
  image: beat.image,
  quote: beat.quote,
}))

const slidesByStep: Record<StepId, Slide[]> = {
  1: [
    {
      eyebrow: eventInfo.eventName,
      lines: ['판단하는 AI, 움직이는 수업'],
      note: eventInfo.sessionSubtitle,
    },
    {
      eyebrow: '오늘 가져갈 것',
      lines: ['네 가지 결과물을 만들어 갑니다'],
      bullets: [
        '손 모양 이미지 분류 모델',
        '판단 결과를 텍스트·이미지로 잇는 행동 연결 경험',
        '내 교과 AI 모델 활용 아이디어',
        '학생 개념 이해를 점검하는 나만의 Gem 초안',
      ],
      note: `${eventInfo.date} · ${eventInfo.location} · ${eventInfo.presenter}`,
    },
    {
      eyebrow: '준비물',
      lines: ['시작 전에 확인하세요'],
      bullets: [
        'Chrome 브라우저',
        '웹캠',
        'Google 계정 로그인',
        '학생들이 자주 어려워하는 교과 개념 하나',
      ],
    },
  ],
  2: philosophySlides,
  3: [
    {
      eyebrow: '3단계 · 분류 모델 만들기',
      lines: ['먼저 판단하는 모델을', '만들어 봅니다'],
      note: '손 모양 O · X · 배경을 구분하는 이미지 분류 모델',
    },
    {
      eyebrow: '실습 순서',
      lines: ['Teachable Machine으로 모델 만들기'],
      bullets: [
        '이미지 프로젝트 선택',
        'O · X · 배경 레이블 만들기',
        '웹캠으로 데이터 수집',
        '모델 훈련',
        '조건을 바꾸어 테스트',
        '모델 내보내기',
      ],
    },
    {
      eyebrow: '생각할 질문',
      lines: ['모델은 정말', '손 모양을 보고 있을까요?'],
      note: '혹시 배경이나 손의 위치를 더 많이 보고 있지는 않을까요?',
    },
  ],
  4: [
    {
      eyebrow: '4단계 · 판단을 행동으로',
      lines: ['모델은 판단합니다.', '이제 무엇을 할지 정합니다.'],
    },
    {
      eyebrow: '실습 순서',
      lines: ['판단에 행동을 연결하기'],
      bullets: [
        '모델 내보내기 · URL 복사',
        '행동 연결 사이트에 모델 URL 입력',
        '레이블별 텍스트 설정',
        '레이블별 이미지 설정',
        '웹캠으로 판단 결과와 행동 확인',
      ],
    },
    {
      eyebrow: '행동 예시',
      lines: ['판단 → 행동'],
      bullets: [
        'O → “이해했어요!”',
        'X → “다시 설명해주세요”',
        '배경 → “손동작을 보여주세요”',
      ],
      note: '확장: 음성 · 화면 색상 · 게임 · LED · 모터 · 로봇팔',
    },
  ],
  5: [
    {
      eyebrow: '5단계 · 내 교과로 확장하기',
      lines: ['이 판단을 내 수업', '어디에 연결할까요?'],
    },
    {
      eyebrow: '아이디어 공식',
      lines: ['좋은 수업 아이디어의 재료'],
      bullets: [
        '교과 개념',
        '관찰 가능한 대상',
        '명확한 레이블',
        '수집 가능한 데이터',
        '판단 뒤 행동',
      ],
    },
    {
      eyebrow: '함께 만들기',
      lines: ['아이디어 코치 Gem과', '대화하며 구체화하기'],
      note: '결과는 Padlet에 함께 나눕니다',
    },
  ],
  6: [
    {
      eyebrow: '6단계 · 나만의 Gem 만들기',
      lines: ['개념을 되묻는', '질문 파트너를 만듭니다'],
    },
    {
      eyebrow: '핵심',
      lines: ['정답을 바로 알려주지 않습니다'],
      note: '학생이 자기 말로 먼저 설명하게 하고, 빠진 부분을 질문합니다',
    },
    {
      eyebrow: '좋은 지침의 구조',
      lines: ['Gem 지침에 담을 것'],
      bullets: [
        '역할',
        '대화 목표와 순서',
        '확인할 핵심 요소',
        '하지 말아야 할 행동',
        '힌트 제공 방식',
        '마지막 산출물과 첫 질문',
      ],
    },
  ],
  7: [
    {
      eyebrow: '7단계 · 자료 기반 Gem (선택 심화)',
      lines: ['자료에 근거하는 Gem'],
    },
    {
      eyebrow: '연결 방법',
      lines: ['수업 자료를 Gem에 연결'],
      bullets: [
        '기본 도구에서 「가이드 학습」 선택',
        'Knowledge 영역에 파일·Notebook 추가',
        '자료 기반 응답 지침 넣기',
      ],
    },
    {
      eyebrow: '주의',
      lines: ['자료를 연결해도', 'AI의 오류가 완전히', '사라지지는 않습니다'],
      note: '계정과 관리자 설정에 따라 기능이 보이지 않을 수 있습니다',
    },
  ],
  8: [
    {
      eyebrow: '8단계 · 공유와 마무리',
      lines: ['내 수업의 작은 질문', '하나부터 시작합니다'],
    },
    {
      eyebrow: '실천 계획',
      lines: ['오늘 가져갈 한 가지'],
      bullets: [
        '나는 ____ 수업에서',
        '____ 모델 또는 Gem을 활용하여',
        '학생들이 ____ 하도록 하겠습니다',
      ],
      note: 'Padlet에 함께 나눕니다',
    },
    {
      eyebrow: '마무리',
      lines: ['도구를 완벽히 익히는 것보다', '판단과 행동을 수업에', '어떻게 연결할지가 중요합니다'],
    },
  ],
}

export function slidesForStep(step: StepId): Slide[] {
  return slidesByStep[step]
}

export function slideCountForStep(step: StepId): number {
  return slidesByStep[step].length
}

/** 슬라이드 번호(1-based)를 해당 단계의 유효 범위로 보정한다. */
export function clampSlide(step: StepId, value: number): number {
  const count = slideCountForStep(step)
  if (Number.isNaN(value)) return 1
  const rounded = Math.round(value)
  if (rounded < 1) return 1
  if (rounded > count) return count
  return rounded
}

export function getSlide(step: StepId, slide: number): Slide {
  const slides = slidesByStep[step]
  return slides[clampSlide(step, slide) - 1]
}
