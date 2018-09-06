/**
 * https://www.cnblogs.com/CrazyWL/p/7283600.html 具体详细使用
 * 
 */
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Welcome from './containers/welcome/welcome'
import Home from './containers/home/home'
const RootTabNav = createBottomTabNavigator(
    {
        Home: { screen: Home },
    },
    {
        initialRouteName: 'Home',
        swipeEnabled: false,
        animationEnabled: false,
        lazyLoad: true,
        navigationOptions: {
            headerLeft: null,
            gesturesEnabled: false,
        },
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'red',
            labelStyle: {
                fontSize: 15,
            }
        },
    }
);

//第一个参数 导航页面的配置 以及一些静态配置参数  第二个参数初始页面配置
const AppReactNavigation = createStackNavigator(
    {
        Welcome: { screen: Welcome },
        RootTabNav: { screen: RootTabNav },
    },
    {
        initialRouteName: 'Welcome',
        navigationOptions: {
            gesturesEnabled: false,
        }
    }
);

export default AppReactNavigation;