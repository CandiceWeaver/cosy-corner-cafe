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
                <NavLink href="/">About Us</NavLink>
                <NavLink href="/">Menu</NavLink>
                <NavLink href="/">Events</NavLink>
                <NavLink href="/">Contact</NavLink>
                </NavLinksContainer>
        </InnerNavContainer>
    </OuterNavContainer>
  )
}

export default Navigation

const OuterNavContainer = styled.nav`
  width: 100%;
  background-color: rgba(75,46,43,.75);
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
  margin:0;
  padding 0;
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
          transition: all 0.3s ease-in-out;


  
  &:hover {
    color: ${({ theme }) => theme.colors.background}
}    `
