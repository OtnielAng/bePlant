/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      borderRadius: {
        'border-header': '0px 0px 20px 20px', // Puedes ajustar el valor según tus necesidades
      }, 

      width: {
        '35': '15.5rem',
        '70': '70%',
        '30': '30',
      },
      
      colors:{
        'green-009': '#f0f4ec',
        'green-hover': '#70ac7c',
        'main-green': 'rgba(8, 115, 37, 0.09)',
      }, 
      
      textStroke: {
        'black': '1px black',
      },
    },
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px black',
          'text-stroke': '1px black',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke': '1px black',
          'text-stroke': '1px black',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

