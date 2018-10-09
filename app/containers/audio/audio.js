//组件要求暴露出使用时传进来的参数/方法等
import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
import styles from '../../theme'
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import { AudioRecorder, AudioUtils } from 'react-native-audio';
import Sound from 'react-native-sound'
export default class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0.0, //开始录音到现在的持续时间
            recording: false, //是否正在录音
            stoppedRecording: false, //是否停止了录音
            finished: false, //是否完成录音
            audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac', //路径下的文件名
            hasPermission: undefined, //是否获取权限
        };
        this.prepareRecordingPath = this.prepareRecordingPath.bind(this);     //执行录音的方法
        this.checkPermission = this.checkPermission.bind(this);               //检测是否授权
        this.record = this.record.bind(this);                                 //录音
        this.stop = this.stop.bind(this);                                     //停止
        this.play = this.play.bind(this);                                     //播放
        this.pause = this.pause.bind(this);                                   //暂停
        this.finishRecording = this.finishRecording.bind(this);
    };
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='录音'
            backPress={() => {
                navigation.goBack();
            }} />,
    })
    componentDidMount() {
        // 页面加载完成后获取权限
        this.checkPermission().then((hasPermission) => {
            this.setState({ hasPermission });
            //如果未授权, 则执行下面的代码
            if (!hasPermission) return;
            //-- 初始化录音配置
            this.prepareRecordingPath(this.state.audioPath);

            AudioRecorder.onProgress = (data) => {
                this.setState({ currentTime: Math.floor(data.currentTime) });
            };

            AudioRecorder.onFinished = (data) => {
                if (Platform.OS === 'ios') {
                    this.finishRecording(data.status === "OK", data.audioFileURL);
                }
            };

        })
    }
    checkPermission() {
        if (Platform.OS !== 'android') {
            return Promise.resolve(true);
        }
        const rationale = {
            'title': '获取录音权限',
            'message': 'XXX正请求获取麦克风权限用于录音,是否准许'
        };
        return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, rationale)
            .then((result) => {
                // console.log(result);  //结果: granted ,PermissionsAndroid.RESULTS.GRANTED 也等于 granted
                return (result === true || PermissionsAndroid.RESULTS.GRANTED)
            })
    }
    prepareRecordingPath(audioPath) {
        AudioRecorder.prepareRecordingAtPath(audioPath, {
            SampleRate: 22050,
            Channels: 1,
            AudioQuality: "Low", //录音质量
            AudioEncoding: "aac", //录音格式
            AudioEncodingBitRate: 32000 //比特率
        });
    }
    async record() {
        // 如果正在录音
        if (this.state.recording) {
            alert('正在录音中!');
            return;
        }

        //如果没有获取权限
        if (!this.state.hasPermission) {
            alert('没有获取录音权限!');
            return;
        }

        //如果暂停获取停止了录音
        if (this.state.stoppedRecording) {
            this.prepareRecordingPath(this.state.audioPath);
        }

        this.setState({ recording: true });

        try {
            const filePath = await AudioRecorder.startRecording();
        } catch (error) {
            console.error(error);
        }
    }

    async stop() {
        // 如果没有在录音
        if (!this.state.recording) {
            alert('没有录音, 无需停止!');
            return;
        }

        this.setState({ stoppedRecording: true, recording: false });

        try {
            const filePath = await AudioRecorder.stopRecording();

            if (Platform.OS === 'android') {
                this.finishRecording(true, filePath);
            }
            return filePath;
        } catch (error) {
            console.error(error);
        }
    }

    async play() {
        // 如果在录音 , 执行停止按钮
        if (this.state.recording) {
            await this.stop();
        }

        // 使用 setTimeout 是因为, 为避免发生一些问题 react-native-sound中
        setTimeout(() => {
            var sound = new Sound(this.state.audioPath, '', (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                }
            });

            setTimeout(() => {
                sound.play((success) => {
                    if (success) {
                        console.log('successfully finished playing');
                    } else {
                        console.log('playback failed due to audio decoding errors');
                    }
                });
            }, 100);
        }, 100);
    }

    async pause() {
        if (!this.state.recording) {
            alert('没有录音, 无需停止!');
            return;
        }

        this.setState({ stoppedRecording: true, recording: false });

        try {
            const filePath = await AudioRecorder.pauseRecording();

            // 在安卓中, 暂停就等于停止
            if (Platform.OS === 'android') {
                this.finishRecording(true, filePath);
            }
        } catch (error) {
            console.error(error);
        }
    }

    finishRecording(didSucceed, filePath) {
        this.setState({ finished: didSucceed });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => { this.record() }}
                >
                    <Text>录音</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { this.stop() }}
                >
                    <Text>停止录音</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { this.pause() }}
                >
                    <Text>暂停录音</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { this.play() }}
                >
                    <Text>播放录音</Text>
                </TouchableOpacity>
                <ClickView {...this.props} />
            </View>
        )
    }
}