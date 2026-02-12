/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'jardin-vert': {
          light: '#4a7c2f',
          DEFAULT: '#2d5016',
          dark: '#1a300d',
        },
        'jardin-orange': {
          light: '#f59e0b',
          DEFAULT: '#ea580c',
        },
        'jardin-violet': '#a855f7',
        'jardin-rose': '#ec4899',
        'jardin-beige': '#fef3c7',
        'jardin-creme': '#fef5e7',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
