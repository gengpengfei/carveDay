/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Text } from 'react-native';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
import { Provider } from 'react-redux';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text>123</Text>
      </View>
    );
  }
}