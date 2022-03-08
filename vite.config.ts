import { defineConfig } from "vite";
// import reactRefresh from "@vitejs/plugin-react-refresh";
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src/pages",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/pages/index.html"),
        main: resolve(__dirname, "src/pages/home/index.html"),
        nested: resolve(__dirname, "src/pages/user/index.html"),

      },
    },
    outDir: "../../dist"
  },
});
