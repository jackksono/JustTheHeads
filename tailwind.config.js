/** @type {import('tailwindcss').Config} */

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
        blob: "blob 1s ease-in-out",
        slideInLeft: "slideInLeft 10s ease-in-out forwards infinite ",
        slideInRight: "slideInRight 10s ease-in-out forwards infinite ",
        'bounce': '3s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translateY(-100%)', opacity:0 },
          '100%': { transform: 'translateY(0)', opacity:1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-400%)', opacity:0 },
          '45%' : {transform: 'translateX(0%)', opacity:1},
          '50%' : {transform: 'translateX(0%)', opacity:1},
          '55%' : {transform: 'translateX(0%)', opacity:1},
          '100%': { transform: 'translateX(-400%)', opacity:0 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(400%)', opacity:0 },
          '45%' : {transform: 'translateX(0%)', opacity:1},
          '50%' : {transform: 'translateX(0%)', opacity:1},
          '55%' : {transform: 'translateX(0%)', opacity:1},
          '100%': { transform: 'translateX(400%)', opacity:0 },
        }
      },
      colors: {
        color: {
          'shrimp': "#DB4221",
          'babyBlue': "#00D2FF",
          'darkOrange' : "#FF8C00",
          'text': '#210402',
          'background': '#ffd3a4',
          'primary': '#62eaf4',
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
        'filterBlob': "url('../src/Images//SVG/BehindFilterBlob.svg')"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
