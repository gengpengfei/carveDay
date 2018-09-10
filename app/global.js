
import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
global.screenWidth = width;
global.screenHeight = height;

global.APP_DEBUG = __DEV__;

if (__DEV__) {
    global.global_BASEURL = 'http://47.104.65.26';//测试ip
    global.APP_NAME = '约惠多测试版'
} else {
    global.global_BASEURL = 'http://139.224.220.33:8088';//正式ip
    global.APP_NAME = '约惠多'
}

global.isIOS = Platform.OS === 'ios';

// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;

function isIphoneX() {
    if (Platform.OS === 'ios' && ((height === X_HEIGHT && width === X_WIDTH) || (height === X_WIDTH && width === X_HEIGHT))) {
        return true;
    }
}

global.statusbarHeight = Platform.OS === 'ios' ? (isIphoneX() ? 44 : 20) : 0;//状态栏的高度
global.appBar_Height = Platform.OS === 'ios' ? 44 : 56;
global.header_Height = Platform.select({
    ios: statusbarHeight + appBar_Height,
    android: statusbarHeight + appBar_Height,
})
global.DebugLog = function () {
    APP_DEBUG ? console.log('DEBUG--->', arguments) : null;
}

//-- 主题颜色
global.THEME = 'blue'; 