'use client'

import React from 'react'
import styled from 'styled-components'
import SectionOuterContainer from '../components/section-outer-container'
import theme from '@/globalTheme'
import Button from '../components/button'
import { LogoInstagram, LogoFacebook } from 'react-ionicons';

const ContactSection = () => {
  return (
    <SectionOuterContainer
      backgroundColor={theme.colors.background}
      id='contact'>
      <h3>Contact Us</h3>
      <ContactContent>
        <FormColumn>
          <ContactForm>
            <ContactFormItem>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' name='name' />
            </ContactFormItem>
            <ContactFormItem>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' />
            </ContactFormItem>
            <ContactFormItem>
              <label htmlFor='message'>Message</label>
              <textarea id='message' name='message' rows={5} />
            </ContactFormItem>

            <ButtonContainer>
              <Button text='Submit' />
            </ButtonContainer>
          </ContactForm>
        </FormColumn>

        <InfoColumn>
          <MapImage src='/map.png' alt='Map' />
          <ContactDetails>
            <p>
              <h6>Address</h6>
              Cozy Corner Cafe
              <br />
              123 Oakwood Lane
              <br />
              Maple Grove, Essex, SS1 2AA
            </p>

            <p>
              📞 01234 567890
              <br />
              📧 hello@cozycorner.com
            </p>

            <SocialIcons>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'>
                <LogoInstagram
                  color={theme.colors.primary}
                  height='30px'
                  width='30px'
                />
              </a>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'>
                <LogoFacebook
                  color={theme.colors.primary}
                  height='30px'
                  width='30px'
                />
              </a>
            </SocialIcons>
          </ContactDetails>
        </InfoColumn>
      </ContactContent>
    </SectionOuterContainer>
  )
}

export default ContactSection

const ContactContent = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.spacing.xl} 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: space-between;
  align-items: flex-start; /* changed to align top */

  @media (max-width: 768px) {
    flex-direction: column;
    margin: ${({ theme }) => theme.spacing.md} 0;
  }
`

const FormColumn = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

   @media (max-width: 480px) {
    padding: 0 ;  /* reduce padding on very small screens */
  }
`;

const ContactForm = styled.form`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
    
`;

const ContactFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.lg} 0;

  input,
  textarea {
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.background};
    font-size: 1rem;
    background-color: white;
  }

  &:first-of-type {
    margin-top: 0;}
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InfoColumn = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

   @media (max-width: 480px) {
    padding: 0 ;  /* reduce padding on very small screens */
  }
`;

const MapImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SocialIcons = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
  display: flex;
  gap: 1rem;

  a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;


