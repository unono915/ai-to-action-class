# 판단하는 AI, 움직이는 수업

2026 AI·디지털러닝 콘페스타 80분 교사 연수 세션 「판단하는 AI, 움직이는 수업」을
운영하기 위한 정적 웹사이트입니다. 발표자와 참가자가 같은 주소를 사용하고,
query parameter로 발표·실습 모드와 8단계를 전환합니다.

- 배포 예정 주소: <https://unono915.github.io/ai-to-action-class/>
- 기술 스택: Vite · React · TypeScript · Tailwind CSS
- 서버·데이터베이스·인증·API 없음 (외부 도구는 새 탭 링크로만 연결)

## 요구 사항

- Node.js 20 이상 권장
- npm

## 설치

```bash
npm install
```

## 개발 서버

```bash
npm run dev
```

기본 주소는 실습 모드(`?mode=practice`)이며 첫 단계(`?step=1`)로 진입합니다.

주요 URL 상태 예시:

```text
?mode=practice&step=3   # 실습 모드, 3단계
?mode=present&step=2    # 발표 모드, 2단계
```

- 기본 모드: `practice`
- 기본 단계: `1`
- 잘못된 값은 안전하게 보정됩니다.
- 브라우저 뒤로가기·앞으로가기를 지원합니다.

## 검증

```bash
npm run lint
npm run build
```

빌드 결과 미리보기:

```bash
npm run preview
```

## 배포 (GitHub Pages)

- Vite `base`는 `/ai-to-action-class/`로 설정되어 있습니다.
- `main` 브랜치에 push 하면 `.github/workflows/deploy.yml` 워크플로가
  자동으로 빌드 후 GitHub Pages에 배포합니다.
- 저장소 설정에서 **Settings → Pages → Build and deployment → Source**를
  **GitHub Actions**로 지정해야 합니다.

## 외부 링크 수정 방법

모든 외부 URL은 [`src/data/links.ts`](src/data/links.ts) 한 곳에서 관리합니다.

- 확정 링크는 `status: 'active'`로 두면 새 탭 버튼으로 열립니다.
- 미확정 항목은 `status: 'pending'`으로 두면 비활성 상태로 `준비 중`이 표시됩니다.
- **비어 있는 URL을 임의로 채우지 않습니다.** URL이 확정되면 이 파일만 수정하면 됩니다.

현재 확정 링크: Teachable Machine, 행동 연결 사이트, 교과별 아이디어 코치 Gem,
Padlet, 예시 모델. 전체 자료 다운로드(`downloads`)는 구성 확정 전까지 `pending`입니다.

## 콘텐츠·행사 정보 수정

- 행사 메타데이터: [`src/data/event.ts`](src/data/event.ts)
- 8단계 정의와 placeholder 콘텐츠: [`src/data/steps.ts`](src/data/steps.ts)

## 메인 이미지

최종 메인 이미지는 `public/assets/hero/main-hero.png`에 저장합니다.
파일이 없으면 깨진 이미지 대신 CSS placeholder가 표시됩니다.

## 프로젝트 구조

```text
src/
  app/          App.tsx, appState.ts
  components/    헤더·내비게이션·모드 뷰 등 UI
  data/          links.ts, event.ts, steps.ts
  hooks/         useQueryState, usePersistedState, useKeyboardNavigation
  styles/        index.css (Tailwind)
```

## 구현 단계

이 저장소는 3단계로 나누어 구축합니다.

1. **1차 (현재):** 기반 구조·배포·공통 레이아웃·모드 전환·8단계 내비게이션·진행률·localStorage
2. **2차:** 실제 강의 콘텐츠·실습 화면·교과 카드·Gem 프롬프트 빌더
3. **3차:** 최종 이미지·캡처·접근성·반응형·배포 검증

## 개인정보·보안

- 개인정보를 수집하거나 전송하지 않습니다.
- API 키를 사용하지 않습니다.
- localStorage에는 완료 단계와 마지막 단계 등 최소 상태만 저장합니다.
