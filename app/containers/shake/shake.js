import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import RNShakeEvent from 'react-native-shake-event'
export default class Shot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: null
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='摇一摇'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    componentWillMount() {
        RNShakeEvent.addEventListener('shake', () => {
            console.log('123123213132')
            this.setState({
                text: parseInt(this.state.text) + 1
            })
        });
    }

    componentWillUnmount() {
        RNShakeEvent.removeEventListener('shake');
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{this.state.text ? '您摇了' + this.state.text + '下' : '请摇一摇手机'}</Text>
                <ClickView {...this.props} />
            </View>
        )
    }
}