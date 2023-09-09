/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*/{.html,js}"],
  theme: {
    extend: {
      colors: {
        "slate-75": "#FBFBFB",
        "slate-text": "#B4B4B4",
        "light-black": "#4A4A4A",
      },
      fontFamily: {
        primary: ["GeneralSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
