import { Text as FCText, StyleProp, TextProps, TextStyle } from 'react-native';
import { useAppTheme } from '../hooks/useThemeConfig';
import { useMemo } from 'react';

type TextVariant = 'onPrimary' | 'onSecondary' | 'onSurface' | 'onBackground' | 'onSurfaceVariant';

interface Props extends TextProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  variant?: TextVariant;
}

export const Text = ({ children, style, variant = 'onBackground' ,...props }: Props) => {
  const { colors } = useAppTheme();
  
  const textColor = useMemo( () => ({
    onPrimary: colors.onPrimary,
    onSecondary: colors.onSecondary,
    onSurface: colors.onSurface,
    onBackground: colors.onBackground,
    onSurfaceVariant: colors.onSurfaceVariant
  }), [colors]);

  return (
    <FCText style={[{ color: textColor[variant] }, style]} {...props}>
      {children}
    </FCText>
  );
};
