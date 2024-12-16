/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#000',
      'red': '#D40404',
      'fuschia-100': '#ef5da8',
      'fuschia-80': '#f178b6',
      'fuschia-60': '#fcddec',
      'iris-100': '#5d5fef',
      'iris-80': '#7879f1',
      'iris-60': '#a5a6f6',
      'lightgray': '#ebe7e7',
      'graylight': '#D9D9D9',
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'great-vibes': ['Great Vibes', 'cursive'],
      'nosifer': ['Nosifer', 'cursive'],
    },
  },
  plugins: [],
}

