import { View as FCView, ViewProps, StyleProp, ViewStyle } from 'react-native';
import { cn } from '../utils';

interface Props extends ViewProps {
  children?: React.ReactNode;
  className?: string;
  safe?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const View = ({ children, className, safe, style, ...props }: Props) => {
  return (
    <FCView
      className={cn('bg-background dark:bg-background-dark', { 'p-safe': safe }, className)}
      style={style}
      {...props}>
      {children}
    </FCView>
  );
};
