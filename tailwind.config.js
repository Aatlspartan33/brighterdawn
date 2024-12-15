/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          pink: '#FF3366',
          gray: '#1A1A1A',
        }
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        display: ['Cabinet Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};