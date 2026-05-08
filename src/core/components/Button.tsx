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

type ButtonVariant = 'text' | 'outline' | 'primary' | 'elevation';

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
    variant = 'primary',
    ...props
}: ButtonProps) => {
    const { colors } = useAppTheme();
  
  const containerColors = useMemo(() => ({
    primary: {
        backgroundColor: colors.primary,
    },
    outline: {  
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.primary
    },
    text: {
        backgroundColor: 'transparent',
    },
    elevation: {
        backgroundColor: colors.surface,
        elevation: 3,
    }
  }), [colors]);

  const textColors = useMemo(() => ({
    primary: {
        color: colors.onPrimary,
    },
    outline: {
        color: colors.primary,
    },
    text: {
        color: colors.primary
    },
    elevation: {
        color: colors.onSurface,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
  }), [colors]);

  return (
    <Pressable style={({pressed}) => [styles.container, containerColors[variant], pressed && styles.pressedOpacity, style]} {...props}> 
        {LeftIcon && <LeftIcon style={styles.icon} width={24} height={24} />}
        <Text style={[styles.labelText, textColors[variant], textStyle]}> 
            {children}
        </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32,
        borderRadius: 12,
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    icon: {
        position: 'absolute',
        left: 16,
    },
    pressedOpacity: {
        opacity: 0.7,
    },
    labelText: {
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 28,
        fontWeight: 500
    }
});
