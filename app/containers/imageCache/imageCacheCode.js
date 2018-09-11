import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class BackAndroidCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='back回退源码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `安装组件：
npm install react-native-fetch-blob --save
npm install react-native-img-cache --save

`;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true}>{code}</Text>
            </ScrollView>
        )
    }
}