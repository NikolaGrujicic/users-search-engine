import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '../../../test-utils';
import PageNotFound from '../PageNotFound';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
test('renders correctly', () => {
  const tree = renderer
    .create(<PageNotFound />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders Settings', () => {
  render(<PageNotFound />);

  expect(screen.getByText(/The page you are looking for was not found./i)).toBeInTheDocument();
  expect(screen.getByText(/404/i)).toBeInTheDocument();
});
