import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import Header from '../../components/header'
export default class UploadImgCode extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='图片上传代码'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    render() {
        var code = `安装：
npm i react-native-image-crop-picker --save  
react-native link react-native-image-crop-picker    

android配置：
1.打开app下的build.gradle，在android / defaultConfig / 节点下添加使用相机：
    vectorDrawables.useSupportLibrary = true  
2.打开AndroidManifest.xml配置文件，添加相机权限：
    <uses-permission android:name="android.permission.CAMERA"/> 

ios配置：
1.声明权限：
    在Xcode中打开Info.plist，并添加一下字符串键
    Privacy - Microphone Usage Description  访问麦克风
    Privacy - Calendars Usage Description  访问相机
    Privacy - Photo Library Usage Description 访问相册
2.添加依赖：
    1> 将node_modules / ios / ImageCropPickerSDK文件夹拖放的xcode项目根目录下
    2>单info选项卡,在Deployment Info标签下，设置Deployment Target平台版本为：8.0'
    3>在Target下点击General,选择Embedded Binaries单击+并添加RSKImageCropper.framework和QBImagePicker.framework

使用代码：
import React, { Component } from 'react';
import {
    View,
    Text,
    NativeModules,
    Image,
    TouchableOpacity
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import styles from '../../theme'
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import { NetWork_Post } from '../../netWork/baseNet';
var ImagePicker = NativeModules.ImageCropPicker;

export default class UploadImg extends Component {

    constructor(props) {
        super(props)
        this._handlePress = this._handlePress.bind(this);
        this._openCamera = this._openCamera.bind(this);
        this._pickMultiple = this._pickMultiple.bind(this);
        this.imgArr = []
        this.state = {
            images: [],
            checkButton: true
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='图片上传'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    showActionSheet = () => {
        this.ActionSheet.show()
    }
    _handlePress = (i) => {
        if (i === 0) {
            // 拍照
            this._openCamera();
        } else if (i === 1) {
            // 从相册选择多张图片
            this._pickMultiple();
        } else {
            //-- 取消
        }
    }
    //-- 打开相机
    _openCamera() {
        ImagePicker.openCamera({
            compressImageQuality: 0.2,
            includeBase64: true,
            cropping: true,
        }).then(
            (image) => {
                var data = { data: data:+image.mime+; base64, + image.data };
                if (this.imgArr.length < 5) {
                    this.imgArr.push(data);
                }
                this.setState({
                    images: this.imgArr
                });
            }
        ).catch(

        )
    }
    //-- 从相册选择
    _pickMultiple() {
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            includeExif: true,
            includeBase64: true,  //上传数据给后台的必选条件
            compressImageQuality: 0.2,
        }).then(images => {
            images.map((i, index) => {
                if (this.imgArr.length < 5) {
                    this.imgArr.push({ data: data:+i.mime+; base64, + i.data });
                }
            })
        }).then(() => {
            this.setState({
                images: this.imgArr
            });
        }).catch(
            e => console.log(e)
        );
    }

    //-- 删除
    _delImage(index) {
        this.imgArr.splice(index, 1);
        this.setState({
            images: this.imgArr
        })
    }
    //上传照片
    _getUploadImg = () => {
        if (this.state.images.length < 1) return;
        this.setState({
            checkButton: false,
        });
        let formData = {
            type: "storeComment",
            img_base64: this.state.images,
        };
        NetWork_Post('getUploadImg', formData, (response) => {
            const { data = null, code = 1, msg = '' } = response;
            if (code == 1) {
                this.setState({
                    checkButton: true,
                });
                alert('上传完成');
            } else {

            }
        })
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ClickView {...this.props} />
                <View style={{ width: screenWidth, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    {
                        this.state.images ? this.state.images.map((item, index) => {
                            return <View key={index} style={{ width: screenWidth / 5, height: screenWidth / 5, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={{ uri: item.data }} style={{ width: screenWidth / 5 - 10, height: screenWidth / 5 - 10 }} />
                                <TouchableOpacity
                                    onPress={() => {
                                        this._delImage(index)
                                    }}
                                    style={{ width: 16, height: 16, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: styles.primaryColor, borderRadius: 8, position: "absolute", top: -2, right: -2, backgroundColor: '#fff' }}
                                >
                                    <Text style={{ fontSize: 12, color: styles.primaryColor }}>X</Text>
                                </TouchableOpacity>
                            </View>;
                        }) : null
                    }
                    {
                        this.state.images.length < 6 ? <View style={{ width: screenWidth / 5, height: screenWidth / 5, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        this.showActionSheet();
                                    }
                                }
                                style={{ width: screenWidth / 5 - 10, height: screenWidth / 5 - 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: styles.primaryColor }}
                            >
                                <Text style={{ fontSize: 36, color: styles.primaryColor }}>+</Text>
                            </TouchableOpacity>
                        </View> : null
                    }

                </View>
                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity
                        style={{ width: 120, height: 40, borderColor: styles.primaryColor, borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
                        onPress={this._getUploadImg}
                    >
                        <Text style={{ color: styles.primaryColor, fontSize: 18 }}>{this.state.checkButton == false ? '上传中' : '提交'}</Text>
                    </TouchableOpacity>
                </View>
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    options={['拍照', '从相册选择', '取消']}
                    cancelButtonIndex={2}
                    destructiveButtonIndex={1}
                    onPress={this._handlePress}
                />
            </View>
        )
    }
}

错误解决：
1.android环境编译报错
编译 react-native-image-crop-picker 报错：Could not find com.github.yalantis:ucrop:2.2.1-native

问题原因是 缺少maven源

解决方案
在 /android/build.gradle，配置多个 maven 源：

allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
        maven { 
            url "https://jitpack.io" 
        }
        maven {
            url 'https://maven.google.com/'
            name 'Google'
        }  
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