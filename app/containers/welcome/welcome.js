import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
class Welcome extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => {
        header: null
    }
    render() {
        return (
            <View>
                <Text>123</Text>
            </View>
        )
    }
}
export default Welcome