/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontSize: {
        'x-medium': 'clamp(1.5rem, 2vw + .2rem, 5.625rem);',
        'x-large': 'clamp(1.5rem, 4vw + 1rem, 5.625rem);',
        'xx-large': 'clamp(1.5rem, 14vw, 12.5rem);'
      },
      backgroundImage: {
        soldado: 'url(/assets/soldado.png)'
      },
      
      fontFamily: {
        sans: "Epilogue, sans-serif"
      },
      colors: {
        primary: {
          100: "#F2F2F2",
          200: "#E4E2E2",
          300: "#E9E9E9",
          700: "#544C4C",
          800: "#333333",
          900: "#242424"
        }
      }
    },
  },
  plugins: [],
}
