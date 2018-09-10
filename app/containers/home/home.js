import React, { PureComponent, Component } from 'react';
import {
    Platform,
    StyleSheet,
    ImageBackground,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    Image,
    FlatList,
    TextInput,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import Header from '../../components/header'
import list from './list.json'
import styles from '../../theme'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    static navigationOptions = ({ navigation }) => ({
        header: null,
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./src/home.png')}
                style={{
                    width: 18, height: 18,
                    tintColor: tintColor
                }}
            />
        ),
        //-- 这里可以实现切换tab时刷新ui处理等
        tabBarOnPress: () => {

        }
    });
    searchPress = (searchStr) => {
        console.log('searchStr', searchStr)
    }
    componentDidMount() {
        this._getList();
    }
    _getList = () => {
        this.setState({
            list: list
        })
    }
    render() {
        console.log('list', this.state.list)
        return (
            <SafeAreaView>
                <HomeHeader searchPress={this.searchPress} />
                <FlatList
                    data={this.state.list}
                    renderItem={() => <Text>123</Text>}
                />
            </SafeAreaView>
        );
    }
}

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr: ''
        }
    }
    static defaultProps = {
        searchPress: () => {
        }
    };
    _onChangeText = (text) => {
        this.setState({
            searchStr: text
        })
    }
    _clearSearchStr = () => {
        this.setState({
            searchStr: ''
        })
    }
    _onSubmintEditing = () => {
        if (this.state.searchStr == '') {
            return;
        }
        this.props.searchPress(this.state.searchStr);
    }
    render() {
        return (
            <ImageBackground
                resizeMode='cover'
                source={require('./src/headerBorder.png')}
                style={{ height: appBar_Height, marginTop: statusbarHeight }}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现
                    hidden={false}  //是否隐藏状态栏。  
                    backgroundColor={'green'} //状态栏的背景色  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'default'} // enum('default', 'light-content', 'dark-content')   
                />
                <View style={{ flexDirection: 'row', height: appBar_Height }}>
                    {/* 这里的按钮通常作为定位入口 */}
                    <TouchableOpacity
                        onPress={this._clearSearchStr}
                        style={{ flex: 1 }}
                    >
                    </TouchableOpacity>
                    <TextInput
                        onSubmitEditing={this._onSubmintEditing}
                        underlineColorAndroid="transparent"
                        // autoFocus={true}
                        returnKeyType={'search'}
                        placeholder={"搜索"}
                        style={{
                            height: appBar_Height,
                            borderColor: 'gray',
                            fontSize: 16,
                            padding: 0,
                            flex: 7
                        }}
                        onChangeText={this._onChangeText}
                        value={this.state.searchStr}
                    />
                    {/* 这里的按钮通常作为扫描二维码入口 */}
                    <TouchableOpacity
                        onPress={this._onSubmintEditing}
                        style={{ flex: 1 }}
                    >
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default Home;