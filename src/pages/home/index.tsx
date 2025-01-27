import Card from '@components/Card';
import { mockFeatures } from '@pages/home/_mock.ts';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledHome, StyledHomeSubtitle, StyledHomeTitle } from './styled.ts';

const HomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <StyledHome className="mx-auto lg:mt-36">
      <StyledHomeTitle className="mb-16 lg:mb-20">
        {t('home.subtitle')}
      </StyledHomeTitle>

      <StyledHomeSubtitle className="sm:whitespace-pre-line">
        {t('home.description')}
      </StyledHomeSubtitle>

      <div className="grid grid-cols-auto gap-16 md:gap-24 xl:gap-32 mt-24 lg:mt-36">
        {mockFeatures.map((feature) => {
          return (
            <Card
              key={feature.id}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
    </StyledHome>
  );
};

export default HomePage;
