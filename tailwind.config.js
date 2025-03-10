/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [".html"],
    theme: {
      extend: {
        colors: {
            clifford: '#da373d',
            'bike-primary': '#E76F51',
            'bike-primary-bg': 'rgba(231, 111, 81, 0.1)',
            'client-color' : 'rgb(35, 166, 240)',
            'footer-bg' : 'rgb(11, 13, 23)',
          },
      },
    },
    plugins: [],
}