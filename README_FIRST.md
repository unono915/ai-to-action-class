# Claude Code 개발 인계 패키지 사용법

이 폴더의 파일들은 `ai-to-action-class` 저장소를 Claude Code로 개발하기 위한 기준 자료입니다.

## 1. 포함 파일

```text
CLAUDE.md
README_FIRST.md
docs/
  00_PROJECT_DECISIONS.md
  01_PRD.md
  02_WIREFRAME.md
  03_IMPLEMENTATION_GUIDE.md
  04_CONTENT_AND_LINKS_SPEC.md
  05_SITE_CONTENT_DRAFT.md
  06_ASSET_SPEC.md
prompts/
  00_FINAL_START_PROMPT.md
  01_FOUNDATION_BUILD_PROMPT.md
  02_CORE_CONTENT_BUILD_PROMPT.md
  03_FINAL_QA_DEPLOY_PROMPT.md
assets/
  README.md
```

## 2. 권장 작업 방식

한 번에 전체 사이트를 만들도록 요청하지 않습니다.

1. **1차:** 프로젝트 기반 구조·배포·공통 레이아웃·모드 전환
2. **2차:** 실제 강의 콘텐츠·실습 화면·교과 카드·Gem 프롬프트 빌더
3. **3차:** 최종 QA·반응형·접근성·GitHub Pages 배포 검증

단계별로 빌드 결과를 확인한 뒤 다음 프롬프트를 실행합니다.

## 3. 저장소 준비

### PowerShell

```powershell
git clone https://github.com/unono915/ai-to-action-class.git
cd ai-to-action-class

# 이 ZIP의 내용물을 현재 저장소 루트에 풀어 넣습니다.
Expand-Archive -Path "$HOME\Downloads\ai-to-action-class_claude-code_handoff.zip" -DestinationPath . -Force

claude
```

ZIP 파일이 다른 위치에 있다면 경로를 실제 위치로 바꿉니다.

### Git Bash

```bash
git clone https://github.com/unono915/ai-to-action-class.git
cd ai-to-action-class

# ZIP의 내용물을 저장소 루트에 풀어 넣습니다.
unzip -o ~/Downloads/ai-to-action-class_claude-code_handoff.zip -d .

claude
```

### 이미 저장소를 복제했다면

저장소 루트에 다음 파일과 폴더가 보이도록 복사합니다.

```text
CLAUDE.md
README_FIRST.md
docs/
prompts/
assets/
```

## 4. Claude Code에서 첫 명령

Claude Code를 저장소 루트에서 실행한 뒤 아래처럼 입력합니다.

```text
@prompts/00_FINAL_START_PROMPT.md의 지시를 수행해줘.
먼저 CLAUDE.md와 docs 폴더의 모든 문서를 읽고, 문서 간 우선순위를 적용한 뒤 1차 기반 구축만 진행해.
```

파일 참조 문법이 동작하지 않는 환경에서는 `prompts/01_FOUNDATION_BUILD_PROMPT.md` 내용을 그대로 복사해 입력합니다.

## 5. 1차 완료 후 확인

Claude가 다음을 모두 성공했다고 보고해야 합니다.

- `npm install` 또는 의존성 설치
- `npm run lint`
- `npm run build`
- GitHub Pages workflow 생성
- `base: '/ai-to-action-class/'` 설정
- 발표/실습 모드 전환
- 8단계 내비게이션
- 진행률 및 localStorage
- 실제 외부 링크 데이터 분리
- main 브랜치 commit/push

문제가 없으면 다음 명령을 실행합니다.

```text
@prompts/02_CORE_CONTENT_BUILD_PROMPT.md의 지시를 수행해줘.
```

## 6. 최종 점검

2차 구현을 확인한 뒤 다음 명령을 실행합니다.

```text
@prompts/03_FINAL_QA_DEPLOY_PROMPT.md의 지시를 수행해줘.
```

## 7. 아직 넣지 않은 자료

다음 자료는 확정 후 추가해야 합니다.

- 최종 메인 이미지 파일(`public/assets/hero/main-hero.png`)
- Teachable Machine 및 행동 연결 사이트 화면 캡처
- 발표자 소개 및 행사 날짜·장소

링크가 비어 있을 때 Claude는 임의의 주소를 만들면 안 됩니다. 비활성 버튼과 `준비 중` 표시를 사용해야 합니다.


## 8. 이번 버전에 확정 반영된 정보

- 교과별 아이디어 코치 Gem:
  `https://gemini.google.com/gem/1PQ9e5qigzqBHQc04XO2xNKv4jzIoqh1N?usp=sharing`
- Padlet:
  `https://padlet.com/yoonhojiji/padlet-j7bdyn43y5vnqaew`
- 예시 Teachable Machine 모델:
  `https://teachablemachine.withgoogle.com/models/Hf9Rr15V_/`
- 행동 연결 사이트:
  `https://unono915.github.io/teachable_agent/`
- 발표자: 경문고등학교 지윤호
- 행사: 2026 AI·디지털러닝 콘페스타
- 날짜: 2026년 7월 24일
- 장소: 마곡 코엑스
- 별도 행사 설문: 없음

메인 이미지는 생성 결과를 내려받아 다음 경로에 저장합니다.

```text
public/assets/hero/main-hero.png
```
