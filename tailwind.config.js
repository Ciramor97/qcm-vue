/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: 'box-shadow: 4px 7px 18px 7px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        lightGreen: 'rgba(222, 250, 233, 1)',
        green: 'rgba(0, 134, 112, 1)',
        roseLight: 'rgba(255, 68, 95, 1)',
        roseDark:'rgba(143, 12, 48, 1)',
        secondary: 'rgba(68, 61, 60, 1)',
        rose: 'rgba(255, 240, 241, 1)',
        'light-gray': 'rgba(242, 242, 242, 1)',
        blue:'rgba(0, 0, 238, 1)'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'lg': '10px',
      }
    },
  },
  plugins: [],
};
