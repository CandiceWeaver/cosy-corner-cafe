'use client'

import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import SectionOuterContainer from '../components/section-outer-container';
import theme from '@/globalTheme';

const MenuHighlightsSection = () => {
  return (
    <SectionOuterContainer backgroundColor={theme.colors.secondary}>
      <h3>Menu Highlights</h3>
      <MenuGrid>
        <MenuBox>
          <h4>Coffee</h4>
            <p><em>Freshly brewed specialty coffees, perfect for your daily pick-me-up.</em></p>
          <p>Signature Flat White – £3.20</p>
          <p>Vanilla Cold Brew – £3.80</p>
          <p>Mocha Magic – £3.50</p>
        </MenuBox>

        <MenuBox>
          <h4>Pastries</h4>
            <p><em>Handmade daily—flaky, sweet, and perfect with your coffee.</em></p>
          <p>Almond Croissant – £2.60</p>
          <p>Choco Swirl Danish – £2.80</p>
          <p>Blueberry Muffin – £2.50</p>
        </MenuBox>

        <MenuBox>
          <h4>Light Meals</h4>
            <p><em>Wholesome bites made with fresh, seasonal ingredients.</em></p>
          <p>Avocado Toast – £5.00</p>
          <p>Caprese Salad – £4.80</p>
          <p>Soup of the Day – £4.20</p>
        </MenuBox>
      </MenuGrid>
<StyledButtonWrapper>
  <Button text='Download Full Menu (PDF)' customWidth='20rem' />
</StyledButtonWrapper>
    </SectionOuterContainer>
  );
};

export default MenuHighlightsSection;

const MenuGrid = styled.div`
  width: 100%;
  max-width: 950px;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.xl} 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MenuBox = styled.div`
  flex: 1 1 250px;
  max-width: 300px;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  button, a {
    width: 20rem;
    max-width: 90vw;  /* Responsive max width */
  }
  
  @media (max-width: 600px) {
    button, a {
      width: 100%;
    }
  }
`;

