/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sitebg: '#FFFFFF',        // main background
        bg: '#000000',             // optional dark background
        text: '#3C1518',           // primary text
        textSecondary: '#69140E',  // secondary text
        accent: '#A44200',         // buttons & highlights
        accentHover: '#D58936',    // hover color
        highlight: '#F2F3AE',      // soft yellow
        deep: '#3C1518',            // footer/nav
        flame: '#E63900',           // flame red
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

