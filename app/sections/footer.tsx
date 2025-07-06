'use client'

import React from 'react';
import styled from 'styled-components';
import SectionOuterContainer from '../components/section-outer-container';
import theme from '@/globalTheme';

const Footer = () => {
  return (
    <SectionOuterContainer backgroundColor={theme.colors.secondary}>
      <TopRow>
        <OpeningHours>
          <h6>🕝 Opening Hours</h6>
          <p>Mon–Fri: 8:00am – 6:00pm
            <br/>
Sat–Sun: 9:00am – 4:00pm</p>
        </OpeningHours>

        <NavLinks>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </NavLinks>
      </TopRow>

      <BottomRow>
        <p>© {new Date().getFullYear()} Cozy Corner Cafe. All rights reserved.</p>
      </BottomRow>
    </SectionOuterContainer>
  );
};

export default Footer;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;


const OpeningHours = styled.div`
  flex: 1;
  min-width: 200px;
`;

const NavLinks = styled.nav`
  flex: 1;
  min-width: 200px;

  display: flex;
  flex-direction: column;
  align-items: flex-end; 

  ul {
    list-style: none;
    padding: 0;
    margin: 0;         

    li {
      margin-bottom: 0.25rem;

      &:first-child {
        margin-top: 0;  
      }
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }

   @media (max-width: 600px) {
  align-items: flex-start; 
  }
`;


const BottomRow = styled.div`
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing.sm};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.primary || '#ccc'};
`;
