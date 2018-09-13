import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import { CachedImage, ImageCache } from 'react-native-img-cache'
export default class ImageCached extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='图片缓存技术'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    _clearCache = () => {
        ImageCache.get().clear();
    }
    _cancelCache = () => {
        ImageCache.get().cancel("https://loremflickr.com/640/480/dog");
    }
    _getCachePath = () => {
        let sss = ImageCache.get().getPath("https://loremflickr.com/640/480/dog");
        alert(sss);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <CachedImage
                    style={{ width: screenWidth, height: 200 }}
                    source={{ uri: 'https://loremflickr.com/640/480/dog' }}
                />
                <View style={{ height: 100, justifyContent: 'space-around', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={this._clearCache}
                    >
                        <Text>清空图片缓存</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._cancelCache}
                    >
                        <Text>取消图像的下载</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._getCachePath}
                    >
                        <Text>获取图像缓存路径</Text>
                    </TouchableOpacity>
                </View>
                <ClickView {...this.props} />
            </View>
        )
    }
}