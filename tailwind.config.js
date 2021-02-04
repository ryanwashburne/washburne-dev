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
      sans: ['Kumbh Sans', 'Helvetica', 'Arial'],
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
          default: theme.colors.orange[400],
          light: theme.colors.orange[300],
        },
        secondary: {
          default: theme.colors.gray[400],
        },
      },
      scale: {
        '101': '1.01',
        '99': '0.99',
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
