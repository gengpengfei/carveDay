import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

class WelcomeCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '欢迎页实现教程'
    })
    render() {
        var code = `import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import ClickView from './../../components/clickView'

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
            // this.props.navigation.navigate("RootTabNav");
        }, 2000);
    }
    render() {
        return (
            <View>
                <Image source={require('./src/welcome.png')} style={{ width: screenWidth, height: screenHeight }} />
                <ClickView {...this.props} />
            </View>
        )
    }
}
export default Welcome`;
        return (
            <View>
                <Text selectable={true} style={{ borderColor: 'red', borderWidth: 1, padding: 20 }}>{code}</Text>
            </View>
        )
    }
}
export default WelcomeCode