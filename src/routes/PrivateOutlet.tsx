import { routes } from '@routes/routes.ts';
import { useAppSelector } from '@store/index.ts';
import type { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateOutletProps {
  children: ReactNode;
}

const PrivateOutlet: FC<PrivateOutletProps> = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    return (
      <Navigate to={routes.login.path} state={{ from: location }} replace />
    );
  }

  return <>{children}</>;
};

export default PrivateOutlet;
