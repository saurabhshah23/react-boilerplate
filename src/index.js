import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css';
import App from './App';
// import AddRedux from './components/demo/AddRedux'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';
import reducerA from './store/reducerA'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    reducer,
    ra: reducerA
})

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        {/* <AddRedux /> */}
        <App />
    </Provider>
    , document.getElementById('root'));
