'use strice'
import * as TYPE from '../type'
export function userAction(data = { mobile: '153****5237', name: 'MR.geng' }) {
    return {
        type: TYPE.USER_INFO,
        data: data,
    }
}