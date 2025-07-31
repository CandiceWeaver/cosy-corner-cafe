'use client'

import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  text: string;
secondary?:boolean
customWidth?: string;
}

const Button:React.FC<ButtonProps> = ({text,secondary, customWidth}) => {
  return (
<ButtonContainer $secondary={secondary} $customWidth={customWidth} href=''>
                <ButtonText $secondary={secondary}>{text}</ButtonText>
            </ButtonContainer> 
             )
}

export default Button

const ButtonContainer = styled.a<{
  $secondary?: boolean
  $customWidth?: string
}>`
  background-color: ${({ theme, $secondary }) =>
    $secondary ? 'transparent' : theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.sm};
  width: ${({ $customWidth }) => $customWidth ?? '100%'};
  max-width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid
    ${({ theme, $secondary }) =>
      $secondary ? theme.colors.secondary : theme.colors.accent};
  transition: all 0.3s ease-in-out, transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    border-color: ${({ theme, $secondary }) =>
      $secondary ? theme.colors.background : theme.colors.accent};

    & > * {
      color: ${({ theme, $secondary }) =>
        $secondary ? theme.colors.background : theme.colors.primary};
    }
  }

  @media (max-width: 400px) {
    width: 100%;
    max-width: 100%;
  }
`


const ButtonText = styled.p<{$secondary?: boolean}>`
  margin: 0;
  padding: 0;
  color: ${({ theme, $secondary }) => $secondary ? theme.colors.secondary : theme.colors.primary};
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;
