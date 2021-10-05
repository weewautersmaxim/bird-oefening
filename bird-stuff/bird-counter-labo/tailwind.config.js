module.exports = {
  purge: ["./index.html", "./src/**/*.vue"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "atkinson-hyperlegible": ['"Atkinson Hyperlegible"', "Helvetica Neue"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
