import { render, screen } from '@testing-library/react';
import ServiceCard from '@/components/ServiceCard';

describe('ServiceCard', () => {
  it('displays service info', () => {
    render(
      <ServiceCard
        title="Test Service"
        description="A helpful description."
        icon="✨"
      />
    );

    expect(screen.getByText('✨')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /test service/i })).toBeInTheDocument();
    expect(screen.getByText(/helpful description/i)).toBeInTheDocument();
  });
});

