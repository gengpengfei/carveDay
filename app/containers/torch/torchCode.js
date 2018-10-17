import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class StepCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='画图源码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `安装：
npm install --save react-native-torch
react-native link react-native-torch    
  
源码：
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import Torch from 'react-native-torch';
import { Platform } from 'react-native';
export default class Torchs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTorchOn: false,
        };
    }
    _handlePress() {
        const { isTorchOn } = this.state;
        Torch.switchState(!isTorchOn);
        this.setState({ isTorchOn: !isTorchOn });
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='闪光灯控制'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Button
                    onPress={this._handlePress.bind(this)}
                    title={this.state.isTorchOn == true ? '开启闪光灯' : '关闭闪光灯'}
                />
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