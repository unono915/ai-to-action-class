import { useState } from 'react'
import { HeroImage } from '../components/HeroImage'
import { eventInfo } from '../data/event'
import {
  startHeroMessage,
  startOutcomes,
  startPreparations,
} from '../data/startPage'

type Props = {
  onStartPractice: () => void
  onOpenPresentation: () => void
}

export function StartPage({ onStartPractice, onOpenPresentation }: Props) {
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  return (
    <section aria-label="시작하기" className="space-y-8 px-1 py-2 sm:px-4 sm:py-6">
      <div className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm">
        <div className="grid items-center lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-6 sm:p-8 lg:p-9">
            <p className="text-sm font-semibold text-brand-700">
              {eventInfo.eventName} · {eventInfo.durationMinutes}분 교사 실습
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-tight text-neutral-950 [word-break:keep-all] sm:text-4xl">
              {eventInfo.sessionTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              {eventInfo.sessionSubtitle}
            </p>
            <div className="mt-6 lg:hidden">
              <HeroImage />
            </div>
            <p className="mt-5 border-l-4 border-brand-500 pl-4 text-sm font-medium leading-6 text-neutral-800">
              {startHeroMessage}
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-neutral-100 pt-5 text-sm">
              <div>
                <dt className="text-xs text-neutral-400">일시</dt>
                <dd className="mt-1 font-medium text-neutral-700">{eventInfo.date}</dd>
              </div>
              <div>
                <dt className="text-xs text-neutral-400">장소</dt>
                <dd className="mt-1 font-medium text-neutral-700">{eventInfo.location}</dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-neutral-500">진행 · {eventInfo.presenter}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onStartPractice}
                className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                수업 나눔부터 시작
              </button>
              <button
                type="button"
                onClick={onOpenPresentation}
                className="rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800"
              >
                발표 모드 열기
              </button>
            </div>
          </div>

          <div className="hidden bg-gradient-to-br from-brand-50 to-cyan-50 p-3 sm:p-4 lg:mr-3 lg:block lg:rounded-2xl">
            <HeroImage />
          </div>
        </div>
      </div>

      <section aria-labelledby="start-outcomes-title">
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
            오늘의 여정
          </p>
          <h3 id="start-outcomes-title" className="mt-1 text-xl font-bold text-neutral-900">
            네 가지를 직접 만들고 연결합니다
          </h3>
        </div>
        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {startOutcomes.map((outcome) => (
            <li
              key={outcome.number}
              className="group rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-brand-200 hover:shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                  {outcome.number}
                </span>
                <div>
                  <h4 className="font-bold text-neutral-900">{outcome.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-neutral-600">
                    {outcome.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="start-preparations-title"
        className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
      >
        <div className="mb-4 sm:flex sm:items-end sm:justify-between sm:gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
              시작 전 30초
            </p>
            <h3 id="start-preparations-title" className="mt-1 text-xl font-bold text-neutral-900">
              준비물을 확인해 주세요
            </h3>
          </div>
          <p className="mt-2 text-sm text-neutral-500 sm:mt-0">
            체크 상태는 이 브라우저에서만 사용됩니다.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {startPreparations.map((item, index) => (
            <li key={item}>
              <label className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-800 transition hover:border-brand-200 hover:bg-brand-50/50">
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

        <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-800">
          실습 중에는 비밀번호·주민등록번호 등 민감정보를 입력하지 마세요.
        </p>
      </section>
    </section>
  )
}
