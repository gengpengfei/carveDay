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
