import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../theme'
import Header from '../../components/header'
export default class Flexs extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='flex教程'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View>
                <View style={{ height: 1, backgroundColor: styles.linkColor }}></View>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('FlexAttr')
                    }}
                    style={{ padding: 5, height: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: styles.linkColor }}
                >
                    <Text>flex属性列表</Text><Text style={{ color: styles.primaryColor }}>></Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {

                    }}
                    style={{ padding: 5, height: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: styles.linkColor }}
                >
                    <Text>123</Text><Text style={{ color: styles.primaryColor }}>></Text>
                </TouchableOpacity>
            </View>
        )
    }
}