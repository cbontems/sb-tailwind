module.exports = {
  purge: {
    // enabled: false,
    content: ["./src/**/*.jsx", "./index.html"],
    options : {
      // https://purgecss.com/configuration.html#options
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8"
        }
      },
      fontFamily: {
        headline: "Poppins, sans-serif"
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    }
  },
  plugins: []
};
