import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({ randomUsers: userReducer });

export default rootReducer;
