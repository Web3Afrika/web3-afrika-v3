/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {},
			boxShadow: {
				primary: "0px 10px 10px 0px #6767DA14",
				secondary: "0px 10px 10px 0px #469F9214",
			},
			colors: {
				"primary-red": "#6767DA14",
				"primary-green": "#469F9214",
			},
			backgroundImage: {
				partner: "url('./src/assets/donate.png')",
				"hero-pattern":
					"linear-gradient(to right bottom, rgba('#000000',0.8), rgba('#000000',0.8)), url('./src/assets/donate.png')",
			},
			animation: {
				marquee: "marquee var(--duration) linear infinite",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
			},
			keyframes: {
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
