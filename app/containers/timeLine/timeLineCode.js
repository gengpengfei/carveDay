import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class TimeLineCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='时间轴源码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `安装：
npm install react-native-timeline-listview        
react-native link react-native-timeline-listview

使用源码
import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Platform,
    TouchableOpacity,
    CameraRoll
} from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import Timeline from 'react-native-timeline-listview'
export default class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.data = [
            {
                time: '09:00',  //-- 时间
                title: 'Event 1',  //-- 标题
                description: 'Event 1 Description', //-- 内容
                lineWidth: 2, //-- 线宽
                lineColor: '#009688',  //-- 线颜色
                circleSize: 16, //-- 圆点大小
                circleColor: '#009688',  //-- 圆点颜色
                dotColor: '#000', //-- 圆点中心的颜色（当innerCircle 为 dot 时生效）
                icon: require('./src/soccer.png'),  //-- 当innerCircle 为 icon 时生效
            },
            { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
            { time: '12:00', title: 'Event 3', description: 'Event 3 Description Description Description Description' },
            { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
            { time: '16:30', title: 'Event 5', description: 'Event 5 Description' }
        ]
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='时间轴'
            backPress={() => {
                navigation.goBack();
            }} />,
    })

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Timeline
                    data={this.data}
                    style={{ width: screenWidth - 50 }} //-- 主体样式
                    listViewStyle={{}} //-- 列表区域样式
                    timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, }}  //-- 时间样式
                    titleStyle={{ fontSize: 20 }} //-- 标题样式
                    descriptionStyle={{ fontSize: 20 }} //-- 详细内容样式
                    iconStyle={{}} //-- 圆点样式
                    separatorStyle={{ backgroundColor: 'red' }} //-- 分割线的样式
                    rowContainerStyle={{}} //-- 每一个list的样式
                    timeContainerStyle={{ borderColor: 'red', borderWidth: 1, marginTop: 5 }} //-- 时间容器样式
                    detailContainerStyle={{}} //-- 详情容器样式
                    innerCircle={'icon'}  //-- 决定圆点以什么方式显示 none|dot|icon
                    separator={true}   //-- 每个时间详情之间是否使用分割线
                    columnFormat='single-column-left' //-- 时间轴的方向 single-column-left（时间在右边）|single-column-right（时间在左边）|two-column（两边排列）'
                    circleSize={16}//-- 圆点大小
                    circleColor='rgb(45,156,219)'//-- 圆点颜色
                    lineWidth={2} //-- 线宽
                    lineColor='rgb(45,156,219)'//-- 线颜色
                    dotColor='#000' //-- 圆点中心的颜色（当innerCircle 为 dot 时生效）
                    icon={require('./src/lunch.png')}  //-- 当innerCircle 为 icon 时生效
                    onEventPress={() => { }}  //-- 点击详情的回调
                    renderTime={(rowData, sectionID, rowID) => { }}  //-- 重写时间返回函数
                    renderCircle={(rowData, sectionID, rowID) => { }}  //-- 重写标题返回函数
                    renderDetail={(rowData, sectionID, rowID) => { }}  //-- 重写详情返回函数
                    renderFullLine={(rowData, sectionID, rowID) => { }}  //-- 重写分割线返回函数
                    showTime={true} //-- 是否显示时间
                    options={{
                        style: { paddingTop: 5 }
                    }}  //-- 整体配置
                />
                <ClickView {...this.props} />
            </View>
        );
    }
}`;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true}>{code}</Text>
            </ScrollView>
        )
    }
}