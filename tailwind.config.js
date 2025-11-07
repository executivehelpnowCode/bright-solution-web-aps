/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: {
          1000: "#B20000",
          1200: "#6B0000",
          1400: "#460000",
        },
      },
    },
  },
  plugins: [],
};
