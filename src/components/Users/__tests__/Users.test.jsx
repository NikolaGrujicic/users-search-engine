import React from 'react';
import { shallow } from 'enzyme';
import Users from '../Users';

test('renders Users', () => {
  const wrapper = shallow(
    <Users />,
  );
  expect(wrapper).toMatchSnapshot();
});
