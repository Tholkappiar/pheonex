/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-bg": "url('hero-bg.jpg')",
			},
		},
	},
	plugins: [],
};
