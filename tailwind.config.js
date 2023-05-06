/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'todoshka': "url('/todoshka.jpg')"
      }
    },
  },
  plugins: [],
};
