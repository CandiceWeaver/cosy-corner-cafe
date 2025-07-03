/// <reference types="styled-components" />
import 'styled-components'

declare module 'styled-components' {
  interface ResponsiveFontSize {
    base: string
    md?: string
    lg?: string
    letterSpacingBase?: string
    letterSpacingMd?: string
    letterSpacingLg?: string
    lineHeight?: number
  }

  export interface DefaultTheme {
    colors: {
      background: string
      primary: string
      secondary: string
      accent: string
    }
    font: {
      heading: string
      body: string
    }
    fontWeight: {
      regular: string
      semiBold: string
      bold: string
    }
    fontSize: {
      h1: ResponsiveFontSize
      h2: ResponsiveFontSize
      h3: ResponsiveFontSize
      h4: ResponsiveFontSize
      h5: ResponsiveFontSize
      h6: ResponsiveFontSize
      p: ResponsiveFontSize
      small: ResponsiveFontSize
    }
    spacing: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    breakpoints: {
      md: string
      lg: string
    }
  }
}
