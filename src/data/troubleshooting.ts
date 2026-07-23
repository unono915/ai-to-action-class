// 오류 해결·도움말 데이터.
// 출처: docs/02_WIREFRAME.md 「6. 행동 연결 실습 - 오류 도움말」, 「12. 도움말 화면」
// 문서에 없는 세부 정책은 임의로 지어내지 않고, 계정·환경 차이가 있을 수 있다는
// 수준의 일반적인 안내로만 작성한다.

export type TroubleshootingCategory =
  | 'webcam'
  | 'teachableMachine'
  | 'modelExport'
  | 'actionRunner'
  | 'googleLogin'
  | 'gem'
  | 'notebook'

export const categoryLabels: Record<TroubleshootingCategory, string> = {
  webcam: '웹캠',
  teachableMachine: 'Teachable Machine',
  modelExport: '모델 내보내기',
  actionRunner: '행동 연결',
  googleLogin: 'Google 로그인',
  gem: 'Gem',
  notebook: 'Notebook',
}

export type TroubleshootingEntry = {
  id: string
  category: TroubleshootingCategory
  question: string
  answer: string
}

export const troubleshootingEntries: TroubleshootingEntry[] = [
  {
    id: 'webcam-no-picture',
    category: 'webcam',
    question: '웹캠 화면이 나오지 않아요.',
    answer:
      '브라우저 주소창 왼쪽의 카메라 권한을 허용했는지 확인하세요. 다른 프로그램이 웹캠을 사용 중이면 종료한 뒤 페이지를 새로고침하세요.',
  },
  {
    id: 'teachable-labels-not-loading',
    category: 'teachableMachine',
    question: '레이블을 불러오지 못해요.',
    answer:
      '모델 URL이 정확한지 다시 확인하고 새로고침해 보세요. 그래도 안 되면 예시 모델로 대체해 실습을 이어갈 수 있습니다.',
  },
  {
    id: 'teachable-data-imbalance',
    category: 'teachableMachine',
    question: '모델이 자꾸 틀려요.',
    answer:
      '레이블별 데이터 수가 비슷한지, 손 위치·거리·각도·배경이 충분히 다양한지 확인하세요.',
  },
  {
    id: 'model-export-copy',
    category: 'modelExport',
    question: '모델 링크를 어디에서 복사하나요?',
    answer:
      'Teachable Machine에서 모델 훈련을 마친 뒤 모델 내보내기(Export Model)를 열고, 생성된 공유 링크(URL)를 복사합니다.',
  },
  {
    id: 'model-export-not-ready',
    category: 'modelExport',
    question: '모델 URL을 입력해도 반응이 없어요.',
    answer: '모델 업로드(내보내기)가 완전히 끝났는지 확인한 뒤 다시 시도하세요.',
  },
  {
    id: 'action-runner-url',
    category: 'actionRunner',
    question: '행동 연결 사이트에서 모델을 불러오지 못해요.',
    answer:
      '모델 URL이 맞는지 확인하고, 모델 업로드가 끝났는지 확인하세요. 레이블이 불러와지지 않으면 새로고침해 보세요. 계속 문제가 있으면 예시 모델을 사용하세요.',
  },
  {
    id: 'action-runner-webcam',
    category: 'actionRunner',
    question: '행동 연결 사이트에서 웹캠이 작동하지 않아요.',
    answer: '브라우저의 웹캠 권한을 확인하세요.',
  },
  {
    id: 'google-login-blocked',
    category: 'googleLogin',
    question: 'Google 계정으로 로그인이 안 돼요.',
    answer:
      '학교 Google 계정은 관리자 설정에 따라 일부 기능이 제한될 수 있습니다. 문제가 계속되면 진행자에게 문의하세요.',
  },
  {
    id: 'gem-menu-missing',
    category: 'gem',
    question: 'Gem 만들기 메뉴가 보이지 않아요.',
    answer: '계정과 관리자 설정에 따라 Gem 관련 메뉴가 보이지 않을 수 있습니다.',
  },
  {
    id: 'gem-copy-failed',
    category: 'gem',
    question: '메타 프롬프트 복사나 다운로드가 안 돼요.',
    answer:
      '필수 항목을 모두 입력했는지 확인하세요. 복사 버튼이 동작하지 않으면 미리보기를 펼쳐 텍스트를 직접 선택한 뒤 Ctrl+C(Cmd+C)로 복사하세요.',
  },
  {
    id: 'notebook-menu-missing',
    category: 'notebook',
    question: 'Notebook 추가 메뉴가 보이지 않아요.',
    answer: '계정과 관리자 설정에 따라 Notebook 연결 기능이 보이지 않을 수 있습니다.',
  },
]

export function getEntriesByCategory(
  category: TroubleshootingCategory,
): TroubleshootingEntry[] {
  return troubleshootingEntries.filter((entry) => entry.category === category)
}
