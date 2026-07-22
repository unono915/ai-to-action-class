# 프로젝트 확정 결정사항

## 1. 저장소와 배포

- GitHub 저장소: `https://github.com/unono915/ai-to-action-class`
- 저장소 공개 범위: Public
- 기본 브랜치: `main`
- 예정 GitHub Pages 주소:
  `https://unono915.github.io/ai-to-action-class/`
- Vite base:
  `/ai-to-action-class/`

## 2. 행사 정보

- 행사명: 2026 AI·디지털러닝 콘페스타
- 세션명: 「판단하는 AI, 움직이는 수업」
- 발표자: 경문고등학교 지윤호
- 행사 날짜: 2026년 7월 24일
- 장소: 마곡 코엑스
- 운영 시간: 80분
- 참가자: 교원 40명
- 참가자 전원 개인 노트북 사용
- Chrome 권장
- 웹캠 사용
- Google 계정 사용
- 사이트 기본 언어: 한국어
- 별도 행사 설문: 없음

## 3. 사이트 운영 방식

- 발표자와 참가자가 같은 주소 사용
- 별도 `/present` 경로를 만들지 않음
- query parameter로 모드와 단계 관리

```text
?mode=practice&step=1
?mode=present&step=1
```

- 기본 모드: `practice`
- 기본 단계: `1`
- 참가자에게는 하나의 QR 코드 제공
- 발표자는 같은 주소에서 발표 모드로 전환

## 4. 확정 외부 링크

### Teachable Machine

`https://teachablemachine.withgoogle.com/`

### 행동 연결 사이트

`https://unono915.github.io/teachable_agent/`

기능:

- Teachable Machine 모델 주소 입력
- 모델 레이블 불러오기
- 레이블별 텍스트 출력 행동 설정
- 레이블별 이미지 출력 행동 설정
- 웹캠 예측 결과에 따라 설정한 행동 실행

### 교과별 아이디어 코치 Gem

`https://gemini.google.com/gem/1PQ9e5qigzqBHQc04XO2xNKv4jzIoqh1N?usp=sharing`

### Padlet

`https://padlet.com/yoonhojiji/padlet-j7bdyn43y5vnqaew`

### 예시 Teachable Machine 모델

`https://teachablemachine.withgoogle.com/models/Hf9Rr15V_/`

## 5. 미확정 또는 제외 항목

### 미확정

- 전체 자료 다운로드 파일 구성
- 실제 Teachable Machine 단계별 화면 캡처
- 행동 연결 사이트 단계별 화면 캡처

### 제외

- 별도 행사 설문 기능과 설문 버튼은 구현하지 않음
- 미확정 링크를 임의로 생성하지 않음

## 6. 메인 이미지

- 최종 파일 경로:
  `public/assets/hero/main-hero.png`
- 권장 비율: 16:9
- 권장 최소 크기: 1600×900
- 이미지에 글자·로고를 넣지 않음
- 핵심 구조:
  - 왼쪽: 손 모양·카메라·이미지 입력
  - 중앙: 친근한 AI 모델 또는 판단하는 뇌
  - 오른쪽: 텍스트·이미지 출력, 수업 활동, 로봇 동작
  - 교사와 학생의 실습 장면
- 실제 이미지 파일이 없을 때는 깨진 이미지 대신 CSS placeholder 사용

## 7. 실습 구성

### Teachable Machine 공통 실습

- 손 모양 이미지 분류
- 기본 레이블: O / X / 배경
- 웹캠 데이터 수집
- 모델 훈련·테스트·내보내기
- 선택 확장: 이미지 파일 업로드 학습

### 행동 연결

- 참가자 전원 직접 연결
- 모델 주소를 행동 연결 사이트에 입력
- 레이블별 텍스트와 이미지 설정
- 웹캠으로 결과 확인

### 교과 확장

- 확정된 교과별 아이디어 코치 Gem 사용
- 확정된 Padlet에 결과 공유
- 이미지·자세·음성 모델 사례 제공

### 개인 Gem 제작

- 공통 결과물: 교과 개념 체크 도우미
- 역할·대화 순서·금지 행동·출력 형식·예시 설계
- 프롬프트 빌더에서 지침 자동 구성·복사

### 자료 기반 Gem

- 선택 심화
- NotebookLM 또는 Notebook 연결 안내
- 계정·관리자 설정에 따라 기능이 없을 수 있음
- 환각이 완전히 사라진다고 표현하지 않음

## 8. 보안과 개인정보

- 서버 없음
- DB 없음
- 로그인 기능 없음
- 개인정보 수집 없음
- API 키 없음
- 외부 링크로만 도구 연결
- localStorage에는 체크 상태와 참가자가 직접 입력한 임시 폼만 저장
- 민감정보 입력 금지 안내

## 9. 개발 범위

### 1차

- Vite·React·TypeScript
- Tailwind CSS
- 공통 레이아웃
- 8단계 내비게이션
- 발표·실습 모드
- query 상태
- 진행률
- localStorage
- 확정 외부 링크
- GitHub Pages
- 기본 placeholder
- README
- lint/build 성공

### 2차

- 실제 강의 콘텐츠
- Teachable Machine 단계 안내
- 행동 연결 실습
- 교과 카드
- 아이디어 코치 Gem 연결
- Padlet 연결
- 예시 모델 연결
- Gem 프롬프트 빌더
- 자료 기반 Gem
- 발표 모드 완성

### 3차

- 최종 이미지·캡처 교체
- 접근성
- 반응형
- 운영 리허설
- 실제 Pages 배포 확인
