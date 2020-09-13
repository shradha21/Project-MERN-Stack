import React from 'react'
import { connect } from 'react-redux'
import { FaFacebookSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {startSignupUser} from '../../actions/userAction'

class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            name: '',
            password: '',
            email_error: '',
            name_error: '',
            password_error: ''
        }
    }
 
    /*-----signup form validation----*/
    handleValidation = () => {
        let email_error = '';
        let name_error = '';
        let password_error = ''

        //email
        if(this.state.email === ''){
            email_error = "email is required"
        }else if(!this.state.email.includes('@')) {
            email_error = "invalid email"
        } 

        //password
        if(this.state.password === '') {
            password_error = "password is required"
        }else if(this.state.password.length < 8){
            password_error = "password length must be atleast 8 characters"
        }
        
        //name
        if(this.state.name === ''){
            name_error = "name is required"
        }else if((this.state.name).match(/^[a-zA-Z]+$/g)) {
            return true
         }else {
            name_error = 'only alphabets are allowed'
         }
        
        
        if( email_error || name_error || password_error){
            this.setState({email_error,name_error,password_error})
            return false
        }
        
    }
    /*--------------------------------------------*/
    /*--------------form submition----------------*/
    handleSubmit = (e) => {
        e.preventDefault()
        const isValid = this.handleValidation()
        if(isValid) {
            //console.log(this.state)
            const formData = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
            console.log(formData)
            const redirect = () => {
                return this.props.history.push('/users/login')
            }
            this.props.dispatch(startSignupUser(formData,redirect))
        }
        //to clear the form
        this.setState({
            email: '',
            name: '',
            password: '',
        })  
    }

    /*-----------------------------------------------*/
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <div className = "container-fluid full-fluid">
                <div className = "row">

                    <div className = "col-md-5 left-side">
                        <div>
                            <img 
                                src= "https://www.droid-life.com/wp-content/uploads/2020/08/Instagram-Messenger-Screen.jpg" 
                                alt = "instagram-phone-view"
                                className = "img-rounded insta-another-pic" 
                                width = "350" 
                                height = "650" 
                            />
                        </div>
                        <div>
                            <img 
                                src="https://i0.wp.com/www.newoceanscreative.com/wp-content/uploads/2019/04/instagram-puzzle-feed-100.jpg?w=1080" 
                                alt = "instagram-phone-view"
                                className = "img-rounded insta-pic" 
                                width = "350" 
                                height= "650" 
                            />
                        </div>
                        <div className = "footer">
                            <p>ABOUT US &nbsp; HELP &nbsp; PRESS &nbsp; API &nbsp; JOBS &nbsp; PRIVACY &nbsp; TERMS &nbsp; DIRECTORY &nbsp; PROFILES &nbsp; </p>
                        </div>
                        
                    </div>

                    <div className = "col-md-7 right-side">
                        <div className = "signup-box">
                            <h2 className = "insta-name">Instagram</h2>
                            <p>Sign up to see photos and videos from your friends</p>
                            <button className = "btn btn-primary facebook"><FaFacebookSquare/>Log in with Facebook</button>
                                    <p>OR</p><hr />
                            
                            <form onSubmit = {this.handleSubmit}>
                                {/* -----------email field------- */}
                                <div className = "form-group">
                                    <input 
                                    type = "text" 
                                    className = "form-control form-control-sm col-md-11 col-form-label input-field" 
                                    placeholder = "Email" 
                                    name = "email"
                                    value = {this.state.email}
                                    onChange = {this.handleChange}
                                    autoComplete = 'off'
                                />
                                <span className = "signup-fields-error">{this.state.email_error}</span>   
                                </div>
                                {/* -----------email field------- */}

                                {/* -----------name field------- */}
                                <div className = "form-group">
                                    <input 
                                        type = "text" 
                                        className = "form-control form-control-sm col-md-11 col-form-label input-field" 
                                        placeholder = "name" 
                                        name = "name"
                                        value = {this.state.name}
                                        onChange = {this.handleChange}
                                        autoComplete = 'off'
                                    />
                                    <span className = "signup-fields-error">{this.state.name_error}</span> 
                                </div>
                                {/* -----------name field------- */}

                                {/* -----------password field------- */}
                                <div className = "form-group">
                                    <input 
                                        type = "password" 
                                        className = "form-control form-control-sm col-md-11 col-form-label input-field" 
                                        placeholder = "Password" 
                                        name = "password"
                                        value = {this.state.password}
                                        onChange = {this.handleChange}
                                        autoComplete = 'off'
                                    />
                                 <span className = "signup-fields-error">{this.state.password_error}</span>     
                                </div>
                                {/* -----------password field------- */}

                                <button className = "btn btn-primary btn-sm col-md-11 input-field">Sign up</button>

                                <p className= "content">By signing up,you agree to our Terms.Learn how we collect,use and share your data in our Data Policy and how we use cookies and similar techology in our Cookies Policy.</p>
                            </form>
                        </div>

                        <div className = "login-account">
                            <span className = "font-weight-normal signup-button">Have an account?<Link to = "/users/login">Log in</Link></span>
                        </div>

                        <p className = "copy-right">&copy;2020 INSTAGRAM FROM FACEBOOK</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Signup)