/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* screens:{
        'sm': '640px',

        'md': '768px',
  
        'lg': '1024px',
      } */
    },
    screens:{
      'lg': '1024px',
      'sm':'640px'
    }
  },
  plugins: [],
}