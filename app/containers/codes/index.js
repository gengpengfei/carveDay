import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
export default class Index extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        header: null,
        tabBarLabel: '片段',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../home/src/home.png')}
                style={{
                    width: 18, height: 18,
                    tintColor: tintColor
                }}
            />
        )
    });
    render() {
        return (
            <View>
                <Text>123</Text>
            </View>
        )
    }
}