import { eventInfo } from './event'
import { lessonNarrative } from './lessonNarrative'
import {
  closingQuestion,
  closingTakeaway,
  designFactors,
  practiceMeaning,
} from './closing'
import type { LessonImageId } from './lessonImages'
import type { ClassPhotoId } from './classPhotos'
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
  /** 함께 띄울 수업 교안(PPT) 이미지 */
  image?: LessonImageId
  /** 함께 띄울 실제 수업 현장 사진 (image보다 우선) */
  photo?: ClassPhotoId
  /** 교실에서 실제로 오간 말 (따옴표 강조) */
  quote?: { text: string; who: string }
}

// 2단계(수업 나눔)는 발표자의 실제 수업 한 편을 시간순으로 따라간다.
// lessonNarrative를 슬라이드로 매핑한다(교안 이미지·현장 사진·인용 포함).
const philosophySlides: Slide[] = lessonNarrative.map((beat) => ({
  eyebrow: beat.eyebrow,
  lines: beat.heading,
  note: beat.note,
  image: beat.image,
  photo: beat.photo,
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
        'Gem 요청사항과 지식 초안을 만드는 맞춤 메타 프롬프트',
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
      lines: ['O · X · 배경 모델과', '공유 URL을 만듭니다'],
      note: '버튼을 눌러 바로 시작하고, 잘 되지 않을 때만 예시 모델을 사용합니다',
    },
    {
      eyebrow: '4개 작업으로 끝내기',
      lines: ['Teachable Machine 실습 흐름'],
      bullets: [
        '이미지 프로젝트 선택',
        'O · X · 배경 데이터 모으기',
        '학습하고 조건을 바꿔 시험하기',
        '모델을 내보내고 URL 복사하기',
      ],
    },
    {
      eyebrow: '다음 단계에 가져갈 것',
      lines: ['복사한 모델 URL'],
      note: '복사하기 전에 거리·각도·배경을 바꿔 모델이 무엇을 보고 있는지 한 번 더 확인합니다',
    },
  ],
  4: [
    {
      eyebrow: '4단계 · 판단을 행동으로',
      lines: ['손동작에 따라', '문구와 이미지가 바뀌게 합니다'],
    },
    {
      eyebrow: '3개 작업으로 끝내기',
      lines: ['판단에 행동 연결하기'],
      bullets: [
        '모델 URL 연결하고 레이블 확인하기',
        '레이블별 문구와 이미지 정하기',
        '웹캠으로 실제 출력 확인하기',
      ],
    },
    {
      eyebrow: '핵심 결과',
      lines: ['카메라 → 판단 → 레이블 → 행동'],
      bullets: [
        'O → “이해했어요!”',
        'X → “다시 설명해주세요”',
        '배경 → “손동작을 보여주세요”',
      ],
      note: '이제 판단 뒤 행동을 내 교과 활동으로 확장합니다',
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
      lines: ['Gem을 만들기 전에', '설계 프롬프트부터 만듭니다'],
    },
    {
      eyebrow: '수업 정보 입력',
      lines: ['내 수업의 조건을', '메타 프롬프트에 담습니다'],
      bullets: [
        '교과 · 학년 · 확인할 개념',
        '핵심 요소와 자주 나타나는 오개념',
        '첫 질문과 마지막 산출물',
        '수업 범위와 추가 요청사항',
      ],
    },
    {
      eyebrow: '생성형 AI와 함께',
      lines: ['두 가지 초안을 만듭니다'],
      bullets: [
        'Gem 요청사항에 붙여 넣을 실행 지침',
        'Gem 지식에 추가할 교과 개념 자료',
      ],
      note: '생성된 지식은 교과서와 수업 자료를 기준으로 교사가 반드시 검토합니다',
    },
    {
      eyebrow: '실습 흐름',
      lines: ['입력 → 다운로드 → 생성 → 검토 → Gem 제작'],
      note: '사이트는 AI를 직접 실행하거나 입력 내용을 전송하지 않습니다',
    },
  ],
  7: [
    {
      eyebrow: '7단계 · 근거 자료 연결하기',
      lines: ['필수는 아닙니다', '근거가 중요한 Gem을 위한 선택 확장'],
      note: '6단계에서 만든 Gem만으로도 오늘 실습은 완료입니다',
    },
    {
      eyebrow: 'Gemini Notebook → Gem 지식',
      lines: ['자료를 모으고 검토한 뒤', '노트북 자체를 연결합니다'],
      bullets: [
        '수업 자료와 공식 출처를 Gemini Notebook에 모으기',
        '필요하면 Deep Research로 출처 후보 확장하기',
        '교사가 원문을 확인한 자료만 남기기',
        'Gem의 「지식」에서 검토한 노트북 추가하기',
      ],
    },
    {
      eyebrow: '목표와 한계',
      lines: [
        '근거 범위를 좁히면',
        '할루시네이션 가능성을',
        '낮추는 데 도움이 됩니다',
      ],
      note: '무오류가 되는 것은 아닙니다 · 출처 확인과 범위 밖 응답 제한이 필요합니다',
    },
  ],
  8: [
    {
      eyebrow: '8단계 · 공유와 마무리',
      lines: [closingQuestion],
      note: '하버드의 맞춤형 AI 튜터와 MIT의 범용 LLM 글쓰기 연구',
    },
    {
      eyebrow: 'AI에게 맡긴 역할',
      lines: ['학습 도우미인가,', '작성을 대신하는 도구인가'],
      bullets: [
        '맞춤형 AI 튜터 → 질문 · 순차적 안내 · 적시 피드백',
        '범용 LLM 글쓰기 → 결과물 작성 과정 지원',
      ],
      note: '두 연구는 과제·대상·설계가 달라 직접 비교할 수 없습니다',
    },
    {
      eyebrow: '결과를 가르는 설계',
      lines: ['AI의 효과를 결정하는 핵심은', '교사의 교수 설계입니다'],
      bullets: designFactors,
    },
    {
      eyebrow: '오늘 실습의 의미',
      lines: ['챗봇이 아니라', 'AI의 역할을 설계했습니다'],
      bullets: practiceMeaning,
    },
    {
      eyebrow: '최종 메시지',
      lines: [closingTakeaway.lead, closingTakeaway.emphasis],
      note: closingTakeaway.teacher,
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
