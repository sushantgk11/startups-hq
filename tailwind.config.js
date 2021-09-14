module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      overflow: ['hover', 'focus'],
      overscrollBehavior: ['hover', 'focus'],
    },
  },
  plugins: [],
}
