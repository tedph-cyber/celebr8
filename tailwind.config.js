/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        birthday: ['"Pacifico"', 'cursive'],
      },
      colors: {
        pinky: '#ff80b5',
        purpleNight: '#9f7aea',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
