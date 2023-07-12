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
        CabinSketch:['Cabin Sketch'],
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
        'layeredPeak1': "url('../src/Images//SVG/LayeredPeak1.svg')",
        'blob1': "url('../src/Images//SVG/Blob1.svg')",
        'blob2': "url('../src/Images//SVG/Blob2.svg')",
        'blob3': "url('../src/Images//SVG/Blob3.svg')",
        'blob4': "url('../src/Images//SVG/Blob4.svg')",
        'allProducts' : "url('../src/Images//BlendImages/BubblesBlend.jpg')"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
