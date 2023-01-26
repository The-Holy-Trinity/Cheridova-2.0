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
        gray: "#343a40",
        burgundy: "#B17164",
        dustyrose: "#DBBAB4",
        coral: "#CD5C5C",
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