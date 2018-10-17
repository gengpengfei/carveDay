/**
 * Created by wangdi on 27/11/16.
 */
'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import Orientation from 'react-native-orientation';
import clickView from '../../components/clickView';
export default class Orientations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial: ''
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='判断横竖屏'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    componentWillMount() {
        const initial = Orientation.getInitialOrientation();
        //-- LANDSCAPE
        //-- PORTRAIT
        //-- PORTRAITUPSIDEDOWN
        //-- UNKNOWN
        if (initial === 'PORTRAIT') {
            //-- 竖屏
            this.setState({
                initial: '竖屏'
            })
        } else {
            this.setState({
                initial: '横屏'
            })
        }
    }
    componentDidMount() {
        // Orientation.lockToPortrait(); //-- 竖屏
        // Orientation.lockToLandscape() //-- 向左横屏
        // Orientation.lockToLandscapeLeft() //-- 向左横评
        // Orientation.lockToLandscapeRight() //-- 向右横屏
        // Orientation.unlockAllOrientations()
        Orientation.getOrientation((err, orientation) => {
            if (orientation === 'PORTRAIT') {
                //-- 竖屏
                this.setState({
                    initial: '竖屏'
                })
            } else {
                this.setState({
                    initial: '横屏'
                })
            }
        })
        //-- 获取详细的横竖屏信息
        Orientation.getSpecificOrientation((err, specificOrientation) => {
            //-- LANDSCAPE-LEFT
            //-- LANDSCAPE-RIGHT
            //-- PORTRAIT
            //-- PORTRAITUPSIDEDOWN
            //-- UNKNOWN
        })
        //-- 添加监听
        Orientation.addOrientationListener(this._orientationDidChange);
    }
    _orientationDidChange = (orientation) => {
        if (orientation === 'PORTRAIT') {
            //-- 竖屏
            this.setState({
                initial: '竖屏'
            })
        } else {
            this.setState({
                initial: '横屏'
            })
        }
    }
    componentWillUnmount() {
        //-- 获取信息
        Orientation.getOrientation((err, orientation) => {
            console.log(`Current Device Orientation: ${orientation}`);
        });
        // -- 移除监听
        Orientation.removeOrientationListener(this._orientationDidChange);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Text>当前是{this.state.initial}</Text>
                <View style={{ width: screenWidth, height: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            Orientation.lockToLandscapeLeft()
                        }}
                    >
                        <Text>向左转动屏幕</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            Orientation.lockToLandscapeRight()
                        }}
                    >
                        <Text>向右转动屏幕</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            Orientation.lockToPortrait()
                        }}
                    >
                        <Text>竖直转动屏幕</Text>
                    </TouchableOpacity>
                </View>
                <ClickView {...this.props} />
            </View>
        );
    }
}