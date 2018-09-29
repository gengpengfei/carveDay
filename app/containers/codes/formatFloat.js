import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class FormatFloat extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='金额格式化'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    componentDidMount() {
        function formatFloat(src, pos) {
            var num = parseFloat(src).toFixed(pos);
            num = num.toString().replace(/\$|\,/g, '');
            if (isNaN(num)) num = "0";
            sign = (num == (num = Math.abs(num)));
            num = Math.floor(num * 100 + 0.50000000001);
            cents = num % 100;
            num = Math.floor(num / 100).toString();
            if (cents < 10) cents = "0" + cents;
            for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
                num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
            return (((sign) ? '' : '-') + num + '.' + cents);
        }
        var aa = formatFloat('-8.55567', 2);
        console.log(aa)
    }
    render() {
        var code = `function formatFloat(src, pos) {
    var num = parseFloat(src).toFixed(pos);
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num)) num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10) cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + num + '.' + cents);
}
var aa = formatFloat('-8.55567', 2);`;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true}>{code}</Text>
            </ScrollView>
        )
    }
}