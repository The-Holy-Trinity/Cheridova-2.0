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
      backgroundImage: {
        hero: "url('../../../assets/photos/hanger.png')",
      },
      colors: {
        beige: "#F2EDE6",
        lightbeige: "#F5F5F5",
        green: "#4A573E",
        gray: "#585858",
        burgundy: "#C9A9A6",
        dustyrose: "#DBBAB4",
        coral: "#CD5C5C",
        lightgray: "#8D918D",
        brown: "#967969",
        blue: "#4169E1",
        lightgreen: "#84a98c",
        purple: "#A95C68",
        charcoal: "#36454F",
        sage: "#A7BEAE",
        mustard: "#E3B448",
      },

      fontFamily: {
        garamond: ["Cormorant Garamond"],
        playfair: ["Playfair Display"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};