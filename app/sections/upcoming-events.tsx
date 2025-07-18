'use client'

import React from 'react'
import SectionOuterContainer from '../components/section-outer-container'
import theme from '@/globalTheme'
import styled from 'styled-components'

const UpcomingEvents = () => {
  return (
    <SectionOuterContainer
      backgroundColor={theme.colors.background}
      id='events'>
      <h3>Upcoming Events</h3>
      <EventsColumn>
        <EventBox>
          <h4>Live Acoustic Night</h4>
          <p>
            <em>Saturday, July 13 · 7:00 PM</em>
          </p>
          <p>
            Enjoy local artists performing unplugged sets in a cozy setting.
            Great coffee, great tunes!
          </p>
        </EventBox>

        <EventBox>
          <h4>Sunday Brunch & Board Games</h4>
          <p>
            <em>Sunday, July 21 · 10:00 AM – 2:00 PM</em>
          </p>
          <p>
            Bring friends or make new ones over brunch specials and our
            collection of board games.
          </p>
        </EventBox>

        <EventBox>
          <h4>Coffee Tasting Workshop</h4>
          <p>
            <em>Saturday, July 27 · 3:00 PM</em>
          </p>
          <p>
            Discover flavour profiles, learn brewing tips, and taste rare beans
            with our baristas.
          </p>
        </EventBox>
      </EventsColumn>
    </SectionOuterContainer>
  )
}

export default UpcomingEvents

const EventsColumn = styled.div`
  width: 100%;
  max-width: 950px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => theme.spacing.xl} auto;  /* center horizontally */
  padding: 0 1rem;  /* add side padding for small screens */

  @media (max-width: 480px) {
    padding: 0 ;  /* reduce padding on very small screens */
  }
`;

const EventBox = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }
`;
