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
      colors:{
       primary: {
          100: '#AC988D',
          200: '#7F6051',
          300: '#6A462F',
          DEFAULT: '#4F2C19',
           },
       secondary: {
          400: '#625C4B',
          500: '#A57939',
          DEFAULT: '#B0A27B',
           },
           success: 'rgb(0 , 192 , 115)',
           background: '#F6F5F0',
           warning: 'rgb(255 , 153 , 0)',
           error: 'rgb(255,71 , 87)',
           danger: '#f43f5e'
       },
      fontFamily: {
        ShabnamFD: ["Shabnam-FD", "Tahoma"],
        Shabnam: ["Shabnam", "Tahoma"],
      },
    },
  },
  plugins: [],
}
