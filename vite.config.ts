import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 하위 경로 배포용 base.
// https://unono915.github.io/ai-to-action-class/
export default defineConfig({
  base: '/ai-to-action-class/',
  plugins: [react()],
})
