import {
  StyledNewsDescriptionSkeleton,
  StyledNewsFibNumberSkeleton,
  StyledNewsImageSkeleton,
  StyledNewsSkeleton,
  StyledNewsTitleSkeleton,
} from '@components/NewsCard/styled.ts';
import Skeleton from '@components/Skeleton';
import type { FC } from 'react';

const NewsSkeleton: FC = () => {
  return (
    <div className="grid grid-cols-auto gap-16 md:gap-24 xl:gap-32 mt-24 lg:mt-36">
      {[...Array(3)].map((_, index) => {
        return (
          <StyledNewsSkeleton key={index}>
            <StyledNewsImageSkeleton>
              <Skeleton />
            </StyledNewsImageSkeleton>

            <div className="px-16 py-16">
              <div className="flex-between mb-8">
                <StyledNewsTitleSkeleton>
                  <Skeleton />
                </StyledNewsTitleSkeleton>

                <StyledNewsFibNumberSkeleton>
                  <Skeleton />
                </StyledNewsFibNumberSkeleton>
              </div>

              {[...Array(6)].map((_, index) => {
                return (
                  <StyledNewsDescriptionSkeleton key={index}>
                    <Skeleton />
                  </StyledNewsDescriptionSkeleton>
                );
              })}
            </div>
          </StyledNewsSkeleton>
        );
      })}
    </div>
  );
};

export default NewsSkeleton;
