import styled from 'styled-components';

export const StyledHome = styled.div`
  max-width: 1200px;
`;

export const StyledHomeTitle = styled.h1`
  font-size: ${(p) => p.theme.typography.fontSize.h4.text};
  line-height: ${(p) => p.theme.typography.fontSize.h4.leading};
  font-weight: ${(p) => p.theme.typography.fontWeight.semibold};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${(p) => p.theme.typography.fontSize.h3.text};
    line-height: ${(p) => p.theme.typography.fontSize.h3.leading};
  }
`;

export const StyledHomeSubtitle = styled.p`
  text-align: center;
  color: ${(p) => p.theme.palette.secondary};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${(p) => p.theme.typography.fontSize.h6.text};
    line-height: ${(p) => p.theme.typography.fontSize.h6.leading};
  }
`;
