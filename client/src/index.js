import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'

import { startGetUser } from './actions/userAction'
import { startGetPosts } from './actions/postAction'

import configureStore from './store/configureStore'

const store = configureStore()
console.log('initial redux value', store.getState()) //to get the initial store value

store.subscribe(() => {
    console.log('updated redux value', store.getState()) //to get update store value
})

//to handle page reload
if(localStorage.getItem('authToken')) {
    store.dispatch(startGetUser())
    store.dispatch(startGetPosts())
}


const jsx = (
    <Provider store = {store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById("root"))