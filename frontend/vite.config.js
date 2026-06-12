import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    // 🚀 Dynamic Chunk Splitting: Safely separates all third-party libraries
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // This safely names the chunk after the package itself
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  // Strips all console.logs from the production build
  esbuild: {
    drop: ["console", "debugger"],
  },
});
