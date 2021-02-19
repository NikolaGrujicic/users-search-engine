import React from 'react';
import { fireEvent, render } from '../../../test-utils';
import SearchBar from '../SearchBar';

const setup = () => {
  const utils = render(<SearchBar />);
  const input = utils.getByLabelText('search-input');
  return {
    input,
    ...utils,
  };
};
it('typing in search calls onChange', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'qwerty' } });
  expect(input.value).toBe('qwerty');
});
