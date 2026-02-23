import { Text as FCText, StyleProp, TextProps, TextStyle } from 'react-native';
import { useAppTheme } from '../hooks/useThemeConfig';
import { useMemo } from 'react';

type TextVariant = 'title' | 'body' | 'secondary' | 'muted' | 'button' | 'buttonSecondary' | 'error' | 'warning' | 'success';

interface Props extends TextProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  variant?: TextVariant;
}

export const Text = ({ children, style, variant = 'body' ,...props }: Props) => {
  const { colors } = useAppTheme();
  
  const textColor = useMemo( () => ({
    title: colors.primarySurfaceText,
    body: colors.primarySurfaceText,
    secondary: colors.secondarySurfaceText,
    muted: colors.textMuted,
    button: colors.primaryText,
    buttonSecondary: colors.secondaryText,
    error: colors.errorText,
    success: colors.successText,
    warning: colors.warningText
  }), [colors]);

  return (
    <FCText style={[{ color: textColor[variant] }, style]} {...props}>
      {children}
    </FCText>
  );
};
