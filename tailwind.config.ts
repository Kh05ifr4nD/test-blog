import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [typographyPlugin],
};

export default config;
