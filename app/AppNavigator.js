/**
 * https://www.cnblogs.com/CrazyWL/p/7283600.html 具体详细使用
 * 
 */
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import Welcome from './containers/welcome/welcome'
import WelcomeCode from './containers/welcome/welcomeCode'
import Home from './containers/home/home'
import Mine from './containers/mine/mine'
import Login from './containers/login/login'
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
        navigationOptions: {
            headerLeft: null,
            gesturesEnabled: false,
            header: null
        },
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
    },
    {
        initialRouteName: 'RootTabNav',
        navigationOptions: {
            gesturesEnabled: false,
            header: null
        }
    }
);

const LoginStack = createStackNavigator(
    {
        Login: { screen: Login }
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
            gesturesEnabled: false,
            header: null
        }
    }
)
const AppReactNavigation = createSwitchNavigator({
    Welcome: WelcomeStack, //-- 引导页
    Login: LoginStack,//-- 登陆页
    App: AppStock //-- 主app
});

export default AppReactNavigation