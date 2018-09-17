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
                    locations={[0, 0.5, 1]}
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
}