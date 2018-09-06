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
        tabBarLabel: '首页',
        // tabBarIcon: ({ tintColor }) => (
        // <Image
        //     source={require('./src/home.png')}
        //     style={{
        //         width: 18, height: 18,
        //         tintColor: tintColor
        //     }}
        // />
        // ),
        // tabBarOnPress: (scene, jumpToIndex) => {
        //     if (navigation.state.params && navigation.state.params.nTabBarOnPress) {
        //         navigation.state.params.nTabBarOnPress()
        //     }
        //     scene.jumpToIndex(scene.scene.index);
        // }
    });
    render() {
        return (
            <View>
                <Text>我的页面</Text>
            </View>
        );
    }
}

export default Home;