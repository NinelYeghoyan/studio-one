import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${(p) => p.theme.palette.transparent05};
  z-index: ${(p) => p.theme.zIndex.z30};
`;

export const StyledModalContent = styled.div`
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;

  border-radius: ${(p) => p.theme.borderRadius.rounded8};
  background-color: ${(p) => p.theme.palette.white};
`;

export const StyledModalTitle = styled.h2`
  font-weight: ${(p) => p.theme.typography.fontWeight.semibold};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${(p) => p.theme.typography.fontSize.h6.text};
    line-height: ${(p) => p.theme.typography.fontSize.h6.leading};
  }
`;
