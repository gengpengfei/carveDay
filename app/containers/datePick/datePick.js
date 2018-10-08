//组件要求暴露出使用时传进来的参数/方法等
import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from '../../theme'
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import DatePicker from 'react-native-datepicker'
export default class DatePick extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()  //-- 默认显示当前时间，自定义则为'1991-1-1'
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='日期选择器'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <DatePicker
                    style={{ width: 200 }} //-- 选择器外部样式
                    // language='zh'
                    date={this.state.date}
                    mode="date"   //-- 类型 datetime|date|time
                    androidMode="default" //-- 仅仅适用于android default|calendar|spinner
                    format="YYYY-MM-DD hh:mm"   //-- 格式化类型
                    confirmBtnText="确定"  //-- 确定按钮文字
                    cancelBtnText="取消"    //-- 取消按钮文字
                    showIcon={true}   //-- 是否显示图标
                    iconSource={require('./src/date.png')}  //-- 自定义图标
                    minDate="2016-05-01"  //-- 最小日期
                    maxDate="2019-10-01"  //-- 最大日期
                    hideText={false} //-- 是否隐藏日期框显示
                    disabled={false}  //-- 是否关闭日期选择
                    is24Hour={true}  //-- 是否使用24小时制（仅仅适用于android）
                    minuteInterval={10}  //-- 最小时间间隔，在选择分钟的时候使用
                    placeholder="选择时间"  //--
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        //-- appearance: dateInput, disabled, dateTouchBody, dateIcon, placeholderText, dateText
                        //-- ios select panel: datePickerCon, datePicker, btnConfirm, btnTextConfirm, btnCancel, btnTextCancel
                    }}  //-- 图标和日期框的样式
                    onDateChange={(date) => { this.setState({ date: date }) }}  //-- 日期改变时
                    onOpenModal={(date) => { console.log('open') }}  //-- 弹出日期选择时
                    onCloseModal={(date) => { console.log('close') }}  //-- 关闭日期选择时
                // getDateStr={(date) => { console.log() }}  //-- 重写日期格式化函数
                />
                <ClickView {...this.props} />
            </View>
        )
    }
}