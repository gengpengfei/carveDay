

'use strict'
import * as TYPES from '../types';

export default function userInfoReducers(state=initUserInfo,action){
    switch (action.type) {
        case TYPES.username:
            return{
                ...state,
                username:action.username,
            }
        case TYPES.userid:
            console.log(action.userid);
            return{
                ...state,
                userid:action.userid,
            }
        default:
            return state;
    }

}

const initUserInfo = {
    userid:0,
    username:null,
    password:null,
}
