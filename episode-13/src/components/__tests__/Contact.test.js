import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

test('Check whether contact component is rendered or not', () => {
  render(<Contact />);

  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});
