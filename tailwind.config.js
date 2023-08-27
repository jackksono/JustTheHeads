/** @type {import('tailwindcss').Config} */
const { Opacity } = require('@mui/icons-material')
const { fontFamily } = require("tailwindcss/defaultTheme")


module.exports = {
  content: 
  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'className',
  theme: {
    extend: {
      screens: {
        tablet: '960px'
      },
      animation: {
        blob: "blob 0.5s ease-in-out",
        slideInLeft: "slideInLeft 5s ease-in-out forwards",
        slideInRight: "slideInRight 5s ease-in-out forwards",
        'bounce': '3s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-200%)', opacity:0 },
          '100%' : {transform: 'translateX(0%)', opacity:1}
        },
        slideInRight: {
          '0%': { transform: 'translateX(200%)', opacity:0 },
          '100%' : {transform: 'translateX(0%)', opacity:1}
        }
      },
      colors: {
        color: {
          'shrimp': "#DB4221",
          'babyBlue': "#00D2FF",
          'darkOrange' : "#FF8C00",
          'text': '#210402',
          'background': '#ff9f35',
          'primary': '#0033DE',
          'secondary': '#ffaea8',
          'accent': '#000000',
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
        'allProducts' : "url('../src/Images//BlendImages/BubblesBlend.jpg')",
        'navBarBackground' : "url('../src/Images//BlendImages/NavBarBackground.png')",
        'backgroundIsland':"url('../src/Images//BlendImages/BackgroundIsland.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
