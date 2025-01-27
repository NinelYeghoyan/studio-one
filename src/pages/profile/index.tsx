import Button from '@components/Button';
import { routes } from '@routes/routes.ts';
import { useAppDispatch } from '@store/index.ts';
import { logout } from '@store/slices/authSlice.ts';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  StyledProfile,
  StyledProfileDescription,
  StyledProfileHeader,
  StyledProfileInfoSection,
  StyledProfileInfoTitle,
  StyledProfileTitle,
} from './styled.ts';

const ProfilePage: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate(routes.login.path);
  };

  return (
    <StyledProfile className="py-16 px-16 lg:px-32 lg:py-32 mx-auto lg:mt-36">
      <StyledProfileHeader className="flex-between pb-20 mb-24 lg:mb-32">
        <StyledProfileTitle>{t('profile.title')}</StyledProfileTitle>

        <Button
          type="button"
          variant="destructive"
          className="px-24"
          onClick={handleLogout}
        >
          {t('login.logout')}
        </Button>
      </StyledProfileHeader>

      <div className="flex flex-column gap-20">
        <StyledProfileDescription>
          {t('profile.description')}
        </StyledProfileDescription>

        <StyledProfileInfoSection className="px-16 py-20 lg:px-20">
          <StyledProfileInfoTitle className="mb-16">
            {t('profile.accountInformation.title')}
          </StyledProfileInfoTitle>

          <p>{t('profile.accountInformation.description')}</p>
        </StyledProfileInfoSection>

        <StyledProfileInfoSection className="px-16 py-20 lg:px-20">
          <StyledProfileInfoTitle className="mb-16">
            {t('profile.about.title')}
          </StyledProfileInfoTitle>

          <p>{t('profile.about.description')}</p>
        </StyledProfileInfoSection>
      </div>
    </StyledProfile>
  );
};

export default ProfilePage;
