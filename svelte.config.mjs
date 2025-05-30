import { vitePreprocess } from "@astrojs/svelte";

const config = {
	preprocess: [vitePreprocess({ script: true })],
};

export default config;
