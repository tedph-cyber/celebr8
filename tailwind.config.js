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
      animation: {
        shimmer: 'shimmer 3s infinite linear',
      },
      keyframes: {
        shimmer: {
          '0%': { textShadow: '0 0 10px #fff, 0 0 20px #fff' },
          '50%': { textShadow: '0 0 20px #ff0, 0 0 30px #f00' },
          '100%': { textShadow: '0 0 10px #fff, 0 0 20px #fff' },
        }
      }      
    },
  },
  plugins: [],
  darkMode: 'class',
}
