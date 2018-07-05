/*
 * AsyncStorage - 持久化存储
 * AsyncStorage模块对于App客户端来讲是一个简单的，异步，持久化的键-值对存储系统* 该模块的使用可以用来代替本地存储模块
 */
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

var storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,

    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,

    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: null,

    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,

    // sync: require('./sync')  // 这个sync文件是要你自己写的
})

global.storage = storage;
global.global_BASEURL = 'http://10.20.10.39';
