/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.jsx',
    './src/App.jsx',
    './src/main.jsx',
    './vite.config.{js,ts}',
  ],
  theme: {
    screens: {
      'xs': '576px',
      's': '1024px',
      'm': '1280px',
      'l': '1536px',
      'no-hover': {'raw': '(hover: hover) and (pointer: fine)'}
    },
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      blue: {
        '100': '#47D6EA',
        '200': '#5AD0D7',
        '300': '#031825'
      },
      gray: {
        '100': '#70727F',
        '200': '#36383F',
        '300': '#2A2B3E',
      },
      white: '#FFFFFF',
      red: {
        '100':'#FD6187',
        '200': '#D03F2C'
      },
      orange: '#F28B30',
      green: '#00FF6C',
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      padding: {
        xs: '30px',
        s: '35px',
        m: '60px',
        l: '62px',
        '15': '3.75rem'
      },
    },
  },
  plugins: [],
}