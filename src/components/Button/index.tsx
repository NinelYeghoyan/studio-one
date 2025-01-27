import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import StyledButton from './styled';

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive' | 'disable';
  size?: 'extra-small' | 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
  className?: string;
};

const Button: FC<ButtonPropsType> = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  isFullWidth = false,
  className = '',
  ...rest
}) => (
  <StyledButton
    type={type}
    $isFullWidth={isFullWidth}
    className={`${size} ${variant} ${className} cursor-pointer`}
    {...rest}
  >
    {children}
  </StyledButton>
);

export default Button;
