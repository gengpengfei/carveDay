import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Platform,
    TouchableOpacity,
    CameraRoll
} from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import Toast from 'react-native-root-toast'; // 引入类库
export default class Toasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='轻提示'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    show = () => {
        let message = '这是提示！';
        this.toast && this.toast.destroy();
        this.toast = Toast.show(message, {
            duration: 1000, // toast显示时长
            position: 200, // toast距离底部的位置
            shadow: true, // toast是否出现阴影
            animation: 500, // toast显示/隐藏的时候是否需要使用动画过渡
            hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
            backgroundColor: '',
            shadowColor: '',
            textColor: '',
            delay: 0, // toast显示的延时
            onShow: () => {
                // toast出现回调（动画开始时）
            },
            onShown: () => {
                // toast出现回调（动画结束时）
            },
            onHide: () => {
                // toast隐藏回调（动画开始时）
            },
            onHidden: () => {
                this.toast.destroy();
                this.toast = null;
            }
        });
    };
    toastView = () => {
        this.setState({
            visible: true
        });
        setTimeout(() => this.setState({
            visible: false
        }), 3000);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity
                        onPress={this.show}
                    >
                        <Text>通过api显示</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.toastView}
                    >
                        <Text>通过组件显示</Text>
                    </TouchableOpacity>
                </View>
                <Toast
                    visible={this.state.visible}
                    position={50}
                    shadow={false}
                    animation={true}
                    hideOnPress={true}
                >This is a message</Toast>;
                <ClickView {...this.props} />
            </View>
        );
    }
}

