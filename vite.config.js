import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "krm-ms",
    project: "javascript-react",
  }), sentryVitePlugin({
    org: "krm-ms",
    project: "apple"
  })],

  build: {
    sourcemap: true,
  },
});