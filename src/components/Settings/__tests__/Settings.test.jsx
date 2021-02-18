import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Settings from '../Settings';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const initialState = {
  randomUsers: {
    users: [],
    loading: false,
    scrolling: false,
  },
};

let store;
test('renders Settings', () => {
  store = mockStore(initialState);
  const wrapper = shallow(
    <Provider store={store}>
      <Settings />
    </Provider>,
  );
  expect(wrapper).toMatchSnapshot();
});
