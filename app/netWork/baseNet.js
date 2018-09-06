
const reqUrl = {
    loginToken: global_BASEURL + '/api/User/userRewardInfo',//用户奖励金详情
};

let CryptoJS = require('crypto-js');

/*** 对请求数据进行加密*/
function serviceRequestEncryption(bodyData) {
    let preKey = '87749CECEA24B1C314CC27CF7952EBC3';  //Md5加密（32位大写）
    let tempBodyData = [];
    tempBodyData = bodyData;
    tempBodyData["isAjax"] = "1";
    // tempBodyData["user_id"] = USER_UUID;

    let objKeys = Object.keys(tempBodyData);
    objKeys.sort(); //排序

    let signStr = '';
    objKeys.forEach((item) => {
        signStr = signStr + tempBodyData[item];
    });
    signStr = signStr + preKey;

    let md51 = CryptoJS.MD5(signStr).toString();
    let md51Super = md51.toUpperCase();

    md51Super = md51Super.substring(2, 18);
    let md52 = CryptoJS.MD5(md51Super).toString();

    tempBodyData['sign'] = md52.toUpperCase();

    return tempBodyData;
}

/**
 * NetWork_Post post请求方法
 */
const NetWork_Post = function (net_api, bodyData, callback) {
    // 加密
    bodyData = serviceRequestEncryption(bodyData);

    let post_header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    let post_error = {
        code: '404',
        msg: '通信失败'
    };
    let url = reqUrl[net_api];
    let fetchOptions = {
        method: 'POST',
        headers: post_header,
        body: JSON.stringify(bodyData)
    };
    callback({ code: '1', msg: 'ok', data: {} });
    // fetch(url, fetchOptions).then((response) => response.text()).then((responseText) => {
    //     let responseData = JSON.parse(responseText);
    //     callback(responseData);
    // }).catch(error => {
    //     callback(post_error)
    // }).done()
}
/**
 * NetWork_Get
 */
const NetWork_Get = function (net_api, callback) {
    let url = reqUrl[net_api];
    let opt_error;
    let get_error = {
        status: '-1',
        msg: '请求失败'
    };
    //类似封装后的ajax方法
    fetch(url, {
        method: 'GET',
        credentials: 'include'
    }).then((response) => response.text()).then((responseText) => {
        let responseData = JSON.parse(responseText);
        callback(responseData);
    }).catch((error) => {

        callback(get_error);
    })
}
const NetApi = {
    NetWork_Post,
    NetWork_Get
}
module.exports = NetApi;
