import type { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  breakpoints: {
    xs: '481px',
    sm: '601px',
    md: '769px',
    lg: '1025px',
    xl: '1281px',
    '2xl': '1536px',
    '3xl': '1920px',
  },

  typography: {
    fontFamily: {
      montserrat: 'Montserrat',
      roboto: 'Roboto',
      condensed: 'Roboto Condensed',
    },

    fontSize: {
      h1: { text: '2.5rem', leading: '3rem' },
      h2: { text: '2.25rem', leading: '2.5rem' },
      h3: { text: '2rem', leading: '2.75rem' },
      h4: { text: '1.75rem', leading: '2.375rem' },
      h5: { text: '1.5rem', leading: '2rem' },
      h6: { text: '1.25rem', leading: '1.75rem' },
      p16: { text: '1rem', leading: '1.5rem' },
      p12: { text: '0.75rem', leading: '1rem' },
    },

    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },

  borderRadius: {
    rounded4: '4px',
    rounded8: '8px',
    rounded12: '12px',
    rounded16: '16px',
    rounded20: '20px',
    rounded24: '24px',
    rounded28: '28px',
    rounded32: '32px',
    rounded36: '36px',
    roundedFull: '9999px',
  },

  zIndex: {
    z0: '0',
    z10: '10',
    z20: '20',
    z30: '30',
    zAuto: 'auto',
  },

  palette: {
    white: '#ffffff',
    black: '#000000',

    blue: '#10cfd0',
    yellow: '#ebb834',

    gray01: '#f7f9fc',
    gray02: '#f8f9fa',
    gray03: '#eef1f6',
    gray04: '#d9dce8',
    gray05: '#c4c5c7',
    gray06: '#8d8d8d',
    gray07: '#666666',
    gray08: '#454545',

    background: '#f9fbfd',
    foreground: '#0c2236',

    accent: '#7B2CBF',
    accentForeground: '#ffffff',

    primary: '#6fb0f9',
    primaryForeground: '#ffffff',

    secondary: '#666666',
    secondaryForeground: '#ffffff',

    outline: 'transparent',
    outlineForeground: '#0d0d0d',

    selected: '#33b16b',
    selectedForeground: '#ffffff',

    destructive: '#ff5574',
    destructiveForeground: '#ffffff',

    transparent02: 'rgba(0, 0, 0, 0.2)',
    transparent05: 'rgba(0, 0, 0, 0.5)',

    skeletonTransparent: 'rgba(36, 37, 41, 0)',
    skeletonTransparent05: 'rgba(36, 37, 41, 0.5)',

    shadowSm: 'rgba(115, 162, 208, 0.06)',
    shadow: 'rgba(115, 162, 208, 0.1)',
  },
};

export default defaultTheme;
