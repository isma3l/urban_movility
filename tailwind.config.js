const colors = require('./src/core/constants/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.light.primary,
        'primary-dark': colors.dark.primary,
        secondary: colors.light.secondary,
        'secondary-dark': colors.dark.secondary,
        background: colors.light.background,
        'background-dark': colors.dark.background,
        surface: colors.light.surface,
        'surface-dark': colors.dark.surface,
        onPrimary: colors.light.onPrimary,
        'onPrimary-dark': colors.dark.onPrimary,
        onSecondary: colors.light.onSecondary,
        'onSecondary-dark': colors.dark.onSecondary,
        onBackground: colors.light.onBackground,
        'onBackground-dark': colors.dark.onBackground,
        onSurface: colors.light.onSurface,
        'onSurface-dark': colors.dark.onSurface,
        mutedText: colors.light.mutedText,
        'mutedText-dark': colors.dark.mutedText,
        success: colors.light.success,
        'success-dark': colors.dark.success,
        error: colors.light.error,
        'error-dark': colors.dark.error,
        warning: colors.light.warning,
        'warning-dark': colors.dark.warning,
        info: colors.light.info,
        'info-dark': colors.dark.info,
        border: colors.light.border,
        'border-dark': colors.dark.border,
      },
    },
  },
  plugins: [],
};
