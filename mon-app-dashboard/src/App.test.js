import { render, screen } from '@testing-library/react';
import App from './App';
import PageAccueil from './page/PageAccueil';

test('renders learn react link', () => {
  render(<PageAccueil />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
