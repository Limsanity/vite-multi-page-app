import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src/pages",
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/pages/index.html"),
        nested: resolve(__dirname, "src/pages/user/index.html"),
      },
    },
  },
});
