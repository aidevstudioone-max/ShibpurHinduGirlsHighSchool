/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#fbf1f2",
          100: "#f5dde1",
          200: "#e9bac1",
          300: "#d88d99",
          400: "#c15c6f",
          500: "#a13a52",
          600: "#872641",
          700: "#6d1a35",
          800: "#4f1226",
          900: "#3a0d1c",
          950: "#210611",
        },
        gold: {
          50: "#fdf9ec",
          100: "#faf0c8",
          200: "#f3dd8d",
          300: "#ebc451",
          400: "#e2ab2c",
          500: "#cf8f1e",
          600: "#b06f18",
          700: "#8c5117",
          800: "#734118",
          900: "#623718",
          950: "#391c0b",
        },
        cream: "#fdf8ef",
        ink: "#2a1216",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Manrope'", "sans-serif"],
        bengali: ["'Tiro Bangla'", "serif"],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "42% 58% 65% 35% / 45% 45% 55% 55%" },
          "50%": { borderRadius: "60% 40% 30% 70% / 55% 60% 40% 45%" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        blob: "blob 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
