'use client'

import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import { responsiveFontSize } from "./utils/typography";
import theme from "@/globalTheme";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
});

 const metadata: Metadata = {
  title: "Cosy Corner Cafe",
  description: "Your friendly neighborhood spot for delicious coffee, homemade treats, and a relaxing atmosphere. Perfect for catching up, working, or unwinding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${playfairDisplay.className} ${sourceSans3.className}`}>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <body className={`${playfairDisplay.className} ${sourceSans3.className}`}>
        {children}
      </body>
      </ThemeProvider>
    </html>
  );
}


const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
html {
  font-size: 16px;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth; /* <<< add this */
}


  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.font.body};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    line-height: ${({ theme }) => theme.fontSize.p.lineHeight};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    overflow-x: hidden;
  }

  h1 {
    font-family: ${({ theme }) => theme.font.heading};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin: ${({ theme }) => theme.spacing.md} 0;
    ${({ theme }) => responsiveFontSize(theme.fontSize.h1, theme)};
  }

  h2 {
    font-family: ${({ theme }) => theme.font.heading};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin: ${({ theme }) => theme.spacing.sm} 0;
    ${({ theme }) => responsiveFontSize(theme.fontSize.h2, theme)};
  }

  h3 {
    font-family: ${({ theme }) => theme.font.heading};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin: ${({ theme }) => theme.spacing.sm} 0;
    ${({ theme }) => responsiveFontSize(theme.fontSize.h3, theme)};
  }

  h4 {
    font-family: ${({ theme }) => theme.font.heading};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin: ${({ theme }) => theme.spacing.xs} 0;
    ${({ theme }) => responsiveFontSize(theme.fontSize.h4, theme)};
  }

  h5 {
    font-family: ${({ theme }) => theme.font.heading};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin: ${({ theme }) => theme.spacing.xs} 0;
    ${({ theme }) => responsiveFontSize(theme.fontSize.h5, theme)};
  }

  h6 {
    font-family: ${({ theme }) => theme.font.heading};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin: ${({ theme }) => theme.spacing.xs} 0;
    ${({ theme }) => responsiveFontSize(theme.fontSize.h6, theme)};
  }

  p, small {
    font-family: ${({ theme }) => theme.font.body};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    line-height: ${({ theme }) => theme.fontSize.p.lineHeight};
    margin: ${({ theme }) => theme.spacing.sm} 0;
  }

  small {
    font-size: ${({ theme }) => theme.fontSize.small.base};
  }

  ol, ul {
    list-style: none;
    padding-left: 0;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

