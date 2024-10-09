/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'texas-maroon': '#501214',
        'texas-gold': '#AC9155',
        'shpe-blue': '#0070C0',
        'shpe-dark-blue': '#001F5B',
        'shpe-orange': '#FD652F',
        'shpe-red': '#D33A02',
      },
    },
  },
  plugins: [],
}