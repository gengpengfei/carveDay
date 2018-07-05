import React,{Component} from 'react';
import {
    Image,
    Text,
    ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import HeadView from "../common/HeaderView";

class Focus extends Component{
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        tabBarLabel: '一天',//--底部导航文字
        tabBarIcon:({tintColor})=>(
            <Image
                source={require('../../src/JKHome.png')}
                style={{width: commonStyle.tabBarIconStyle.width,height: commonStyle.tabBarIconStyle.height,tintColor: tintColor}}
            />
        ),
        header:<HeadView title="第一天"/>,
        footer:<HeadView title="第一天"/>,
    }
    render(){
        return (
            <Text>123</Text>
        );
    }
}
function select(store) {
    return{
        userId:store.userInfo.userId
    }
}
export default connect(select)(Focus);