import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'
import { startAddPosts } from '../../actions/postAction'

class Post extends React.Component {
    constructor() {
        super()
        this.state = {
            caption: '',
            selectedFiles: null
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleImages = (e) => {
        const selectedFiles = e.target.files[0]
        console.log(selectedFiles)
        this.setState({
            selectedFiles
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        // let selectedFiles = this.state.selectedFiles
        // if(selectedFiles) {
        //     for(let i =0; i< selectedFiles.length; i++) {
        //         formData.append('postImages', selectedFiles[i],selectedFiles[i].name)
        //     }
        // }
        formData.append('caption', this.state.caption)
        formData.append('image',this.state.selectedFiles)
        //console.log(formData)
        const redirect = () => {
            return this.props.history.push('/users/account')
        }
        this.props.dispatch(startAddPosts(formData,redirect))
    }

    render() {
        return (
            <div className = "container-fluid">
              <div className = "row">
                <div className = "col-lg-12">
                <nav className = "navbar navbar-dark bg-light">
                    <Link to = "/users/login"><FaAngleLeft /></Link>
                <h3 className = "post-text">New Post</h3>
                    <Link to = "/users/account">Share</Link>
                </nav>
                </div>  
             </div>
                
                <div className = "row photo-file">
                  <div className = "col-md-4">
                  </div>
                    <div className = "col-md-4 ">
                        <form onSubmit = {this.handleSubmit} encType="multipart/form-data">
                    <div className = "form-group">
                        <input 
                            type = "text" 
                            className = "form-control form-control-lg col-md-11"
                            name = "caption"
                            value = {this.state.caption}
                            placeholder = "write a caption"
                            onChange = {this.handleChange}
                            autoComplete = "off"
                         />
                    </div> <br />

                    <input type = "file" name = "image" onChange = {this.handleImages} multiple /> <br /> <br />
                    <input  type = "submit" value = "UPLOAD" className = "btn btn-primary" />

                </form>
                </div>
            </div>
                <div className = "col-md-4"></div>
            </div>
        )
    }
}

export default connect()(Post)