const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
      'build/*.html',
      'build/assets/js/*.js',
    ],
    options: {
      keyframes: true,
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      'primary': `rgb(var(--color-border-primary))`,
      'secondary': `rgb(var(--color-border-secondary))`,
      'danger': `rgb(var(--color-border-danger))`,
    }),
    extend: {
      colors: {
        main: {
          400: `rgb(var(--color-main-400))`,
          500: `rgb(var(--color-main-400))`,
          DEFAULT: `rgb(var(--color-main-600))`,
          700: `rgb(var(--color-main-700))`,
          800: `rgb(var(--color-main-800))`,
        },
        primary: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-primary), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-primary), var(${opacityVariable}, 1))`
          }
          return `rgb(var(--color-primary))`
        },
        secondary: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-secondary), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--color-secondary), var(${opacityVariable}, 1))`
          }
          return `rgb(var(--color-secondary))`
        },
        'primary-light': `rgb(var(--color-primary-text))`,
        'primary-dark': `rgb(var(--dark-color-primary))`,
        'secondary-dark': `rgb(var(--dark-color-secondary))`,
        gray: colors.coolGray,
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};