import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class WebViewsCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='webView实现代码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `
import React, { Component } from 'react';
import { View, Text, Switch, TouchableOpacity, WebView } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import styles from '../../theme'
export default class WebViews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
        };
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='react-native嵌入web视图'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    onMessage(event) {
        try {
            const action = JSON.parse(event.nativeEvent.data)
            if (action.type === 'setHeight' && action.height > 0) {
                this.setState({ height: action.height })
            }
        } catch (error) {

        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <WebView
                    style={{ height: this.state.height }}
                    //-- 允许执行js
                    javaScriptEnabled={true}
                    //-- 显示url地址
                    source={{ uri: global_BASEURL + '/api/Message/cooperation' }}
                    //-- 控制大小是否自适应
                    automaticallyAdjustContentInsets={true}
                    //-- web交互发送postMessage时触发
                    onMessage={this.onMessage.bind(this)}
                    //-- 加载成功后执行
                    onLoad={() => { }}
                    //-- 加载失败后执行
                    onError={() => { }}
                    //-- 返回一个视图用于显示错误
                    renderError={() => { }}
                />
                <ClickView {...this.props} />
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