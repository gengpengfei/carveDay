import React, { Component } from 'react';
import { View, Text, StyleSheet, Slider } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
export default class Sliders extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 10
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='滑块'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Slider
                    style={{ width: screenWidth - 20 }} //-- 样式
                    disabled={false} //-- 是否被禁用
                    maximumTrackTintColor='black' //-- 右侧线条颜色
                    minimumTrackTintColor='red'  //-- 左侧线条颜色
                    minimumValue={5} //-- 最左侧代表的值
                    maximumValue={20}//-- 最右侧代表的值
                    value={this.state.value} //-- 初始值
                    step={0.2} //-- 滑动时数值变化量
                    onValueChange={(value) => { this.setState({ value: value }) }}  //-- 当滑块滑动时
                    onSlidingComplete={(value) => { this.setState({ value: value }) }} //-- 用户结束滑动的时
                />
                <Text>{this.state.value}</Text>
                <ClickView {...this.props} />
            </View>
        );
    }
}
