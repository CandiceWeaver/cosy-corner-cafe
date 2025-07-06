export const responsiveFontSize = (fontSize: any, theme: any) => `
  font-size: ${fontSize.base};
  letter-spacing: ${fontSize.letterSpacingBase || 'normal'};
  line-height: ${fontSize.lineHeight || 'normal'};

  ${fontSize.md ? `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${fontSize.md};
      letter-spacing: ${fontSize.letterSpacingMd || fontSize.letterSpacingBase || 'normal'};
      line-height: ${fontSize.lineHeight || 'normal'};
    }
  ` : ''}

  ${fontSize.lg ? `
    @media (min-width: ${theme.breakpoints.lg}) {
      font-size: ${fontSize.lg};
      letter-spacing: ${fontSize.letterSpacingLg || fontSize.letterSpacingMd || fontSize.letterSpacingBase || 'normal'};
      line-height: ${fontSize.lineHeight || 'normal'};
    }
  ` : ''}
`;
