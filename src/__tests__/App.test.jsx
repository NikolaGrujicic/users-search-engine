import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import App from '../App';
import '../__mocks__/intersectionObserverMock';

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
it('renders without crashing', () => {
  store = mockStore(initialState);
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
