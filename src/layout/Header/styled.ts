import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 60px;

  top: 0;
  z-index: ${(p) => p.theme.zIndex.z20};

  background-color: ${(p) => p.theme.palette.background};
  box-shadow:
    0 15px 20px -20px ${(p) => p.theme.palette.shadow},
    0 0 15px ${(p) => p.theme.palette.shadowSm};
`;
