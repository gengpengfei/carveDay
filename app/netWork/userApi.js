import { NetWork_Post,NetWork_Get } from './modelApi';
let CryptoJS = require("crypto-js");


export function login(bodydata,callback) {
    let param = 'param';
    let keyStr = CryptoJS.MD5(param).toString();
    bodydata.keyStr = keyStr;
    let netApi = 'login',reqError = {error:{code:'1',msg:'测试登录成功',data:{'UserId':1,'UserName':'耿'}}};
    NetWork_Post(netApi,bodydata,callback,reqError);
}
export function regist(bodydata,callback) {
    let param = 'param';
    let keyStr = CryptoJS.MD5(param).toString();
    bodydata.keyStr = keyStr;
    let netApi = 'regist';
    let reqError = {error:{code:'1',msg:'测试注册成功',data:{'UserId':1,'UserName':'耿'}}};
    NetWork_Post(netApi,bodydata,callback,reqError);
}

export function getMobileCode(bodydata,callback) {
    let param = 'param';
    let keyStr = CryptoJS.MD5(param).toString();
    bodydata.keyStr = keyStr;
    let netApi = 'getMobileCode';
    let reqError = {error:{code:'1',msg:'获取验证码为123456',data:{'code':123456}}};
    NetWork_Post(netApi,bodydata,callback,reqError);
}