import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class AnimationCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='动画实现代码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Platform,
    Image,
    Animated,
    Easing,
} from 'react-native';

import Header from '../../components/header'
import ClickView from '../../components/clickView'
import Styles from '../../theme'
export default class Animation extends Component {
    constructor(props) {
        super(props);
        // 设定一个或多个初始值，包括透明度、位置等。 
        this.state = {
            fadeInOpacity: new Animated.Value(0), // 起始透明度
            translateValue: new Animated.ValueXY({ x: 0, y: 0 }), // 二维坐标（表示动画起始位置）
            rotateValue: new Animated.Value(1),// 旋转+缩放
            sequenceValue1: new Animated.Value(0),// 组合动画
            sequenceValue2: new Animated.ValueXY({ x: 0, y: 0 }),// 组合动画
        };
        this._onPress1 = this._onPress1.bind(this);
        this._onPress2 = this._onPress2.bind(this);
        this._onPress3 = this._onPress3.bind(this);
        this._onPress4 = this._onPress4.bind(this);
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='动画'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    //-- 带有时间的渐变动画
    _onPress1() {
        // this.state.fadeInOpacity.setValue(0.5);     // 动画开始的时候 直接设置值从0.5开始
        Animated.timing(this.state.fadeInOpacity, {
            toValue: 1,//--number | AnimatedValue | {x: number, y: number} | AnimatedValueXY
            duration: 5000,//动画时长,单位毫秒,默认500
            easing: Easing.linear,// 线性的渐变函数
            delay: 1,  //动画执行延迟时间,单位:毫秒,默认为0
        }).start((e) => {
            console.log(e)
        });  //--start方法可以设置一个回调方法，如果动画是正常播放完毕的，那么该回调方法会传入参数{finished:true}。如果动画是在正常播放完毕之前调用了stop来进行停止的话，那么该会回调传入{finished:false}。

        //--  Easing
        //step0 单步执行 直接到最终状态
        //step1 单步执行 停留到动画时长后直接到最终状态
        //linear 线性执行
        //ease  先快后慢
        //quad  先慢后快 2倍加速
        //cubic 先慢后快 3倍加速
        //sin  先慢后快 正弦曲线
        //circle
        //exp  先慢后快 先很慢后很快
        //bounce 从 0-1 然后到 0.5 再到 1

    }
    //-- 以一个初始速度开始并且逐渐减慢停止的动画
    _onPress2() {
        //-- 移动的结束位置
        this.state.translateValue.setValue({ x: 0, y: 0 });
        Animated.decay(this.state.translateValue, {
            velocity: -0.15, //初始速度,必须要填写number | { x: number, y: number }, (正负表示移动的方向) 
            deceleration: 0.997,  //速度减小的比例，加速度。默认为0.997(值越大，速度越慢，移动距离越长)
        }).start();
    }
    //-- 基础的旋转缩放模型动画
    _onPress3() {
        this.state.rotateValue.setValue(0);
        Animated.spring(this.state.rotateValue, {
            toValue: -1,//number | AnimatedValue | { x: number, y: number } | AnimatedValueXY,（正负号代表方向）
            overshootClamping: false,
            restDisplacementThreshold: -0.5, //
            restSpeedThreshold: 50, //静止速度阀值
            velocity: 0, // number | { x: number, y: number }, 初始速度，默认0
            speed: 5,           //速度，默认12(参数>0)
            bounciness: -20,      //反弹系数,默认8(动画停止时的抖动程度)
            // tension: -5,         //张力系数，默认7（最低只能是 -23 ）
            // friction: 10,        //摩擦系数，默认40(动画停止时的抖动程度)
            //注：只能选择tension，friction  或者 bounciness，speed
        }).start();
    }
    //--基础的组合模型动画
    // parallel：同时执行 
    // sequence：顺序执行 
    // stagger：错峰，其实就是插入了delay的parrllel 
    // delay：组合动画之间的延迟方法，严格来讲，不算是组合动画
    _onPress4() {
        Animated.parallel([
            this.state.sequenceValue1.setValue(0),
            Animated.spring(this.state.sequenceValue1, {
                toValue: -1,
                tension: -5,
                friction: 10
            }),
            // Animated.delay(1000),
            this.state.sequenceValue2.setValue({ x: 0, y: 0 }),
            Animated.decay(this.state.sequenceValue2, {
                velocity: -0.15,
                deceleration: 0.997
            })
        ]).start(() => this._onPress4());
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                <View style={{ width: screenWidth, alignItems: 'center' }}>
                    <Animated.View
                        style={{ opacity: this.state.fadeInOpacity }}>
                        <View style={{ width: 60, height: 60, backgroundColor: Styles.primaryColor }}></View>
                    </Animated.View>
                    <TouchableOpacity onPress={this._onPress1}>
                        <View style={{ width: 60, height: 30, borderColor: Styles.primaryColor, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>渐变动画</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: screenWidth, alignItems: 'center' }}>
                    {/* transform是一个变换数组
                    缩放：scale, scaleX, scaleY, 
                    位移：translateX, translateY, 
                    旋转：rotate, rotateX, rotateY, rotateZ,
                    倾斜：skewX , skewY
                    */}
                    <Animated.View
                        style={{
                            transform: [
                                // { translateX: this.state.translateValue.x }, // x轴移动
                                { translateY: this.state.translateValue.y }, // y轴移动
                            ]
                        }}>
                        <View style={{ width: 60, height: 60, borderRadius: 5, backgroundColor: Styles.primaryColor }}></View>
                    </Animated.View>
                    <TouchableOpacity onPress={this._onPress2}>
                        <View style={{ width: 60, height: 30, borderColor: Styles.primaryColor, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>移动动画</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: screenWidth, alignItems: 'center' }}>
                    <Animated.View
                        style={{
                            transform: [
                                {
                                    rotate: this.state.rotateValue.interpolate({ // 旋转，使用插值函数做值映射
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '360deg']
                                    })
                                },
                                {
                                    scale: this.state.rotateValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 1], //-- 缩放的倍数从0到1倍
                                    })
                                },
                            ]
                        }}>
                        <View style={{ width: 60, height: 60, borderRadius: 5, backgroundColor: Styles.primaryColor }}></View>
                    </Animated.View>
                    <TouchableOpacity onPress={this._onPress3}>
                        <View style={{ width: 60, height: 30, borderColor: Styles.primaryColor, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>旋转动画</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: screenWidth, alignItems: 'center' }}>
                    <Animated.View
                        style={{
                            transform: [
                                { translateY: this.state.sequenceValue2.y },
                                {
                                    rotate: this.state.sequenceValue1.interpolate({ // 旋转，使用插值函数做值映射
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '360deg']
                                    })
                                }
                            ]
                        }}>
                        <View style={{ width: 60, height: 60, borderRadius: 5, backgroundColor: Styles.primaryColor }}></View>
                    </Animated.View>
                    <TouchableOpacity onPress={this._onPress4}>
                        <View style={{ width: 60, height: 30, borderColor: Styles.primaryColor, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>组合动画</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ClickView {...this.props} />
            </View>
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