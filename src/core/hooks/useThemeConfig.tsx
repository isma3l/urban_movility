import type { Theme } from '@react-navigation/native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

import colors from '../constants/colors';

type AppTheme = Theme & {
  colors: Theme['colors'] & {
    onPrimary: string,
    secondary: string,
    onSecondary: string,
    surface: string,
    onSurface: string,
    onBackground: string,
    surfaceVariant: string,
    onSurfaceVariant: string,
    error: string,
    inputBackground: string,
    inputTextPlaceholder: string,
    success: string,
    onSuccess: string,
  }
}

const AppLightTheme: AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors.light
  },
};

const AppDarkTheme: AppTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...colors.dark
  },
};

export const useAppTheme = (): AppTheme => {
  const colorScheme = useColorScheme();

  return colorScheme === 'dark' ? AppDarkTheme : AppLightTheme;
};
