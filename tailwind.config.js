// tailwind.config.js
export default {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx}", // make sure all your source files are included
  ],
  theme: {
    extend: {
      colors: {
            sitebg: "#FFFFFF",        /** main background **/
        bg: "#000000",          /** optional dark background **/
        text: "#3C1518",          /** primary text **/
        textSecondary: "#69140E", /** secondary text / strong text **/
        accent: "#A44200",        /** buttons & highlights **/
        accentHover: "#D58936",   /** button hover, link hover **/
        highlight: "#F2F3AE",    /** soft yellow background section **/
        deep: "#3C1518",         /** dark footer/nav background **/
        flame: "#E63900",        /** flame red (matches logo) **/
      },
    },
  },
  plugins: [],
};

