/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        font: ["Noto Sans KR", "Roboto"],
      },
      colors: {
        base: "#1e3799",
      },
    },
  },
  plugins: [],
};
