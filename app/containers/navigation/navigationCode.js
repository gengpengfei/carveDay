import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../../components/header'
export default class NavigationCode extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='Naviation教程'
            backPress={() => {
                navigation.goBack();
            }} />,
    })

    render() {
        let code =
            `navigation 安装：
npm install --save react-navigation

在入口文件使用：
import './app/global';
import './app/dataBase/initStorage';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import AppNavigator from './app/AppNavigator';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
export default App

定义路由：
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import Welcome from './containers/welcome/welcome'
import WelcomeCode from './containers/welcome/welcomeCode'
import Home from './containers/home/home'
import Mine from './containers/mine/mine'
import Login from './containers/login/login'
import NavigationCode from './containers/navigation/navigationCode';

//（1）StackNavigator：用来跳转页面和传递参数
// 1. navigationOptions：配置StackNavigator的一些属性。  
// 2.   
// 3.     title：标题，如果设置了这个导航栏和标签栏的title就会变成一样的，不推荐使用  
// 4.     header：可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为null  
// 5.     headerTitle：设置导航栏标题，推荐  
// 6.     headerBackTitle：设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null  
// 7.     headerTruncatedBackTitle：设置当上个页面标题不符合返回箭头后的文字时，默认改成"返回"  
// 8.     headerRight：设置导航条右侧。可以是按钮或者其他视图控件  
// 9.     headerLeft：设置导航条左侧。可以是按钮或者其他视图控件  
// 10.     headerStyle：设置导航条的样式。背景色，宽高等  
// 11.     headerTitleStyle：设置导航栏文字样式  
// 12.     headerBackTitleStyle：设置导航栏‘返回’文字样式  
// 13.     headerTintColor：设置导航栏颜色  
// 14.     headerPressColorAndroid：安卓独有的设置颜色纹理，需要安卓版本大于5.0  
// 15.     gesturesEnabled：是否支持滑动返回手势，iOS默认支持，安卓默认关闭  
// 16.    
// 17.   
// 18. screen：对应界面名称，需要填入import之后的页面  
// 19.   
// 20. mode：定义跳转风格  
// 21.   
// 22.    card：使用iOS和安卓默认的风格  
// 23.   
// 24.    modal：iOS独有的使屏幕从底部画出。类似iOS的present效果  
// 25.   
// 26. headerMode：返回上级页面时动画效果  
// 27.   
// 28.    float：iOS默认的效果  
// 29.   
// 30.    screen：滑动过程中，整个页面都会返回  
// 31.   
// 32.    none：无动画  
// 33.   
// 34. cardStyle：自定义设置跳转效果  
// 35.   
// 36.    transitionConfig： 自定义设置滑动返回的配置  
// 37.   
// 38.    onTransitionStart：当转换动画即将开始时被调用的功能  
// 39.   
// 40.    onTransitionEnd：当转换动画完成，将被调用的功能  
// 41.   
// 42. path：路由中设置的路径的覆盖映射配置  
// 43.   
// 44. initialRouteName：设置默认的页面组件，必须是上面已注册的页面组件  
// 45.   
// 46. initialRouteParams：初始路由参数 
//（2）TabNavigator：类似底部导航栏，用来在同一屏幕下切换不同界面
// 1. screen：和导航的功能是一样的，对应界面名称，可以在其他页面通过这个screen传值和跳转。  
// 2.   
// 3.   
// 4. navigationOptions：配置TabNavigator的一些属性  
// 5.   
// 6. title：标题，会同时设置导航条和标签栏的title  
// 7.   
// 8. tabBarVisible：是否隐藏标签栏。默认不隐藏(true)  
// 9.   
// 10. tabBarIcon：设置标签栏的图标。需要给每个都设置  
// 11.   
// 12. tabBarLabel：设置标签栏的title。推荐  
// 13.   
// 14. 导航栏配置  
// 15.   
// 16. tabBarPosition：设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom'）  
// 17.   
// 18. swipeEnabled：是否允许在标签之间进行滑动  
// 19.   
// 20. animationEnabled：是否在更改标签时显示动画  
// 21.   
// 22. lazy：是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true  
// 23.   
// 24. trueinitialRouteName： 设置默认的页面组件  
// 25.   
// 26. backBehavior：按 back 键是否跳转到第一个Tab(首页)， none 为不跳转  
// 27.   
// 28. tabBarOptions：配置标签栏的一些属性iOS属性  
// 29.   
// 30. activeTintColor：label和icon的前景色 活跃状态下  
// 31.   
// 32. activeBackgroundColor：label和icon的背景色 活跃状态下  
// 33.   
// 34. inactiveTintColor：label和icon的前景色 不活跃状态下  
// 35.   
// 36. inactiveBackgroundColor：label和icon的背景色 不活跃状态下  
// 37.   
// 38. showLabel：是否显示label，默认开启 style：tabbar的样式  
// 39.   
// 40. labelStyle：label的样式安卓属性  
// 41.   
// 42. activeTintColor：label和icon的前景色 活跃状态下  
// 43.   
// 44. inactiveTintColor：label和icon的前景色 不活跃状态下  
// 45.   
// 46. showIcon：是否显示图标，默认关闭  
// 47.   
// 48. showLabel：是否显示label，默认开启 style：tabbar的样式  
// 49.   
// 50. labelStyle：label的样式 upperCaseLabel：是否使标签大写，默认为true  
// 51.   
// 52. pressColor：material涟漪效果的颜色（安卓版本需要大于5.0）  
// 53.   
// 54. pressOpacity：按压标签的透明度变化（安卓版本需要小于5.0）  
// 55.   
// 56. scrollEnabled：是否启用可滚动选项卡 tabStyle：tab的样式  
// 57.   
// 58. indicatorStyle：标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题  
// 59.   
// 60. labelStyle：label的样式  
// 61.   
// 62. iconStyle：图标样式 
//（3）DrawerNavigator：侧滑菜单导航栏，用于轻松设置带抽屉导航的屏幕
// 1. DrawerNavigatorConfig  
// 2.   
// 3.     drawerWidth - 抽屉的宽度  
// 4.     drawerPosition - 选项是左或右。 默认为左侧位置  
// 5.     contentComponent - 用于呈现抽屉内容的组件，例如导航项。 接收抽屉的导航。 默认为DrawerItems  
// 6.     contentOptions - 配置抽屉内容  
// 7.   
// 8.     initialRouteName - 初始路由的routeName  
// 9.     order - 定义抽屉项目顺序的routeNames数组。  
// 10.     路径 - 提供routeName到路径配置的映射，它覆盖routeConfigs中设置的路径。  
// 11.     backBehavior - 后退按钮是否会切换到初始路由？ 如果是，设置为initialRoute，否则为none。 默认为initialRoute行为  
// 12.   
// 13.    DrawerItems的contentOptions属性  
// 14.   
// 15.     activeTintColor - 活动标签的标签和图标颜色  
// 16.     activeBackgroundColor - 活动标签的背景颜色  
// 17.     inactiveTintColor - 非活动标签的标签和图标颜色  
// 18.     inactiveBackgroundColor - 非活动标签的背景颜色  
// 19.     内容部分的样式样式对象  
// 20.     labelStyle - 当您的标签是字符串时，要覆盖内容部分中的文本样式的样式对象  
//-- 底部tab栏定义
const RootTabNav = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
        },
        Mine: {
            screen: Mine,
        },
    },
    {
        initialRouteName: 'Home',
        swipeEnabled: false,
        animationEnabled: false,
        lazyLoad: true,
        //-- 头部配置
        navigationOptions: {
            headerLeft: null,
            gesturesEnabled: false
        },
        //-- 底部tab配置
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'red',
            labelStyle: {
                fontSize: 16,
            }
        },
    }
);

const AppStock = createStackNavigator(
    {
        RootTabNav: { screen: RootTabNav },
        NavigationCode: { screen: NavigationCode }
    },
    {
        initialRouteName: 'RootTabNav',
        navigationOptions: {
            gesturesEnabled: false
        }
    }
);

const LoginStack = createStackNavigator(
    {
        Login: { screen: Login }
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            gesturesEnabled: false
        }
    }
)

const WelcomeStack = createStackNavigator(
    {
        Welcome: Welcome,
        WelcomeCode: WelcomeCode
    },
    {
        initialRouteName: 'Welcome',
        navigationOptions: {
            gesturesEnabled: false
        }
    }
)
//-- 这里的3个stack 之后保留一个 ， 按顺序默认进入welcome，跳转app后，welcome销毁
const AppReactNavigation = createSwitchNavigator({
    Welcome: WelcomeStack, //-- 引导页
    Login: LoginStack,//-- 登陆页
    App: AppStock, //-- 主app
});
//-- 此处是为了解决在组件中通过navigationOption 配置 header ：null 不生效的bug
RootTabNav.navigationOptions = ({ navigation }) => {
    const component = RootTabNav.router.getComponentForState(navigation.state)
    if (typeof component.navigationOptions === 'function') {
        return component.navigationOptions({ navigation })
    }
    return component.navigationOptions
}

export default AppReactNavigation

组件中使用配置底部显示样式和头部样式：
static navigationOptions = ({ navigation }) => ({
    header: <Header
    title='引导页教程'
    backPress={() => {
        navigation.goBack();
    }} />,
    tabBarLabel: '首页',
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

        `;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true} >{code}</Text>
            </ScrollView>
        )
    }
}