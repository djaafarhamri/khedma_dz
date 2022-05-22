const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      gray: colors.gray,
      indigo: colors.indigo,
      'green-cyan': '#39d6b4',
      'light-pink': '#ff7bb4',
      'dark-blue': '#0c1232',
      'black': '#000000',
      'white': '#ffffff',
      'slate':'rgb(226 232 240)',


    },
    fontFamily: {
      'inter': ['Inter'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
