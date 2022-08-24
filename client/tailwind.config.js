/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extends: {
      screens: {
        'xs': '600px',
      ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}
