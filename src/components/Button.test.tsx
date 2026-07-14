import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('handles onClick events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click Me</Button>);
    await user.click(screen.getByText('Click Me'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders an external anchor tag when href starts with http', () => {
    render(<Button href="https://example.com">External</Button>);
    const link = screen.getByRole('link', { name: 'External' });
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('renders a react-router Link when href is internal', () => {
    render(
      <MemoryRouter>
        <Button href="/about">Internal</Button>
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: 'Internal' });
    expect(link).toHaveAttribute('href', '/about');
  });

  it('applies variant classes correctly', () => {
    const { container } = render(<Button variant="outline">Outline</Button>);
    expect(container.firstChild).toHaveClass('border-cyan-400');
  });
});
