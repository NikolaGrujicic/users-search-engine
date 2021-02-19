import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utils';
import Users from '../Users';
import initialState from '../../../redux/stateMock/initialState';
import initialStateLoading from '../../../redux/stateMock/initialStateLoading';

test('renders Users data', () => {
  render(<Users />, { initialState });

  expect(screen.getByText(/brad/i)).toBeInTheDocument();
  expect(screen.getByText(/gibson/i)).toBeInTheDocument();
  expect(screen.getByText(/silverswan131/i)).toBeInTheDocument();
  expect(screen.getByText(/qwerty@example.com/i)).toBeInTheDocument();
});

test('check if modal works properly in users component', () => {
  render(<Users />, { initialState });

  expect(screen.queryByText(/9278 new road/i)).toBeNull();
  expect(screen.queryByText(/kilcoole/i)).toBeNull();
  expect(screen.queryByText(/waterford/i)).toBeNull();
  expect(screen.queryByText(/93027/i)).toBeNull();
  expect(screen.queryByText(/011-962-7516/i)).toBeNull();
  expect(screen.queryByText(/081-454-0666/i)).toBeNull();

  userEvent.click(screen.queryByText('Details'));

  expect(screen.queryByText(/9278 new road/i)).toBeInTheDocument();
  expect(screen.queryByText(/kilcoole/i)).toBeInTheDocument();
  expect(screen.queryByText(/waterford/i)).toBeInTheDocument();
  expect(screen.queryByText(/93027/i)).toBeInTheDocument();
  expect(screen.queryByText(/011-962-7516/i)).toBeInTheDocument();
  expect(screen.queryByText(/081-454-0666/i)).toBeInTheDocument();
});

test('renders Loading when true', () => {
  render(<Users />, { initialStateLoading });

  expect(screen.queryByText(/Loading.../i)).toBeInTheDocument();
});

test('does not render Loading when false', () => {
  render(<Users />, { initialState });

  expect(screen.queryByText(/Loading.../i)).toBeNull();
});
