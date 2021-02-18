import * as actionTypes from '../actionTypes';
import { getRandomUsers, getRandomUsersByNationality } from '../../libs/client/RandomUsersClient';

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
export const filterUsersByNationality = data => ({
  type: actionTypes.FILTER_BY_NATIONALITY,
  users: data,
});
export const loadingUsers = data => ({
  type: actionTypes.LOADING,
  loading: data,
});
export const infiniteScrolling = data => ({
  type: actionTypes.INFINITE_SCROLL,
  scrolling: data,
});

export const stackRandomUsersAction = () => dispatch => {
  dispatch(loadingUsers(true));
  getRandomUsers()
    .then(({ data }) => {
      dispatch(stackUsers(data));
      dispatch(loadingUsers(false));
    })
    .catch(error => {
      dispatch(loadingUsers(false));
      return error;
    });
};

export const getRandomUsersAction = () => dispatch => {
  dispatch(loadingUsers(true));
  getRandomUsers()
    .then(({ data }) => {
      dispatch(fetchUsers(data));
      dispatch(loadingUsers(false));
    })
    .catch(error => {
      dispatch(loadingUsers(false));
      return error;
    });
};

export const getRandomUsersByNationalityAction = (gb, es, ch, fr) => dispatch => {
  dispatch(loadingUsers(true));
  getRandomUsersByNationality(gb, es, ch, fr)
    .then(({ data }) => {
      dispatch(filterUsersByNationality(data));
      dispatch(loadingUsers(false));
    })
    .catch(error => {
      dispatch(loadingUsers(false));
      return error;
    });
};
