/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        darkBackground: '#252630',
        darkerBackground: '#16161C',
        deepRed: '#952828',
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
