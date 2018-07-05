/**
 * Created by Administrator on 2017/10/9.
 */
import * as TYPES from '../types';
export function userAccountAction(type,param) {
    switch (type){
        case TYPES.username_account:
            return{
                type:TYPES.username_account,
                username_account:param,
            }
        case TYPES.password_account:
            return{
                type:TYPES.password_account,
                password_account:param,
            }
        case TYPES.comitpassword_account:
            return{
                type:TYPES.comitpassword_account,
                comitpassword_account:param,
            }
        case TYPES.mobile_account:
            return{
                type:TYPES.mobile_account,
                mobile_account:param,
            }
        case TYPES.get_regist_code:
            return{
                type:TYPES.get_regist_code,
                get_regist_code:param+1,
            }
        case TYPES.code_account:
            return{
                type:TYPES.code_account,
                code_account:param,
            }
    }
}