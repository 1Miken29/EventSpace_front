module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      boxShadow: {
        'lg': '50px 50px 15px 30px #00000054',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
