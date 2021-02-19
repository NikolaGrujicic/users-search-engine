import React from 'react';
import { screen, renderWithRouter } from '../../../test-utils';
import Header from '../Header';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

test('renders Header', () => {
  renderWithRouter(<Header />);

  expect(screen.queryByText(/Address book/i)).toBeInTheDocument();
  expect(screen.queryByText(/Users/i)).toBeInTheDocument();
  expect(screen.queryByText(/Settings/i)).toBeInTheDocument();
});
