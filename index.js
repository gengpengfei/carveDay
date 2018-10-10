/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { YellowBox } from 'react-native';
//-- 屏蔽黄色警告
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Module AudioRecorderManager', 'Module RNFetchBlob']);
AppRegistry.registerComponent(appName, () => App);
