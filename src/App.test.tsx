import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = MockIntersectionObserver as any;

describe('App Component (Router)', () => {
  it('renders the MainLayout and HeroSection on the home route', () => {
    render(<App />);
    
    // Check for a known element on the home page (e.g. from HeroSection)
    expect(screen.getByText(/Innovate Wave transforms your digital dreams/i)).toBeInTheDocument();
  });
});
