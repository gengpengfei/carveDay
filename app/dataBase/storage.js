
//写入缓存
export function setStorage(key, data) {
    storage.save({
        key: key,
        data: data
    });
}
// 获取缓存
export function getStorage(key, callback) {
    storage.load({
        key: key.toString(),
    }).
        then(ret => {   //成功时的回调函数
            callback({
                code: '1',
                data: ret,
            })
        }).
        catch(err => { //失败时的回调函数
            callback({
                code: '-1',
                data: err,
            })
        })
}