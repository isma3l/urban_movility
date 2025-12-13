import { Text as FCText, TextProps } from 'react-native';
import { cn } from '../utils';

interface Props extends TextProps {
  children?: React.ReactNode;
  className?: string;
  tx?: string;
}

export const Text = ({ children, className, tx, ...props }: Props) => {
  return (
    <FCText className={cn('text-onBackground dark:text-onBackground-dark', className)} {...props}>
      {children}
    </FCText>
  );
};
