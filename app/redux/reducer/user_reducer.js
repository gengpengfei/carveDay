'use strict'
import * as TYPE from '../type'
export default function user_reducer(state = {}, action) {
    switch (action.type) {
        case TYPE.USER_INFO:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}