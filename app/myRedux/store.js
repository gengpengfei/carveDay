/**
 * Created by Administrator on 2017/10/9.
 */

'user strict';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleware(rootReducer);

export default store;