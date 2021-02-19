import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/rootReducer';

const middlewares = [thunk];

const enhancers = [applyMiddleware(...middlewares)];

const composeEnhancers = process.env.NODE_ENV !== 'production'
  && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

function render(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState, composeEnhancers(...enhancers)),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return rtlRender(ui, { wrapper: Router });
};

export * from '@testing-library/react';
export * from '@testing-library/jest-dom';
export * from '@testing-library/user-event';

export { render, renderWithRouter };
