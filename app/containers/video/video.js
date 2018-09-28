import React, {
    Component
} from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Video from 'react-native-video';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            currentTime: 0.0,
            paused: true,
        };
        this.clickProgress = this.clickProgress.bind(this);
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='视频播放'
            backPress={() => {
                navigation.goBack();
            }} />,
    })

    onLoad = (data) => {
        this.setState({ duration: data.duration });
    };

    onProgress = (data) => {
        this.setState({ currentTime: data.currentTime });
    };

    onEnd = () => {
        this.setState({ paused: true });
        this.video.seek(0)
    };

    onAudioBecomingNoisy = () => {
        this.setState({ paused: true })
    };

    onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
        this.setState({ paused: !event.hasAudioFocus })
    };

    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        }
        return 0;
    };

    renderRateControl(rate) {
        const isSelected = (this.state.rate === rate);
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({ rate })
                }}
                style={{ borderColor: '#fff', borderWidth: 1, padding: 2, margin: 3 }}
            >
                <Text style={{ color: '#fff', fontWeight: isSelected ? 'bold' : 'normal' }}>
                    {rate}x
                </Text>
            </TouchableOpacity>
        );
    }

    renderResizeModeControl(resizeMode) {
        const isSelected = (this.state.resizeMode === resizeMode);
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({ resizeMode })
                }}
                style={{ borderColor: '#fff', borderWidth: 1, padding: 2, margin: 3 }}
            >
                <Text style={{ color: '#fff', fontWeight: isSelected ? 'bold' : 'normal' }}>
                    {resizeMode}
                </Text>
            </TouchableOpacity>
        )
    }

    renderVolumeControl(volume) {
        const isSelected = (this.state.volume === volume);
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({ volume })
                }}
                style={{ borderColor: '#fff', borderWidth: 1, padding: 2, margin: 3 }}
            >
                <Text style={{ color: '#fff', fontWeight: isSelected ? 'bold' : 'normal' }}>
                    {volume * 100}%
                </Text>
            </TouchableOpacity>
        )
    }
    //-- 跳转到指定时间
    clickProgress() {
        this.video.seek(30); // 将开始播放时间定为30s处
    }

    render() {
        const flexCompleted = this.getCurrentTimePercentage() * 100;
        const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
        return (
            <View style={{ backgroundColor: 'black', flex: 1 }}>
                <TouchableOpacity
                    onPress={() => this.setState({ paused: !this.state.paused })}
                >
                    <Video
                        ref={(ref: Video) => {
                            this.video = ref
                        }}
                        /* For ExoPlayer */
                        source={{ uri: 'https://gslb.miaopai.com/stream/HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__.mp4?ssig=bbabfd7684cae53660dc2d4c2103984e&time_stamp=1533631567740&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__', type: 'mpd' }}
                        //source={require('../../background.mp4')}
                        style={{ width: screenWidth, height: screenWidth * 9 / 16 }}
                        rate={this.state.rate} //-- 播放速度 0.0 - 暂停播放  1.0 - 正常速率播放 
                        paused={this.state.paused}//-- 是否暂停
                        volume={this.state.volume} //-- 调整音量（0-1之间数值）
                        muted={this.state.muted} //-- 是否静音
                        resizeMode={this.state.resizeMode} //-- 屏幕与原始视频尺寸不匹配时如何调整视频大小。（none：不改变，contain：均匀缩放，cover：填充，stretch：独立宽高） 
                        repeat={false}  //-- 播放完时是否重复播放视频。 
                        playInBackground={false} //-- 是否在后台继续播放音频（默认false）
                        poster={'https://loremflickr.com/640/480/dog'} //-- 视频加载中显示的海报图片地址
                        posterResizeMode={'cover'}//-- 海报图片缩放方式(contain：均匀缩放图像不填充， cover:填充 none：不变，center：居中，stretch：独立宽高)
                        progressUpdateInterval={1000} //-- onProgress事件之间的毫秒延迟（以毫秒为单位）。默认: 250.0 
                        onLoadStart={(e) => { console.log(e) }} //-- 视频开始加载时调用的回调函数
                        onLoad={this.onLoad}  //-- 加载完成并准备播放时调用的回调函数
                        onProgress={this.onProgress} //-- 视频播放中调用
                        onEnd={this.onEnd} //-- 视频结束时调用
                        onAudioBecomingNoisy={this.onAudioBecomingNoisy} //-- 音频变的吵杂时
                        onAudioFocusChanged={this.onAudioFocusChanged}//-- 音频丢失焦点时
                    />
                </TouchableOpacity>
                <View style={{ width: screenWidth, height: 3, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#cccccc', flex: flexCompleted }} />
                    <View style={{ backgroundColor: '#2C2C2C', flex: flexRemaining }} />
                </View>
                <View style={{ width: screenWidth, height: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#fff' }}>视频时长：{parseInt(this.state.duration)}s</Text>
                </View>
                <View style={{ width: screenWidth, height: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#fff' }}>当前进度：{parseInt(this.state.currentTime)}s</Text>
                </View>
                <View style={{ width: screenWidth, height: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#fff' }}>指定进度：</Text>
                    <TouchableOpacity
                        onPress={this.clickProgress}
                        style={{ borderColor: '#fff', borderWidth: 1, padding: 2, margin: 3 }}
                    >
                        <Text style={{ color: '#fff' }}>30s</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: screenWidth, height: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#fff' }}>播放速度：</Text>
                    {this.renderRateControl(0.25)}
                    {this.renderRateControl(0.5)}
                    {this.renderRateControl(1.0)}
                    {this.renderRateControl(1.5)}
                    {this.renderRateControl(2.0)}
                </View>
                <View style={{ width: screenWidth, height: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#fff' }}>音量调节：</Text>
                    {this.renderVolumeControl(0.5)}
                    {this.renderVolumeControl(1)}
                    {this.renderVolumeControl(1.5)}
                </View>
                <View style={{ width: screenWidth, height: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#fff' }}>画面显示：</Text>
                    {this.renderResizeModeControl('cover')}
                    {this.renderResizeModeControl('contain')}
                    {this.renderResizeModeControl('stretch')}
                </View>
                <ClickView {...this.props} />
            </View >
        );
    }
}