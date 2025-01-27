import{d,j as h}from"./index-BHwElSzH.js";const p=d.button`
  width: ${e=>e.$isFullWidth?"100%":"fit-content"};

  font-family: ${e=>e.theme.typography.fontFamily.montserrat}, sans-serif;
  font-weight: ${e=>e.theme.borderRadius.rounded8};

  border: none;
  transition: all 0.3s ease 0.05s;

  &.extra-small {
    height: 26px;
    border-radius: ${e=>e.theme.borderRadius.rounded4};
    font-size: ${e=>e.theme.typography.fontSize.p12.text};
    line-height: ${e=>e.theme.typography.fontSize.p12.leading};
  }

  &.small {
    height: 36px;
    font-size: ${e=>e.theme.typography.fontSize.p12.text};
    line-height: ${e=>e.theme.typography.fontSize.p12.leading};
    border-radius: ${e=>e.theme.borderRadius.rounded4};
  }

  &.medium {
    height: 40px;
    font-size: ${e=>e.theme.typography.fontSize.p16.text};
    line-height: ${e=>e.theme.typography.fontSize.p16.leading};
    border-radius: ${e=>e.theme.borderRadius.rounded4};
  }

  &.large {
    height: 54px;
    font-size: ${e=>e.theme.typography.fontSize.p16.text};
    line-height: ${e=>e.theme.typography.fontSize.p16.leading};
    border-radius: ${e=>e.theme.borderRadius.rounded8};
  }

  &.primary {
    background-color: ${e=>e.theme.palette.primary};
    color: ${e=>e.theme.palette.primaryForeground};

    &:hover {
      opacity: 0.9;
    }
  }

  &.secondary {
    background-color: ${e=>e.theme.palette.secondary};
    color: ${e=>e.theme.palette.secondaryForeground};

    &:hover {
      opacity: 0.9;
    }
  }

  &.outline {
    border: 1px solid ${e=>e.theme.palette.outlineForeground};
    background-color: ${e=>e.theme.palette.outline};
    color: ${e=>e.theme.palette.outlineForeground};
  }

  &.destructive {
    background-color: ${e=>e.theme.palette.destructive};
    color: ${e=>e.theme.palette.destructiveForeground};

    &:hover {
      opacity: 0.9;
    }
  }

  &:disabled {
    pointer-events: none;
    touch-action: none;
    opacity: 0.5;
  }
`,s=({children:e,type:t="button",variant:o="primary",size:r="medium",isFullWidth:i=!1,className:n="",...a})=>h.jsx(p,{type:t,$isFullWidth:i,className:`${r} ${o} ${n} cursor-pointer`,...a,children:e});export{s as B};
