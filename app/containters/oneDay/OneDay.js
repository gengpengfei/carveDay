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
import {userInfoAction} from '../../myRedux/action/userInfoAction';
import {login} from '../../netWork/userApi';
let formdata = {};
class OneDay extends Component {
    // --定义头部
    static navigationOptions = ({navigation}) => ({
        header: <HeaderView title="登录" showBack={true} backBtnOnPress={() => (navigation.goBack())}/>
    });
    constructor(props){
        super(props);
        this._clickLoginButton = this._clickLoginButton.bind(this);
        this._loginOut = this._loginOut.bind(this);
    }
    _handleChange = (formData, fieldRef) => {
        formdata = formData;
    };
    _clickLoginButton(){
        if(formdata['username'].length === 0){
            Toast.show('请输入用户名');
            return false;
        }
        if(formdata['password'].length === 0){
            Toast.show('请输入密码');
            return false;
        }
        //--登录方法
        login(formdata,(res)=>{
            let msg = res['msg'];
            Toast.show(msg);
            let code = res['code'];
            if(code ==='1'){
                let data = res['data'];
                this.props.dispatch(userInfoAction('userid',data['UserId']));
                this.props.dispatch(userInfoAction('username',data['UserName']));
                const { navigate } = this.props.navigation;
                navigate('Home');
            }else{

            }
        });
    }
    //--退出登录
    _loginOut(){
        this.props.dispatch(userInfoAction('userid',0));
        this.props.dispatch(userInfoAction('username',''));
        let {navigate} = this.props.navigation;
        navigate('Home');
    }
    render() {
        let userid = this.props.userid;
        let username = this.props.username;
        return (
            <ScrollView style={styles.container}>
                <Form.Form onFieldChange={this._handleChange}>
                <Form.InputField
                    label="账        号"
                    ref="username"
                    placeholder="用户名/手机号"
                />
                <Form.InputField
                    label="密        码"
                    ref="password"
                    placeholder="输入密码"
                    secureTextEntry={true}
                />
                </Form.Form>
                <View>
                <Button
                    style={styles.buttonReq}
                    textStyle={{fontSize:16,color:'#fff'}}
                    onPress={this._clickLoginButton}
                >登    录</Button>
                </View>
                <View style={styles.view}>
                    <Text
                        style={{color:'red'}}
                        onPress={()=>{
                            const {navigate} = this.props.navigation;
                            navigate('Regist');
                        }}
                    >注册账号</Text>
                    <Text style={{color:'red'}}>忘记密码?</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                    {
                        userid>0 ?
                            <View>
                                <Text>已登录:{username}</Text><Text onPress={this._loginOut}>退出登录</Text>
                            </View>
                            :
                            <Text>未登录</Text>
                    }
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    view:{
        height:60,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    container:{
        flex:1,
        backgroundColor:'#f8f7f4',
    },
    buttonReq:{
        backgroundColor:'#9E9E9E',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0,
        flex:1,
        borderRadius:1,
    }
});
function select(store) {
    return {
        username: store.userInfo.username,
        userid:store.userInfo.userid,
    }
}
export default connect(select)(OneDay)