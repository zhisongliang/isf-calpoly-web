import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

// Make animation and scroll libs inert for tests
vi.mock('react-awesome-reveal', () => ({
  Fade: ({ children }) => <>{children}</>,
}));

vi.mock('react-scroll', () => ({
  Link: ({ children }) => <span>{children}</span>,
}));

describe('App', () => {
  it('renders homepage content', () => {
    render(<App />);
    // Core content from About section (unique text)
    expect(screen.getByText(/What We Do/i)).toBeInTheDocument();
  });
});
