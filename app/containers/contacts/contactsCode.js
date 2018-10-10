import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class ContactsCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='鼠标点击拖拽'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `'use strict';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import Contacts from 'react-native-contacts';
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='获取手机联系人'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    componentDidMount() {
        this.requestCONTACTS()
    }
    //-- 验证权限
    requestCONTACTS = () => {
        let self = this;
        if (Platform.OS === 'android') {
            PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_CONTACTS).then(res => {
                if (!res || res !== 'granted') {
                    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                        'title': '申请读取通讯录权限',
                        'message': '一个很牛逼的应用想借用你的通讯录，' +
                            '然后你就可以炫出自己的通讯啦。'
                    })
                        .then(res => {
                            if (res !== 'granted') {
                                Alert.alert('访问通讯录权限没打开', '请在iPhone的“设置-隐私”选项中,允许访问您的通讯录')
                            }
                            else {
                                // self.onButtonPressed()
                            };
                        });
                } else {
                    // self.onButtonPressed()
                };
            });
        } else {
            if (Contacts) {
                Contacts.checkPermission((err, permission) => {
                    if (err) throw err;
                    // Contacts.PERMISSION_AUTHORIZED || Contacts.PERMISSION_UNDEFINED || Contacts.PERMISSION_DENIED
                    if (permission === 'undefined') {
                        Contacts.requestPermission((err, permission) => {
                            if (err) throw err;
                            if (permission === 'authorized') {
                                // 同意!
                                // self.onButtonPressed()
                            }
                            if (permission === 'denied') {
                                // 拒绝
                                Alert.alert('访问通讯录权限没打开', '请在iPhone的“设置-隐私”选项中,允许访问您的通讯录')
                            }
                        })
                    }
                    if (permission === 'authorized') {
                        // 同意!
                        // self.onButtonPressed()
                    }
                    if (permission === 'denied') {
                        // 已经拒绝
                        Alert.alert('访问通讯录权限没打开', '请在iPhone的“设置-隐私”选项中,允许访问您的通讯录')
                    }
                })
            }
        }
    }
    //-- 获取所有通讯录信息
    onButtonPressed = () => {
        let self = this;
        Contacts.getAll((err, contacts) => {
            if (err) throw err;
            this.setState({
                data: contacts
            })
        })
    }
    //-- 根据调件获取通讯录列表
    getContactsMatching = () => {
        Contacts.getContactsMatchingString("filter", (err, contacts) => {
            if (err) throw err;
            // contacts matching "filter"
            alert(JSON.stringify(contacts));//通讯录列表
        })
    }
    //-- 修改通讯录信息
    updateContact = () => {
        Contacts.getAll((err, contacts) => {
            if (err) throw err;

            // update the first record
            let someRecord = contacts[1]
            someRecord.emailAddresses.push({
                label: "junk",
                email: "mrniet+junkmail@test.com",
            })
            someRecord.givenName = someRecord.givenName + '0'
            Contacts.updateContact(someRecord, (err) => {
                if (err) throw err;
                this.onButtonPressed()
            })
        })
    }
    //-- 添加联系人
    addContact = () => {
        var newPerson = {
            emailAddresses: [{
                label: "work",
                email: "mrniet@example.com",
            }],
            familyName: "Nietzsche",
            givenName: "Friedrich",
        }
        Contacts.addContact(newPerson, (err) => {
            if (err) throw err;
            this.onButtonPressed()
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity
                        onPress={this.onButtonPressed}
                    >
                        <Text>所有联系人</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.getContactsMatching}
                    >
                        <Text>检索联系人</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.updateContact}
                    >
                        <Text>修改联系人</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.addContact}
                    >
                        <Text>添加联系人</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderWidth: 1, borderColor: '#fff' }}>
                    {
                        this.state.data ? this.state.data.map((item, index) => {
                            console.log(item)
                            return (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ flex: 1 }}>姓名：{item.givenName}</Text>
                                    <Text style={{ flex: 2 }}>电话：{item.phoneNumbers.length > 0 ? item.phoneNumbers[0].number : '无'}</Text>
                                </View>
                            )
                        }) : null
                    }
                </View>
                <ClickView {...this.props} />
            </View>
        );
    }
}
`;
        return (
            <ScrollView style={{ padding: 10 }}>
                <Text selectable={true}>{code}</Text>
            </ScrollView>
        )
    }
}