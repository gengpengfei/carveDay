/**
 * Created by Administrator on 2017/10/9.
 */
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
import {connect} from 'react-redux';

//--公共样式类
import {tabBarIconStyle} from '../utils/commonStyles';

//--组件
import Home from './home/Home';
import OneDay from './oneDay/OneDay';
import Regist from './oneDay/Regist';
import TwoDay from './twoDay/TwoDay';
const RootTabNav = TabNavigator(
    {
        left:{screen:Home},
        Home:{screen:Home},
        right:{screen:Home}
    },
    {
        //--禁止在标签间滑动
        swipeEnabled:false,
        animationEnabled:false,
        //--懒惰显现
        lazy:true,
        headerLeft:null,
        gesturesEnabled:false,
        //--
        tabBarComponent:TabBarBottom,
        //--tab位置
        tabBarPosition:'bottom',
        tabBarOptions:{
            activeTintColor:tabBarIconStyle.activeColor,
            inactiveTintColor:tabBarIconStyle.inactiveColor,
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
            pressColor: '#823453',
            pressOpacity: 0.8,
            style: {
                backgroundColor: '#fff',
                paddingBottom: 0,
                borderTopWidth: 0.5,
                borderTopColor: '#ccc',
            },
            labelStyle:{
                margin: 1,
                fontSize:tabBarIconStyle.labelFontSize,
            },
            indicatorStyle: { height: 0 },
        },
        backBehavior: 'none',
    }
);

const CarveDayNavigation = StackNavigator(
    {
        RootTabNav:{screen:RootTabNav},
        Home:{screen:Home},
        OneDay:{screen:OneDay},
        Regist:{screen:Regist},
        TwoDay:{screen:TwoDay},
    },
    {
        //--默认显示页面
        initialRouteName:'Home',
    }
);

export default connect()(CarveDayNavigation);