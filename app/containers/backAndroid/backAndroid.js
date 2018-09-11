import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
export default class BackAndroid extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='android连续点击返回键退出应用'
            backPress={() => {
                navigation.goBack();
            }} />,
    })

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);

        //当前路由 跳转离开的时候做个监听
        const didBlurSubscription = this.props.navigation.addListener(
            'didBlur',
            payload => {
                BackHandler.removeEventListener(
                    'hardwareBackPress',
                    this.onBackAndroid
                );
            }
        );

        //由别的路由进入home路由 开启监听
        const willBlurSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {
                BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
            }
        );
    }
    //-- 自定义back键事件
    onBackAndroid = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            BackHandler.exitApp();
            return;
        }
        this.lastBackPressed = Date.now();
        this.refs.toast.show('再按一次退出应用', 1, Toast.CENTER);
        return true;
    };

    render() {
        return (
            <View style={{ height: screenHeight - header_Height }}>
                <Text>android连续点击两次返回键退出应用</Text>
                <ClickView {...this.props} />
            </View>
        )
    }
}