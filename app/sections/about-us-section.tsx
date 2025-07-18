'use client'

import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import SectionOuterContainer from '../components/section-outer-container';
import theme from '@/globalTheme';

const AboutUsSection = () => {
  return (
    <SectionOuterContainer backgroundColor={theme.colors.background} id='about'>
      <h3>About Us</h3>
      <AboutContent>
        <AboutTextContainer>
          <p>
            Tucked away in the heart of the neighborhood, Cozy Corner Cafe was
            born from a love of coffee and community. What started as a simple
            dream—to create a welcoming space for locals—has grown into a
            beloved spot where friendships brew as easily as our espresso.
          </p>
          <p>
            We serve carefully crafted specialty coffee, homemade pastries, and
            light meals made with quality, local ingredients. Whether
            you&apos;re grabbing a quick cup on your commute, settling in with
            your laptop, or catching up with friends over brunch, we&apos;re
            here to make you feel right at home.
          </p>
          <p>
            More than just a cafe, we&apos;re a cozy hub for good conversation,
            local art, and weekend events that bring the community together.
            Stop by and experience the charm for yourself—one cup, one smile,
            one moment at a time.
          </p>
        </AboutTextContainer>
        <AboutImageContainer>
          <Image
            src='/about.png'
            alt='stock photo of a cafe and staff'
            sizes='100vw'
            width={600}
            height={400}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </AboutImageContainer>
      </AboutContent>
    </SectionOuterContainer>
  )
}

export default AboutUsSection

const AboutContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.lg} auto 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const AboutTextContainer = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AboutImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 400px;
  overflow: hidden;

  @media (max-width: 768px) {
    max-height: none;
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;


