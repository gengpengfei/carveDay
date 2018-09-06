import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import ClickView from './../../components/clickView'
import { getStorage, setStorage } from '../../dataBase/storageInit'
import { NetWork_Post } from '../../netWork/baseNet';
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
            //-- 根据token进行登陆判断
            let formData = {
                mobile: data.mobile,
                token: data.token,
            };
            NetWork_Post('loginToken', formData, (responseData) => {
                let { code, data, msg } = responseData;
                if (code === 1) {
                    //-- 登陆成功跳转
                    setTimeout(() => {
                        this.props.navigation.navigate("RootTabNav");
                    }, 2000);
                } else {
                    //-- 清空缓存
                    setStorage('loginToken', {});
                }
            })
        })
    }
    render() {
        return (
            <View>
                <Image source={require('./src/welcome.png')} style={{ width: screenWidth, height: screenHeight }} />
                <ClickView {...this.props} />
            </View>
        )
    }
}
export default Welcome