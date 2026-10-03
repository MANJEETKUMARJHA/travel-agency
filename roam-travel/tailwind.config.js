/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00D09C',
          light: '#00f0b5'
        },
        dark: '#1a1a1a',
        cream: '#f5f0e8',
        orange: '#FF6B35',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      }
    },
  },
  plugins: [],
}
