import React from 'react';
import App from '../App';
import initialState from '../redux/stateMock/initialState';
import { render, screen } from '../test-utils';

test('renders App properly', () => {
  render(<App />, { initialState });

  expect(screen.getByText(/Address book/i)).toBeInTheDocument();
});
