/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      xs:'300px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl":"1580px",
    },
    extend: {
      fontFamily: {
        jura: ['jura regular', 'sans-serif'],
        karlaBold: ['karla extrabold', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        karla: ['karla', 'sans-serif'],
      },
      colors: {
        primary: '#160647',
        secondary: '#0F0741',
        black: '#000000',
        white: '#FFFFFF',
      },
      spacing: {
        '44px': '44px',
        '61px': '61px',
        '202px': '202px',
        '8px': '8px',
        '10px': '10px',
      },
    },
  },
  plugins: [],
}

