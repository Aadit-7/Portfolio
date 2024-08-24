/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        arvo: ["Arvo", "serif"],
      },
    },
  },
  plugins: [],
};
