import Button from '@components/Button';
import {
  StyledFibNumber,
  StyledNewsCard,
  StyledNewsDescription,
  StyledNewsImage,
  StyledNewsTitle,
} from '@components/NewsCard/styled.ts';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

type NewsCardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  fibNumber: number;
  prime: boolean;
  onDelete: () => void;
  onEdit: (news: {
    id: number;
    title: string;
    description: string;
    image: string;
  }) => void;
};

const NewsCard = forwardRef<HTMLDivElement, NewsCardProps>(
  (
    { id, title, description, image, fibNumber, prime, onDelete, onEdit },
    ref,
  ) => {
    const { t } = useTranslation();

    return (
      <StyledNewsCard ref={ref}>
        <div className="relative">
          <StyledNewsImage
            src={image}
            alt={title}
            loading="lazy"
            className="w-full"
          />

          <div className="action-btn flex gap-4 absolute">
            <Button
              onClick={() => onEdit({ id, title, description, image })}
              variant="primary"
              size="extra-small"
              className="px-16"
            >
              {t('news.edit')}
            </Button>
            <Button
              onClick={onDelete}
              variant="destructive"
              size="extra-small"
              className="px-16"
            >
              {t('news.delete')}
            </Button>
          </div>
        </div>

        <div className="px-16 py-16">
          <div className="flex-between mb-8">
            <StyledNewsTitle>{title}</StyledNewsTitle>

            <StyledFibNumber $isPrime={prime} className="px-8 py-4">
              {fibNumber}
            </StyledFibNumber>
          </div>

          <StyledNewsDescription>{description}</StyledNewsDescription>
        </div>
      </StyledNewsCard>
    );
  },
);

export default NewsCard;
