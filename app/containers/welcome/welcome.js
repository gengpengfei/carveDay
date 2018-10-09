import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import ClickView from './../../components/clickView'
import { getStorage, setStorage } from '../../dataBase/storage'
import { NetWork_Post } from '../../netWork/baseNet';
import { user_action } from '../../redux/action/user_action'
class Welcome extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        header: null
    })
    componentDidMount() {
        //-- token自动登陆
        this._LoginTry();
    }
    _LoginTry = () => {
        //-- 获取本地缓存的token和手机号
        getStorage('loginToken', (data) => {
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
                //-- 测试使用（请忽略）
                setStorage('loginToken', { mobile: '153****5237', token: '子非鱼' })
            }
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现
                    hidden={false}  //是否隐藏状态栏。  
                    // backgroundColor={'green'} //状态栏的背景色  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'default'} // enum('default', 'light-content', 'dark-content')   
                />
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