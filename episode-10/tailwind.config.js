/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        green: '#3D9B6D',
        orange: '#db7c38',
        red: '#f04343',
      },
      width: {
        calc: 'calc(100% - 300px)',
      },
    },
  },
  plugins: [],
};
