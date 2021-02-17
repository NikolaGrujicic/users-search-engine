import React from 'react';
import { shallow } from 'enzyme';
import UsersDetailsModal from '../UsersDetailsModal';

test('renders Users Details Modal', () => {
  const wrapper = shallow(
    <UsersDetailsModal />,
  );
  expect(wrapper).toMatchSnapshot();
});
