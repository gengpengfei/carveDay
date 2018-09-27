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
            mediaType: 'photo',//上传的类型（'photo', 'video', 'any' ，默认any）
            includeBase64: true,
            cropping: true,//-- 是否启用裁剪功能
            width: 200,
            height: 200,//-- 与裁剪功能一起使用
            cropperToolbarTitle: '123',//当裁剪时确定工具栏的标题
            compressImageMaxWidth: 200, //图像压缩时的最大宽度
            compressImageMaxHeight: 200,//图像压缩时的最大高度
            compressImageQuality: 0.2,//图像的压缩比例（0-1的数值）
        }).then(
            (image) => {
                var data = { data: `data:${image.mime};base64,` + image.data };
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
            mediaType: 'photo',//上传的类型（'photo', 'video', 'any' ，默认any）
            multiple: true, //-- 是否支持多张上传
            waitAnimationEnd: false,// 仅支持ios
            includeExif: true,//是否在响应中包含图像的exif数据
            includeBase64: true,  //是否是base64编码字符上传给后台
            compressImageMaxWidth: 200, //图像压缩时的最大宽度
            compressImageMaxHeight: 200,//图像压缩时的最大高度
            compressImageQuality: 0.2,//图像的压缩比例（0-1的数值）
        }).then(images => {
            images.map((i, index) => {
                if (this.imgArr.length < 5) {
                    this.imgArr.push({ data: `data:${i.mime};base64,` + i.data });
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