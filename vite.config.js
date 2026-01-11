import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // GitHub Pages 배포 시 레포지토리 이름으로 변경 필요할 수 있음 (예: '/portfolio/')
})