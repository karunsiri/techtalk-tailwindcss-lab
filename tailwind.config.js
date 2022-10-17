/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./gatsby-ssr.js",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        base: 'var(--color-bg)',
      },
      borderColor: {
        base: 'var(--color-border)',
      },
      boxShadowColor: {
        base: 'var(--color-shadow)',
      },
      textColor: {
        base: 'var(--color-text-base)',
        muted: 'var(--color-text-muted)',
      },
    },
  },
  plugins: [],
}
