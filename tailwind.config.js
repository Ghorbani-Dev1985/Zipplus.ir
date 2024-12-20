/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "0.625rem",
        },
      },
      fontFamily: {
        ShabnamFD: ["Shabnam-FD", "Tahome"],
        Shabnam: ["Shabnam", "Tahome"],
      },
    },
  },
  plugins: [],
}
