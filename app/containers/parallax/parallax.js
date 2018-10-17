import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, FlatList, Image, ScrollView, Animated } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
export default class Parallax extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
            windowHeight: 100
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='下拉图片放大刷新'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var { onScroll, windowHeight, scrollY } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <Animated.Image
                    style={[{
                        height: windowHeight,
                        width: screenWidth,
                        position: 'absolute',
                        transform: [{
                            translateY: scrollY.interpolate({
                                inputRange: [-windowHeight, 0, windowHeight],
                                outputRange: [windowHeight / 2, 0, -windowHeight / 3]
                            })
                        }, {
                            scale: scrollY.interpolate({
                                inputRange: [-windowHeight, 0, windowHeight],
                                outputRange: [2, 1, 1]
                            })
                        }]
                    }]}
                    source={require('./src/webpack.png')}
                />
                <ScrollView
                    ref={component => { this._scrollView = component; }}
                    {...this.props}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }]
                    )}
                    scrollEventThrottle={16}>
                    <Animated.View style={{
                        height: windowHeight,
                        opacity: scrollY.interpolate({
                            inputRange: [-windowHeight, 0, windowHeight / 1.2],
                            outputRange: [1, 1, 0]
                        }),
                    }}>
                        <Text>头部</Text>
                    </Animated.View>
                    <View style={{ height: 500, width: screenWidth }}>
                        <Text>123</Text>
                    </View>
                </ScrollView>
                <ClickView {...this.props} />
            </View>
        );
    }
}
