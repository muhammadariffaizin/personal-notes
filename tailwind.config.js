module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        corn: {
          50: '#FCF9F7',
          100: '#f9f3ee',
          200: '#F1E1CB',
          300: '#EACFA9',
          400: '#E2BC86',
          500: '#DAAA63',
          600: '#AF864E',
          700: '#83613A',
          800: '#583D25',
          900: '#2C1810',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
