import React, { Component } from 'react';
import { View, Image } from 'react-native';
class Welcome extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        header: null
    })
    componentDidMount() {
        //-- 跳转home
        setTimeout(() => {
            this.props.navigation.navigate("RootTabNav");
        }, 2000);
    }
    render() {
        return (
            <View>
                <Image source={require('./src/welcome.png')} style={{ width: screenWidth, height: screenHeight }} />
            </View>
        )
    }
}
export default Welcome