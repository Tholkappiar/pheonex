/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/public/hero-bg.jpg')",
        "big-01": "url('/public/big01.jpg')",
        "big-02": "url('/public/big02.jpg')",
        serviceBanner1: "url('/public/bg-banner.png')",
        ServiceHero: "url('/public/serviceHero.jpg')",
      },
      fontFamily: {
        "Noto-Sans-JP": ["Noto Sans JP", "sans-serif"],
      },
      keyframes: {
        "scale-up": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.25)" },
        },
      },
      animation: {
        "scale-slow": "scale-up 20000ms ease-in-out forwards",
        "spin-slow": "spin 15s linear infinite",
      },
    },
  },
  plugins: [],
};
