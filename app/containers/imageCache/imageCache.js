import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/header'
import { CachedImage } from "react-native-img-cache";
export default class ImageCache extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='图片缓存技术'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View>
                <CachedImage source={{ uri: "https://i.ytimg.com/vi/yaqe1qesQ8c/maxresdefault.jpg" }} />

                <TouchableOpacity>

                </TouchableOpacity>
            </View>
        )
    }
}