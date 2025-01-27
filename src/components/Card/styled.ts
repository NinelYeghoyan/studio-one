import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: ${(p) => p.theme.borderRadius.rounded8};
  background-color: ${(p) => p.theme.palette.white};
  box-shadow:
    0 23px 20px -20px ${(p) => p.theme.palette.shadow},
    0 0 15px ${(p) => p.theme.palette.shadowSm};
`;

export const StyledCardTitle = styled.h3`
  font-size: ${(p) => p.theme.typography.fontSize.h6.text};
  line-height: ${(p) => p.theme.typography.fontSize.h6.leading};
  font-weight: ${(p) => p.theme.typography.fontWeight.medium};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${(p) => p.theme.typography.fontSize.h5.text};
    line-height: ${(p) => p.theme.typography.fontSize.h5.leading};
  }
`;

export const StyledCardDescription = styled.p`
  text-align: center;
  color: ${(p) => p.theme.palette.secondary};
`;
