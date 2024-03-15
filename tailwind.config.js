/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
          ],
  theme: {
    fontFamily: {
        "montserrat" : ["Montserrat"]
    },
    colors: {
      "white": "#FFFFFF",
      "dark-green": "#32CD32",
      "gray-600": "#718096",
      "gray-300": "#F6F6F6",
      "light-gray": "#D3D3D3",
      "red" : "#D0312D",
      "blue": "#3F88C5",
      "dark-blue": "#4075A0",
      "light-blue": "#8ECAE6",
      "darkest-blue":"#143261",
      "tp-darkest-blue":"#14326199",
      "orange": "#E54E2E",
      "black": "#023047",
      "green": "#4CBB17",
      "sky-200": "#81D4FA",
      "gray-800": "#E0E0E0",
      "blue-900": "#314C75",
      "slate-400": "#CFD8DC",
      "blue-800": "#4F6589",
      "black2":"#0b001a"
    },
    linearGradientColors: {
      'custom-gradient': ['rgba(11, 0, 26, 1)', 'rgba(142, 202, 230, 1)'],
    },
    extend: {},
  },
  plugins: [],
}

