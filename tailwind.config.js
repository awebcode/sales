module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1280px" }, sm: { max: "768px" } },
    extend: {
      colors: {
        black: { 900: "#08090a", "900_01": "#000000" },
        blue: { a400: "#3478f6" },
        blue_gray: {
          100: "#d9d9d9",
          "100_cc": "#d9d9d9cc",
          "100_d9": "#d9d9d9d9",
        },
        gray: {
          800: "#464646",
          900: "#141212",
          "900_01": "#252222",
          "900_02": "#141111",
          "900_03": "#232426",
          "900_04": "#232526",
        },
        primary: {
          DEFAULT: "hsla(72, 85%, 64%, 1)",
          foreground: "#1f2937",
        },
        green: { a700: "#01af32" },
        indigo: { "900_b2": "#0e115cb2" },
        lime: { 400: "#d2f153" },
        purple: { "900_b2": "#4f0173b2", a700: "#ae0ad7" },
        white: { a700: "#ffffff", a700_66: "#ffffff66" },
      },
      boxShadow: {},
      fontFamily: {
        redhatdisplay: "Red Hat Display",
        inter: "Inter",
        opensans: "Open Sans",
        poppins: "Poppins",
      },
      backgroundImage: {
        gradient: "linear-gradient(172deg, #0e115cb2,#4f0173b2)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
