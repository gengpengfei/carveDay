import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Platform,
    Text,
    TouchableHighlight,
    Image,
    ImageBackground
} from 'react-native'


import {navBarStyle} from '../../utils/commonStyles'

export default class HeadView extends Component {
    static propTypes = {
        tilte: React.PropTypes.string,

        showBack: React.PropTypes.bool,//是否显示返回按钮
        backBtnOnPress: React.PropTypes.func,//--返回按钮的回调

        showRightButton: React.PropTypes.bool,//是否显示右边的按钮
        rihghtBtnOnPress: React.PropTypes.func,
        rightItemString: React.PropTypes.string,
        btnStyle: TouchableHighlight.propTypes.style,
    }

    static defaultProps = {
        showBack: false,
        showRightButton: false,
    }

    render() {
        let r_imgPath = this.props.rightImagePath ? this.props.rightImagePath : require('./img/btnAdd.png');
        let l_imgPath = this.props.leftImagePath ? this.props.leftImagePath : require('./img/title-icon-left.png');
        return (
            <View style={styles.headViewStyle}>
                <View style={styles.headBarStyle}></View>
                <ImageBackground source={require("./img/headerbg.jpg")}style={{height:44,width:"auto"}} resizeMode='cover'>
                <View style={styles.contentViewStyle}>
                    {
                        this.props.showBack ? <TouchableHighlight
                            style={[styles.btnDefaultStyle, this.props.btnStyle]}
                            activeOpacity={0.5}
                            underlayColor={'transparent'}
                            onPress={this.props.backBtnOnPress}>
                            <Image
                                style={styles.btnDefaultImageStyle}
                                source={l_imgPath}
                            />
                        </TouchableHighlight> : <View style={styles.btnDefaultStyle}></View>
                    }
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                    {
                        this.props.showRightButton ? <TouchableHighlight
                            style={[styles.btnDefaultStyle, this.props.btnStyle]}
                            activeOpacity={0.5}
                            underlayColor={'transparent'}
                            onPress={this.props.rihghtBtnOnPress}>
                            <Image
                                style={styles.btnDefaultImageStyle}
                                source={r_imgPath}
                            />
                        </TouchableHighlight> : <View style={styles.btnDefaultStyle}>
                            <Text style={styles.titleStyle}>{this.props.rightItemString}</Text>
                        </View>
                    }
                </View>
                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    headViewStyle: {
        backgroundColor: navBarStyle.theme_color,
        height: Platform.OS === 'ios' ? 64 : 44,
    },
    headBarStyle: {
        backgroundColor: navBarStyle.theme_color,
        height: Platform.OS === 'ios' ? 20 : 0,
    },
    contentViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 44,
    },
    titleStyle: {
        color: navBarStyle.titleColor,
        fontSize: navBarStyle.titleFont,
        textAlign: 'center',
    },
    btnDefaultStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 40,
    },
    btnDefaultImageStyle: {
        right: 10,
        width: 20,
        height: 20,
    },

});
