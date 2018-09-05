'use strice'
import * as TYPE from '../type'
export function userAction(data) {
    return {
        type: TYPE.USER_INFO,
        data: data,
    }
}