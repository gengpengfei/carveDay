import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import ClickView from './../../components/clickView'
import { getStorage, setStorage } from '../../dataBase/storage'
import { NetWork_Post } from '../../netWork/baseNet';
import { user_action } from '../../redux/action/user_action'
class Welcome extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //-- token自动登陆
        this._LoginTry();
    }
    _LoginTry = () => {
        //-- 获取本地缓存的token和手机号
        getStorage('loginToken', (data) => {
            console.log('12312312332', data)
            if (data.code == '1') {
                //-- 根据token进行登陆判断
                let formData = {
                    mobile: data.mobile,
                    token: data.token,
                };
                NetWork_Post('loginToken', formData, (responseData) => {
                    let { code, data, msg } = responseData;
                    if (code == '1') {
                        //-- 登陆成功保存用户信息到redux
                        this.props.dispatch(user_action(data));
                        // setTimeout(() => {
                        //     this.props.navigation.navigate("RootTabNav");
                        // }, 2000);
                    } else {
                        //-- 清空缓存
                        setStorage('loginToken', {})
                    }
                })
            } else {
                //-- 为了测试使用（请忽略）
                setStorage('loginToken', { mobile: '153****5237', token: 'ffleind1322hl123ji' })
            }
        })
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("RootTabNav");
                    }}
                >
                    <Image source={require('./src/welcome.png')} style={{ width: screenWidth, height: screenHeight }} />
                </TouchableOpacity>
                <ClickView {...this.props} />
            </View>
        )
    }
}
export default Welcome