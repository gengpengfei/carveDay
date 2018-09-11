import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image
} from 'react-native';
class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static navigationOptions = ({ navigation }) => ({
        header: null,
        tabBarLabel: '工具',
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
            <ScrollView>
                <View>我的页面</View>
            </ScrollView>
        );
    }
}

export default Mine;