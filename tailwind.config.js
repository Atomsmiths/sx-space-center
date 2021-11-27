/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

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
      s: "1.2rem",
      m: "1.4rem",
      base: "1.6rem",
      l: "2rem",
      xl: "2.4rem",
      "2xl": "2.8rem",
      "3xl": "3.2rem",
      "4xl": "3.6rem",
      "5xl": "4rem",
      "6xl": "4.6rem",
      "7xl": "5rem",
      "8xl": "8rem",
      "9xl": "12rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      eigengrau: "hsl(240, 14%, 10%)",
      overlay: "hsla(240, 14%, 10%, 0.7)",
      tableRowHover: "hsla(0, 0%, 15%, 0.6)",
    },
    extend: {
      transitionProperty: {
        inset: "top, bottom, left, right",
      },
      dropShadow: {
        custom: "0 0 2px rgba(0, 0, 0, 1)",
      },
    },
  },
  variants: {
    extend: {
      inset: ["group-hover"],
    },
  },
  plugins: [],
};
