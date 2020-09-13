import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {FaFacebookSquare } from 'react-icons/fa'

import { startLoginUser } from '../../actions/userAction'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            email_error: '',
            password_error: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    /*-------login form validation-----  */
    handleValidation = () => {
        let email_error = '';
        let password_error = ''

        //email
        if(this.state.email === '') {
            email_error = 'email is required'
        }else if(!this.state.email.includes('@')) {
            email_error = 'invalid email'
        }

        //password
        if(this.state.password === '') {
            password_error = 'password is required'
        }else if(this.state.password.length < 8) {
            password_error = 'password length must be atleast 8 characters'
        }
        if(email_error || password_error) {
            this.setState({email_error,password_error})
        }if(email_error === '' && password_error === '') {
            return true
        }else {
            return false
        }
    }
    /*-----------login form validation--------*/
    /*--------form submition----------------*/

    handleSubmit = (e) => {
        e.preventDefault()
        const isValid = this.handleValidation()
        console.log(isValid)
        if(isValid) {
          console.log(this.state)
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(formData)
        const redirect = () => {
            return this.props.history.push('/users/account')
        }
        this.props.dispatch(startLoginUser(formData,redirect))
}
    }
    /*----------form submition---------*/

    render() {
        return (
            <div className= "container-fluid full-container">
                <h1 className = "text-center">Instagram</h1>
                <div className= "row">
                    <div className= "col-md-4"></div> 
                       <div className = "col-md-4 form-page">

                       <form onSubmit = {this.handleSubmit}>

                            {/* ----email field----------- */}
                                <div className = "form-group">
                                    <input 
                                        type = "text" 
                                        className = "form-control form-control-lg col-md-11" 
                                        placeholder = "Email" 
                                        name= "email" 
                                        value = {this.state.email}
                                        onChange = {this.handleChange}
                                        autoComplete = "off"
                                    />
                                    <span className = "login-fields-error">{this.state.email_error}</span>
                                </div>
                                    
                            {/* ------email field---------------- */}

                            {/* ------password field---------------- */}
                                <div className = "form-group">
                                    <input 
                                    type = "password" 
                                    className = "form-control form-control-lg col-md-11" 
                                    placeholder = "Password" 
                                    name = "password"
                                    value = {this.state.password}
                                    onChange = {this.handleChange}
                                    autoComplete = "off"
                                    />
                                    <span className = "login-fields-error">{this.state.password_error}</span>
                                </div>
                                    
                            {/* ------password field---------------- */}
                                
                                <button className= "col-md-11 btn-lg login-button btn-light">Log In</button>
                            </form>

                            <p className = "paragraph-text">Forgot your login details? Get help signing in</p>

                               <span>OR</span>  <hr />

                               <button className = "btn login-with-facebook"><FaFacebookSquare />Log in with Facebook</button>

                                <h5 className = "signup">Don't have an account?<Link to = "/users/signup">Sign up</Link></h5>
                        </div>
                    
                        <div className = "col-md-4"></div>
                    </div>
                </div>
        )
    }
}

export default connect()(Login) 