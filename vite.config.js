import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // publicDir에서 파일을 복사할 때 MIME 타입 보존
    copyPublicDir: true,
    // 청크 크기 경고 제거
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // 정적 애셋 파일 이름 패턴 설정
        assetFileNames: "assets/[name].[ext]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
  // 기본 경로 설정 (배포 URL이 서브디렉토리에 있을 경우 필요)
  base: "/",
});
