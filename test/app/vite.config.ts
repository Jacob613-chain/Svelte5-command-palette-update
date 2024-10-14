import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, "../../src/lib/index.ts"),
  //     name: "@mateothegreat/svelte5-command-palette",
  //   }
  // },
  plugins: [svelte()]
});
