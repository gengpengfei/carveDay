import { NetWork_Post,NetWork_Get } from './modelApi';
let CryptoJS = require("crypto-js");


export function getIndex(bodydata,callback) {
    let param = 'param';
    let keyStr = CryptoJS.MD5(param).toString();
    bodydata.keyStr = keyStr;
    let netApi = 'getIndex',reqError = {error:{code:'-1',msg:'通讯失败'}};
    NetWork_Post(netApi,bodydata,callback,reqError);
}