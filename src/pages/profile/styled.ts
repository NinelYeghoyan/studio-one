import styled from 'styled-components';

export const StyledProfile = styled.div`
  max-width: 800px;
  border-radius: ${(p) => p.theme.borderRadius.rounded8};
  background-color: ${(p) => p.theme.palette.white};
  box-shadow:
    0 23px 20px -20px ${(p) => p.theme.palette.shadow},
    0 0 15px ${(p) => p.theme.palette.shadowSm};
`;

export const StyledProfileHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray03};
`;

export const StyledProfileTitle = styled.h2`
  font-size: ${(p) => p.theme.typography.fontSize.h4.text};
  line-height: ${(p) => p.theme.typography.fontSize.h4.leading};
  font-weight: ${(p) => p.theme.typography.fontWeight.semibold};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${(p) => p.theme.typography.fontSize.h3.text};
    line-height: ${(p) => p.theme.typography.fontSize.h3.leading};
  }
`;

export const StyledProfileDescription = styled.p`
  color: ${({ theme }) => theme.palette.secondary};
`;

export const StyledProfileInfoSection = styled.div`
  border-radius: ${(p) => p.theme.borderRadius.rounded4};
  background-color: ${({ theme }) => theme.palette.gray02};
  color: ${({ theme }) => theme.palette.secondary};
`;

export const StyledProfileInfoTitle = styled.h3`
  font-size: ${(p) => p.theme.typography.fontSize.h6.text};
  line-height: ${(p) => p.theme.typography.fontSize.h6.leading};
  font-weight: ${(p) => p.theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.palette.foreground};
`;
