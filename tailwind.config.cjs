/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      screens: {
        // => @media (min-width:390 px)
        "xs": "390px",
      },
      colors: {
        darkBackground: '#252630',
        darkerBackground: '#16161C',
        primary: '#9C1FE9',
      },
      fontFamily: {
        // Titillium Web
        // sans: ['Titillium Web', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
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
