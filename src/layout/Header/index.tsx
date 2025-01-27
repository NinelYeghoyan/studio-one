import Navigation from '@components/Navigation';
import { StyledHeader } from '@layout/Header/styled.ts';
import type { FC } from 'react';

const Header: FC = () => {
  return (
    <StyledHeader className="flex items-center sticky">
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
