import Loader from '@components/Loader';
import PrivateOutlet from '@routes/PrivateOutlet.tsx';
import { routes } from '@routes/routes.ts';
import type { FC } from 'react';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@pages/home'));
const Login = lazy(() => import('@pages/login'));
const News = lazy(() => import('@pages/news'));
const Profile = lazy(() => import('@pages/profile'));

const LazyComponent: FC<{ component: JSX.Element }> = ({ component }) => (
  <Suspense fallback={<Loader />}>{component}</Suspense>
);

const AppRoutes: FC = () => (
  <Routes>
    <Route
      path={routes.home.path}
      element={<LazyComponent component={<Home />} />}
    />
    <Route
      path={routes.login.path}
      element={<LazyComponent component={<Login />} />}
    />
    <Route
      path={routes.news.path}
      element={<LazyComponent component={<News />} />}
    />
    <Route
      path={routes.profile.path}
      element={
        <PrivateOutlet>
          <LazyComponent component={<Profile />} />
        </PrivateOutlet>
      }
    />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;
