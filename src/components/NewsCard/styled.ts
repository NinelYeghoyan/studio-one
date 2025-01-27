import styled from 'styled-components';

export const StyledNewsCard = styled.div`
  border-radius: ${(p) => p.theme.borderRadius.rounded8};
  background-color: ${(p) => p.theme.palette.white};
  box-shadow:
    0 23px 20px -20px ${(p) => p.theme.palette.shadow},
    0 0 15px ${(p) => p.theme.palette.shadowSm};

  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);

    .action-btn {
      opacity: 1;
    }
  }

  .action-btn {
    top: 10px;
    right: 10px;
    opacity: 0;
    transition: opacity 0.2s;
  }
`;

export const StyledNewsImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

export const StyledNewsTitle = styled.h3`
  font-size: ${(p) => p.theme.typography.fontSize.h6.text};
  line-height: ${(p) => p.theme.typography.fontSize.h6.leading};
  font-weight: ${(p) => p.theme.typography.fontWeight.medium};
`;

export const StyledNewsDescription = styled.p`
  color: ${(p) => p.theme.palette.secondary};
`;

export const StyledFibNumber = styled.span<{ $isPrime: boolean }>`
  font-size: ${(p) => p.theme.typography.fontSize.p12.text};
  line-height: ${(p) => p.theme.typography.fontSize.p12.leading};
  font-weight: ${(p) => p.theme.typography.fontWeight.semibold};

  border-radius: ${(p) => p.theme.borderRadius.rounded4};
  background-color: ${({ $isPrime }) =>
    $isPrime ? (p) => p.theme.palette.yellow : (p) => p.theme.palette.blue};
  color: ${(p) => p.theme.palette.white};
`;

export const StyledNewsSkeleton = styled.div`
  border-radius: ${(p) => p.theme.borderRadius.rounded8};
  background-color: ${(p) => p.theme.palette.white};
  box-shadow:
    0 23px 20px -20px ${(p) => p.theme.palette.shadow},
    0 0 15px ${(p) => p.theme.palette.shadowSm};
`;

export const StyledNewsImageSkeleton = styled.div`
  height: 200px;
`;

export const StyledNewsFibNumberSkeleton = styled.div`
  height: 28px;
  width: 24px;
`;

export const StyledNewsTitleSkeleton = styled.div`
  height: 28px;
  width: 200px;
`;

export const StyledNewsDescriptionSkeleton = styled.div`
  height: 10px;
  width: 100%;

  ~ div {
    margin-top: 4px;
  }
`;
