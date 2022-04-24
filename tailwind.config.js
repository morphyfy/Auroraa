module.exports = {
  // only purge in pages
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBMSans"],
        serif: ["Grotesk"],
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "653px" },
      // => @media (max-width: 639px) { ... }

      xsm: { max: "375px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
