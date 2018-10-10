import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Platform,
    TouchableOpacity,
    CameraRoll
} from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import RNFS from 'react-native-fs';
export default class File extends Component {

    constructor(props) {
        super(props);
        this.state = {
            readTxtResult: ''
        }
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='文件处理'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    //-- 下载文件
    downloadFile = () => {
        // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
        // 图片
        const downloadDest = '.jpg';
        const formUrl = 'https://img.kaiyanapp.com/c7b46c492261a7c19fa880802afe93b3.png?imageMogr2/quality/60/format/jpg';

        // 文件
        // const downloadDest = '.zip';
        // const formUrl = 'http://files.cnblogs.com/zhuqil/UIWebViewDemo.zip';

        // 视频
        // const downloadDest = '.mp4';
        // http://gslb.miaopai.com/stream/SnY~bbkqbi2uLEBMXHxGqnNKqyiG9ub8.mp4?vend=miaopai&
        // https://gslb.miaopai.com/stream/BNaEYOL-tEwSrAiYBnPDR03dDlFavoWD.mp4?vend=miaopai&
        // const formUrl = 'https://gslb.miaopai.com/stream/9Q5ADAp2v5NHtQIeQT7t461VkNPxvC2T.mp4?vend=miaopai&';
        // 音频
        // const downloadDest = '.mp3';
        // // http://wvoice.spriteapp.cn/voice/2015/0902/55e6fc6e4f7b9.mp3
        // const formUrl = 'http://wvoice.spriteapp.cn/voice/2015/0818/55d2248309b09.mp3';
        var fileDest = RNFS.MainBundlePath + '/' + ((Math.random() * 1000) | 0) + downloadDest;
        const options = {
            fromUrl: formUrl,
            toFile: fileDest,
            background: true,
            begin: (res) => {
                console.log('begin', res);
                console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
            },
            progress: (res) => {

                let pro = res.bytesWritten / res.contentLength;
                this.setState({
                    progressNum: pro,
                });
            }
        };
        try {
            const ret = RNFS.downloadFile(options);
            ret.promise.then(res => {
                console.log('success', res);
                alert('文件下载成功：file://' + fileDest)
            }).catch(err => {
                console.log('err', err);
            });
        }
        catch (e) {
            console.log(error);
        }
    }


    //-- 将文本写入本地 txt
    writeFile = () => {
        // create a path you want to write to
        const path = RNFS.MainBundlePath + '/test.txt';

        // write the file
        RNFS.writeFile(path, '写入一段文本', 'utf8')
            .then((success) => {
                console.log('path', path);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    //-- 读取txt文件内容
    readFile = () => {
        const path = RNFS.MainBundlePath + '/test.txt';
        return RNFS.readFile(path)
            .then((result) => {
                console.log(result);
                this.setState({
                    readTxtResult: result,
                })
            })
            .catch((err) => {
                alert('文件不存在');
            });
    }
    //-  在已有的txt上添加新的文本
    appendFile = () => {
        const path = RNFS.MainBundlePath + '/test.txt';
        return RNFS.appendFile(path, '新添加的文本', 'utf8')
            .then((success) => {
                console.log('success');
            })
            .catch((err) => {
                console.log(err.message);

            });
    }
    //--  删除文件
    deleteFile = () => {
        // create a path you want to delete
        const path = RNFS.MainBundlePath + '/test.txt';
        return RNFS.unlink(path)
            .then(() => {
                this.setState({
                    readTxtResult: '',
                })
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity
                        onPress={this.downloadFile}
                    >
                        <Text>文件下载</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.writeFile}
                    >
                        <Text>文件写入</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.readFile}
                    >
                        <Text>文件读取</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.appendFile}
                    >
                        <Text>追加写入</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.deleteFile}
                    >
                        <Text>删除文件</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text>{this.state.readTxtResult}</Text>
                </View>
                <ClickView {...this.props} />
            </View>
        );
    }
}

