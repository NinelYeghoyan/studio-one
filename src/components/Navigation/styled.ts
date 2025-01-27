import styled from 'styled-components';

export const StyledNav = styled.nav`
  max-width: 1200px;

  > a {
    font-weight: ${(p) => p.theme.typography.fontWeight.medium};
    text-decoration: none;

    border-bottom: 2px solid transparent;
    transition: color 0.2s;
    color: ${(p) => p.theme.palette.secondary};

    &:hover {
      color: ${(p) => p.theme.palette.accent};
    }

    &.active {
      color: ${(p) => p.theme.palette.accent};
      border-color: ${(p) => p.theme.palette.accent};
    }
  }
`;
