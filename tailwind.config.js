/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "dist/*.html"],
  theme: {
    extend: {
      screens: {
        "md": "815px"
      }
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}

