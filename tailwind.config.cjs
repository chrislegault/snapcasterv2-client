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
        primary: '#9C1FE9',
      },
      fontFamily: {
        // Titillium Web
        sans: ['Titillium Web', 'sans-serif'],
      },
      variants: {
        extend: {
          backgroundColor: ['active'],
        }
      }

    },
  },
  plugins: [],
  darkMode: "class",
}
