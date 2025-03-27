import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ローカルサーバーを外部からアクセス可能にする
    port: 5173, // 開発サーバーが使用するポート番号
  },
});
