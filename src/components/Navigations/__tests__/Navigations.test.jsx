import React from 'react';
import { shallow } from 'enzyme';
import Navigations from '../Navigations';

test('renders Navigations', () => {
  const wrapper = shallow(
    <Navigations />,
  );
  expect(wrapper).toMatchSnapshot();
});
