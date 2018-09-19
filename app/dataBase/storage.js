//写入缓存
export function setStorage(key, data, expires = null) {
    var data = {
        key: key.toString(),
        // id: '1'
        data: data
    }
    if (parseInt(expires) > 0) {
        data.expires = expires
    }
    storage.save(data);
}
// 获取缓存
export function getStorage(key, callback) {
    storage.load({
        //-- key
        key: key.toString(),
        //-- 根据key和id进行双重判断
        // id: '1',
        //-- 当获取不到数据时，调用相应的同步方法（默认true）
        autoSync: true,
        //-- 如果访问的数据过期，在调用同步方法时是否返回过时的数据（默认true）
        syncInBackground: true,
        //-- 将额外的参数传递给同步方法
        syncParams: {
            extraFetchOptions: {

            },
            someFlag: true,
        },
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

//-- 获取当前key下对应的所有id
export function getIdsForKey(key, callback) {
    storage.getIdsForKey(key.toString())
        .then(ids => {
            callback({
                code: '1',
                data: ids,
            })
        });
}

//-- 获取当前key下的所有id的数据
export function getAllDataForKey(key, callback) {
    storage.getAllDataForKey(key.toString())
        .then(res => {
            callback({
                code: '1',
                data: res,
            })
        });
}

//-- 根据key清楚数据
export function clearMapForKey(key) {
    storage.clearMapForKey(key.toString())
}

export function removeStorage(key, id = null) {
    var data = { key: key.toString() }
    if (id) {
        data.id = id
    }
    storage.remove(data)
}

export function clearMap() {
    storage.clearMap();
}
