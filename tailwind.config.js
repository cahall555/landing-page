module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			background: "#EAE1DF",
			gray: "#D9D9D9",
			"light-gray": "#667761",
			brown: "#917C78",
			"dark-green": "#545E56",
			"light-green": "#667761",
			rose: "#b79492",
		},
		extend: {
			fontFamily: {
				arapey: ["var(--font-arapey)"],
				bebasneue: ["var(--font-bebasneue)"],
				cinzel: ["var(--font-cinzel)"],
			},
		},
	},
	plugins: [],
};
