/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#1f2029',
          700: '#181b23'
        },
        textColor:{
          200:'#4c576c',
          500: '#191f28'
        }
      },
      minHeight: {
        '110': '110%',
      },
      minWidth:{
        '110':'110%'
      }
    },
  },
  plugins: [],
};
