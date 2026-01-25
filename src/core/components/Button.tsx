import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { cn } from '../utils';
import { SvgProps } from 'react-native-svg';

type Mode = 'text' | 'outline' | 'contained';

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  className?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  mode?: Mode;
  disabled?: boolean;
  LeftIcon?: React.FC<SvgProps>; 
}

// Uso un children en Pressable porque NativeWind no soporta un style con callback
export const Button = ({
  className,
  buttonStyle,
  textStyle,
  LeftIcon,
  mode = 'contained',
  children,
  ...props
}: ButtonProps) => {
  return (
    <Pressable {...props}> 
      {({ pressed }) => (
        <View
          className={cn(
            'flex-row justify-center gap-8 rounded-xl px-6 py-3',
            modes[mode].background,
            { 'opacity-70': pressed },
            className
          )}
          style={buttonStyle}
          >
          {LeftIcon && <LeftIcon width={24} height={24} />}
          <Text className={cn('text-center text-lg', modes[mode].text)} style={textStyle}>
            {children}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

const modes = {
  contained: {
    background: 'bg-primary dark:bg-primary-dark',
    text: 'text-onPrimary dark:text-onPrimary-dark',
  },
  outline: {
    background: 'bg-background dark:bg-background-dark border border-primary dark:border-primary',
    text: 'text-primary dark:text-primary-dark',
  },
  text: {
    background: 'bg-transparent dark:bg-transparent',
    text: 'text-primary dark:text-primary-dark',
  },
};
