import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import Header from '../../components/header'
export default class FlexAttr extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='flex属性'
            backPress={() => {
                navigation.goBack();
            }} />,
    })

    render() {
        var code = `容器属性：
flex-direction 主轴方向
	row（默认值）：主轴为水平方向，起点在左端。
	row-reverse：主轴为水平方向，起点在右端。
	column：主轴为垂直方向，起点在上沿。
	column-reverse：主轴为垂直方向，起点在下沿。

flex-wrap  如何换行
nowrap（默认）：不换行。
wrap：换行，第一行在上方。
wrap-reverse：换行，第一行在下方

flex-flow 简写形式，默认值为row nowrap

justify-content. 主轴上的对齐方式
	flex-start（默认值）：左对齐
	flex-end：右对齐
	center： 居中
	space-between：两端对齐，项目之间的间隔都相等。
	space-around：每个项目两侧的间隔相等。

align-items  交叉轴上如何对齐。
	flex-start：交叉轴的起点对齐。
	flex-end：交叉轴的终点对齐。
	center：交叉轴的中点对齐。
	baseline: 项目的第一行文字的基线对齐。
	stretch（默认值）：占满整个容器的高度。

align-content  多根轴线的对齐方式
	flex-start（默认值）：左对齐
	flex-end：右对齐
	center： 居中
	space-between：两端对齐，项目之间的间隔都相等。
	space-around：每个项目两侧的间隔相等。
	stretch（默认值）：轴线占满整个交叉轴。

项目属性：
flex-grow  放大比例
flex-shrink  缩小比例
flex-basis  项目将占据空间
flex  前3者的缩写 默认值为0 1 auto order  排列顺序
align-self  对齐方式，覆盖align-items属性
        `;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true}>{code}</Text>
            </ScrollView>
        )
    }
}