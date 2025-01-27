import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };

    typography: {
      fontFamily: {
        montserrat: string;
        roboto: string;
        condensed: string;
      };

      fontSize: {
        h1: { text: string; leading: string };
        h2: { text: string; leading: string };
        h3: { text: string; leading: string };
        h4: { text: string; leading: string };
        h5: { text: string; leading: string };
        h6: { text: string; leading: string };
        p16: { text: string; leading: string };
        p12: { text: string; leading: string };
      };

      fontWeight: {
        thin: number;
        extralight: number;
        light: number;
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
        black: number;
      };
    };

    borderRadius: {
      rounded4: string;
      rounded8: string;
      rounded12: string;
      rounded16: string;
      rounded20: string;
      rounded24: string;
      rounded28: string;
      rounded32: string;
      rounded36: string;
      roundedFull: string;
    };

    zIndex: {
      z0: string;
      z10: string;
      z20: string;
      z30: string;
      zAuto: string;
    };

    palette: {
      white: string;
      black: string;

      blue: string;
      yellow: string;

      gray01: string;
      gray02: string;
      gray03: string;
      gray04: string;
      gray05: string;
      gray06: string;
      gray07: string;
      gray08: string;

      background: string;
      foreground: string;

      accent: string;
      accentForeground: string;

      primary: string;
      primaryForeground: string;

      secondary: string;
      secondaryForeground: string;

      outline: string;
      outlineForeground: string;

      selected: string;
      selectedForeground: string;

      destructive: string;
      destructiveForeground: string;

      transparent02: string;
      transparent05: string;

      skeletonTransparent: string;
      skeletonTransparent05: string;

      shadowSm: string;
      shadow: string;
    };
  }
}
