import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Users from '../Users';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const initialState = {
  randomUsers: {
    page: 0,
    users: [],
    fetch: true,
    loading: false,
  },
};

let store;
test('renders Users', () => {
  store = mockStore(initialState);
  const wrapper = shallow(
    <Provider store={store}>
      <Users />
    </Provider>,
  );
  expect(wrapper).toMatchSnapshot();
});
