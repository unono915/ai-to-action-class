# 기술 구현 가이드

## 1. 권장 아키텍처

```text
src/
  app/
    App.tsx
    appState.ts
  components/
    AppHeader.tsx
    StepNavigation.tsx
    BottomNavigation.tsx
    ProgressBar.tsx
    ModeToggle.tsx
    PresentationView.tsx
    PracticeView.tsx
    PresenterNotes.tsx
    ResourceButton.tsx
    CopyButton.tsx
    CompletionPanel.tsx
    TroubleshootingPanel.tsx
    SubjectCard.tsx
    PromptBuilder.tsx
  data/
    links.ts
    steps.ts
    presentationScenes.ts
    subjectExamples.ts
    prompts.ts
    troubleshooting.ts
  hooks/
    useQueryState.ts
    usePersistedState.ts
    useKeyboardNavigation.ts
  pages/
    StartPage.tsx
    PhilosophyPage.tsx
    TeachableMachinePage.tsx
    ActionRunnerPage.tsx
    SubjectIdeasPage.tsx
    GemBuilderPage.tsx
    GroundedGemPage.tsx
    SharePage.tsx
    HelpPage.tsx
    ResourcesPage.tsx
  styles/
    index.css
  main.tsx
```

폴더명은 구현 상황에 따라 조정할 수 있으나 데이터와 UI를 분리한다.

## 2. 상태 모델

### URL 상태

- `mode`: `practice | present`
- `step`: `1`부터 `8`
- `scene`: 발표 장면 번호, 선택값

URL이 잘못되면 안전한 기본값으로 교정한다.

### localStorage

키에 버전을 포함한다.

```text
ai-to-action-class:v1:completedSteps
ai-to-action-class:v1:promptBuilder
ai-to-action-class:v1:lastStep
```

저장:

- 완료 단계
- 프롬프트 빌더 초안
- 마지막 단계
- 도움말 접힘 상태는 선택

저장하지 않음:

- 카메라 데이터
- 계정 정보
- 외부 서비스 응답
- 개인정보

## 3. 페이지 전환

React Router는 필수가 아니다.
GitHub Pages 안정성을 위해 query 기반 단일 페이지 상태가 더 단순하다.

`step` 값으로 현재 단계 컴포넌트를 선택한다.

뒤로가기·앞으로가기가 작동하도록 `history.pushState` 또는 query update를 사용한다.

## 4. 모드 전환

모드 전환 시:

- 현재 step 유지
- 현재 scene은 가능하면 유지
- URL 갱신
- 페이지 전체 새로고침 없이 렌더 변경
- 접근성 있는 switch 또는 두 개의 버튼 사용

## 5. 발표 모드

필수:

- 중앙 콘텐츠 최대 폭
- 큰 제목
- 장면 번호
- 이전·다음
- 좌우 방향키
- 전체 화면 버튼
- QR 오버레이 자리
- 발표자 메모 패널
- 타이머 시작·일시정지·초기화

전체 화면 API가 실패해도 일반 화면으로 계속 사용 가능해야 한다.

## 6. 실습 모드

필수:

- 단계 설명
- `지금 할 일`
- `완료 기준`
- `주의할 점`
- `문제가 생겼을 때`
- 외부 사이트 버튼
- 완료 체크
- 이전·다음

외부 링크는 다음 속성을 사용한다.

```html
target="_blank"
rel="noopener noreferrer"
```

## 7. 프롬프트 빌더

입력:

- 교과
- 학년
- 개념
- 핵심 요소
- 오개념
- 첫 질문
- 마지막 산출물
- 말투

출력은 순수 문자열 템플릿으로 생성한다.
API를 호출하지 않는다.

기능:

- 실시간 미리보기 또는 생성 버튼
- 복사
- 예시 불러오기
- 초기화
- 자동 저장
- 빈 필드 처리
- 민감정보를 입력하지 말라는 안내

복사 API 실패 시 텍스트 선택 안내 fallback을 제공한다.

## 8. 링크 구성

`links.ts` 예:

```ts
export type ExternalLink = {
  label: string
  url: string
  status: 'active' | 'pending'
  description?: string
}

export const links = {
  teachableMachine: {
    label: 'Teachable Machine',
    url: 'https://teachablemachine.withgoogle.com/',
    status: 'active',
  },
  actionRunner: {
    label: '행동 연결 사이트',
    url: 'https://unono915.github.io/teachable_agent/',
    status: 'active',
  },
  subjectIdeaGem: {
    label: '교과별 아이디어 코치 Gem',
    url: 'https://gemini.google.com/gem/1PQ9e5qigzqBHQc04XO2xNKv4jzIoqh1N?usp=sharing',
    status: 'active',
  },
  padlet: {
    label: 'Padlet',
    url: 'https://padlet.com/yoonhojiji/padlet-j7bdyn43y5vnqaew',
    status: 'active',
  },
  sampleModel: {
    label: '예시 Teachable Machine 모델',
    url: 'https://teachablemachine.withgoogle.com/models/Hf9Rr15V_/',
    status: 'active',
  },
}
```

pending 링크는 클릭 불가이며 `준비 중`을 보여준다.

## 9. 디자인 시스템

권장 토큰:

- primary: blue/indigo
- secondary: violet/cyan
- success: green
- warning: amber
- error: red
- background: neutral 50
- text: neutral 900

Tailwind 기본 팔레트를 활용하고 임의 hex 남발을 피한다.

노트북 화면 기준:

- 헤더 고정
- 실습 화면은 3열 또는 2열
- 중앙 콘텐츠 최소 폭 확보
- 1280px 아래에서 보조 패널 접기
- 768px 아래에서 세로 배치

## 10. 접근성

- `main`, `nav`, `header`, `aside`, `footer` 사용
- 현재 단계에 `aria-current`
- 모드 전환에 명확한 label
- 버튼에 가시적 focus
- 아이콘 단독 버튼에 접근 가능한 이름
- disabled 링크는 button으로 렌더하거나 명확히 비활성 처리
- 진행률에 텍스트 수치 제공
- 이미지에 alt
- 전체 화면과 복사 결과에 aria-live 안내

## 11. GitHub Actions

공식 Pages workflow를 사용한다.

필수 흐름:

1. checkout
2. setup-node
3. `npm ci`
4. `npm run build`
5. Pages artifact 업로드
6. deploy-pages

workflow 권한:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

동시 배포 제어 포함.

## 12. package scripts

최소:

```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

테스트 도입 시 `test` 추가.

## 13. 품질 체크

### 자동

- TypeScript 오류 없음
- ESLint 오류 없음
- production build 성공
- GitHub Pages workflow YAML 유효
- base 경로 정상

### 수동

- 기본 주소 접속
- 발표 모드 query
- 실습 모드 query
- step query
- 브라우저 뒤로가기
- 새로고침
- 완료 체크 유지
- 빈 링크 비활성
- 외부 링크 새 탭
- 1280 / 1024 / 768 / 375px
- 키보드 내비게이션

## 14. 단계별 커밋 권장

1차:

```text
feat: scaffold Vite app and GitHub Pages deployment
feat: add shared course shell and mode switching
```

2차:

```text
feat: add workshop content and guided practice pages
feat: add subject ideas and Gem prompt builder
```

3차:

```text
fix: improve accessibility and responsive workshop flow
chore: finalize Pages deployment and documentation
```
