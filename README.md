# 판단하는 AI, 움직이는 수업

2026 AI·디지털러닝 콘페스타 80분 교사 연수 세션 「판단하는 AI, 움직이는 수업」을
운영하기 위한 정적 웹사이트입니다. 발표자와 참가자가 같은 주소를 사용하고,
query parameter로 발표·실습 모드와 8단계를 전환합니다.

- 배포 주소: <https://unono915.github.io/ai-to-action-class/>
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
?mode=practice&step=3            # 실습 모드, 3단계
?mode=present&step=2&scene=5     # 발표 모드, 2단계, 5번째 슬라이드
```

- 기본 모드: `practice`, 기본 단계: `1`, 기본 슬라이드(`scene`): `1`
- `mode`·`step`·`scene`의 잘못된 값은 안전하게 보정됩니다.
- 브라우저 뒤로가기·앞으로가기를 지원합니다.

## 빌드와 검증

```bash
npm run lint     # ESLint
npm run build    # tsc -b && vite build
npm run preview  # 빌드 결과 로컬 미리보기
```

빌드가 실패한 상태로 commit·push하지 않습니다.

## 배포 (GitHub Pages)

- Vite `base`는 `/ai-to-action-class/`로 설정되어 있습니다.
- `main` 브랜치에 push 하면 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
  워크플로가 `npm ci → npm run build → Pages 배포`를 자동으로 수행합니다.

> **중요 (최초 1회 수동 설정):** 저장소 **Settings → Pages → Build and deployment →
> Source**를 반드시 **GitHub Actions**로 지정해야 합니다.
> 기본값인 **"Deploy from a branch"** 상태로 두면 빌드되지 않은 원본
> `index.html`(`/src/main.tsx` 참조)이 그대로 서빙되어 **빈 화면**이 됩니다.

배포 후 실제 주소(<https://unono915.github.io/ai-to-action-class/>)에 접속해
정상 렌더링을 확인합니다. 방금 배포했다면 브라우저 강력 새로고침(Ctrl+Shift+R)으로
캐시를 비웁니다.

## 발표 모드 사용법

발표 모드는 실습 모드와 **같은 내용**을 발표용 슬라이드처럼 크게 보여 주는 화면입니다.
참가자는 각자 노트북에서 실습 모드를, 발표자는 프로젝터에 발표 모드를 띄웁니다.

- 진입: 상단 우측 **발표 모드** 버튼, 또는 `?mode=present`
- 이동: 하단 **이전 / 다음** 버튼, 또는 키보드 **← →**, **Space**, **PageUp/PageDown**
- 슬라이드는 단계 경계를 넘어 이어집니다(각 단계의 마지막 슬라이드 다음은 다음 단계 첫 슬라이드).
- 하단 컨트롤 바: 현재 위치(`n/8단계 · 슬라이드 n/m`), **타이머**(시작·일시정지·초기화),
  **전체 화면**.
- 전체 화면 API가 없거나 차단돼도 일반 화면으로 계속 사용할 수 있습니다.
- 슬라이드 문구는 [`src/data/presentationSlides.ts`](src/data/presentationSlides.ts)에서
  수정합니다. 2단계(왜 이런 수업인가)의 9개 장면은
  [`src/data/presentationScenes.ts`](src/data/presentationScenes.ts)를 재사용합니다.

## 실습(콘텐츠) 수정

| 대상 | 파일 |
|---|---|
| 행사 메타데이터(발표자·날짜·장소 등) | [`src/data/event.ts`](src/data/event.ts) |
| 8단계 제목·요약·권장 시간 | [`src/data/steps.ts`](src/data/steps.ts) |
| 발표 슬라이드 문구 | [`src/data/presentationSlides.ts`](src/data/presentationSlides.ts) |
| 2단계 발표 장면 | [`src/data/presentationScenes.ts`](src/data/presentationScenes.ts) |
| 교과별 사례 카드 | [`src/data/subjectExamples.ts`](src/data/subjectExamples.ts) |
| Gem 메타 프롬프트 조합·입력 예시 | [`src/data/prompts.ts`](src/data/prompts.ts) |
| Gem 메타 프롬프트 본문 | [`src/data/gemMetaPromptTemplate.md`](src/data/gemMetaPromptTemplate.md) |
| 도움말·오류 해결 Q&A | [`src/data/troubleshooting.ts`](src/data/troubleshooting.ts) |
| 화면 캡처 설명·alt | [`src/data/screenshots.ts`](src/data/screenshots.ts) |

각 단계 화면 자체는 `src/pages/`의 페이지 컴포넌트가 담당합니다.

### 6단계 Gem 제작 흐름

6단계에서는 입력값으로 짧은 Gem 지침을 바로 만들지 않습니다.

1. 교과·학년·개념·오개념 등 수업 정보를 입력합니다.
2. 사이트가 입력값을 반영한 메타 프롬프트 `.md` 파일을 브라우저에서 생성합니다.
3. 참가자가 파일 내용을 생성형 AI에 입력합니다.
4. AI가 만든 Gem 요청사항과 지식 자료 초안을 교사가 검토합니다.
5. 검토한 요청사항과 지식 자료를 Gem 제작 화면에 적용합니다.

사이트는 이 과정에서 생성형 AI API를 호출하거나 입력 내용을 외부로 전송하지 않습니다.
필수 항목이 비어 있으면 메타 프롬프트 복사와 다운로드가 비활성화됩니다.

## 외부 링크 수정

모든 외부 URL은 [`src/data/links.ts`](src/data/links.ts) 한 곳에서 관리합니다.

- 확정 링크는 `status: 'active'`로 두면 **새 탭**(`target="_blank" rel="noopener noreferrer"`)
  버튼으로 열립니다.
- 미확정 항목은 `status: 'pending'`으로 두면 비활성 상태로 `준비 중`이 표시됩니다.
- **비어 있는 URL을 임의로 채우지 않습니다.** URL이 확정되면 이 파일만 수정하면 됩니다.

현재 확정 링크: Teachable Machine, 행동 연결 사이트, 교과별 아이디어 코치 Gem,
Padlet, 예시 모델.

## 이미지 교체

- **메인 이미지**: `public/assets/hero/main-hero.png`에 저장하면 홈 화면 hero에 사용됩니다.
  파일이 없으면 깨진 이미지 대신 CSS placeholder가 표시됩니다
  ([`src/components/HeroImage.tsx`](src/components/HeroImage.tsx)).
- **화면 캡처**: `public/assets/screenshots/`에 저장하고
  [`src/data/screenshots.ts`](src/data/screenshots.ts)에서 파일명·설명·alt를 관리합니다.
  이미지 경로는 `import.meta.env.BASE_URL` 기반이라 GitHub Pages 하위 경로에서도 동작합니다.
- 이미지 클릭 시 접근 가능한 확대 모달([`ImageLightbox`](src/components/ImageLightbox.tsx))이
  열립니다(ESC·배경 클릭·닫기 버튼으로 닫힘, 포커스 복귀 처리).

## 프로젝트 구조

```text
src/
  app/          App.tsx, appState.ts
  components/    헤더·내비게이션·발표 슬라이드·모달 등 UI
  data/          links, event, steps, presentationSlides, presentationScenes,
                 subjectExamples, prompts, troubleshooting, screenshots
  hooks/         useQueryState, usePersistedState, useKeyboardNavigation
  pages/         단계별 실습 화면
  styles/        index.css (Tailwind)
