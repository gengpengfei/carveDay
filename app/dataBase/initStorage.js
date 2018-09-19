import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

//-- 初始化storage存储
var storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,
    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: 1000 * 3600,
    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,
})
global.storage = storage