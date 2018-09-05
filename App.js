/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import AppNavigator from './app/AppNavigator';
class App extends Component {
  render() {
    return (
      <View>
        <Text>123</Text>
      </View>
      // <Provider store={store}>
      //   <AppNavigator />
      // </Provider>
    );
  }
}
export default App