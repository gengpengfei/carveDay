import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class TextInputCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='TextInput代码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `import React, { PureComponent, Component } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Header from '../../components/header'
import ClickView from './../../components/clickView'
import styles from '../../theme'
export default class TextInputSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr: ''
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='TextInput教程'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    _onChangeText = (text) => {
        this.setState({
            searchStr: text
        })
    }
    _clearSearchStr = () => {
        this.setState({
            searchStr: ''
        })
    }
    _onSubmintEditing = () => {
        if (this.state.searchStr == '') {
            return;
        }
        this._searchPress(this.state.searchStr);
    }
    _searchPress = () => {
        alert('开始搜索。。。');
    }
    render() {
        return (
            <View style={{ height: screenHeight - header_Height }}>
                <View style={{ flexDirection: 'row', height: appBar_Height }}>
                    {/* 这里的按钮通常作为定位入口 */}
                    <TouchableOpacity
                        onPress={this._clearSearchStr}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Text>清空</Text>
                    </TouchableOpacity>
                    <TextInput
                        //-- 是否在回车时触发提交
                        blurOnSubmit={true}
                        //-- 触发提交函数
                        onSubmitEditing={this._onSubmintEditing}
                        //-- 兼容android 去掉底边框
                        underlineColorAndroid="transparent"
                        //-- 渲染时自动获取焦点
                        // autoFocus={true}
                        //-- 软键盘上确定按钮显示的内容
                        returnKeyType={'search'}
                        //-- 默认输入
                        placeholder={"搜索"}
                        //-- 默认输入时字体颜色
                        placeholderTextColor={styles.textColorSecondary}
                        style={{
                            height: appBar_Height,
                            borderColor: '#fff',
                            borderWidth: 1,
                            fontSize: 16,
                            padding: 0,
                            flex: 7
                        }}
                        //-- 指定弹出的是何种键盘
                        keyboardType={'default'}
                        //-- 输入框是否可编辑
                        editable={true}
                        onChangeText={this._onChangeText}
                        //-- 失去焦点时回调
                        onBlur={() => { }}
                        //-- 获得焦点时回调
                        onFocus={() => { }}
                        //-- 输入框的值
                        value={this.state.searchStr}
                        //-- 是否在每次获得焦点的时候清空输入框
                        clearTextOnFocus={false}
                        //-- 最大字符数
                        maxLength={10}
                        //-- 是否支持多行输入
                        multiline={false}
                        //-- 设置输入框最大可输入行数
                        numberOfLines={1}

                    />
                    {/* 这里的按钮通常作为扫描二维码入口 */}
                    <TouchableOpacity
                        onPress={this._onSubmintEditing}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Text>搜索</Text>
                    </TouchableOpacity>
                </View>
                <ClickView />
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