import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class StoragesCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='缓存组件教程'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `安装组件：
npm install react-native-storage --save

初始化配置：
这里为了方便使用在index.js里面引入进来，放到global全局变量里了
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

导出方法：
//写入缓存
export function setStorage(key, data, expires = null) {
    var data = {
        key: key.toString(),
        id: 125,
        data: data
    }
    if (parseInt(expires) > 0) {
        data.expires = parseInt(expires);
    }
    console.log(data)
    storage.save(data);
}
// 获取缓存
export function getStorage(key, callback) {
    storage.load({
        //-- key
        key: key.toString(),
        //-- 根据key和id进行双重判断(用处不多，暂时不考虑)
        id: 125,
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

//-- 移除缓存
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

使用方式：
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../components/header'
import styles from '../../theme'
import ClickView from '../../components/clickView'
import { getStorage, setStorage, getIdsForKey, getAllDataForKey, clearMapForKey, clearMap, removeStorage } from '../../dataBase/storage'
export default class Storages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            times: null
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='缓存技术'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    //-- 保存数据
    _saveUserName = () => {
        setStorage('username', this.state.name, parseInt(this.state.times) * 1000)
    }
    //-- 获取数据
    _getUserName = () => {
        getStorage('username', (res) => {
            var { code, data } = res;
            if (code == '1') {
                alert(data)
            }
        });
    }
    //-- 
    _getIdsForKey = () => {
        getIdsForKey('username', (res) => {
            var { code, data } = res;
            if (code == '1') {
                alert(data)
            }
        })
    }

    _getAllDataForKey = () => {
        getAllDataForKey('username', (res) => {
            var { code, data } = res;
            if (code == '1') {
                alert(data)
            }
        })
    }

    _clearMapForKey = () => {
        clearMapForKey('username')
    }

    __clearMap = () => {
        clearMap();
    }
    _removeStorage = () => {
        removeStorage('username', 125)
    }

    _onChangeName = (text) => {
        this.setState({
            name: text
        })
    }
    _onChangeTimes = (text) => {
        this.setState({
            times: text
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Text>用户名：</Text>
                    <TextInput
                        //-- 兼容android 去掉底边框
                        underlineColorAndroid="transparent"
                        style={{
                            height: 30,
                            width: 60,
                            borderColor: styles.primaryColor,
                            borderWidth: 1,
                            fontSize: 16,
                            padding: 0
                        }}
                        onChangeText={this._onChangeName}
                        //-- 输入框的值
                        value={this.state.name}
                    />
                    <Text>存储时间：</Text>
                    <TextInput
                        //-- 兼容android 去掉底边框
                        underlineColorAndroid="transparent"
                        style={{
                            height: 30,
                            width: 60,
                            borderColor: styles.primaryColor,
                            borderWidth: 1,
                            fontSize: 16,
                            padding: 0
                        }}
                        onChangeText={this._onChangeTimes}
                        //-- 输入框的值
                        value={this.state.times}
                    />
                </View>
                <View style={{ margin: 10 }}><Text>保存的数据：{this.state.name}</Text><Text>存储时间：{this.state.times}</Text><Text>保存的key：username</Text><Text>保存的id：125</Text></View>
                <TouchableOpacity
                    onPress={this._saveUserName}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 120,
                        height: 40,
                        backgroundColor: styles.primaryColor,
                        borderRadius: 5,
                        margin: 10
                    }}>
                    >
                    <Text>保存用户姓名</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._getUserName}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 120,
                        height: 40,
                        backgroundColor: styles.primaryColor,
                        borderRadius: 5,
                        margin: 10
                    }}>
                    >
                    <Text>获取用户姓名</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._getIdsForKey}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 120,
                        height: 40,
                        backgroundColor: styles.primaryColor,
                        borderRadius: 5,
                        margin: 10
                    }}>
                    >
                    <Text>getIdsForKey</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._getAllDataForKey}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 120,
                        height: 40,
                        backgroundColor: styles.primaryColor,
                        borderRadius: 5,
                        margin: 10
                    }}>
                    >
                    <Text>getAllDataForKey</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._clearMapForKey}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 120,
                        height: 40,
                        backgroundColor: styles.primaryColor,
                        borderRadius: 5,
                        margin: 10
                    }}>
                    >
                    <Text>clearMapForKey</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._clearMap}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 120,
                        height: 40,
                        backgroundColor: styles.primaryColor,
                        borderRadius: 5,
                        margin: 10
                    }}>
                    >
                    <Text>clearMap</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._removeStorage}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 120,
                        height: 40,
                        backgroundColor: styles.primaryColor,
                        borderRadius: 5,
                        margin: 10
                    }}>
                    >
                    <Text>removeStorage</Text>
                </TouchableOpacity>
                <ClickView {...this.props} />
            </View>
        )
    }
}

`;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true}>{code}</Text>
            </ScrollView>
        )
    }
}