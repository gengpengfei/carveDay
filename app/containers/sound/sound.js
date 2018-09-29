import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/header'
import ClickView from '../../components/clickView'
import Sound from 'react-native-sound';
const audioTests = [
    {
        title: '本地',
        url: 'soundTest.mp3',
        basePath: Sound.MAIN_BUNDLE,
    },
    {
        title: '远程',
        url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3'
    },
];
const resultIcons = {
    '': '',
    pending: '?',
    playing: '\u25B6',
    win: '\u2713',
    fail: '\u274C',
};
export default class Sounds extends Component {
    constructor(props) {
        super(props)
        Sound.setCategory('Playback', true); // true = mixWithOthers

        // Special case for stopping
        this.stopSoundLooped = () => {
            if (!this.state.loopingSound) {
                return;
            }
            this.state.loopingSound.stop().release();
            this.setState({ loopingSound: null, tests: { ...this.state.tests, ['mp3 in bundle (looped)']: 'win' } });
        };
        this.state = {
            loopingSound: undefined,
            tests: {},
        };
    }
    static navigationOptions = ({ navigation }) => ({
        header: <Header
            title='音频播放'
            backPress={() => {
                navigation.goBack();
            }} />,
    })

    playSound(testInfo, component) {
        setTestState(testInfo, component, 'pending');

        const callback = (error, sound) => {
            if (error) {
                console.log('error', error)
                setTestState(testInfo, component, 'fail');
                return;
            }
            setTestState(testInfo, component, 'playing');
            // sound.setNumberOfLoops(-1);
            sound.play(() => {
                // Success counts as getting to the end
                setTestState(testInfo, component, 'win');
                // Release when it's done so we're not using up resources
                sound.release();
            });
        };
        // If the audio is a 'require' then the second parameter must be the callback.
        if (testInfo.isRequire) {
            const sound = new Sound(testInfo.url, error => callback(error, sound));
        } else {
            const sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error, sound));
        }
    }
    setTestState(testInfo, component, status) {
        component.setState({ tests: { ...component.state.tests, [testInfo.title]: status } });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {
                    audioTests.map(testInfo => {
                        return (
                            <View>
                                <View></View>
                                {testInfo.status ? <Text style={{ padding: 5 }}>{resultIcons[testInfo.status] || ''}</Text> : null}
                                <TouchableOpacity
                                // onPress={() => {
                                //     this.playSound(testInfo, this);
                                // }}
                                >
                                    <Text>{testInfo.title}</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    })
                }
                <ClickView {...this.props} />
            </View >
        );
    }
}
