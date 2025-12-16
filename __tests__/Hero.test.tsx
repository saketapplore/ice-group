import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';

describe('Hero', () => {
  it('renders headline and subtitle', () => {
    render(<Hero />);

    expect(
      screen.getByRole('heading', { name: /innovative/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/world-class corporate events/i)
    ).toBeInTheDocument();
  });

  it('shows primary calls to action', () => {
    render(<Hero />);

    expect(screen.getByRole('button', { name: /our services/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /contact us/i })).toBeInTheDocument();
  });
});

