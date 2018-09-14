import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class ScrollableCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='tab栏切换源码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import styles from '../../theme'
import Header from '../../components/header'
import ClickView from '../../components/clickView'
export default class ScrollableTab extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='tab栏切换'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollableTabView
                    style={{ width: 400 }}
                    tabBarBackgroundColor='#fff'
                    tabBarActiveTextColor={styles.primaryColor}
                    tabBarInactiveTextColor='#4a4a4a'
                    tabBarTextStyle={{ fontSize: 14, top: 5 }}
                    tabBarUnderlineStyle={{ backgroundColor: styles.primaryColor, height: 2 }}

                >
                    <View tabLabel='全部' >
                        <Text>全部</Text>
                    </View>
                    <View tabLabel='收入' >
                        <Text>收入</Text>
                    </View>
                    <View tabLabel='支出' >
                        <Text>支出</Text>
                    </View>

                </ScrollableTabView>
                <ClickView {...this.props} />
            </View>
        )
    }
}`;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true}>{code}</Text>
            </ScrollView>
        )
    }
}