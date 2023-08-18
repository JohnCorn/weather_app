/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: 
    {
      fontFamily:
      {
        display: ['Caprasimo'],
        body: ['Poppins']
      } 
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}