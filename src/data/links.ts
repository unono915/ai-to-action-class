// 모든 외부 URL은 이 파일 한 곳에서만 관리한다.
// 확정 링크는 status: 'active', 미확정 항목은 status: 'pending'.
// 비어 있는 URL을 임의로 채우지 않는다.

export type LinkStatus = 'active' | 'pending'

export type ExternalLink = {
  key: string
  label: string
  url: string
  status: LinkStatus
  description?: string
}

export const externalLinks = {
  teachableMachine: {
    key: 'teachableMachine',
    label: 'Teachable Machine 열기',
    url: 'https://teachablemachine.withgoogle.com/',
    status: 'active',
    description: '이미지·자세·음성 분류 모델을 만드는 도구',
  },
  actionRunner: {
    key: 'actionRunner',
    label: '행동 연결 사이트 열기',
    url: 'https://unono915.github.io/teachable_agent/',
    status: 'active',
    description: '모델의 판단을 텍스트·이미지 출력으로 연결하는 사이트',
  },
  subjectIdeaGem: {
    key: 'subjectIdeaGem',
    label: '교과별 아이디어 코치 Gem 열기',
    url: 'https://gemini.google.com/gem/1PQ9e5qigzqBHQc04XO2xNKv4jzIoqh1N?usp=sharing',
    status: 'active',
    description: '내 교과 AI 모델 활용 아이디어를 구체화하는 Gem',
  },
  padlet: {
    key: 'padlet',
    label: 'Padlet에 공유하기',
    url: 'https://padlet.com/yoonhojiji/padlet-j7bdyn43y5vnqaew',
    status: 'active',
    description: '교과별 결과를 나누어 올리는 공유 보드',
  },
  sampleModel: {
    key: 'sampleModel',
    label: '예시 모델 확인하기',
    url: 'https://teachablemachine.withgoogle.com/models/Hf9Rr15V_/',
    status: 'active',
    description: '문제가 있을 때 사용할 수 있는 공용 예시 모델',
  },
  gemini: {
    key: 'gemini',
    label: 'Gemini에서 입력하기',
    url: 'https://gemini.google.com/',
    status: 'active',
    description: '다운로드하거나 복사한 메타 프롬프트를 입력하는 생성형 AI',
  },
  geminiNotebook: {
    key: 'geminiNotebook',
    label: 'Gemini Notebook에서 자료 모으기',
    url: 'https://notebooklm.google.com/',
    status: 'active',
    description:
      '수업 자료와 검토한 웹 출처를 모아 Gem의 지식으로 연결할 노트북을 만드는 도구',
  },
  harvardAiTutorStudy: {
    key: 'harvardAiTutorStudy',
    label: '하버드 AI 튜터 연구 보기',
    url: 'https://www.nature.com/articles/s41598-025-97652-6',
    status: 'active',
    description: '맞춤형 AI 튜터의 학습 효과를 살핀 대학 물리학 수업 무작위 대조 연구',
  },
  mitBrainOnChatGptStudy: {
    key: 'mitBrainOnChatGptStudy',
    label: 'MIT LLM 글쓰기 연구 보기',
    url: 'https://arxiv.org/abs/2506.08872',
    status: 'active',
    description: 'LLM을 활용한 에세이 작성의 인지적 참여와 소유감을 살핀 프리프린트',
  },
  // 미확정: 전체 자료 다운로드 구성이 확정되기 전에는 비활성으로 둔다.
  downloads: {
    key: 'downloads',
    label: '전체 자료 내려받기',
    url: '',
    status: 'pending',
    description: '자료 구성 확정 후 활성화 예정',
  },
} satisfies Record<string, ExternalLink>

export type ExternalLinkKey = keyof typeof externalLinks

// 참고용 저장소·배포 주소 (버튼으로 노출하지 않음).
export const projectLinks = {
  repository: 'https://github.com/unono915/ai-to-action-class',
  plannedSite: 'https://unono915.github.io/ai-to-action-class/',
}
