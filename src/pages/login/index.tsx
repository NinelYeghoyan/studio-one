import Button from '@components/Button';
import Input from '@components/Input';
import { routes } from '@routes/routes.ts';
import { useAppDispatch, useAppSelector } from '@store/index.ts';
import { clearError, login } from '@store/slices/authSlice.ts';
import type { FC, FormEvent } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ErrorMessage, StyledLogin, StyledLoginTitle } from './styled.ts';

const LoginPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated } = useAppSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.profile.path);
    }

    return () => {
      dispatch(clearError());
    };
  }, [isAuthenticated, navigate, dispatch]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await dispatch(
      login({
        username: formData.get('username') as string,
        password: formData.get('password') as string,
      }),
    );
  };

  return (
    <StyledLogin className="py-16 px-16 lg:px-32 lg:py-32 mt-80 mx-auto">
      <StyledLoginTitle className="mb-16 lg:mb-20">
        {t('login.title')}
      </StyledLoginTitle>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-column gap-16">
          <Input
            type="text"
            name="username"
            placeholder={t('login.username')}
            required
            autoComplete="username"
          />

          <Input
            type="password"
            name="password"
            placeholder={t('login.password')}
            required
            autoComplete="password"
          />
        </div>

        {error && <ErrorMessage className="mt-16">{error}</ErrorMessage>}

        <div className="flex justify-center mt-20">
          <Button type="submit" disabled={loading} className="px-24">
            {loading ? t('login.logging') : t('login.title')}
          </Button>
        </div>
      </form>
    </StyledLogin>
  );
};

export default LoginPage;
