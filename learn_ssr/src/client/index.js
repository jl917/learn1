import React,{Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import {Provider} from 'react-redux'

import promiseMiddleware from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'
import {users,user_actions} from './page/user/userRedux'

import Router from '../router'


const logger = createLogger({});

const store = createStore(
    combineReducers({users}),
    applyMiddleware(promiseMiddleware(),logger)
);




render(
    <div>
        <Provider store={store}>
        <button onClick={()=> console.log(store.getState())}>dasf</button>
        <BrowserRouter><Router /></BrowserRouter>   
        </Provider>
    </div>,
    document.getElementById('app')
)
