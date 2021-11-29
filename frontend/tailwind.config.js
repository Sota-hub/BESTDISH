module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: "#F24B6A",
        orange: "#F2884B",
        black: "	#232B2B",
        white: "#FEFEFE",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
