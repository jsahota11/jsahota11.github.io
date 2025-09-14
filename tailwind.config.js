/** @type {import('tailwindcss').Config} */
import { interFont } from './src/themes/fonts';

export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,vue,svelte}",
    "./components/**/*.{astro,js,ts,jsx,tsx}",
    "./layouts/**/*.{astro,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: interFont,
      colors: {
        bg: "#F2F3AE",
        text: "#3C1518",         // primary text
        textSecondary: "#69140E",// secondary text
        accent: "#A44200",       // buttons and highlights
        link: "#D58936",         // links and hover state
      },
      typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme("colors.text"),
          a: { color: theme("colors.link") },
          strong: { color: theme("colors.textSecondary") },
        },
      },
    }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};


