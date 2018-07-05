import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
const { width } = Dimensions.get('window');
import StarRating from 'react-native-star-rating';
import WebImage from 'react-native-web-image'
import {isNotEmptyArray,isObject,isNull_Undefined} from "../../utils/structureJudgment"
export default class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refer: false,
            flag:null,
            starCount: 4,
            Pd:null
        };
    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    createEmptyView() {
        return (
            <Text style={{fontSize: 14, alignSelf: "center",marginTop:50}}>本店暂无商品！</Text>
        );
    }
    _renderItemView1 = (item) => {
        if(this.state.Pd==null){
            return (
                <TouchableOpacity
                    style={{marginBottom:10,marginRight:5}}
                    activeOpacity={1}
                    onPress={()=>{
                        const { navigate } = this.props.Navigate;
                        navigate('FoodDetail',{"ContId":item.item.ContId});
                    }}
                >
                    <WebImage resizeMode="cover" source={{uri:item.item.MarketImg}} style={{width:(width-30)/2-15,height:110,marginRight:5}}/>
                    <View style={{marginTop:7,width:(width-30)/2-20}}>
                        <Text style={{height:20,lineHeight:20,marginBottom:3,fontWeight:"bold"}}>{item.item.MarketName}</Text>
                        <Text numberOfLines={1} style={{fontSize:12,color:"#4B4B4B",width:((width-40)/2-40),height:17,lineHeight:17,overflow:"hidden",fontSize:10,color:'#898989',marginTop:-4}}>{item.item.MarketDesc}</Text>
                        <Text style={{fontSize:12,color:"#FF8384",marginTop:5,fontWeight:"bold"}}>166元/2位</Text>
                    </View>
                </TouchableOpacity>

            )
        }else{
            return (
                <TouchableOpacity
                    style={{marginBottom:10,marginRight:5}}
                    activeOpacity={1}
                    onPress={()=>{
                        // const { navigate } = this.props.Navigate;
                        // navigate('FoodDetail',{"ContId":item.item.ContId});
                    }}
                >
                    <WebImage resizeMode="cover" source={{uri:item.item.MarketImg}} style={{width:(width-30)/2-15,height:110,marginRight:5}}/>
                    <View style={{marginTop:7,width:(width-30)/2-20}}>
                        <Text style={{height:20,lineHeight:20,marginBottom:3,fontWeight:"bold"}}>{item.item.MarketName}</Text>
                        <Text numberOfLines={1} style={{fontSize:12,color:"#4B4B4B",width:((width-40)/2-40),height:17,lineHeight:17,overflow:"hidden",fontSize:10,color:'#898989',marginTop:-4}}>{item.item.MarketDesc}</Text>
                        <Text style={{fontSize:12,color:"#FF8384",marginTop:5,fontWeight:"bold"}}>166元/2位</Text>
                    </View>
                </TouchableOpacity>

            )
        }



    };
    _renderItemView2 = (item) => {
        return (
            <TouchableOpacity
                style={{marginBottom:10,marginRight:5,width:width}}
                activeOpacity={1}
                onPress={()=>{
                    const { navigate } = this.props.Navigate;
                    navigate('FoodDetail',{"ContId":item.item.ContId});
                }}
            >
                <View style={{marginTop:7,width:width-14,marginLeft:14,flexDirection:"row"}}>
                    <WebImage resizeMode="cover" source={{uri:item.item.MarketImg}} style={{width:(width-30)/2-15,height:110,marginRight:5}}/>
                    <View style={{marginTop:7,width:(width-30)/2-20}}>
                        <Text style={{height:20,lineHeight:20,marginBottom:3,fontWeight:"bold"}}>{item.item.MarketName}</Text>
                        <Text numberOfLines={1} style={{fontSize:12,color:"#4B4B4B",width:((width-40)/2-40),height:17,lineHeight:17,overflow:"hidden",fontSize:10,color:'#898989',marginTop:-4}}>{item.item.MarketDesc}</Text>
                        <View style={{width:100,marginTop:5}}>
                            <StarRating
                                disabled={true}
                                emptyStar={'ios-star-outline'}
                                fullStar={'ios-star'}
                                halfStar={'ios-star-half'}
                                iconSet={'Ionicons'}
                                starSize={16}
                                maxStars={5}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                starColor={'#FA5C5F'}

                            />
                        </View>
                        <Text style={{fontSize:12,color:"#898989",marginTop:5,fontWeight:"bold"}}>166元/2位</Text>
                    </View>
                </View>
                <View style={{width:width,height:10,backgroundColor:"#F6F6F6",marginTop:10}}></View>
            </TouchableOpacity>

        )

    };
    _keyExtractor1 = (item, index) => index;
    _keyExtractor2 = (item, index) => index;
    componentWillMount() {
        this.setState({
            flag:this.props.Bian,
            Pd:this.props.Tui
        })
    };

    _getDataWithInputData(inputData,idx,keyStr){
         let result='';
        if (isNotEmptyArray(inputData)){
            let tempD = inputData[idx];
            if (isObject(tempD)){
                let temppdd = tempD[keyStr];
                if (!isNull_Undefined(temppdd)){
                    result = temppdd;
                }
            }


        }

        return result;
    }
    render(){
        if(this.props.len){

            var dataA = [];
            let sourD = this.props.getData;
            for(var i=0;i<this.props.len;i++){
                dataA[i]={
                    MarketName:this._getDataWithInputData(sourD,i,'MarketName'),
                    MarketDesc:this._getDataWithInputData(sourD,i,'MarketDesc'),
                    MarketImg:this._getDataWithInputData(sourD,i,'MarketImg'),
                    Name:this._getDataWithInputData(sourD,i,'Name'),
                    cont:this._getDataWithInputData(sourD,i,'cont'),
                    ContId:this._getDataWithInputData(sourD,i,'Id'),
                    CommentNum:this._getDataWithInputData(sourD,i,'CommentNum')
                }
            }
        }else if(this.props.len1) {

            var dataA = [];
            for(var i=0;i<this.props.len1;i++){
                dataA[i]={
                    MarketName:this.props.getData[i]['MName'],
                    MarketDesc:null,
                    MarketImg:this.props.getData[i]['MImg'],
                    Name:null,
                    cont:null,
                    ContId:this.props.getData[i]['Id']
                }
            }
        }

        if(this.state.flag=="null"){

            return (
                <View
                    style = {{justifyContent: 'center',alignItems: 'center',width:width-28,marginLeft:14}}>
                    <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        data={dataA}
                        renderItem={this._renderItemView1}
                        numColumns ={this.props.direction=='vertical'?2:1} // 设置列数
                        // columnWrapperStyle={{ borderWidth: 2, borderColor: 'black' }} 分列后设置边框
                        onViewableItemsChanged={(info)=>{
                            console.log(info);
                        }}
                        showsHorizontalScrollIndicator={false}
                        horizontal = {this.props.direction=='vertical'?false:true} //将列表横着放
                        keyExtractor={this._keyExtractor1}
                        refreshing = {this.state.refer}
                        onRefresh={this._onRefresh1}
                        ListEmptyComponent={this.createEmptyView()}
                        onEndReachedThreshold={-0.05}
                        onEndReached={(info) => {
                        } }
                    />
                </View>
            )
        }else {

            return (
                <View
                    style = {{justifyContent: 'center',alignItems: 'center',width:width}}>
                    <FlatList
                        ref={(flatList)=>this._flatList = flatList}
                        data={dataA}
                        renderItem={this._renderItemView2}
                        numColumns ={1} // 设置列数
                        // columnWrapperStyle={{ borderWidth: 2, borderColor: 'black' }} 分列后设置边框
                        onViewableItemsChanged={(info)=>{
                            console.log(info);
                        }}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={this._keyExtractor2}
                        refreshing = {this.state.refer}
                        onRefresh={this._onRefresh1}
                        ListEmptyComponent={this.createEmptyView()}
                        onEndReachedThreshold={-0.05}
                        pagingEnabled={true}
                        onEndReached={(info) => {
                        } }
                    />
                </View>
            )
        }
    }
}

const styles= StyleSheet.create({
    center:{
        justifyContent:'center',
        alignItems:'center',
    },
    heart:{
        width:16,
        height:16,
        resizeMode:"contain",
        marginRight:2
    }
});
