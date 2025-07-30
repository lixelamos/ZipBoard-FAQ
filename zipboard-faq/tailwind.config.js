// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        lightPurple: '#8800c8',
        electricBlue: '#30c1ff',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        22: '22px',
      },
    },
  },
  plugins: [],
};
