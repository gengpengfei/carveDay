/**
 * https://www.cnblogs.com/CrazyWL/p/7283600.html 具体详细使用
 * 
 */
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { connect } from 'react-redux';
import Welcome from './containers/welcome/welcome'
// import Home from './containers/home/home'

// const RootTabNav = TabNavigator(
//     {
//         Home: { screen: Home },
//     },
//     {
//         initialRouteName: 'Home',
//         swipeEnabled: false,
//         animationEnabled: false,
//         lazyLoad: true,
//         navigationOptions: {
//             headerLeft: null,
//             gesturesEnabled: false,
//         },
//         tabBarComponent: TabBarBottom,
//         tabBarPosition: 'bottom',
//         // tabBarOptions: {
//         //     activeTintColor: tabBarIconStyle.activeColor,
//         //     inactiveTintColor: tabBarIconStyle.inactiveColor,
//         //     labelStyle: {
//         //         fontSize: tabBarIconStyle.labelFontSize,
//         //     },
//         // },
//     }
// );

/***
 * 跳转动画，别删！！
 * 五种跳转动画，forHorizontal forVertical forFadeFromBottomAndroid forInitial mySearchTransition
 * 用法：navigate('Search',{ transition: 'mySearchTransition'})
 * ***/
// const TransitionConfiguration = () => ({
//     // transitionSpec: {
//     //     duration:500,
//     //     easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
//     //     timing: Animated.timing,
//     // },
//     screenInterpolator: (sceneProps) => {
//         const { scene } = sceneProps;
//         const { route } = scene;
//         const params = route.params || {};
//         const transition = params.transition || 'forHorizontal';
//         return CardStackStyleInterpolator[transition](sceneProps);
//     },
// });
//第一个参数 导航页面的配置 以及一些静态配置参数  第二个参数初始页面配置
const AppReactNavigation = StackNavigator(
    {
        Welcome: { screen: Welcome },
        // RootTabNav: { screen: RootTabNav },
    }
    // ,
    // {
    // initialRouteName: 'Welcome',
    // transitionConfig: TransitionConfiguration,
    // navigationOptions: {
    //     gesturesEnabled: false,
    // }
    // }
);

export default connect()(AppReactNavigation);