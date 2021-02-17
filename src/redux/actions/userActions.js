import * as actionTypes from '../actionTypes';
import { getRandomUsers } from '../../libs/client/RandomUsersClient';

export const fetchUsers = data => ({
  type: actionTypes.FETCH_USERS,
  users: data,
});
export const stackUsers = data => ({
  type: actionTypes.STACK_USERS,
  users: data,
});
export const filterUsersByName = data => ({
  type: actionTypes.FILTER_BY_NAME,
  users: data,
});
export const loadingUsers = data => ({
  type: actionTypes.LOADING,
  loading: data,
});

export const incrementUsersPage = () => ({ type: actionTypes.INCREMENT_PAGE });

export const stackRandomUsersAction = page => dispatch => {
  dispatch(loadingUsers(true));
  getRandomUsers(page)
    .then(({ data }) => {
      dispatch(stackUsers(data));
      dispatch(loadingUsers(false));
    })
    .catch(error => {
      dispatch(fetchUsers(false));
      return error;
    });
};

export const getRandomUsersAction = page => dispatch => {
  dispatch(loadingUsers(true));
  getRandomUsers(page)
    .then(({ data }) => {
      dispatch(fetchUsers(data));
      dispatch(loadingUsers(false));
    })
    .catch(error => {
      dispatch(fetchUsers(false));
      return error;
    });
};
