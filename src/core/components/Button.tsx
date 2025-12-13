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

type Mode = 'text' | 'outline' | 'contained';

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  className?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  mode?: Mode;
  disabled?: boolean;
}

export const Button = ({
  className,
  buttonStyle,
  textStyle,
  mode = 'contained',
  children,
  ...props
}: ButtonProps) => {
  return (
    <Pressable {...props}>
      {({ pressed }) => (
        <View
          className={cn(
            'rounded-xl px-6 py-3',
            modes[mode].background,
            { 'opacity-70': pressed },
            className
          )}>
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
