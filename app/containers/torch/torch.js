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
}