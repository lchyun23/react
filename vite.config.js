import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
})



// vite.config.js에는 아래의 2가지가 있다.
// 1. 운영존 번들링 옵션.
// 2. 로컬에서 데브모드로 수행할 때 런타임 옵션이 들어간다. 

// 리액트 CSR - Web Browser에서 렌더링 진행.
// 핫 모듈 로더  
// 로컬 디벨롭 모드 주체 : 2개 | 웹 브라우저, (데브)서버 - 프록시 역할 
// CORS 해결을 위한 리액트 옵션 : 