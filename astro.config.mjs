// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
    site: 'https://jsahota11.github.io',
    vite: {plugins: [tailwindcss()],},
   // base: 'jsahota11.github.io',

    //output: 'static',
    //outDir: './dist',
});
