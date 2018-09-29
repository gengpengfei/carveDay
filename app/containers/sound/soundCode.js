import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class SoundCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='音频播放代码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = ``;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true}>{code}</Text>
            </ScrollView>
        )
    }
}