module.exports = {
  purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  darkMode: "media",
  theme: {
    fontFamily: {
      nasalization: ["Nasalization"],
    },
    // We are redefining fontSizes here, because since we set 1rem to be equal to 10px
    // in global-style.css, the ones provided by Tailwind were too small.
    fontSize: {
      xs: "1rem",
      s: "1.2rem",
      m: "1.4rem",
      base: "1.6rem",
      l: "1.8rem",
      xl: "2rem",
      "2xl": "2.2rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
