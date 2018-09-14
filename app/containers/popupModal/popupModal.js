import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import { CachedImage, ImageCache } from 'react-native-img-cache'
import Modal from 'react-native-modalbox'
export default class PopupModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='弹出层'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => { this.setState({ isOpen: true }) }}
                >
                    <Text>
                        显示modal
                    </Text>
                </TouchableOpacity>
                <Modal
                    //-- 是否显示弹出层
                    isOpen={this.state.isOpen}
                    coverScreen={true}
                    //-- 向下滑动关闭弹出层
                    swipeToClose={false}
                    //-- 点击modal之外，关闭弹出层
                    backdropPressToClose={true}
                    style={{ height: 300 }}
                    //-- 弹出层位置（top center bottom）
                    position={"bottom"}
                    //-- 弹出的开始位置
                    entry={'bottom'}
                    //-- 是否显示阴影（默认显示）
                    backdrop={true}
                    //-- 阴影透明度
                    backdropOpacity={0.4}
                    //-- 阴影颜色
                    backdropColor={'#000'}
                    //-- 弹出速度(毫秒)
                    animationDuration={500}
                    //-- 是否在android点击回退时关闭
                    backButtonClose={false}
                    //-- 当关闭的时候回调
                    onClosed={() => { }}
                    //-- 打开时回调函数
                    onOpened={() => { }}
                    //-- 当关闭的状态改变时回调
                    onClosingState={() => { }}
                    ref={"myModal"}
                >
                    <View><Text>123</Text></View>
                </Modal>
                <ClickView {...this.props} />
            </View>
        )
    }
}