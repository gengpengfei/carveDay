import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import Swipeout from 'react-native-swipeout'
export default class Swipeouts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            refreshing: true
        }
        this.swipeoutBtns = [
            {
                text: 'Button',
                backgroundColor: '#fff',
                color: 'red',
                component: null,//-- 自定义组件,
                onPress: () => { },
                text: '删除',
                type: 'default',// --  default, delete, primary, secondary
                underlayColor: '#fff', //-- 按钮按下的颜色
                disabled: true
            }
        ]
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='侧滑删除'
            backPress={() => {
                navigation.goBack();
            }} />,
    })

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                refreshing: false
            })
        }, 2000);
    }
    renderTtem = (item) => {
        return (
            <Swipeout
                style={{ width: screenWidth }}
                disabled={false}
                backgroundColor='#f9f9f9'
                close={true}
                sensitivity={50} //-- 敏感度
                buttonWidth={50} //-- 按钮的宽度
                // left={this.swipeoutBtns} //-- 左侧按钮
                right={this.swipeoutBtns}//-- 右侧按钮
                onClose={(sectionID, rowId, direction) => { }}  //-- 关闭时回调
                onOpen={(sectionID, rowId, direction) => { }} //-- 打开时回调
                autoClose={true} //-- 侧滑时是否自动触发按钮事件
            // scroll={() => { }}  //-- 防止父级滑动
            >
                <View styel={{width: screenWidth , justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderColor: 'red', borderWidth: 1  }}>
                    <View style={{ height: 60, width: 60 }}>
                        <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={require('./src/header.jpg')} />
                    </View>
                    <View style={{ height: 60, width: screenWidth - 50 }}>
                        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <Text>请叫我耿先生-{item.item}</Text>
                            <Text>2018-10-12</Text>
                        </View>
                        <Text>Swipe me left{item.item}</Text>
                    </View>
                </View>
            </Swipeout>
        )
    }
    // scrollToEnd
    // 滚动到底部。如果不设置getItemLayout
    // 属性的话，可能会比较卡。

    // scrollToIndex
    // 滚动到指定index的item
    // 如果不设置getItemLayout
    // 属性的话，无法跳转到当前可视区域以外的位置。

    // scrollToItem
    // 滚动到指定item，如果不设置getItemLayout
    // 属性的话，可能会比较卡。

    // scrollToOffset
    // 滚动指定距离
    //-- 头部组件
    headerComponent = () => (
        <View style={{ width: screenWidth, height: 40, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 30, width: screenWidth - 20, backgroundColor: '#ededf6', borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#b5b5b5' }}>搜索</Text>
            </View>
        </View>
    )
    //-- 尾部组件
    FooterComponent = () => (
        <View style={{ borderBottomColor: '#eeeeee', borderBottomWidth: 1, width: screenWidth }} />
    )
    //-- 分割线组件
    SeparatorComponent = () => (
        <View style={{ borderBottomColor: '#eeeeee', borderBottomWidth: 1, width: screenWidth }} />
    )
    //-- 上拉加载
    onEndReached = () => {
        this.setState({
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        })
    }
    //-- 下拉刷新
    onRefresh = () => {
        this.setState({
            data: [2, 1, 3, 4, 6, 5, 8, 9, 4, 5, 6, 7]
        })
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#f6f6f6' }}>
                <FlatList
                    data={this.state.data} //--数据
                    horizontal={false}  //-- 设置为true则变为水平布局模式
                    ItemSeparatorComponent={this.SeparatorComponent} //-- 分割线组件 
                    ListEmptyComponent={null} //--列表为空时渲染该组件
                    ListHeaderComponent={this.headerComponent} //-- 头部组件
                    ListFooterComponent={this.FooterComponent} //-- 尾部组件
                    numColumns={1} //-- 多列布局
                    // columnWrapperStyle={{ borderWidth: 1 }}//--设置了多列布局（numColumns大于1)可以额外指定此样式每行容器上。
                    initialNumToRender={10} //-- 指定一开始渲染的元素数量，最好刚刚够填满一个屏幕
                    // initialScrollIndex={1} //-- 指定渲染开始的item index
                    keyExtractor={(item, index) => ' ' + index} //-- 此函数用于为给定的item生成一个不重复的key
                    getItem={null}  //-- 获取每个item
                    getItemCount={null} //-- 获取Item属相
                    getItemLayout={(data, index) => ({ length: 50, offset: 50 * index, index })}//--行高是固定的,getItemLayout是优化组件高度的计算，(注意如果你指定了SeparatorComponent，请把分隔线的尺寸也考虑到offset的计算之中。)
                    renderItem={this.renderTtem} //--渲染每一行的组件
                    onEndReachedThreshold={0.5}//--距离内容最底部多远时触发onEndReached回调。0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
                    onEndReached={() => this.onEndReached}//--当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用。
                    onRefresh={() => this.onRefresh}//-- 实现“下拉刷新”的功能。需要正确设置refreshing属性。
                    // onViewableItemsChanged={() => { }}//--在可见行元素变化时调用。可见范围和变化频率等参数的配置请设置viewabilityconfig属性
                    refreshing={this.state.refreshing}//-- 设为true，列表就会显示出一个正在加载的符号。
                />
                <ClickView {...this.props} />
            </View>
        )
    }
}