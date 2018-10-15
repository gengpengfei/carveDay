import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class ProgressCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='圆形进度条'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `安装：
npm i --save react-native-circular-progress react-native-svg
react-native link react-native-svg

实现代码：
import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Platform,
    TouchableOpacity,
    CameraRoll,
    Easing
} from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
export default class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fill: 10
        };
    }
    componentDidMount() {
        setInterval(() => {
            if (this.state.fill == 100) {
                clearInterval();
            } else {
                this.setState({
                    fill: this.state.fill + 2
                })
            }
        }, 100)
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='圆形进度条'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    _animate = () => {
        //-- 手动移动到10%位置，在2000ms时间里
        this.circularProgress.animate(10, 2000, Easing.linear);
        this.setState({
            fill: 0
        })
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <AnimatedCircularProgress
                    ref={(ref) => this.circularProgress = ref}
                    style={{ width: 120, height: 120 }}
                    size={100} //-- 图像大小
                    width={5}  //-- 圆环宽度
                    backgroundWidth={5} //-- 圆环背景宽度
                    fill={this.state.fill}  //-- 百分比填充进度 0-100
                    prefill={10}   //-- 动画之前已经填充的百分比
                    tintColor="#00e0ff" //-- 圆环的颜色
                    backgroundColor="#3d5875" //-- 圆环背景颜色
                    rotation={0} //-- 圆环的起始点
                    duration={100} //-- 动画时间
                    easing={Easing.linear} //-- 动画的easing
                    lineCap='square'   //-- 进度条的两端形状butt (default)| round |square
                    arcSweepAngle={360} //-- 整个圆的长度
                    onAnimationComplete={() => { }} //-- 动画结束时调用
                >
                    {
                        (fill) => (
                            <Text>
                                {this.state.fill}
                            </Text>
                        )
                    }
                </AnimatedCircularProgress>
                <TouchableOpacity
                    onPress={this._animate}
                >
                    <Text>手动控制</Text>
                </TouchableOpacity>
                <ClickView {...this.props} />
            </View >
        );
    }
}`;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true}>{code}</Text>
            </ScrollView>
        )
    }
}