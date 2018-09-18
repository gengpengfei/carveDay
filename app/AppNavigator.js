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
//-- 轮播图组件(react-native-swiper)
import SwiperImg from './containers/swiper/swiperImg'
import SwiperImgCode from './containers/swiper/swiperImgCode'
//-- 图片缓存组件（react-native-img-cache）
import ImageCache from './containers/imageCache/imageCache'
import ImageCacheCode from './containers/imageCache/imageCacheCode'
//-- 开关选择按钮
import SwitchButton from './containers/switchButton/switchButton'
import SwitchButtonCode from './containers/switchButton/switchButtonCode'
//-- 弹出层modal
import PopupModal from './containers/popupModal/popupModal'
import PopupModalCode from './containers/popupModal/popupModalCode'
//-- 验证码倒计时
import CountDown from './containers/countdown/countDown'
import CountDownCode from './containers/countdown/countDownCode'
//-- tab栏切换
import ScrollableTab from './containers/scrollableTab/scrollableTab'
import ScrollableTabCode from './containers/scrollableTab/scrollableTabCode'
//-- rn嵌套webview
import WebViews from './containers/webView/webViews'
import WebViewsCode from './containers/webView/webViewsCode';
//-- 背景色渐变
import Gradient from './containers/gradient/gradient'
import GradientCode from './containers/gradient/gradientCode'
//-- 图片上传
import UploadImg from './containers/uploadImg/uploadImg'
import UploadImgCode from './containers/uploadImg/uploadImgCode'
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
        SwiperImgCode: { screen: SwiperImgCode },
        ImageCache: { screen: ImageCache },
        ImageCacheCode: { screen: ImageCacheCode },
        SwitchButton: { screen: SwitchButton },
        SwitchButtonCode: { screen: SwitchButtonCode },
        PopupModal: { screen: PopupModal },
        PopupModalCode: { screen: PopupModalCode },
        CountDown: { screen: CountDown },
        CountDownCode: { screen: CountDownCode },
        ScrollableTab: { screen: ScrollableTab },
        ScrollableTabCode: { screen: ScrollableTabCode },
        WebViews: { screen: WebViews },
        WebViewsCode: { screen: WebViewsCode },
        Gradient: { screen: Gradient },
        GradientCode: { screen: GradientCode },
        UploadImg: { screen: UploadImg },
        UploadImgCode: { screen: UploadImgCode }
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