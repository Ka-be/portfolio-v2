import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "rgb(var(--background) / <alpha-value>)",
				foreground: "rgb(var(--foreground) / <alpha-value>)",
			},
			spacing: {
				frame: "var(--frame-size)",
			},
			inset: {
				frame: "var(--frame-size)",
			},
			animation: {
				marquee: "marquee 25s linear infinite",
				marquee2: "marquee2 25s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				marquee2: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-200%)" },
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
