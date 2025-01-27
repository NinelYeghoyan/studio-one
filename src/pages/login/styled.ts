import styled from 'styled-components';

export const StyledLogin = styled.div`
  max-width: 400px;

  border-radius: ${(p) => p.theme.borderRadius.rounded8};
  background-color: ${(p) => p.theme.palette.white};
  box-shadow:
    0 23px 20px -20px ${(p) => p.theme.palette.shadow},
    0 0 15px ${(p) => p.theme.palette.shadowSm};
`;

export const StyledLoginTitle = styled.h2`
  font-size: ${(p) => p.theme.typography.fontSize.h4.text};
  line-height: ${(p) => p.theme.typography.fontSize.h4.leading};
  font-weight: ${(p) => p.theme.typography.fontWeight.semibold};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${(p) => p.theme.typography.fontSize.h3.text};
    line-height: ${(p) => p.theme.typography.fontSize.h3.leading};
  }
`;

export const ErrorMessage = styled.div`
  font-size: ${(p) => p.theme.typography.fontSize.p12.text};
  line-height: ${(p) => p.theme.typography.fontSize.p12.leading};
  text-align: center;
  color: ${(p) => p.theme.palette.destructive};
`;
