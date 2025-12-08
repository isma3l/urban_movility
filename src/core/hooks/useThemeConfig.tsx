import type { Theme } from '@react-navigation/native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';

import colors from '../constants/colors';

const AppDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.dark.secondary,
    background: colors.dark.background,
    card: colors.dark.surface,
    text: colors.dark.onSurface,
    border: colors.dark.border,
    notification: colors.dark.notification,
  },
};

const AppLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.light.secondary,
    background: colors.light.background,
    card: colors.light.surface,
    text: colors.light.onSurface,
    border: colors.light.border,
    notification: colors.light.notification,
  },
};

export const useThemeConfig = (): Theme => {
  const { colorScheme } = useColorScheme();

  return colorScheme === 'dark' ? AppDarkTheme : AppLightTheme;
};
