/*
 * explain: 接口列表
 * act: @fei
 * time: 2017/10/17 13:46
 */
export const BASEURL = 'http://127.0.0.1';
var reqUrl = {
    baseUrl:BASEURL,
    registUrl:BASEURL + '/Api/Register/addUser',
    getMobileCode:BASEURL + '/Api/Register/addUser',
    getIndex:'http://139.224.220.33:8868/Api/Market/index'
};

export function NetWork_Post(net_api,bodyData,callback,netOptions) {
    let opt_headers,opt_error;
    if (typeof netOptions === 'object') {
        opt_headers = netOptions['headers'];
        opt_error = netOptions['error'];
    };
    post_header = opt_headers?opt_headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
    };
    post_error = opt_error?opt_error:{
        code:'-1',
        msg:'请求失败',
    };
    let url = reqUrl[net_api];
    let fetchOptions = {
        method: 'POST',
        headers:post_header,
        body:JSON.stringify(bodyData),
    }
    fetch(url,fetchOptions)
    .then((response)=>response.text())
    .then((responseText)=>{
        let responseData = JSON.parse(responseText);
        callback(responseData);
    })
    .catch(error=>{
        callback(post_error);
    }).done();
}

exports.NetWork_Get = function (net_api,callback,netOptions) {

    let url = reqUrl[net_api];
    if (typeof netOptions === 'object') {
        opt_error = netOptions['error'];
    };
    get_error = opt_error?opt_error:{
        status:'-1',
        msg:'请求失败',
    };
    fetch(url,{
        method: 'GET',
        credentials: 'include'
    })
    .then((response) => response.text())
    .then((responseText) => {
        let responseData = JSON.parse(responseText);
        callback(responseData);
    })
    .catch((error) => {
        callback(get_error);
    });
};
