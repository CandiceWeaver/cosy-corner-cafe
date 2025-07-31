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
  padding: 4rem 2rem; /* more vertical padding */

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center; /* vertical centering */
    align-items: center; /* horizontal centering */
    height: auto; /* let content drive height */
    gap: 1.5rem;
    padding: 3rem 1.5rem;
  }
`

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.background};
  max-width: 600px;
  text-align: left;
  animation: fadeIn 1s ease-in-out forwards;

  h1 {
    margin: 0 0 1rem;
    font-size: 1.75rem;

    @media (min-width: 768px) {
      font-size: 2.25rem;
    }

    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  h2 {
    margin: 0 0 2rem;
    font-size: 1.25rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%; /* was 60% */
  gap: 1rem;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    gap: 1rem;

    button,
    a {
      width: 100%;
    }
  }
`
