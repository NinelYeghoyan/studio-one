import styled from 'styled-components';

const StyledButton = styled.button<{ $isFullWidth: boolean }>`
  width: ${(p) => (p.$isFullWidth ? '100%' : 'fit-content')};

  font-family: ${(p) => p.theme.typography.fontFamily.montserrat}, sans-serif;
  font-weight: ${(p) => p.theme.borderRadius.rounded8};

  border: none;
  transition: all 0.3s ease 0.05s;

  &.extra-small {
    height: 26px;
    border-radius: ${(p) => p.theme.borderRadius.rounded4};
    font-size: ${(p) => p.theme.typography.fontSize.p12.text};
    line-height: ${(p) => p.theme.typography.fontSize.p12.leading};
  }

  &.small {
    height: 36px;
    font-size: ${(p) => p.theme.typography.fontSize.p12.text};
    line-height: ${(p) => p.theme.typography.fontSize.p12.leading};
    border-radius: ${(p) => p.theme.borderRadius.rounded4};
  }

  &.medium {
    height: 40px;
    font-size: ${(p) => p.theme.typography.fontSize.p16.text};
    line-height: ${(p) => p.theme.typography.fontSize.p16.leading};
    border-radius: ${(p) => p.theme.borderRadius.rounded4};
  }

  &.large {
    height: 54px;
    font-size: ${(p) => p.theme.typography.fontSize.p16.text};
    line-height: ${(p) => p.theme.typography.fontSize.p16.leading};
    border-radius: ${(p) => p.theme.borderRadius.rounded8};
  }

  &.primary {
    background-color: ${(p) => p.theme.palette.primary};
    color: ${(p) => p.theme.palette.primaryForeground};

    &:hover {
      opacity: 0.9;
    }
  }

  &.secondary {
    background-color: ${(p) => p.theme.palette.secondary};
    color: ${(p) => p.theme.palette.secondaryForeground};

    &:hover {
      opacity: 0.9;
    }
  }

  &.outline {
    border: 1px solid ${(p) => p.theme.palette.outlineForeground};
    background-color: ${(p) => p.theme.palette.outline};
    color: ${(p) => p.theme.palette.outlineForeground};
  }

  &.destructive {
    background-color: ${(p) => p.theme.palette.destructive};
    color: ${(p) => p.theme.palette.destructiveForeground};

    &:hover {
      opacity: 0.9;
    }
  }

  &:disabled {
    pointer-events: none;
    touch-action: none;
    opacity: 0.5;
  }
`;

export default StyledButton;
