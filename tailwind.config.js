/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shadow1: '0px 0px 3px rgba(0, 0, 0, 0.25)',
        shadow2: '0px 0px 4px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
