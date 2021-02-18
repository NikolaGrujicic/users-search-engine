import React from 'react';
import { shallow } from 'enzyme';
import Settings from '../Settings';

test('renders Settings', () => {
  const wrapper = shallow(
    <Settings />,
  );
  expect(wrapper).toMatchSnapshot();
});
