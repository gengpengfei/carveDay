import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import Header from '../../components/header'
export default class Vscode extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='Vscode配置'
            backPress={() => {
                navigation.goBack();
            }} />,
    })

    render() {
        var code = `vscode配置reactNative开发环境

1.React Native Tools 插件（用于调试和api提醒）

2.Flow Language Support (JavaScript 代码静态类型检查的工具)
    flow.enabled	是否启用	true
    flow.pathToFlow	Path to flow binary. On Windows use '\\\\' as directory separator	flow
    flow.showStatus	显示方式	true
    flow.showUncovered	如果为true将默认显示未覆盖代码
    flow.runOnEdit	  是否在编辑的时候检测	true
    flow.stopFlowOnExit  关闭的时候退出	true
    flow.runOnAllFiles	是否在所有文件上运行
    flow.fileExtensions	处理的文件后缀名 .js .mjs .jsx .flow .json
    
3.ESLint (对代码的编程规范，语法错误等进行扫描)

4.Prettier - JavaScript formatter (代码格式化)

5.Auto Close Tag （html 自动补全） 

6.Auto Rename Tag 修改HTML标签时，自动修改匹配的标签

7.Color Highlight （颜色显示）

8.React-Native/React/Redux snippets for es6/es7 （React Native，React，Redux 常见代码片段的插件）

9.Path Intellisense （自动补全文件路径名的插件）

10.File Peek — 鼠标移到路径名按住ctrl可打开文件

11.HTML Class Suggestions — 类名命名提示

12.HTML CSS Support — CSS的智能补全

13.HTML Snippets — 回车或tap生成标签
        `;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true}>{code}</Text>
            </ScrollView>
        )
    }
}