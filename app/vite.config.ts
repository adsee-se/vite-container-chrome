import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({ manifest }),
  ],
  server: {
    host: true, // ローカルサーバーを外部からアクセス可能にする
    port: 5173, // 開発サーバーが使用するポート番号
    watch: {
      usePolling: true,
    },
    hmr: {
      host: 'localhost', // ホストマシンのホスト名またはIPアドレス
  },
  },
  legacy: {
    skipWebSocketTokenCheck: true,
  },
});
