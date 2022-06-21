/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'cards': 'repeat(auto-fill, minmax(208px, 1fr))',
      },
      objectPosition: {
        'doctor-strange': '50% 20%'
      }
    },
  },
  plugins: [],
}
