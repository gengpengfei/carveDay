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
                    //-- 样式
                    style={{ width: 400 }}
                    //-- tab栏背景
                    tabBarBackgroundColor='#fff'
                    //-- 选中文字颜色
                    tabBarActiveTextColor={styles.primaryColor}
                    //-- 未选中文字颜色
                    tabBarInactiveTextColor='#4a4a4a'
                    //-- 文字样式
                    tabBarTextStyle={{ fontSize: 14, top: 5 }}
                    //-- 底部切换效果
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
}