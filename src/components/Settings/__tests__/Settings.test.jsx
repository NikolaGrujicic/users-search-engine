import React from 'react';
import renderer from 'react-test-renderer';
import initialState from '../../../redux/stateMock/initialState';
import { render, screen } from '../../../test-utils';
import Settings from '../Settings';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
test('renders correctly', () => {
  const tree = renderer
    .create(<Settings />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders Settings', () => {
  render(<Settings />, { initialState });

  expect(screen.getByText(/Filter users by nationality:/i)).toBeInTheDocument();
  expect(screen.getByText(/All Nationalities/i)).toBeInTheDocument();
  expect(screen.getByText(/United Kingdom/i)).toBeInTheDocument();
  expect(screen.getByText(/Spain/i)).toBeInTheDocument();
  expect(screen.getByText(/Switzerland/i)).toBeInTheDocument();
  expect(screen.getByText(/France/i)).toBeInTheDocument();
});
