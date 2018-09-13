import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class SwiperImgCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='开关选择实现代码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `
import React, { Component } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import styles from '../../theme'
export default class SwitchButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            switchBool: false
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='开关选择按钮'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Switch
                    style={{ margin: 20 }}
                    //-- 选择改变时
                    onValueChange={
                        (switchValue) => {
                            this.setState({
                                switchBool: switchValue,
                            })
                        }
                    }
                    //-- 用来在端到端测试中定位此视图。
                    testID='SwitchButton'
                    //-- 此开关是否打开
                    value={this.state.switchBool}
                    //-- 开启状态时的背景颜色
                    onTintColor={styles.primarySecondaryColor}
                    //-- 开关上圆形按钮的背景颜色。在iOS上设置此颜色会丢失按钮的投影。
                    thumbTintColor={styles.primaryColor}
                    //-- 关闭状态时的边框颜色(iOS)或背景颜色(Android)。
                    tintColor={styles.primaryColor}
                    //-- 如果为true则禁用此组件
                    disabled={false}
                />
                <TouchableOpacity
                    onPress={() => { alert(this.state.switchBool) }}
                >
                    <Text>查看选择值</Text>
                </TouchableOpacity>
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