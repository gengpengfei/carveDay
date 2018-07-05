

'use strict'
import * as TYPES from '../types';

export default function userReducers(state=initUserInfo,action){
    switch (action.type) {
        case TYPES.username_account:
            return{
                ...state,
                username_account:action.username_account,
            }
        case TYPES.password_account:
            return{
                ...state,
                password_account:action.password_account,
            }
        case TYPES.comitpassword_account:
            return{
                ...state,
                comitpassword_account:action.comitpassword_account,
            }
        case TYPES.mobile_account:
            return{
                ...state,
                mobile_account:action.mobile_account,
            }
        case TYPES.get_regist_code:
            if(action.get_regist_code > 6){
                action.get_regist_code=0;
            }
            return{
                ...state,
                get_regist_code:action.get_regist_code,
            }
        case TYPES.code_account:
            return{
                ...state,
                code_account:action.code_account,
            }
        default:
            return state;
    }

}

const initUserInfo = {
    userId:null,
    get_regist_code:0,
}
