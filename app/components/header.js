/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from '../theme'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    Modal,

} from 'react-native';
const width = Dimensions.get("window").width;
export default class Header extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            cont: this.props.title
        };
        
    }
    render() {
        return (
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#efefef', width: screenWidth, paddingRight: 14, height: header_Height, backgroundColor: "#fff", justifyContent: "space-between", flexDirection: "row", alignItems: "center", position: 'relative', paddingTop: statusbarHeight }}>
                <TouchableOpacity
                    onPress={() => {
                        if(this.props.backBtnOnPress){
                            this.props.backBtnOnPress()
                        }else{
                            navigation.goBack();
                        }
                        
                    }}
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                    <Image source={require('./src/left_Arrow.png')} style={{ width: 18, height: 18, resizeMode: "cover", tintColor: styles.linkColor }} />
                    <Text style={{ color: styles.linkColor, fontSize: styles.fontSizeTitle }}>返回</Text>
                </TouchableOpacity>
                <Text style={{ fontSize:styles.fontSizeTitle, color: styles.linkColor }}>{this.props.title}</Text>
                <TouchableOpacity
                    onPress={() => {
                        if (this.props.rihghtBtnOnPress) {
                            this.props.rihghtBtnOnPress()
                        }
                    }}
                >
                    {this.props.flag ? <Image source={require('./src/more.png')} style={{ width: 30, height: 30 }} /> : <Text style={{ fontSize: 18, color: '#F63300', marginRight: 10, width: 20 }}>{this.props.rightRitle}</Text>}
                </TouchableOpacity>
            </View>
        );
    }
}
