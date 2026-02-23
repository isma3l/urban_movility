import { View as FCView, ViewProps, StyleProp, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '../hooks/useThemeConfig';

interface Props extends ViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  safe?: boolean
}

export const View = ({ children, style, safe, ...props }: Props) => {
  const { colors } = useAppTheme();
  const insets = useSafeAreaInsets();

  return (
    <FCView style={[
      { 
      backgroundColor: colors.background,
        paddingTop: safe ? insets.top : 0, 
        paddingBottom: safe ? insets.bottom : 0
      },
      style]} 
      {...props}>
        {children}
    </FCView>
  );
};
