// tailwind.config.js

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        blue: "#051D43",
        grey: "#D8E1E6",
        pink: "#F02757",
        black: "#252525",
        orange: "#FBBE32",
      },
    },
  },
  variants: {},
};
