import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../components/header'
import styles from '../../theme'
import { getStorage, setStorage, getIdsForKey, getAllDataForKey, clearMapForKey, clearMap, removeStorage } from '../../dataBase/storage'
export default class Storages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: '',
            id: '',
            name: ''
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
        setStorage('username', '小明', 2000)
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
        removeStorage('username', 1)
    }
    render() {
        return (
            <View>
                <TextInput
                    //-- 是否在回车时触发提交
                    blurOnSubmit={false}
                    //-- 兼容android 去掉底边框
                    underlineColorAndroid="transparent"
                    style={{
                        height: 40,
                        borderColor: styles.primaryColor,
                        borderWidth: 1,
                        fontSize: 16,
                        padding: 0,
                    }}
                    onChangeText={this._onChangeText}
                    //-- 输入框的值
                    value={this.state.searchStr}
                    //-- 是否支持多行输入
                    multiline={false}
                    //-- 设置输入框最大可输入行数
                    numberOfLines={1}

                />
                <TouchableOpacity
                    onPress={this._saveUserName}
                >
                    <Text>保存用户姓名</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._getUserName}
                >
                    <Text>获取用户姓名</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._getIdsForKey}
                >
                    <Text>getIdsForKey</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._getAllDataForKey}
                >
                    <Text>getAllDataForKey</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._clearMapForKey}
                >
                    <Text>clearMapForKey</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._clearMap}
                >
                    <Text>clearMap</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._removeStorage}
                >
                    <Text>removeStorage</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
