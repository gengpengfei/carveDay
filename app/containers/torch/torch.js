import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'

export default class Torch extends Component {

    constructor() {
        super();
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='闪光灯控制'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View style={{}}>
                <ClickView {...this.props} />
            </View>
        );
    }
}