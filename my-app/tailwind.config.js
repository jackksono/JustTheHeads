/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")


module.exports = {
  content: 
  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          shrimp: "#DB4221"
        }
      },
      fontFamily: {
        Caprasimo: ['Caprasimo'],
        YsabeauSC:['Ysabeau SC'],
        Kanit:['Kanit'],
        BebasNeue:['Bebas Neue'],
        Fruktur:['Fruktur'],
        Ewert:['Ewert'],
        sans: ["var(--font-sophia)", ...fontFamily.sans]
      },
      backgroundImage: {
        'bubbles': "url('../src/Images//BlendImages/Stripes.jpg')",
        'lightning': "url('../src/Images//BlendImages/Lightning.jpg')",
        'blackPaper': "url('../src/Images//BlendImages/BlackPaper.jpg')",
        'smoke': "url('../src/Images//BlendImages/Smoke1.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
