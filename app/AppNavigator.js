/**
 * https://www.cnblogs.com/CrazyWL/p/7283600.html 具体详细使用
 * 
 */
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import styles from './theme'
import Welcome from './containers/welcome/welcome'
import WelcomeCode from './containers/welcome/welcomeCode'
import Home from './containers/home/home'
import Codes from './containers/codes/index'
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
//-- 缓存技术
import Storages from './containers/storage/storages'
import StoragesCode from './containers/storage/storagesCode'
//-- 点击拖拽
import Drag from './containers/drag/drag'
import DragCode from './containers/drag/dragCode'
//-- 动画
import Animation from './containers/animation/animation'
import AnimationCode from './containers/animation/animationCode'
//-- 视频
import Video from './containers/video/video'
import VideoCode from './containers/video/videoCode'
//-- 音频
import Sound from './containers/sound/sound'
import SoundCode from './containers/sound/soundCode'
//-- 滑块
import Slider from './containers/slider/slider'
import SliderCode from './containers/slider/sliderCode'
//-- 日期选择器
import DatePick from './containers/datePick/datePick'
import DatePickCode from './containers/datePick/datePickCode'
//-- 图表
import EChart from './containers/echarts/echart'
import EChartCode from './containers/echarts/echartCode'
//-- 二维码生成
import QRCode from './containers/qrcode/qrcode'
import QRCodeCode from './containers/qrcode/qrcodeCode'
//-- 二维码扫描
import ScanCode from './containers/scanCode/scanCode'
import ScanCodeCode from './containers/scanCode/scanCodeCode'
//-- 录音
import Audio from './containers/audio/audio'
import AudioCode from './containers/audio/audioCode'
//-- 截屏
import Shot from './containers/shot/shot'
import ShotCode from './containers/shot/shotCode'
//-- 获取联系人
import Contacts from './containers/contacts/contacts'
import ContactsCode from './containers/contacts/contactsCode'
//-- 文件下载和编辑
import File from './containers/file/file'
import FileCode from './containers/file/fileCode'
//-- toast轻提示
import Toast from './containers/toast/toast'
import ToastCode from './containers/toast/toastCode'
//-- app缓存管理
import AppCache from './containers/appCache/appCache'
import AppCacheCode from './containers/appCache/appCacheCode'
//-- 摇一摇
import Shake from './containers/shake/shake'
import ShakeCode from './containers/shake/shakeCode'
//-- 画图
import Sketch from './containers/sketch/sketch'
import SketchCode from './containers/sketch/sketchCode'
//-- 时间轴
import TimeLine from './containers/timeLine/timeLine'
import TimeLineCode from './containers/timeLine/timeLineCode'


//-- 工具-flex 
import Flexs from './containers/flex/flexs'
import FlexAttr from './containers/flex/flexAttr'
//-- 工具-vscode
import Vscode from './containers/vscode/vscode'
//-- 工具-webpack
import WebPack from './containers/webpack/webpack'


//-- 片段-url传输中文乱码
import UrlLuanMa from './containers/codes/urlLuanMa'
//-- 片段-格式化金额
import FormatFloat from './containers/codes/formatFloat'
//-- 片段-生命周期
import Cycle from './containers/codes/生命周期'

//-- 底部tab栏定义
const RootTabNav = createBottomTabNavigator(
    {
        Home: { screen: Home },
        Codes: { screen: Codes },
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
        UploadImgCode: { screen: UploadImgCode },
        Storages: { screen: Storages },
        StoragesCode: { screen: StoragesCode },
        Drag: { screen: Drag },
        DragCode: { screen: DragCode },
        Animation: { screen: Animation },
        AnimationCode: { screen: AnimationCode },
        Video: { screen: Video },
        VideoCode: { screen: VideoCode },
        Sound: { screen: Sound },
        SoundCode: { screen: SoundCode },
        Slider: { screen: Slider },
        SliderCode: { screen: SliderCode },
        DatePick: { screen: DatePick },
        DatePickCode: { screen: DatePickCode },
        EChart: { screen: EChart },
        EChartCode: { screen: EChartCode },
        QRCode: { screen: QRCode },
        QRCodeCode: { screen: QRCodeCode },
        ScanCode: { screen: ScanCode },
        ScanCodeCode: { screen: ScanCodeCode },
        Audio: { screen: Audio },
        AudioCode: { screen: AudioCode },
        Shot: { screen: Shot },
        ShotCode: { screen: ShotCode },
        Contacts: { screen: Contacts },
        ContactsCode: { screen: ContactsCode },
        File: { screen: File },
        FileCode: { screen: FileCode },
        Toast: { screen: Toast },
        ToastCode: { screen: ToastCode },
        AppCache: { screen: AppCache },
        AppCacheCode: { screen: AppCacheCode },
        Shake: { screen: Shake },
        ShakeCode: { screen: ShakeCode },
        Sketch: { screen: Sketch },
        SketchCode: { screen: SketchCode },
        TimeLine: { screen: TimeLine },
        TimeLineCode: { screen: TimeLineCode },

        Flexs: { screen: Flexs },
        FlexAttr: { screen: FlexAttr },
        Vscode: { screen: Vscode },
        WebPack: { screen: WebPack },

        UrlLuanMa: { screen: UrlLuanMa },
        FormatFloat: { screen: FormatFloat },
        Cycle: { screen: Cycle }
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