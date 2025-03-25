/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue: '#14203E',
        customGray: '#E3E8F0',
        navBarText: '#67696B',
        customGreen: '#009951',
        customGraymore: '#CCD5E1',
        customGreenmore: '#007A41',
      }
    },
  },
  plugins: [],
}