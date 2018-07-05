'use strict'

import './global.js';
import React,{Component} from 'react';
import {Provider} from 'react-redux';
import store from './myRedux/store'
import CarveDayNavigation from './containters/carveDayNavigator';
export default class App extends Component{
    render(){
        return (
        <Provider store={store}>
            <CarveDayNavigation/>
        </Provider>
        )
    }
}
