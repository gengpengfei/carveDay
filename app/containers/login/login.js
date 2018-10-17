import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static navigationOptions = ({ navigation }) => ({
        header: null,
    });
    render() {
        return (
            <View>
                <Text>登陆页</Text>
            </View>
        );
    }
}

export default Home;