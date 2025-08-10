import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  // base: "/react-sum", // this is relevant to GitHub Pages deployments
  plugins: [react()],
  // assetsInclude: [
  //   "**/KaTeX_Main-Regular.woff2",
  //   "**/KaTeX_Main-Italic.woff2",
  //   "**/KaTeX_Math-Italic.woff2",
  //   "**/KaTeX_Size1-Regular.woff2",
  // ],
  build: {
    outDir: "build", // default value = 'dist'
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("katex")) return "katex";
        },
      },
    },
  },
  // optimizeDeps: {
  //   exclude: ["katex/dist/fonts/"],
  // },
  server: {
    watch: {
      ignored: [
        "**/node_modules/**",
        "**/dist/**",
        "**/build/**",
        "**/.git/**",
        "**/*.log",
        "**/temp/**",
      ],
    },
  },
});
