import React from 'react';
import renderer from 'react-test-renderer';
import initialState from '../../../../redux/stateMock/initialState';
import { render, screen } from '../../../../test-utils';
import UsersDetailsModal from '../UsersDetailsModal';

test('renders correctly', () => {
  const tree = renderer
    .create(<UsersDetailsModal />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('check Users Details Modal props are correct', () => {
  render(<UsersDetailsModal
    state="kilcoole"
    city="waterford"
    postcode="93027"
    street="9278 new road"
    phone="011-962-7516"
    cell="081-454-0666"
  />, { initialState });

  expect(screen.queryByText(/9278 new road/i)).toBeInTheDocument();
  expect(screen.queryByText(/kilcoole/i)).toBeInTheDocument();
  expect(screen.queryByText(/waterford/i)).toBeInTheDocument();
  expect(screen.queryByText(/93027/i)).toBeInTheDocument();
  expect(screen.queryByText(/011-962-7516/i)).toBeInTheDocument();
  expect(screen.queryByText(/081-454-0666/i)).toBeInTheDocument();
});
