import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from '../../theme'
class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static navigationOptions = ({ navigation }) => ({
        header: null,
        tabBarLabel: '工具',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../home/src/home.png')}
                style={{
                    width: 18, height: 18,
                    tintColor: tintColor
                }}
            />
        )
    });
    render() {
        return (
            <View style={{ marginTop: statusbarHeight }}>
                <View style={{ borderWidth: 2, borderColor: styles.primaryColor }}></View>
                <View style={{ borderWidth: 1, borderColor: styles.primarySecondaryColor }}></View>
                <ScrollView>
                    <View style={{ width: screenWidth, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <View style={{ width: screenWidth / 3, height: screenWidth / 3 - 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('FlexAttr') }}
                            >
                                <Image source={require('./src/flex.png')} style={{ width: screenWidth / 3 - 20, height: screenWidth / 3 - 40 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: screenWidth / 3, height: screenWidth / 3 - 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('Vscode') }}
                            >
                                <Image source={require('./src/vscode.png')} style={{ width: screenWidth / 3 - 20, height: screenWidth / 3 - 40 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: screenWidth / 3, height: screenWidth / 3 - 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity>
                                <Image source={require('./src/linux.png')} style={{ width: screenWidth / 3 - 20, height: screenWidth / 3 - 40 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Mine;