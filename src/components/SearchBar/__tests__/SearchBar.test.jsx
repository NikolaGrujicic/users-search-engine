import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../SearchBar';

test('renders Search Bar', () => {
  const wrapper = shallow(
    <SearchBar />,
  );
  expect(wrapper).toMatchSnapshot();
});
