import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import Swipeout from 'react-native-swipeout'
export default class Swipeouts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: null
        }
        this.swipeoutBtns = [
            {
                text: 'Button'
            }
        ]
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='侧滑删除'
            backPress={() => {
                navigation.goBack();
            }} />,
    })

    componentWillMount() {

    }

    componentWillUnmount() {

    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Swipeout right={this.swipeoutBtns}>
                    <View>
                        <Text>Swipe me left</Text>
                    </View>
                </Swipeout>
                <ClickView {...this.props} />
            </View>
        )
    }
}