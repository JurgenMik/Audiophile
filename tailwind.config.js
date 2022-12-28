const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Manrope', ...defaultTheme.fontFamily.sans],
      }
    },
    backgroundImage: {
      'pattern': "url('../public/assets/pattern-circles.svg')",
      'background': "url('../public/assets/image-speaker-zx7.jpg')",
    }
  },
  plugins: [],
}
