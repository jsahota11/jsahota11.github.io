/** @type {import('tailwindcss').Config} */
import { interFont } from './src/themes/fonts';

export default {
  content: [
    "./*.html",         // Adjust if your HTML is in subfolders
    "./**/*.html",
        './src/**/*.{html,js,astro,ts}',
    './components/**/*.{astro,js,ts}',
    './layouts/**/*.{astro,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: interFont,
    },
  },
  plugins: [require(`@tailwindcss/typography`)],
};

