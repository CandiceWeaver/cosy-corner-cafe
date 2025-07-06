'use client'

import React from 'react'
import Navigation from '../components/navigation'
import styled from 'styled-components'
import Button from '../components/button'

const HeroSection = () => {
  return (
    <OuterContainer>
        <Navigation/>
        <HeroContainer>
<HeroTextContainer>
            <h1>Your Neighbourhood Coffee Escape</h1>
            <h2>Specialty coffees & homemade treats</h2>
            <ButtonContainer>
                <Button text='Book a table'/>
                <Button text='View menu' secondary/>
                </ButtonContainer>
            </HeroTextContainer>
        </HeroContainer>
    </OuterContainer>
  )
}

export default HeroSection

const OuterContainer = styled.div`
  width: 100%;
  height: 95vh;
  background-image: linear-gradient(rgba(75,46,43,0.25), rgba(75,46,43,0.25)), url('/hero.png');
  background-size: cover;
  background-position: bottom;
  color: ${({ theme }) => theme.colors.primary};
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  height: 85%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 2rem 1rem;
    gap: 1.5rem;
  }
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.background};
  max-width: 600px;
  text-align: left;

  h1 {
    margin: 0 0 1rem;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  h2 {
    margin: 0 0 2rem;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 1rem;

    button, a {
      width: 100%; /* Make buttons full width on mobile */
    }
  }
`;
