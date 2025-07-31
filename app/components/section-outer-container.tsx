import React from 'react'
import styled from 'styled-components';

interface SectionOuterContainerProps {
  backgroundColor: string
  id?: string
  children: React.ReactNode
}

const SectionOuterContainer: React.FC<SectionOuterContainerProps> = ({
  backgroundColor,
  id,
  children,
}) => {
  return (
    <OuterContainer $backgroundColor={backgroundColor} id={id}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
}

export default SectionOuterContainer

// Outer wrapper controls background and full-width padding
const OuterContainer = styled.div<{ $backgroundColor?: string }>`
  width: 100%;
  padding: clamp(2rem, 4vw, 4rem);
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`

// Inner container limits content width
const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px; /* keep content from stretching too wide */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
