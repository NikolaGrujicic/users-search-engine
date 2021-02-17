import { STACK_USERS, FETCH_USERS, FILTER_BY_NAME, LOADING, INFINITE_SCROLL } from '../actionTypes';

const initialState = {
  users: [],
  fetch: true,
  loading: false,
  scrolling: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case STACK_USERS:
      return { ...state, users: state.users.concat(action.users.results) };
    case FETCH_USERS:
      return { ...state, users: action.users.results };
    case FILTER_BY_NAME:
      return { ...state, users: action.users };
    case LOADING:
      return { ...state, loading: action.loading };
    case INFINITE_SCROLL:
      return { ...state, scrolling: action.scrolling };
    default:
      return state;
  }
};

export default userReducer;
