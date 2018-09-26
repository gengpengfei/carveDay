/**
 * Created by wangdi on 27/11/16.
 */
'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, PanResponder } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
export default class Drag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3', '4', '5']
        }
        this.itemHeight = 50;
        this.items = [];
        this.order = [];
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='鼠标拖拽'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View style={styles.container}>
                {this.state.data.map((item, i) => {
                    this.order.push(item);
                    return (
                        <View
                            {...this._panResponder.panHandlers}
                            ref={(ref) => this.items[i] = ref}
                            key={i}
                            style={[styles.item, { top: i * 50 }]}>
                            <Text style={styles.itemTitle}>{item}</Text>
                        </View>
                    );
                })}
                <ClickView {...this.props} />
            </View>
        );
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            //开启手势响应  
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            //开启移动手势响应
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            //手指触碰屏幕那一刻触发
            onPanResponderGrant: (evt, gestureState) => {
                const { pageY, locationY } = evt.nativeEvent;
                this.index = this._getIdByPosition(pageY);
                this.preY = pageY - locationY;
                let item = this.items[this.index];
                item.setNativeProps({
                    style: {
                        shadowColor: "#000",
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                        shadowOffset: { height: 0, width: 2 },
                        elevation: 10,
                        zIndex: 1000
                    }
                });
            },
            //手指在屏幕上移动触发
            onPanResponderMove: (evt, gestureState) => {
                let top = this.preY + gestureState.dy - header_Height;
                let item = this.items[this.index];
                item.setNativeProps({
                    style: { top: top }
                });
                let collideIndex = this._getIdByPosition(evt.nativeEvent.pageY);
                if (collideIndex !== this.index && collideIndex !== -1) {
                    let collideItem = this.items[collideIndex];
                    collideItem.setNativeProps({
                        style: { top: this._getTopValueYById(this.index) }
                    });
                    [this.items[this.index], this.items[collideIndex]] = [this.items[collideIndex], this.items[this.index]];
                    [this.order[this.index], this.order[collideIndex]] = [this.order[collideIndex], this.order[this.index]];
                    this.index = collideIndex;
                }
            },
            //当有其他不同手势出现，响应是否中止当前的手势
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            //手指离开屏幕触发 
            onPanResponderRelease: (evt, gestureState) => {
                const shadowStyle = {
                    shadowColor: "#000",
                    shadowOpacity: 0,
                    shadowRadius: 0,
                    shadowOffset: { height: 0, width: 0, },
                    elevation: 0,
                    zIndex: 0
                };
                let item = this.items[this.index];
                item.setNativeProps({
                    style: { ...shadowStyle, top: this._getTopValueYById(this.index) }
                });
            },
            //当前手势中止触发
            onPanResponderTerminate: (evt, gestureState) => {

            }
        });
    }
    //-- 判断当前点击的item的id
    _getIdByPosition(pageY) {
        var itemTop = pageY - header_Height
        var id = parseInt(itemTop / this.itemHeight)
        if (id > this.state.data.length - 1) {
            id = this.state.data.length - 1;
        }
        return id;
    }

    _getTopValueYById(id) {
        return id * this.itemHeight;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flexDirection: 'row',
        height: 50,
        width: screenWidth,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#b8b8b8',
        position: 'absolute'
    }
});