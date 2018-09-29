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
import list from './list.json'
import styles from '../../theme'
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    static navigationOptions = ({ navigation }) => ({
        header: null,
        tabBarLabel: '片段',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./src/home.png')}
                style={{
                    width: 18, height: 18,
                    tintColor: tintColor
                }}
            />
        )
    });
    searchPress = (searchStr) => {

    }
    componentDidMount() {
        this._getList();
    }
    _getList = () => {
        this.setState({
            list: list
        })
    }
    _itemView = (value) => {
        let { item, index } = value
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate(item.route)
                }}
                style={{ padding: 5, height: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
            >
                <Text>{item.title}</Text><Text style={{ color: styles.primaryColor }}>></Text>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <SafeAreaView>
                <HomeHeader searchPress={this.searchPress} />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    //-- 数据源
                    data={this.state.list}
                    //-- 单个列表元素
                    renderItem={this._itemView}
                    //-- 头部
                    ListHeaderComponent={() => {
                        return <View style={{ height: 1, backgroundColor: styles.linkColor, marginTop: 10 }} />;
                    }}
                    //-- 底部
                    ListFooterComponent={() => {
                        return <View style={{ height: 1, backgroundColor: styles.linkColor }} />;
                    }}
                    //-- 每个item之间的分割线
                    ItemSeparatorComponent={() => {
                        return <View style={{ height: 1, backgroundColor: styles.linkColor }} />;
                    }}
                    //-- 额外的数据源
                    extraData={[]}
                    //-- 设置是否是水平布局
                    horizontal={false}
                    //-- 初始化渲染的数量，最好刚刚填满屏幕
                    initialNumToRender={10}
                    //-- 距离底部多远时触发函数
                    onEndReachedThreshold={0.1}
                    //-- 超过设置的底部距离时触发
                    onEndReached={() => { }}
                    //-- 下啦刷新触发函数
                    onRefresh={() => { }}
                    //-- 是否显示正在加载中
                    refreshing={false}
                    //-- 样式
                    style={{ marginBottom: 60 }}
                />
            </SafeAreaView>
        );
    }
}

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr: ''
        }
    }
    static defaultProps = {
        searchPress: () => {
        }
    };
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
        this.props.searchPress(this.state.searchStr);
    }
    render() {
        return (
            <ImageBackground
                resizeMode='cover'
                source={require('./src/headerBorder.png')}
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