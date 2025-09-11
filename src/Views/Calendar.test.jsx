import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Calendar from './Calendar';

// Mock the Google Calendar embed component to avoid network/DOM issues
vi.mock('react-embedded-google-calendar', () => ({
  ReactEmbeddedGoogleCalendar: (props) => (
    <div data-testid="calendar-embed" {...props} />
  ),
}));

// Silence animations
vi.mock('react-awesome-reveal', () => ({
  Fade: ({ children }) => <>{children}</>,
}));

describe('Calendar view', () => {
  it('renders heading and embed placeholder', () => {
    render(<Calendar />);
    expect(screen.getByText('Future Events')).toBeInTheDocument();
    expect(screen.getByTestId('calendar-embed')).toBeInTheDocument();
  });
});

