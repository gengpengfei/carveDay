/**
 * Created by Administrator on 2017/10/9.
 */
import {combineReducers} from 'redux';
import userAccountReducers from './userAccountReducers';
import userInfoReducers from './userInfoReducers';
export default combineReducers({
    userAccount:userAccountReducers,
    userInfo:userInfoReducers,
})