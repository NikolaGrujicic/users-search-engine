import { STACK_USERS, FETCH_USERS, FILTER_BY_NAME, INCREMENT_PAGE, LOADING } from '../actionTypes';

const initialState = {
  users: [],
  fetch: true,
  page: 0,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case STACK_USERS:
      return { ...state, users: state.users.concat(action.users.results) };
    case FETCH_USERS:
      return { ...state, users: action.users.results };
    case FILTER_BY_NAME:
      return { ...state, users: action.users };
    case INCREMENT_PAGE:
      return { ...state, page: state.page + 1 };
    case LOADING:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

export default userReducer;
