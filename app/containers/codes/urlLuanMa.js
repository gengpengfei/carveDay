import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class BackAndroidCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='Url传参中文乱码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `js经过两次encodeUrl后，服务端使用两次解编辑
        
function encodeUrl(url) {
    return encodeURI(encodeURI(url);
}`;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true}>{code}</Text>
            </ScrollView>
        )
    }
}