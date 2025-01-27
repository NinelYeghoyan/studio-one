import type { FC, InputHTMLAttributes } from 'react';

import { StyledInput } from './styled';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: 'text' | 'email' | 'password';
  variant?: 'primary' | 'secondary' | 'disable';
  sizeType?: 'small' | 'medium' | 'large';
  className?: string;
};

const Input: FC<InputProps> = ({
  type = 'text',
  variant = 'secondary',
  sizeType = 'medium',
  className = '',
  ...rest
}) => (
  <StyledInput className={`${className}`}>
    <input className={`${variant} ${sizeType} px-16`} type={type} {...rest} />
  </StyledInput>
);

export default Input;
