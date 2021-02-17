import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import SearchBar from '../SearchBar';

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

test('renders Search Bar', () => {
  store = mockStore(initialState);
  const wrapper = shallow(
    <Provider store={store}>
      <SearchBar />
    </Provider>,
  );
  expect(wrapper).toMatchSnapshot();
});
