import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class BackAndroidCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='渐变色背景代码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `
import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from '../../theme'
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import LinearGradient from 'react-native-linear-gradient'
export default class Gradient extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='背景色渐变'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <LinearGradient
                    //-- 渐变开始位置
                    start={{ x: 0.0, y: 0.0 }}
                    //-- 渐变结束位置
                    end={{ x: 1, y: 1 }}
                    locations={[0, 0.4, 1]}
                    //-- 色彩梯度
                    colors={['#FFD801', '#FF8040', '#F75D59']}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 120,
                        height: 40,
                        paddingLeft: 15,
                        paddingRight: 15,
                        borderRadius: 5
                    }}>
                    <Text style={{ color: '#fff' }}>
                        登录
                    </Text>
                </LinearGradient>
                <ClickView {...this.props} />
            </View >
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