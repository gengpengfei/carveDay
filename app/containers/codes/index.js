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
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现
                    hidden={false}  //是否隐藏状态栏。  
                    // backgroundColor={'green'} //状态栏的背景色  
                    translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'default'} // enum('default', 'light-content', 'dark-content')   
                />
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