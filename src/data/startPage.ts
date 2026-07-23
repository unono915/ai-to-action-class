export const startHeroMessage =
  '도구를 익히는 데서 끝나지 않고, AI의 판단을 학생의 사고와 수업 행동으로 연결하는 흐름을 직접 설계합니다.'

export const startHeroImage = {
  path: 'assets/hero/start-hero-v2.webp',
  alt: '컴퓨터실에서 교사가 동료 교사들과 손동작 이미지 입력, AI 판단, 말풍선·이미지·아이디어·수업 행동으로 이어지는 흐름을 설계하는 모습',
} as const

export function startHeroImageUrl(): string {
  return `${import.meta.env.BASE_URL}${startHeroImage.path}`
}

export const startOutcomes = [
  {
    number: '01',
    title: '판단 만들기',
    description: '손 모양을 구분하는 이미지 분류 모델과 공유 URL',
  },
  {
    number: '02',
    title: '행동 연결하기',
    description: '모델의 판단을 문구와 이미지 변화로 이어 보는 경험',
  },
  {
    number: '03',
    title: '교과로 확장하기',
    description: '내 교과 개념을 AI 판단·행동 활동으로 바꾸는 아이디어',
  },
  {
    number: '04',
    title: '학습 Gem 설계하기',
    description: 'Gem 요청사항과 지식 초안을 만드는 맞춤 메타 프롬프트',
  },
] as const

export const startPreparations = [
  'Chrome 브라우저',
  '웹캠(노트북 내장 가능)',
  'Google 계정 로그인',
  '학생들이 자주 어려워하는 교과 개념 하나',
] as const
