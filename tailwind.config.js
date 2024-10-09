/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'rose':{
        600:'#e11d48'
      },
      'blue':{
        600:'#2563eb'
      },
      'neutral':{
        50:'#fafafa'
      },
      'gray':{
        50:'#f9fafb',
        800:'#1f2937',

      }
    },
  },
  plugins: [],
}

