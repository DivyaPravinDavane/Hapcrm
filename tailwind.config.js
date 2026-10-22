/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crmBg: '#E3EEF8',
        navy: {
          900: '#23276B',
          800: '#2D3282',
          700: '#3A3F9E',
          600: '#484EBD',
          500: '#585FD4',
        },
        brandBlue: '#2563EB',
      },
      fontSize: {
        '2xs': '0.6875rem', // 11px
        '3xs': '0.625rem',  // 10px
      }
    },
  },
  plugins: [],
}
