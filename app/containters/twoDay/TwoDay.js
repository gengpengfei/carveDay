import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,

} from 'react-native';
import { connect } from 'react-redux';
import HeaderView from "../common/HeaderView";
import SwiperImage from '../home/SwiperImage';
import SectionView from  '../common/SectionView';
import {getIndex} from '../../netWork/twoDayApi';
import ListView from './ListView';
class TwoDay extends Component{
    static navigationOptions = ({navigation})=>({
        header: <HeaderView title="列表" showBack={true} backBtnOnPress={() => (navigation.goBack())}/>
    });
    constructor(props){
        super(props);
        this.state = {
            likeList:null,
            len1:null,
            workList:null,
            len2:null,
            bannerList:[]
        }
        this._getIndex = this._getIndex.bind(this);
    }
    componentWillMount() {
        this._getIndex();
    };
    _getIndex(){
        let formData = {
            'categoryId':70,
            'banner':"美食banner"
        };
        getIndex(formData,(responseData)=>{
            console.log(responseData);
            if (responseData['code'] === '1') {
                this.setState({
                    likeList:responseData['data']['meishiList'],
                    len1:responseData['data']['meishiList'].length,
                    workList:responseData['data']['workList'],
                    len2:responseData['data']['workList'].length,
                    bannerList:this._configBannerListData(responseData['data']['banner']),
                });
            }
        });
    }
    _configBannerListData(data:array){

        let resultList = [];
        for (var i = 0; i < data.length; i++) {
            let imageItem = data[i];
            let reaImageItem = {
                img:imageItem.Image,
                title:'',
                id:imageItem['AdUrl'],
                MarketName:imageItem['AdName'],
                MarketDesc:imageItem['AdCode']
            }
            resultList.push(reaImageItem);
        }
        return resultList;
    }
    render(){
        let renderList = [require('./img/1.jpg'),require('./img/2.jpg'),require('./img/3.jpg'),require('./img/4.jpg')];
        return (
            <ScrollView>
                <SwiperImage renderList={renderList}/>
                <SectionView
                    mainTitle="便利生活"
                    subTitle="严选生鲜 品味久远"
                    rightIcon={false}
                    onPress={()=>{
                        let {navigate} = this.props.navigation;
                        navigate('Home');
                    }}/>
                <ListView
                    getData={this.state.likeList}
                    len={this.state.len1}
                />
                <Text>{this.state.len1}</Text>
            </ScrollView>
        );
    }
}
function select(store) {
    return {

    }
}
export default connect(select)(TwoDay)