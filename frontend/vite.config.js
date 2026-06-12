import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    // 🚀 Chunk Splitting: Separates heavy libraries from your main code
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-framer": ["framer-motion"],
          "vendor-github": ["react-github-calendar"],
        },
      },
    },
  },
  // 🚀 Security/Cleanliness: Strips all console.logs from the production build
  esbuild: {
    drop: ["console", "debugger"],
  },
});
