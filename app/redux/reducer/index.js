import { combineReducers } from 'redux';

import user_reducer from './user_reducer';
export default combineReducers({
    user_info: user_reducer,
});