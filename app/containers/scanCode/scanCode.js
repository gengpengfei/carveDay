import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, Easing } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import { RNCamera } from 'react-native-camera'
export default class ScanCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            moveAnim: new Animated.Value(0)
        };
    }
    componentDidMount() {
        //-- 初始化动画
        this.startAnimation();
    }
    //-- 上下平移的动画
    startAnimation = () => {
        this.state.moveAnim.setValue(0);
        Animated.timing(
            this.state.moveAnim,
            {
                toValue: -200,
                duration: 1500,
                easing: Easing.linear
            }
        ).start(() => this.startAnimation());
    };

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='二维码扫描'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    //  识别二维码
    onBarCodeRead = (result) => {
        const { navigate } = this.props.navigation;
        const { data } = result; //只要拿到data就可以了
        console.log(data)
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    autoFocus={RNCamera.Constants.AutoFocus.on} //-- 是否启用自动对焦 on 是  off 否
                    flashMode={RNCamera.Constants.FlashMode.off} //-- 是否开启照相机的闪光灯 on 是  off 否
                    type={RNCamera.Constants.Type.back}
                    onBarCodeRead={this.onBarCodeRead}  //-- 检测到条码时调用 返回data（数据）和type（条形码类型）
                >
                    <View style={styles.rectangleContainer}>
                        <View style={styles.rectangle} />
                        <Animated.View style={[
                            styles.border,
                            { transform: [{ translateY: this.state.moveAnim }] }]} />
                        <Text style={styles.rectangleText}>将二维码放入框内，即可自动扫描</Text>
                    </View>
                </RNCamera>
                <ClickView {...this.props} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 200,
        width: 200,
        borderWidth: 1,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    },
    rectangleText: {
        flex: 0,
        color: '#fff',
        marginTop: 10
    },
    border: {
        flex: 0,
        width: 200,
        height: 2,
        backgroundColor: '#00FF00',
    }
});