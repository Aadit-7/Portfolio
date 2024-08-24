/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        // matemasie: ["Matemasie", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        arvo: ["Arvo", "serif"],
      },
    },
  },
  plugins: [],
};
