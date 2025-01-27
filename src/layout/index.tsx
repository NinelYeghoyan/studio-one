import { StyledLayout } from '@layout/styled.ts';
import type { FC, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout className="px-16 py-32 lg:px-32">{children}</StyledLayout>
  );
};

export default Layout;
