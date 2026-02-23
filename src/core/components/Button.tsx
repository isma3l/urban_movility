import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useMemo } from 'react';
import { useAppTheme } from '../hooks/useThemeConfig';

type ButtonVariant = 'text' | 'outline' | 'contained';

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  variant?: ButtonVariant,
  style?: StyleProp<ViewStyle>,
  LeftIcon?: React.FC<SvgProps>; 
}

export const Button = ({
    children,
    textStyle,
    disabled,
    LeftIcon,
    style,
    variant = 'contained',
    ...props
}: ButtonProps) => {
    const { colors } = useAppTheme();
  
  const containerColors = useMemo(() => ({
    contained: {
        backgroundColor: colors.primary,
    },
    outline: {  
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.primary
    },
    text: {
        backgroundColor: 'transparent',
    }
  }), [colors]);

  const textColors = useMemo(() => ({
    contained: {
        color: colors.primaryText,
    },
    outline: {
        color: colors.primary,
    },
    text: {
        color: colors.primary
    }
  }), [colors]);

  return (
    <Pressable style={({pressed}) => [styles.container, containerColors[variant], pressed && styles.pressedOpacity, style]} {...props}> 
        {LeftIcon && <LeftIcon width={24} height={24} />}
        <Text style={[styles.labelText, textColors[variant], textStyle]}> 
            {children}
        </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32,
        borderRadius: 12,
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    pressedOpacity: {
        opacity: 0.7,
    },
    labelText: {
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 28
    }
});
