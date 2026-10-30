import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title and project links', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /welcome to vrionides\.com/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /leaderboards/i })).toHaveAttribute(
    'href',
    'https://leaderboards.vrionides.com'
  );
  expect(screen.getByRole('link', { name: /marcos/i })).toHaveAttribute(
    'href',
    'https://marcos.vrionides.com'
  );
});
