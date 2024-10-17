/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      fontFamily: {
        'roboto': ["Roboto", "sans-serif"]
      },

      colors: {
        "tomato": "hsl(4, 100%, 67%)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-Grey": "hsl(235, 18%, 26%)",
        "grey-hsl": "hsl(231, 7%, 60%)",
        "white": "hsl(0, 0%, 100%)",
      }

    },
  },
  plugins: [],
}

