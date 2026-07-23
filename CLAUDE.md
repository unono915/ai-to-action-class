# CLAUDE.md

## 프로젝트 역할

이 저장소는 2026 AI·디지털 러닝 콘페스타의 80분 교사 대상 세션
「판단하는 AI, 움직이는 수업」을 운영하는 정적 웹사이트다.

사이트는 발표 자료, 참가자 실습 안내, 외부 도구 링크, 프롬프트 복사,
교과별 적용 아이디어, 결과 공유를 하나의 흐름으로 제공한다.

## 작업 전 필수 읽기

작업을 시작하기 전에 아래 문서를 모두 읽는다.

1. `docs/00_PROJECT_DECISIONS.md`
2. `docs/01_PRD.md`
3. `docs/02_WIREFRAME.md`
4. `docs/03_IMPLEMENTATION_GUIDE.md`
5. `docs/04_CONTENT_AND_LINKS_SPEC.md`
6. `docs/05_SITE_CONTENT_DRAFT.md`
7. `docs/07_HANDOFF_STATE.md` — **개발 대화에서 확정된 최신 설계 의도와 현재 상태.
   초기 문서(00~05)와 충돌하면 이 문서가 우선한다.**

## 문서 우선순위

문서 간 충돌이 있으면 아래 순서를 따른다.

1. 사용자의 현재 명시적 요청
2. `docs/07_HANDOFF_STATE.md` (개발 진행 중 확정된 최신 결정)
3. `docs/00_PROJECT_DECISIONS.md`
4. `docs/03_IMPLEMENTATION_GUIDE.md`
5. `docs/01_PRD.md`
6. `docs/02_WIREFRAME.md`
7. `docs/05_SITE_CONTENT_DRAFT.md`

기능 요구는 PRD를 우선하고, 화면 배치는 와이어프레임을 참고한다.
중대한 충돌이나 자료 누락이 아니라면 질문만 하고 멈추지 말고 합리적인 기본값으로 진행한다.
확정되지 않은 URL, 행사 정보, 이미지, 인용문을 임의로 만들어서는 안 된다.

## 확정 기술 스택

- Vite
- React
- TypeScript
- Tailwind CSS
- 정적 사이트
- GitHub Pages
- GitHub Actions
- 서버·데이터베이스·인증·API 없음

필요성이 명확하지 않은 라이브러리는 추가하지 않는다.
간단한 상태 관리는 React state와 localStorage로 해결한다.

## 절대 규칙

- API 키를 사용하지 않는다.
- 개인정보를 수집하거나 전송하지 않는다.
- 분석·추적 도구를 임의로 넣지 않는다.
- Gemini API와 Teachable Machine 모델을 본 사이트 내부에서 직접 실행하지 않는다.
- 외부 도구는 새 탭에서 연다.
- 교과별 아이디어 코치 Gem, Padlet, 예시 모델, 행동 연결 사이트는 모두 확정 링크를 사용한다.
- 모든 외부 URL은 한 데이터 파일에서 관리한다.
- 비어 있는 URL은 임의로 채우지 않고 비활성화하며 `준비 중`으로 표시한다.
- UI 문구는 한국어를 기본으로 한다.
- GitHub Pages 하위 경로를 반드시 고려한다.
- 모바일보다 노트북 환경을 우선하되 320px까지 깨지지 않게 한다.
- 색상만으로 상태를 구분하지 않는다.
- 접근 가능한 시맨틱 HTML과 키보드 조작을 사용한다.

## GitHub Pages

Vite 설정:

```ts
base: '/ai-to-action-class/'
```

별도 서버 라우팅이 필요한 URL path는 피한다.

상태는 query parameter를 사용한다.

```text
?mode=practice&step=3
?mode=present&step=2
```

기본 모드는 `practice`, 기본 단계는 `1`이다.

## 발표·실습 모드

같은 주소에서 모드를 전환한다.

### 발표 모드

- 큰 글씨
- 한 화면 한 메시지
- 키보드 이전·다음
- 전체 화면
- QR 표시
- 발표자 메모와 타이머
- 완료 체크는 숨기거나 최소화

### 실습 모드

- 상세 단계 안내
- 외부 링크 버튼
- 완료 기준
- 체크박스
- 오류 해결
- 프롬프트 복사
- 이전·다음

## 데이터 관리

다음 콘텐츠는 컴포넌트 내부에 흩어놓지 않는다.

- 단계
- 발표 장면
- 외부 링크
- 교과별 사례
- 프롬프트
- 오류 해결
- 전체 자료

권장 위치:

```text
src/data/
  links.ts
  steps.ts
  presentationScenes.ts
  subjectExamples.ts
  prompts.ts
  troubleshooting.ts
```

## 품질 게이트

각 구현 단계가 끝나면 반드시 실행한다.

```bash
npm run lint
npm run build
```

가능하면 테스트도 추가하고 실행한다.

빌드가 실패한 상태로 commit 또는 push하지 않는다.

## Git 규칙

- 기존 사용자 파일을 삭제하지 않는다.
- 문서 파일을 유지한다.
- 논리적인 단위로 커밋한다.
- 단계 작업이 성공하면 main 브랜치에 push한다.
- push 권한이나 인증 문제는 숨기지 말고 정확히 보고한다.
- 커밋 메시지는 영어 또는 한국어로 명확하게 작성한다.

예:

```text
feat: scaffold course hub and presentation modes
feat: add workshop content and prompt builder
fix: resolve GitHub Pages base path and navigation
```

## 완료 보고 형식

작업 종료 시 다음을 보고한다.

1. 구현한 기능
2. 주요 변경 파일
3. 실행한 검증 명령과 결과
4. commit hash와 push 여부
5. GitHub Pages 배포 상태
6. 아직 비어 있는 링크와 자료
7. 다음 단계에서 해야 할 일
