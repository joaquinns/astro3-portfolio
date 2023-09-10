/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        templateAutoCols: 'repeat(auto-fill, minmax(250px, 1fr))'
      }
    }
  },
  plugins: []
}
