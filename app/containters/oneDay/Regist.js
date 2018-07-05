import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Dimensions,
    Image,
} from 'react-native';
//--内置组件
import {connect} from 'react-redux';
import {Form,Button} from 'react-native-wxui';
import Toast from 'react-native-simple-toast';
//--自定义组件
import HeaderView from '../common/HeaderView';
import {getMobileCode,regist} from '../../netWork/userApi';
import {userAccountAction} from '../../myRedux/action/userAccountAction';
import {userInfoAction} from '../../myRedux/action/userInfoAction';
let registData={}
class Regist extends Component {
    // --定义头部
    static navigationOptions = ({navigation}) => ({
        header: <HeaderView title="注册" showBack={true} backBtnOnPress={() => (navigation.goBack())}/>
    });
    constructor(props){
        super(props);
        this._clickGetPhoneReqButton = this._clickGetPhoneReqButton.bind(this);
        this._clickRegistReqButton = this._clickRegistReqButton.bind(this);
    };
    _clickRegistReqButton() {
        if(registData['username'].length == 0){
            Toast.show('用户名不能为空');
            return false;
        }
        if(registData['password'].length == 0){
            Toast.show('密码不能为空');
            return false;
        }
        if(registData['password'] != registData['comitpassword']){
            Toast.show('两次密码不一致');
            return false;
        }
        if(registData['mobile'].length == 0){
            Toast.show('手机号不能为空');
            return false;
        }
        if(registData['code'].length == 0){
            Toast.show('验证码不能为空');
            return false;
        }
        regist(registData,(res)=>{
            let msg = res['msg'];
            let code = res['code'];
            Toast.show(msg);
            if(code === '1'){
                this.props.dispatch(userInfoAction('userid',res['data']['UserId']));
                this.props.dispatch(userInfoAction('username',res['data']['UserName']));
                let {navigate} = this.props.navigation;
                navigate('Home');
            }
        })
    };
    _clickGetPhoneReqButton(){
        if(this.props.get_regist_code>0){
            return false
        }
        let bodydata = registData['mobile'];

        var interval = setInterval(()=>{
            if(this.props.get_regist_code === 6){
                clearInterval(interval);
            }
            this.props.dispatch(userAccountAction('get_regist_code',this.props.get_regist_code));
        },1000);

        getMobileCode(bodydata,(res)=>{
            let msg = res['msg'];
            let code = res['code'];
            Toast.show(msg);
            if(code === '1'){

            }
        });
    }
    _handleChange = (formData, fieldRef) => {
        console.log('FormData: ', formData);
        registData = formData;
    };
    render() {
        let regist_code = this.props.get_regist_code;
        return (
            <ScrollView style={styles.container}>
                <Form.Form onFieldChange={this._handleChange}>
                <Form.InputField
                    style={{width:60}}
                    label="账        号"
                    ref="username"
                    placeholder="请输入用户名..."
                />
                <Form.InputField
                    label="密        码"
                    ref="password"
                    placeholder="请输入密码..."
                    secureTextEntry={true}
                />
                <Form.InputField
                    label="再次输入"
                    ref="comitpassword"
                    placeholder="请重复输入密码..."
                    secureTextEntry={true}
                />
                <Form.InputField
                    label="手机号码"
                    ref="mobile"
                    placeholder="请输入手机号..."
                    keyboardType='numeric'
                />

                <Form.InputField
                    keyboardType='numeric'
                    label="验  证 码"
                    ref="code"
                    placeholder="请输入手机验证码"
                />
                <Button
                    style={styles.buttonReq}
                    textStyle={{fontSize:14,color:'#fff'}}
                    onPress={this._clickGetPhoneReqButton} >
                    {
                        regist_code === 0 ? '免费获取验证码' : regist_code+'  秒'
                    }
                </Button>

                </Form.Form>

                <Form.Separator/>
                <Button
                    style={styles.buttonReq}
                    onPress={this._clickRegistReqButton}
                    textStyle={{fontSize:16,color:'#fff'}}
                >注    册</Button>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f7f4',
        flex: 1,
    },
    iconLeft: {
        width: 20,
        height: 20,
    },
    iconRight: {
        width: 15,
        height: 10,
    },
    buttonReq:{
        backgroundColor:'#9E9E9E',
        borderWidth:0,
        flex:1,
        borderRadius:1,
    }
});

function select(store) {
    return {
        get_regist_code:store.userAccount.get_regist_code,
    }
}
export default connect(select)(Regist)