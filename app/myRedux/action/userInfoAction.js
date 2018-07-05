/**
 * Created by Administrator on 2017/10/9.
 */
import * as TYPES from '../types';
export function userInfoAction(type,param) {
    switch (type){
        case TYPES.username:
            return{
                type:TYPES.username,
                username:param,
            }
        case TYPES.userid:
            return{
                type:TYPES.userid,
                userid:param,
            }
    }
}