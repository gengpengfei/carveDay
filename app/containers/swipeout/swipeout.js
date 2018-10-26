import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import Swipeout from 'react-native-swipeout'
export default class Swipeouts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' }
            ],
            rowIndex: null,
            refreshing: true
        }
        this.swipeoutBtns = [
            {
                text: 'Button',
                backgroundColor: '#f55d00',
                color: '#fff',
                // component: null,//-- 自定义组件,
                onPress: () => { this.swipeHandleDelete() },
                text: '删除',
                // type: 'delete',// --  default, delete, primary, secondary
                underlayColor: '#ff7733', //-- 按钮按下的颜色
                // disabled: false
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
    onSwipeOpen(rowIndex) {
        this.setState({
            rowIndex: rowIndex
        })
    }
    onSwipeClose(rowIndex) {
        if (rowIndex === this.state.rowIndex) {
            this.setState({ rowIndex: null });
        }
    }
    swipeHandleDelete() {
        const { rowIndex } = this.state;
        this.state.data.splice(parseInt(rowIndex), 1);
        this.setState({
            rowIndex: null
        })
        this.setState({
            data: this.state.data,
        })
    }
    _renderItem = (item, index) => {
        return (
            <Swipeout
                style={{ width: screenWidth }}
                disabled={false}  //-- 是否关闭侧滑
                backgroundColor='#f9f9f9'
                close={this.state.rowIndex !== index} //-- 判断当前打开还是关闭
                sensitivity={40} //-- 敏感度
                buttonWidth={80} //-- 按钮的宽度
                // left={this.swipeoutBtns} //-- 左侧按钮
                right={this.swipeoutBtns}//-- 右侧按钮
                onClose={() => (this.onSwipeClose(index))}  //-- 关闭时回调
                onOpen={() => (this.onSwipeOpen(index))} //-- 打开时回调
                autoClose={false} //-- 侧滑时是否自动触发按钮事件
                rowIndex={index}  //-- 绑定index
                sectionId={0}
            // scroll={() => { }}  //-- 防止父级滑动
            >
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 5, width: screenWidth, height: 50, borderBottomWidth: 1, borderColor: '#e6e6e6' }}>
                    <View style={{ width: screenWidth / 4, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 12, color: '#4a4a4a' }}>{item.name}</Text>
                    </View >
                    <View style={{ width: screenWidth / 4, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 12, color: '#4a4a4a' }}>{item.id}</Text>
                    </View>
                    <View style={{ width: screenWidth / 4, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 12, color: '#4a4a4a' }}>{item.tabel}</Text>
                    </View>
                    <View style={{ width: screenWidth / 4, alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput
                            style={{ height: 30, width: 50, borderColor: "#f63300", borderRadius: 4, borderWidth: 1, textAlign: 'center', margin: 0, padding: 0 }}
                            underlineColorAndroid="transparent"
                            onChangeText={
                                (textValue) => {
                                    this.state.dbList[index].groundingNum = textValue
                                    this.setState({
                                        dbList: this.state.dbList
                                    })
                                }
                            }
                            value={item.groundingNum}
                            maxLength={4}
                        />
                    </View>
                </View>
            </Swipeout>
        );
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
            data: [
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' }
            ],
        })
    }
    //-- 下拉刷新
    onRefresh = () => {
        this.setState({
            data: [
                { name: 'A', id: '001', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '020', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '001', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '002', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '010', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' },
                { name: 'A', id: '01', tabel: '标准库位', groundingNum: '10' },
                { name: 'B', id: '02', tabel: '标准库位', groundingNum: '10' }
            ],
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
                    renderItem={({ item, index }) => this._renderItem(item, index)} //--渲染每一行的组件
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