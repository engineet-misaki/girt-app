module.exports = {
  mode: 'jit',
  darkMode: 'media', // or 'media' or 'class'
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fancy: ['Dancing Script'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.transition-duration-40': {
          transitionDuration: '40s',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
