import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Security/Cleanliness: Strips all console.logs from the production build
  esbuild: {
    drop: ["console", "debugger"],
  },
});
