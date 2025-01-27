import styled from 'styled-components';

export const StyledAddButton = styled.button`
  border: none;

  width: 60px;
  height: 60px;
  border-radius: ${(p) => p.theme.borderRadius.roundedFull};

  bottom: 20px;
  right: 20px;

  box-shadow: 0 2px 5px ${(p) => p.theme.palette.transparent02};
  background-color: ${(p) => p.theme.palette.primary};
  color: ${(p) => p.theme.palette.primaryForeground};
  transition: all 0.3s ease 0.05s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-5px);
  }
`;
