const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
    'build/*.html',
    'build/assets/js/*.js',
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};