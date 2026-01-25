import { View as FCView, ViewProps, StyleProp, ViewStyle } from 'react-native';
import { cn } from '../utils';

interface Props extends ViewProps {
  children?: React.ReactNode;
  className?: string;
  safe?: boolean;
}

// problema con safe, si bien aplica un padding top y bottom, elimina cualquier otro padding horizontal 
// que se agregue
export const View = ({ children, className, safe, ...props }: Props) => {
  return (
    <FCView
      className={cn('bg-background dark:bg-background-dark', { 'p-safe': safe }, className)}
      {...props}>
      {children}
    </FCView>
  );
};
