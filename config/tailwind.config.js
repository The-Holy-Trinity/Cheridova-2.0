const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./public/*.html",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*.{erb,haml,html,slim}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F2EDE6",
        green: "#4A573E",
        gray: "#585858",
        burgundy: "#C9A9A6",
        dustyrose: "#DBBAB4",
        coral: "#CD5C5C",
        lightgray: "#8D918D",
        brown: "#967969",
        blue: "#4169E1",
        lightgreen: "#84a98c",
        purple: "#CBC3E3",
        charcoal: "#36454F",
      },

      fontFamily: {
        garamond: ["Cormorant Garamond"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};