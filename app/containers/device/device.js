/**
 * Created by wangdi on 27/11/16.
 */
'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import DeviceInfo from 'react-native-device-info';
export default class Device extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BatteryLevel: '',
            IPAddress: '',
            mac: ''
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='获取设备信息'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    componentDidMount() {
        DeviceInfo.getBatteryLevel().then(batteryLevel => {
            this.setState({
                BatteryLevel: batteryLevel
            })
        })//--电池电平（0-1）

        DeviceInfo.getIPAddress().then(ip => {
            this.setState({
                IPAddress: ip
            })
        })  //-- ip地址
        DeviceInfo.getMACAddress().then(mac => {
            this.setState({
                MACAddress: mac
            })
        }) //-- 网络MAC地址
    }
    appName = DeviceInfo.getApplicationName()//-- 应用名称
    Brand = DeviceInfo.getBrand()//-- 设备品牌
    BuildNumber = DeviceInfo.getBuildNumber() //-- 应用程序生成号
    BuildId = DeviceInfo.getBundleId() //-- 应用程序包标志服
    Carrier = DeviceInfo.getCarrier() //-- 网络运营商
    DeviceCountry = DeviceInfo.getDeviceCountry() //-- 获取设备地域
    DeviceId = DeviceInfo.getDeviceId() //-- 设备id
    DeviceLocale = DeviceInfo.getDeviceLocale() //-- 设备地点
    DeviceName = DeviceInfo.getDeviceName() //-- 设备名称
    FontScale = DeviceInfo.getFontScale() //-- 设备字体大小
    FreeDiskStorage = DeviceInfo.getFreeDiskStorage(); //-- 设备存储空间
    Manufacturer = DeviceInfo.getManufacturer() //-- 设备制造商
    Model = DeviceInfo.getModel() //-- 设备模型
    ReadableVersion = DeviceInfo.getReadableVersion() //-- 应用程序的可读版本
    SystemName = DeviceInfo.getSystemName() //-- 操作系统
    SystemVersion = DeviceInfo.getSystemVersion() //-- 操作系统版本
    Timezone = DeviceInfo.getTimezone() //-- 时区
    TotalDiskCapacity = DeviceInfo.getTotalDiskCapacity() //-- 完整磁盘存储大小
    TotalMemory = DeviceInfo.getTotalMemory() //-- 总内存
    UniqueID = DeviceInfo.getUniqueID() //-- 唯一id
    UserAgent = DeviceInfo.getUserAgent() //-- 用户代理
    Version = DeviceInfo.getVersion() //-- 应用程序版本
    is24Hour = DeviceInfo.is24Hour() //-- 是否是24小时制
    isEmulator = DeviceInfo.isEmulator() //-- 是否是模拟器
    isPinOrFingerprintSet = DeviceInfo.isPinOrFingerprintSet() //-- 是否设置过指纹
    isTablet = DeviceInfo.isTablet() //-- 是否是平板
    hasNotch = DeviceInfo.hasNotch() //-- 不清楚
    isLandscape = DeviceInfo.isLandscape();//--是否处于景观模式
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Text>应用名称:{this.appName}</Text>
                <Text>电池电平:{this.state.BatteryLevel}</Text>
                <Text>设备品牌{this.Brand}</Text>
                <Text>应用程序生成号:{this.BuildNumber}</Text>
                <Text>应用程序包标志服:{this.BuildId}</Text>
                <Text>应用程序版本:{this.Version}</Text>
                <Text>应用程序的可读版本:{this.ReadableVersion}</Text>
                <Text>唯一id:{this.UniqueID}</Text>
                <Text>网络运营商:{this.Carrier}</Text>
                <Text>ip地址:{this.state.IPAddress}</Text>
                <Text>网络MAC地址:{this.state.MACAddress}</Text>
                <Text>获取设备地域:{this.DeviceCountry}</Text>
                <Text>设备id:{this.DeviceId}</Text>
                <Text>设备名称:{this.DeviceName}</Text>
                <Text>设备地点:{this.DeviceLocale}</Text>
                <Text>设备字体大小:{this.FontScale}</Text>
                <Text>设备存储空间:{this.FreeDiskStorage}</Text>
                <Text>设备制造商:{this.Manufacturer}</Text>
                <Text>设备模型:{this.Model}</Text>
                <Text>操作系统:{this.SystemName}</Text>
                <Text>操作系统版本:{this.SystemVersion}</Text>
                <Text>时区:{this.Timezone}</Text>
                <Text>磁盘存储大小:{this.TotalDiskCapacity}</Text>
                <Text>总内存:{this.TotalMemory}</Text>
                <Text>用户代理:{this.UserAgent}</Text>
                <Text>是否是24小时制:{this.is24Hour}</Text>
                <Text>是否是模拟器:{this.isEmulator}</Text>
                <Text>是否设置过指纹:{this.isPinOrFingerprintSet}</Text>
                <Text>是否是平板:{this.isTablet}</Text>
                <Text>是否处于景观模式:{this.isLandscape}</Text>
                <Text>不清楚:{this.hasNotch}</Text>
                <ClickView {...this.props} />
            </View>
        );
    }
}