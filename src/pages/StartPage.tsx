import { useState } from 'react'
import { HeroImage } from '../components/HeroImage'
import { eventInfo } from '../data/event'
import type { Mode } from '../app/appState'

type Props = {
  onStartMode: (mode: Mode) => void
}

const outcomes = [
  '손 모양 이미지 분류 모델',
  '판단 결과에 따라 텍스트와 이미지를 출력하는 행동 연결 경험',
  '내 교과 AI 모델 활용 아이디어',
  '학생의 개념 이해를 점검하는 나만의 Gem 초안',
]

const preparations = ['Chrome 브라우저', '웹캠', 'Google 계정 로그인', '학생들이 자주 어려워하는 교과 개념 하나']

export function StartPage({ onStartMode }: Props) {
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  return (
    <section aria-label="시작하기" className="px-4 py-6">
      <HeroImage />

      <div className="mt-6 text-center">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
          {eventInfo.sessionTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
          {eventInfo.sessionSubtitle}
        </p>
        <p className="mt-3 text-sm text-neutral-500">
          {eventInfo.eventName} · {eventInfo.date} · {eventInfo.location} · {eventInfo.presenter}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => onStartMode('present')}
          className="rounded-lg border border-brand-300 bg-brand-50 px-5 py-2.5 text-sm font-semibold text-brand-800 hover:bg-brand-100"
        >
          발표 모드로 시작
        </button>
        <button
          type="button"
          onClick={() => onStartMode('practice')}
          className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
        >
          실습 모드로 시작
        </button>
      </div>

      <div className="mt-10">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          오늘 가져갈 것
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-neutral-200 bg-white p-4 text-sm font-medium text-neutral-800"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          준비 확인
        </h3>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {preparations.map((item, index) => (
            <li key={item}>
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800">
                <input
                  type="checkbox"
                  checked={Boolean(checked[index])}
                  onChange={() =>
                    setChecked((prev) => ({ ...prev, [index]: !prev[index] }))
                  }
                  className="h-4 w-4 rounded border-neutral-300 text-brand-600 focus-visible:ring-2 focus-visible:ring-brand-500"
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-center text-xs text-neutral-400">
        실습 중에는 민감정보(비밀번호·주민등록번호 등)를 입력하지 마세요.
      </p>
    </section>
  )
}
