const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
    },
    },

    colors: {
      gray: colors.gray,
      indigo: colors.indigo,
      'green-cyan': '#39d6b4',
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
