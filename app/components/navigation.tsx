'use client'

import React from 'react'
import styled from 'styled-components'

const Navigation = () => {
  return (
    <OuterNavContainer>
      <InnerNavContainer>
        <NavLink href=''>
          <LogoContainer>
            <LogoText>Cosy Corner Cafe</LogoText>
          </LogoContainer>
        </NavLink>
        <NavLinksContainer>
          <NavLink href='#about'>About Us</NavLink>
          <NavLink href='#menu'>Menu</NavLink>
          <NavLink href='#events'>Events</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavLinksContainer>
      </InnerNavContainer>
    </OuterNavContainer>
  )
}

export default Navigation

const OuterNavContainer = styled.nav`
  width: 100%;
  background-color: rgba(75, 46, 43, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} 0;
`

const InnerNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`

const LogoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
`

const LogoText = styled.h5`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.primary};
`

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  padding: 0.25rem 0.5rem; /* increases tap area */
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.background};
  }

  /* Underline animation on hover (desktop only) */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.background};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    &::after {
      display: none; /* cleaner for mobile */
    }
  }
`
