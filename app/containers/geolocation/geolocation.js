import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import { Geolocation } from "react-native-amap-geolocation"
export default class Geolocations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ''
        }
    }
    componentDidMount() {
        Geolocation.init({
            ios: "c923198c763a9df0ed86b543023c8788",
            android: "cc52695485b1701c1a300a8d0f42b486"
        })
    }
    componentWillMount() {
        Geolocation.setOptions({
            interval: 8000,
            distanceFilter: 20
        })
        Geolocation.addLocationListener(location => console.log(location))
        Geolocation.start()
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='定位'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 230, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={this.shot2}
                    >
                        <Text>截取组件</Text>
                    </TouchableOpacity>
                </View>
                <ClickView {...this.props} />
            </View>
        )
    }
}