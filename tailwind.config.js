/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'primary-color': '#ECECEC',
        'primary-color-dark': '#0D0D0D',
        'yellow-gold': '#FFCC00',
        'primary-gray': '#3C3C3C',
      },
      fontFamily: {
        'batanges': ['Batanges', 'sans-serif'],
        'coolvetica': ['Coolvetica', 'sans-serif'],
        'guardians': ['Guardians', 'sans-serif'],
        'louis-george-cafe': ['Louis-George-Cafe', 'sans-serif'],
        'moonrising': ['Moonrising', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      keyframes: {
        move: {
          "50%": { transform: 'translateY(-1rem)' },
        },
        move1: {
          "50%": { transform: 'translateY(-0.7rem)' },
        },
      },
      animation: {
        'lavitate': 'move 2s linear infinite',
        'lavitate1': 'move1 2s linear infinite',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem'
      },
    },
  },
  plugins: [],
}
