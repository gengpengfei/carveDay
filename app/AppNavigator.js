/**
 * https://www.cnblogs.com/CrazyWL/p/7283600.html 具体详细使用
 * 
 */
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import styles from './theme'
import Welcome from './containers/welcome/welcome'
import WelcomeCode from './containers/welcome/welcomeCode'
import Home from './containers/home/home'
import Errors from './containers/error/error'
import Mine from './containers/mine/mine'
import Login from './containers/login/login'
//-- 头部及底部
import NavigationCode from './containers/navigation/navigationCode';
//-- input 输入
import TextInput from './containers/textInput/textInput'
import TextInputCode from './containers/textInput/textInputCode'
//-- 监听android 返回键
import BackAndroid from './containers/backAndroid/backAndroid'
import BackAndroidCode from './containers/backAndroid/backAndroidCode'
//-- 轮播图组件
import SwiperImg from './containers/swiper/swiperImg'
import SwiperImgCode from './containers/swiper/swiperImgCode'
//-- 底部tab栏定义
const RootTabNav = createBottomTabNavigator(
    {
        Home: { screen: Home },
        Error: { screen: Errors },
        Mine: { screen: Mine }
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
            activeTintColor: styles.primaryColor,//label和icon的前景色 活跃状态下  
            activeBackgroundColor: '#fff',//label和icon的背景色 活跃状态下  
            inactiveTintColor: styles.primarySecondaryColor,//label和icon的前景色 不活跃状态下  
            inactiveBackgroundColor: '#fff',//label和icon的背景色 不活跃状态下  
            labelStyle: {
                fontSize: 16,
            }
        },
    }
);

const AppStock = createStackNavigator(
    {
        RootTabNav: { screen: RootTabNav },
        NavigationCode: { screen: NavigationCode },
        TextInput: { screen: TextInput },
        TextInputCode: { screen: TextInputCode },
        BackAndroid: { screen: BackAndroid },
        BackAndroidCode: { screen: BackAndroidCode },
        SwiperImg: { screen: SwiperImg },
        SwiperImgCode: { screen: SwiperImgCode }
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