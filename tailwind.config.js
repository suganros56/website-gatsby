/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'lightblue':'#1ebbd7',
      'bluelight':'#3F72AF',
      'darkblue':'#112D4E',
      'verylightgrey':'#DBE2EF',
      'lightgreishwhite':'#F9F7F7',
      'mustardgreen':'#77ABA8'
    },
    fontFamily: {
      'acumen-pro':['acumin-pro',
      "Acumin Pro",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif"]
    },
  },
  plugins: [],
}
