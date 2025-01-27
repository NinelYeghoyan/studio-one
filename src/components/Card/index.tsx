import {
  StyledCard,
  StyledCardDescription,
  StyledCardTitle,
} from '@components/Card/styled.ts';
import { normalizeKey } from '@utils/index.ts';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

type CardProps = {
  title: string;
  description: string;
};

const Card: FC<CardProps> = ({ title, description }) => {
  const { t } = useTranslation();

  return (
    <StyledCard className="px-24 py-24 lg:px-32 lg:py-32">
      <StyledCardTitle className="mb-12 lg:mb-16">
        {t(normalizeKey(title))}
      </StyledCardTitle>

      <StyledCardDescription>
        {t(normalizeKey(description))}
      </StyledCardDescription>
    </StyledCard>
  );
};

export default Card;
