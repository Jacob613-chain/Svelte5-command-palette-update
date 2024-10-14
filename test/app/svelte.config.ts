import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
	preprocess: vitePreprocess(),
	resolve: {
		alias: [
			{
				find: "@mateothegreat/svelte5-command-palette",
				replacement: "../../src/lib"
			}
		]
	}
};
