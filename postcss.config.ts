import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import postcssNesting from "tailwindcss/nesting/index.js";

const config = {
	plugins: {
		"postcss-import": postcssImport,
		"tailwindcss/nesting": postcssNesting,
		tailwindcss,
	},
};

export default config;
