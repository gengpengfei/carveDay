import React, { PureComponent, Component } from 'react';
import {
    Platform,
    StyleSheet,
    ImageBackground,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    Image,
    FlatList,
    TextInput,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import Header from '../../components/header'
import styles from '../../theme'
export default class TextInputSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr: ''
        }
    }
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

    }
    render() {
        return (
            <ImageBackground
                resizeMode='cover'
                // source={require('./src/headerBorder.png')}
                style={{ height: appBar_Height, marginTop: statusbarHeight }}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现
                    hidden={false}  //是否隐藏状态栏。  
                    backgroundColor={'green'} //状态栏的背景色  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'default'} // enum('default', 'light-content', 'dark-content')   
                />
                <View style={{ flexDirection: 'row', height: appBar_Height }}>
                    {/* 这里的按钮通常作为定位入口 */}
                    <TouchableOpacity
                        onPress={this._clearSearchStr}
                        style={{ flex: 1 }}
                    >
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
                            borderColor: 'gray',
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
                        clearTextOnFocus={true}
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
                        style={{ flex: 1 }}
                    >
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}