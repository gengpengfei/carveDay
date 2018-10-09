import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import QRCode from 'react-native-qrcode'
export default class qrCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '123456789'
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='二维码生成'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 250, width: 230, justifyContent: 'space-around', alignItems: 'center', borderWidth: 1 }}>
                    <Text>商家二维码</Text>
                    <QRCode
                        value={this.state.data}
                        size={200}
                        bgColor="#000"
                        fgColor="white"
                    />
                </View>
                <ClickView {...this.props} />
            </View>
        )
    }
}