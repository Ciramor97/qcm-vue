/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: 'box-shadow: 4px 7px 18px 7px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        lightGreen: 'rgba(222, 250, 233, 1)',
        primary: 'rgba(255, 68, 95, 1)',
        secondary: 'rgba(68, 61, 60, 1)',
        rose: 'rgba(255, 240, 241, 1)',
      },
    },
  },
  plugins: [],
};
