import styled from 'styled-components';

export const StyledInput = styled.div`
  > input {
    width: 100%;

    font-family: ${(p) => p.theme.typography.fontFamily.roboto}, sans-serif;
    font-weight: ${(p) => p.theme.typography.fontWeight.normal};

    border: none;
    transition: all 0.3s ease 0.05s;

    &::placeholder {
      font-family: ${(p) => p.theme.typography.fontFamily.montserrat},
        sans-serif;
    }

    &:focus {
      outline: none;
    }

    &.extra-small {
      height: 26px;
      border-radius: ${(p) => p.theme.borderRadius.rounded4};
      font-size: ${(p) => p.theme.typography.fontSize.p12.text};
      line-height: ${(p) => p.theme.typography.fontSize.p12.leading};

      &::placeholder {
        font-size: ${(p) => p.theme.typography.fontSize.p12.text};
        line-height: ${(p) => p.theme.typography.fontSize.p12.leading};
      }
    }

    &.small {
      height: 36px;
      font-size: ${(p) => p.theme.typography.fontSize.p12.text};
      line-height: ${(p) => p.theme.typography.fontSize.p12.leading};
      border-radius: ${(p) => p.theme.borderRadius.rounded4};

      &::placeholder {
        font-size: ${(p) => p.theme.typography.fontSize.p12.text};
        line-height: ${(p) => p.theme.typography.fontSize.p12.leading};
      }
    }

    &.medium {
      height: 40px;
      font-size: ${(p) => p.theme.typography.fontSize.p16.text};
      line-height: ${(p) => p.theme.typography.fontSize.p16.leading};
      border-radius: ${(p) => p.theme.borderRadius.rounded8};

      &::placeholder {
        font-size: ${(p) => p.theme.typography.fontSize.p16.text};
        line-height: ${(p) => p.theme.typography.fontSize.p16.leading};
      }
    }

    &.large {
      height: 54px;
      border-radius: ${(p) => p.theme.borderRadius.rounded8};
      font-size: ${(p) => p.theme.typography.fontSize.p16.text};
      line-height: ${(p) => p.theme.typography.fontSize.p16.leading};

      &::placeholder {
        font-size: ${(p) => p.theme.typography.fontSize.p16.text};
        line-height: ${(p) => p.theme.typography.fontSize.p16.leading};
      }
    }

    &.primary {
      background-color: ${(p) => p.theme.palette.primary};
      color: ${(p) => p.theme.palette.primaryForeground};

      &::placeholder {
        color: ${(p) => p.theme.palette.primaryForeground};
      }

      &:focus {
        outline-color: ${(p) => p.theme.palette.primaryForeground};
      }
    }

    &.secondary {
      background-color: ${(p) => p.theme.palette.white};
      border: 2px solid ${(p) => p.theme.palette.gray03};
      color: ${(p) => p.theme.palette.foreground};

      &::placeholder {
        color: ${(p) => p.theme.palette.gray06};
      }
    }

    &.destructive {
      background-color: ${(p) => p.theme.palette.destructive};
      color: ${(p) => p.theme.palette.destructiveForeground};

      &::placeholder {
        color: ${(p) => p.theme.palette.destructiveForeground};
      }

      &:focus {
        outline-color: ${(p) => p.theme.palette.destructive};
      }
    }
  }
`;
