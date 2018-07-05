import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
const {width} = Dimensions.get('window');
class ListView extends Component{
    constructor(props){
        super(props);
        this.state = {
            refreshing:false,
        }
    }
    componentWillMount() {

    }
    _header = ()=>{
        return (
            <Text>这里是顶部</Text>
        )
    }
    _footer = ()=>{
        return (
            <Text>______我也是有底线的______</Text>
        )
    }
    _separator = () => {
        return <View style={{height:10,backgroundColor:'#fff'}}/>;
    }

    createEmptyView() {
        return (
            <Text style={{fontSize: 40, alignSelf: 'center'}}>还没有数据哦！</Text>
        );
    }
    _keyExtractor = (item, index) => index;
    _getItemLayout=(data, index) => ({
        length: 110, offset: (110 + 10) * index, index
    })

    _onRefresh = () => {
        this.setState({refreshing: true})//开始刷新
        //这里模拟请求网络，拿到数据，3s后停止刷新
        setTimeout(() => {
            alert('没有可刷新的内容！');
            this.setState({refreshing: false});//停止刷新
        }, 1000);
    }
    //--处理上拉加载部分逻辑
    _onEndReached = ({distanceFromEnd}) =>{

    }
    _renderItemView = (item) => {
        let data = item.item;
        return (
            <TouchableOpacity>
                <View style={{width:width/2,flexDirection:'column',alignItems:'center'}}>
                    <Image style={{width:(width)/2-15,height:110}} source={{uri:data.MarketImg}}/>
                    <Text style={{width:(width)/2-15,fontSize:14,}}>{data.MarketName}</Text>
                    <Text STYLE={{width:(width)/2-15,fontSize:12,color:'red'}}>123</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render(){
        if(this.props.len){
            var dataA = [];
            for(var i=0;i<this.props.len;i++){
                dataA[i]={
                    MarketFeatures:this.props.getData[i]['MarketFeatures'],
                    MarketImg:this.props.getData[i]['MarketImg'],
                    MarketName:this.props.getData[i]['MarketName'],
                    CommentNum:this.props.getData[i]['CommentNum'],
                    MarketId:this.props.getData[i]['Id']
                }
            }
            console.log(dataA);
            console.log(this.props.getData);
        }
        return (
            <View style = {{justifyContent: 'center',alignItems: 'center',width:width}}>
                <FlatList
                    ref={(flatList)=>this._flatList = flatList}
                    //ListHeaderComponent={this._header} //--顶部
                    ListFooterComponent={this._footer} //--底部
                    ItemSeparatorComponent={this._separator} //--视图之间的分割线
                    data={dataA} //--数据
                    renderItem={this._renderItemView} //--显示视图
                    numColumns ={2} //--设置列数
                    showsHorizontalScrollIndicator={false}
                    horizontal = {false} //--将列表横着放
                    keyExtractor={this._keyExtractor} //--指定视图的key值 , 相同key值的两个视图只会显示一个
                    refreshing = {this.state.refreshing} //--是否下拉刷新
                    onRefresh={this._onRefresh} //--下拉刷新
                    ListEmptyComponent={this.createEmptyView()} //--设置空数据视图
                    onEndReachedThreshold={-0.05} //--设置触发上拉加载的距离,为(0-1)之间
                    onEndReached={this._onEndReached}  //--滑动到底部的回调 ,可以再添加几条数据
                    getItemLayout={this._getItemLayout} //--用于计算单个元素的高度
                />
            </View>
        );
    }
}
function select(store) {
    return{

    }
}
export default connect(select)(ListView)