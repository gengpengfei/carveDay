import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
export default class Errors extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        header: null,
        tabBarLabel: '错误',
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