/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        green: '#3D9B6D',
        yellow: '#db7c38',
        red: '#f04343',
        orange: '#FC8019',
        lightGreen: '#60B246',
        lightOrange: '#FFFAE6',
      },
      width: {
        calc: 'calc(100vw - 300px)',
      },
      height: {
        calc: 'calc(100vh - 79px)',
      },
      boxShadow: {
        modal: '0px 0px 10px 5px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
};
