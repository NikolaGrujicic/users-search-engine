import React from 'react';
import { shallow, mount } from 'enzyme';
import UsersDetailsModal from '../UsersDetailsModal';

test('renders Users Details Modal', () => {
  const wrapper = shallow(
    <UsersDetailsModal />,
  );
  expect(wrapper).toMatchSnapshot();
});

test('renders Users Details Modal with props', () => {
  const wrapper = shallow(
    <UsersDetailsModal
      state="California"
      city="Los Angeles"
      postcode="123456"
      street="Queens Boulevard"
      phone="555-333"
      cell="333-555"
    />,
  );

  expect(wrapper).toMatchSnapshot();
});

test('check Users Details Modal props are correct', () => {
  const wrapper = mount(
    <UsersDetailsModal
      state="California"
      city="Los Angeles"
      postcode="123456"
      street="Queens Boulevard"
      phone="555-333"
      cell="333-555"
    />,
  );

  expect((wrapper).prop('state')).toEqual('California');
  expect((wrapper).prop('city')).toEqual('Los Angeles');
  expect((wrapper).prop('postcode')).toEqual('123456');
  expect((wrapper).prop('street')).toEqual('Queens Boulevard');
  expect((wrapper).prop('phone')).toEqual('555-333');
  expect((wrapper).prop('cell')).toEqual('333-555');
});
