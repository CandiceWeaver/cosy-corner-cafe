import { DefaultTheme } from 'styled-components'


const theme: DefaultTheme = {
  colors: {
    background: '#FFFAF5',
    primary: '#4B2E2B',
    secondary: '#EAD7C0',
    accent: '#A8BBA8',
  },
  font: {
    heading: '"Playfair Display", serif',
    body: '"Source Sans 3", sans-serif', // or "Open Sans"
  },
  fontWeight: {
    regular: '400',
    semiBold: '600',
    bold: '700',
  },
  fontSize: {
    h1: {
      base: '2rem', // 32px
      md: '2.25rem', // 36px
      lg: '2.5rem', // 40px
      letterSpacingBase: '0.01em',   // ~1%
      letterSpacingMd: '0.015em',    // ~1.5%
      letterSpacingLg: '0.02em',     // ~2%
    },
    h2: {
      base: '1.75rem',
      md: '2rem',
      letterSpacingBase: '0.01em',
      letterSpacingMd: '0.015em',
    },
    h3: {
      base: '1.5rem',
      md: '1.75rem',
      letterSpacingBase: '0.01em',
    },
    h4: {
      base: '1.25rem',
      md: '1.5rem',
      letterSpacingBase: '0.01em',
    },
    h5: {
      base: '1.125rem',
      md: '1.25rem',
      letterSpacingBase: '0.01em',
    },
    h6: {
      base: '1rem',
      letterSpacingBase: '0.01em',
    },
    p: {
      base: '1rem',
      lineHeight: 1.6,
    },
    small: {
      base: '0.875rem',
      lineHeight: 1.6,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  breakpoints: {
    md: '768px',
    lg: '1024px',
  },
};

export default theme;