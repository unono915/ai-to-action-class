/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 문서 03 디자인 토큰: primary(indigo), secondary(cyan) 등은
        // Tailwind 기본 팔레트를 재사용하고 시맨틱 별칭만 추가한다.
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
      },
      fontFamily: {
        sans: [
          '"Pretendard"',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Apple SD Gothic Neo"',
          '"Malgun Gothic"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
