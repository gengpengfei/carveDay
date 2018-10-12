import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import Sketch from 'react-native-sketch';
export default class Sketchs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            strokeColor: '#fff'
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='手写签名'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    save = () => {
        this.sketch.save().then(({ path }) => {
            console.log(path)
            this.sketch.clear();
            alert('Image saved!', path);
        });
    };
    clear = () => {
        this.sketch.clear();
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{ backgroundColor: '#000', height: screenHeight - 100 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 50 }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ strokeColor: '#fff' })
                            }}
                            style={{ backgroundColor: '#fff', width: 26, height: 26, borderRadius: 13 }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ strokeColor: 'green' })
                            }}
                            style={{ backgroundColor: 'green', width: 26, height: 26, borderRadius: 13 }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ strokeColor: 'red' })
                            }}
                            style={{ backgroundColor: 'red', width: 26, height: 26, borderRadius: 13 }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ strokeColor: 'yellow' })
                            }}
                            style={{ backgroundColor: 'yellow', width: 26, height: 26, borderRadius: 13 }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ strokeColor: 'blue' })
                            }}
                            style={{ backgroundColor: 'blue', width: 26, height: 26, borderRadius: 13 }}
                        />

                    </View>
                    <Sketch
                        ref={sketch => {
                            this.sketch = sketch;
                        }}
                        imageType='png' //-- 导出的图片格式 png|jpg 
                        onChange={() => { console.log('正在画图') }} //-- 画一笔调用一次
                        onClear={() => { console.log('清除') }}  //-- 清除画面
                        strokeColor={this.state.strokeColor}  //-- 笔画的颜色
                        strokeThickness={1} //-- 笔画的宽度
                        style={{ borderColor: 'red', borderWidth: 1, width: screenWidth - 50 }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Button onPress={this.clear} title="clear" />
                        <Button onPress={this.save} title="Save" />
                    </View>
                </View>
                <ClickView {...this.props} />
            </View>
        )
    }
}