// See https://tailwindcss.com/docs/configuration for details
const theme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    container: (theme) => ({
      padding: {
        default: theme('spacing.4'),
        sm: theme('spacing.5'),
        lg: theme('spacing.6'),
        xl: theme('spacing.8'),
      },
    }),
    fontFamily: {
      sans: ['Montserrat'],
      serif: ['Prata'],
    },
    extend: {
      colors: {
        primary: {
          dark: theme.colors.indigo[700],
          default: theme.colors.indigo[500],
          light: theme.colors.indigo[400],
        },
        accent: {
          dark: theme.colors.orange[700],
          default: theme.colors.orange[500],
          light: theme.colors.orange[400],
        },
        secondary: {
          default: theme.colors.gray[400],
        },
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
}
