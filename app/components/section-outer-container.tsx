import React from 'react'
import styled from 'styled-components';

interface SectionOuterContainerProps {
    backgroundColor: string;
  children: React.ReactNode;
}

const SectionOuterContainer: React.FC<SectionOuterContainerProps> = ({backgroundColor, children }) => {
  return (
    <Container $backgroundColor={backgroundColor}>{children}</Container>
  )
}

export default SectionOuterContainer

const Container = styled.div<{ $backgroundColor?: string }>`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor};

  @media (max-width: 600px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;
