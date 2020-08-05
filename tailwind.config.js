module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.html"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Nunito", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
