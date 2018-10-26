import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class OrientationCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='判断横竖屏代码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `android：
方法一：
打开AndroidManifest.xml文件，在activity属性上加上：  android:screenOrientation="portrait"


IOS：
方法一：
在工程–>target–>general里面找到Depolyment Info：
里面有个device orientation，里面第一个点上，其他的都取消就是默认竖屏了

方法二：
在AppDelegate.m中增加，这个方法可以禁止横屏

- (NSUInteger)application:(UIApplication *)application supportedInterfaceOrientationsForWindow:(UIWindow *)window
{
    return UIInterfaceOrientationMaskPortrait;
}
`;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true}>{code}</Text>
            </ScrollView>
        )
    }
}