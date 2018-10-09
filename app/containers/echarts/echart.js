import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Platform
} from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import Echarts from 'native-echarts';
export default class EChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apple: [2, 4, 7, 2, 2, 7, 13, 16],
            organ: [6, 9, 9, 2, 8, 7, 17, 18],
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='图表'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        const option = {
            //点击某一个点的数据的时候，显示出悬浮窗
            tooltip: {
                trigger: 'axis'
            },
            //可以手动选择现实几个图标
            legend: {
                data: ['苹果', '橘子']
            },
            //各种表格
            toolbox: {
                //改变icon的布局朝向
                //orient: 'vertical',
                show: true,
                showTitle: true,
                feature: {
                    //show是否显示表格，readOnly是否只读
                    dataView: { show: true, readOnly: false },
                    magicType: {
                        //折线图  柱形图    总数统计 分开平铺
                        type: ['line', 'bar', 'stack', 'tiled'],
                    },

                }
            },
            xAxis: [
                {
                    //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                    boundaryGap: true,
                    type: 'category',
                    name: '时间',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '销量(kg)'
                }
            ],
            //图形的颜色组
            color: ['rgb(249,159,94)', 'rgb(67,205,126)'],
            //需要显示的图形名称，类型，以及数据设置
            series: [
                {
                    name: '苹果',
                    //默认显
                    type: 'bar',
                    data: this.state.apple
                },
                {
                    name: '橘子',
                    type: 'bar',
                    data: this.state.organ
                }
            ]
        };
        const option2 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: '直达', selected: true },
                        { value: 679, name: '营销广告' },
                        { value: 1548, name: '搜索引擎' }
                    ]
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '55%'],

                    data: [
                        { value: 335, name: '直达' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1048, name: '百度' },
                        { value: 251, name: '谷歌' },
                        { value: 147, name: '必应' },
                        { value: 102, name: '其他' }
                    ]
                }
            ]
        }
        return (
            <View style={{ flex: 1 }}>
                <Echarts option={option} height={300} width={screenWidth} />
                <Echarts option={option2} height={300} width={screenWidth} />
                <ClickView {...this.props} />
            </View>
        );
    }
}

