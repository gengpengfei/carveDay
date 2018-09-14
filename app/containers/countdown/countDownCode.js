import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class BackAndroidCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='back回退源码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `
import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from '../../theme'
import Header from '../../components/header'
class CountDownView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerCount: this.props.timerCount || 90,  //倒计时时间
            timerTitle: this.props.timerTitle || '获取验证码',  //倒计时按键的提示时间
            counting: false,  //是否开始倒计时，还提示点击反馈（主要还是简单交互）
            selfEnable: true, //此是否可点击
        };

        this._shouldStartCountting = this._shouldStartCountting.bind(this);
        this._countDownAction = this._countDownAction.bind(this);
    };
    //规定类（这个组件）的属性类型，使用时可定义这些属性
    static propTypes = {
        style: PropTypes.object, //此属性的基本类型   对象
        textStyle: Text.propTypes.style,
        onClick: PropTypes.func,
        disableColor: PropTypes.string,
        timerTitle: PropTypes.string,
        enable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
    };

    //倒计时时的时间显示，
    _countDownAction() {
        const codeTime = this.state.timerCount;
        this.interval = setInterval(() => {
            const timer = this.state.timerCount - 1;
            if (timer === 0) {
                //this.interval作用：1、此组件在被卸载的时候，所有有关定时器相关的事件就会自动清除；2、方便找到此定时器
                this.interval && clearInterval(this.interval);
                this.setState({
                    timerCount: codeTime,
                    timerTitle: this.props.timerTitle || '获取验证码',
                    counting: false,
                    selfEnable: true,
                });
            } else {
                this.setState({
                    timerCount: timer,
                    timerTitle: '重新获取('+timer+'s)', //字符串带有变量时，用模板符号
                })
            }
        }, 1000);
    }
    //是否开始倒计时
    _shouldStartCountting(shouldStart) {
        if (this.state.counting) { return };   //防止重复点击?
        if (shouldStart) {
            this._countDownAction();
            this.setState({
                counting: true,
                selfEnable: false,
            })
        } else {
            this.setState({
                selfEnable: true,
            })
        }
    };
    //组件卸载时，解除定时器
    componentWillUnmount() {
        clearInterval(this.interval);
    };
    render() {
        const { onClick, style, textStyle, enable, disableColor } = this.props;
        const { counting, timerTitle, selfEnable } = this.state;
        return (
            <TouchableOpacity
                activeOpacity={counting ? 1 : 0.5}
                onPress={() => {
                    if (!counting && enable && selfEnable) {
                        this.setState({ selfEnable: false });
                        this.props.onClick(this._shouldStartCountting)
                    };
                }}
            >
                <View
                    style={[{ justifyContent: 'center', alignItems: 'center' }, { width: 120, height: 40, ...style }, { backgroundColor: ((!counting && enable && selfEnable) ? style.backgroundColor : disableColor || 'gray') }]}
                >
                    <Text
                        style={[{ fontSize: 14 }, textStyle]}
                    >
                        {timerTitle}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default class CountDown extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='点击获取验证码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View style={{ flex: 1, margin: 30 }}>
                <CountDownView
                    onClick={(_shouldStartCountting) => {
                        _shouldStartCountting(true);
                    }}
                    //-- 倒计时时间
                    timerCount={60}
                    //-- 按钮标题
                    timerTitle={'点击获取验证码'}
                    //-- 文字样式
                    textStyle={{ fontSize: 14 }}
                    //-- 按钮样式
                    style={{ backgroundColor: styles.primaryColor }}
                    //-- 点击之后的背景样式
                    disableColor={'gray'}
                    //-- 是否可使用
                    enable={true}
                />
            </View>
        )
    }
}`;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true}>{code}</Text>
            </ScrollView>
        )
    }
}