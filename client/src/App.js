import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/static/Home'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Account from './components/auth/Account'
import Profile from './components/auth/Profile'
import Post from './components/auth/Post'

function App(props) {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path = "/" component = {Home} exact= {true} />
                    <Route path = "/users/signup" component = {Signup}  />
                    <Route path = "/users/login" component = {Login} />
                    <Route path = "/users/account" component = {Account} />
                    <Route path = "/posts" component = {Post} />
                    <Route path = "/users/profile" component = {Profile} />
                </Switch>
            </div>
        </Router>
    )
}

export default (App)