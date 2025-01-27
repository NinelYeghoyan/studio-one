import{d as h,j as t}from"./index-BHwElSzH.js";const a=h.div`
  > input {
    width: 100%;

    font-family: ${e=>e.theme.typography.fontFamily.roboto}, sans-serif;
    font-weight: ${e=>e.theme.typography.fontWeight.normal};

    border: none;
    transition: all 0.3s ease 0.05s;

    &::placeholder {
      font-family: ${e=>e.theme.typography.fontFamily.montserrat},
        sans-serif;
    }

    &:focus {
      outline: none;
    }

    &.extra-small {
      height: 26px;
      border-radius: ${e=>e.theme.borderRadius.rounded4};
      font-size: ${e=>e.theme.typography.fontSize.p12.text};
      line-height: ${e=>e.theme.typography.fontSize.p12.leading};

      &::placeholder {
        font-size: ${e=>e.theme.typography.fontSize.p12.text};
        line-height: ${e=>e.theme.typography.fontSize.p12.leading};
      }
    }

    &.small {
      height: 36px;
      font-size: ${e=>e.theme.typography.fontSize.p12.text};
      line-height: ${e=>e.theme.typography.fontSize.p12.leading};
      border-radius: ${e=>e.theme.borderRadius.rounded4};

      &::placeholder {
        font-size: ${e=>e.theme.typography.fontSize.p12.text};
        line-height: ${e=>e.theme.typography.fontSize.p12.leading};
      }
    }

    &.medium {
      height: 40px;
      font-size: ${e=>e.theme.typography.fontSize.p16.text};
      line-height: ${e=>e.theme.typography.fontSize.p16.leading};
      border-radius: ${e=>e.theme.borderRadius.rounded8};

      &::placeholder {
        font-size: ${e=>e.theme.typography.fontSize.p16.text};
        line-height: ${e=>e.theme.typography.fontSize.p16.leading};
      }
    }

    &.large {
      height: 54px;
      border-radius: ${e=>e.theme.borderRadius.rounded8};
      font-size: ${e=>e.theme.typography.fontSize.p16.text};
      line-height: ${e=>e.theme.typography.fontSize.p16.leading};

      &::placeholder {
        font-size: ${e=>e.theme.typography.fontSize.p16.text};
        line-height: ${e=>e.theme.typography.fontSize.p16.leading};
      }
    }

    &.primary {
      background-color: ${e=>e.theme.palette.primary};
      color: ${e=>e.theme.palette.primaryForeground};

      &::placeholder {
        color: ${e=>e.theme.palette.primaryForeground};
      }

      &:focus {
        outline-color: ${e=>e.theme.palette.primaryForeground};
      }
    }

    &.secondary {
      background-color: ${e=>e.theme.palette.white};
      border: 2px solid ${e=>e.theme.palette.gray03};
      color: ${e=>e.theme.palette.foreground};

      &::placeholder {
        color: ${e=>e.theme.palette.gray06};
      }
    }

    &.destructive {
      background-color: ${e=>e.theme.palette.destructive};
      color: ${e=>e.theme.palette.destructiveForeground};

      &::placeholder {
        color: ${e=>e.theme.palette.destructiveForeground};
      }

      &:focus {
        outline-color: ${e=>e.theme.palette.destructive};
      }
    }
  }
`,l=({type:e="text",variant:o="secondary",sizeType:r="medium",className:i="",...p})=>t.jsx(a,{className:`${i}`,children:t.jsx("input",{className:`${o} ${r} px-16`,type:e,...p})});export{l as I};