public/assets/
  hero/          main-hero.png (없으면 placeholder)
  screenshots/   실습 화면 캡처 12장
```

## 강의 당일 사용 체크리스트

1. Chrome에서 <https://unono915.github.io/ai-to-action-class/> 접속(강력 새로고침).
2. 참가자에게 같은 주소(또는 QR)를 공유 → 참가자는 **실습 모드**로 진행.
3. 발표자는 상단 **발표 모드**로 전환하고 프로젝터를 **전체 화면**으로.
4. 하단 **타이머**로 구간 시간 관리, **← →** 키로 슬라이드 이동.
5. 외부 도구(Teachable Machine·행동 연결 사이트·아이디어 코치 Gem·Padlet)는
   버튼을 누르면 **새 탭**에서 열리고, 이 교안 탭은 그대로 남습니다.
6. 참가자 실습 중 문제가 생기면 상단 **도움말**(검색·카테고리)에서 오류 해결을 안내.
7. 실습·발표 상태는 URL(`?mode=&step=&scene=`)에 담겨 새로고침·공유해도 유지됩니다.
8. 완료 체크와 Gem 메타 프롬프트 입력값은 각자 브라우저 localStorage에만 저장됩니다.
   민감정보(비밀번호·주민등록번호 등)는 입력하지 않도록 안내합니다.

## 아직 확정되지 않은(pending) 자료

- **전체 자료 다운로드**(`downloads`): 자료 구성 확정 전까지 `준비 중` 비활성.
- **Gemini Gems 열기 버튼**(6단계): 공식 진입 URL 미확정으로 `준비 중` 표시.
- **메인 hero 이미지**: 최종본 확정 시 `public/assets/hero/main-hero.png` 교체.
- **일부 캡처의 개인정보**: Gemini/Notebook 캡처 좌측 하단 계정 아바타와 Notebook 문서명이
  보일 수 있으므로, 공개 배포 전 계정 정보가 없는 화면으로 재캡처 권장.

## 개인정보·보안

- 개인정보를 수집하거나 전송하지 않습니다.
- API 키를 사용하지 않습니다.
- localStorage에는 완료 단계·마지막 단계·Gem 메타 프롬프트 입력값 등 최소 상태만 저장합니다.
- 외부 도구(Teachable Machine·Gemini·행동 연결 사이트)는 이 사이트 안에서 실행하지 않고
  새 탭 링크로만 연결합니다.
