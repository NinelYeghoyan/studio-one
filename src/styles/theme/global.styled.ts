import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    border: 5px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 10px;
    background-color: ${(p) => p.theme.palette.gray04};
  }

  html,
  body,
  #root {
    height: 100%;
    user-select: none;
  }
  
  body {
     font-family: ${(p) => p.theme.typography.fontFamily.montserrat}, sans-serif;
     font-size: ${(p) => p.theme.typography.fontSize.p16.text};
     line-height: ${(p) => p.theme.typography.fontSize.p16.leading};
     font-weight: ${(p) => p.theme.typography.fontWeight.normal};
     background-color: ${(p) => p.theme.palette.background};
     color: ${(p) => p.theme.palette.foreground};
  }
`;

export default GlobalStyles;
