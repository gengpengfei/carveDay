import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class AppCacheCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='清除缓存源码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `安装：
npm install react-native-http-cache --save
react-native link react-native-http-cache

android错误，找不到:
getSmallImageDiskStorageCache() 改为getMainFileCache
getMainDickStorageCache()改为getSmallImageFileCache

ios报错：
是重复导入引起的。注释重复导入的组件即可。
RCTHttpCache.m文件中注释掉下面3行：
#import "RCTHttpCache.h"
//#import "RCTImageLoader.h"
//#import "RCTImageCache.h"
//#import "RCTBridge.h"

源码：
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import * as CacheManager from 'react-native-http-cache'
export default class AppCached extends Component {
    constructor(props) {
        super(props)
        this.state = {
            http: 0,
            image: 0,
            all: 0
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='app缓存管理'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    componentWillMount() {
        this.getCache();
    }
    async getCache() {
        try {
            this.setState({
                'http': await CacheManager.getHttpCacheSize(),
                'image': await CacheManager.getImageCacheSize(),
                'all': await CacheManager.getCacheSize(),
            });
        } catch (err) {
            alert('错误', err.message);
        }
    }
    async clearCache() {
        try {
            await CacheManager.clearCache();
            await this.getCache();
        } catch (err) {
            alert('错误', err.message);
        }
    }
    async clearHttpCache() {
        try {
            await CacheManager.clearHttpCache();
            await this.getCache();
        } catch (err) {
            alert('错误', err.message);
        }
    }
    async clearImageCache() {
        try {
            await CacheManager.clearImageCache();
            await this.getCache();
        } catch (err) {
            alert('错误', err.message);
        }
    }
    render() {
        const { session } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Text>Http缓存大小：{this.state.http}</Text>
                    <Text>图片缓存大小：{this.state.image}</Text>
                    <Text>总缓存大小：{this.state.all}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => this.clearCache()}>
                        <Text>清除所有缓存</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.clearImageCache()}>
                        <Text>清除图片缓存</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.clearHttpCache()}>
                        <Text>清除http缓存</Text>
                    </TouchableOpacity>
                </View>
                <ClickView {...this.props} />
            </View>
        );
    }
}
`;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true}>{code}</Text>
            </ScrollView>
        )
    }
}