import type { Theme } from '@react-navigation/native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

import colors from '../constants/colors';

type AppTheme = Theme & {
  colors: Theme['colors'] & {
    secondary: string,
    surface: string,
    primaryText: string,
    secondaryText: string,
    primarySurfaceText: string,
    secondarySurfaceText: string,
    textMuted: string,
    success: string,
    error: string,
    warning: string,
    successText: string,
    errorText: string,
    warningText: string,
  }
}

const AppDarkTheme: AppTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    card: colors.dark.surface,
    text: colors.dark.primarySurfaceText,
    notification: colors.dark.error,
    ...colors.dark // contiene primary, background y border que son colores del theme
  },
};

const AppLightTheme: AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: colors.light.surface,
    text: colors.light.primarySurfaceText,
    notification: colors.light.error,
    ...colors.light
  },
};

export const useAppTheme = (): AppTheme => {
  const colorScheme = useColorScheme();

  return colorScheme === 'dark' ? AppDarkTheme : AppLightTheme;
};
