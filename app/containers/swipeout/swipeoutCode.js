import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class SwipeoutCode extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='二维码生成源码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import QRCode from 'react-native-qrcode'
import { captureScreen, captureRef } from 'react-native-view-shot'
export default class Shot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '123456789'
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='截屏'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    shot1 = () => {
        captureScreen({
            format: "jpg",
            width: 200,
            height: 300,
            quality: 0.8, //--质量
            result: 'tmpfile', // 生成类型可以是tmpfile、base64、data-uri。
        }).then(uri => alert("Image saved to", uri), error => alert('error', error));
    }
    shot2 = () => {
        captureRef(this.refs.shotView, {
            format: "jpg",
            quality: 0.8, //--质量
            result: 'tmpfile', // 生成类型可以是tmpfile、base64、data-uri。
            snapshotContentContainer: true,//-- 设为true,会动态计算组件宽高
        }).then(uri => alert("Image saved to", uri), error => alert('error', error));
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 250, width: 230, justifyContent: 'space-around', alignItems: 'center', borderWidth: 1 }}
                    ref='shotView'
                >
                    <Text>商家二维码</Text>
                    <QRCode
                        value={this.state.data}
                        size={200}
                        bgColor="#000"
                        fgColor="white"

                    />
                </View>
                <View style={{ width: 230, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={this.shot1}
                    >
                        <Text> 截取屏幕</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.shot2}
                    >
                        <Text>截取组件</Text>
                    </TouchableOpacity>
                </View>
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