module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			background: "#EAE1DF",
			gray: "#545E56",
			"light-gray": "#667761",
			brown: "#917C78",
			"dark-green": "#545E56",
			"light-green": "#667761",
		},
		extend: {
			fontFamily: {
				arapey: ["var(--font-arapey)"],
				bebas: ["var(--font-bebasneue)"],
				cinzel: ["var(--font-cinzel)"],
			},
		},
	},
	plugins: [],
};
