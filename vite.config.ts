import { defineConfig } from "vite";

export default defineConfig({
  assetsInclude: ["**/*.hdr"],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
