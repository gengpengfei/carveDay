import React,{Component} from 'react';
import {
    Image,
    Text,
    ScrollView,
    ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
//--公共样式类
import * as commonStyle from '../../utils/commonStyles';

//--导航卡
import NavigationCard from './NavigationCard';
import HeaderView from "../common/HeaderView";
import SwiperImage from "./SwiperImage";
/*
 * explain: 首页
 * @param:
 * act: @fei
 * time: 2017/10/9 16:37
 */
class Home extends Component{
    static navigationOptions = {
        tabBarLabel: '首页',//--底部导航文字
        tabBarIcon:({tintColor})=>(
            <Image
                source={require('./img/JKHome.png')}
                style={{width: commonStyle.tabBarIconStyle.width,height: commonStyle.tabBarIconStyle.height,tintColor: tintColor}}
            />
        ),//--底部导航图标
        header:<HeaderView title="30Days"/>, //--头部组件
    }
    constructor(props){
        super(props);
        this._NavigationCardClick = this._NavigationCardClick.bind(this);
    }

    _NavigationCardClick(title){
        const {navigate} = this.props.navigation;
        if (title === '1.登录注册') {
            navigate('OneDay')
        }else if (title === '2.加载列表') {
            navigate('TwoDay')
        }
    }
    render(){
        let renderList = [require('./img/1.jpg'),require('./img/2.jpg'),require('./img/3.jpg'),require('./img/4.jpg')];
        return (
            <ScrollView showsVerticalScrollIndicator={false} iosalwaysBounceVertical={false}>

                <SwiperImage renderList={renderList}/>

                <NavigationCard onPressFun={(str)=>{
                    this._NavigationCardClick(str);
                }}/>
            </ScrollView>
        );
    }
}
function select(store) {
    return{
        userid:store.userInfo.userid,
        username:store.userInfo.username
    }
}
export default connect(select)(Home);