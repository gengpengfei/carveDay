/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import './app/global';
import './app/dataBase/initStorage';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import AppNavigator from './app/AppNavigator';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
export default App