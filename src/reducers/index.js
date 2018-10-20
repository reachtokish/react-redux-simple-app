import { combineReducers } from 'redux';
import UserReducers from './reducer.user';
import ActiveUserReducers from './reducer.active-user';

export const allReducers = combineReducers({
    users: UserReducers,
    activeUser: ActiveUserReducers
})