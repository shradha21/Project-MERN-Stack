import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FaHome } from 'react-icons/fa'

class Profile extends React.Component {
    
    render() {
        return(
            <div>
                {/* ----Header(navbar)-------------------------- */}
            <div className = "container-fluid">
                <div className = "row">
                <div className = "col-md-12">
                    <nav className = "navbar navbar-dark bg-light">
                        <div className = "col-md-4 Home-account-left-side">
                         <big className = "instagram-name">Instagram</big>
                        </div>
                        <div className = "col-md-4 Home-account-middle-side" >
                         <input type = "text" placeholder = "Search"  className = "search-box" />
                        </div>
                        <div className = "col-md-4 Home-account-right-side">
                            <Link to = "/"><FaHome /></Link>
                        </div>
                    </nav>
                    </div>
                </div>
            </div>
            {/* -----Header(navbar)-------------------------- */}

            {/* -----------Header--------------------------- */}
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-4 profile-left-side">
                        <img src = "https://images.unsplash.com/photo-1494510669218-6174f28694b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
                            alt = "profile-posts"
                            className = "rounded-circle profile-pic" 
                            width = "150px"  
                        />
                    </div>
                    <div className = "col-md-8 profile-right-side">
                        <h4 className = "text">SHRADHA</h4>  <button>Edit Profile</button>
                        <div>
                            <h6 className = "followers">40 followers</h6> <h6 className = "followers">400 following</h6> <h6 className = "followers">400 followers</h6>
                        </div>
                    </div>
                </div>
            
            {/* ----------Header--------------------------- */}

            {/* -----------------gallery----------------------- */}
            <div className = "gallery">
                <img src = "https://images.unsplash.com/photo-1494510669218-6174f28694b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt = "profile-posts" className = "myposts" />
                <img src = "https://images.unsplash.com/photo-1494510669218-6174f28694b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt = "profile-posts" className = "myposts"/>
                <img src = "https://images.unsplash.com/photo-1494510669218-6174f28694b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt = "profile-posts" className = "myposts"/>
                <img src = "https://images.unsplash.com/photo-1494510669218-6174f28694b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt = "profile-posts" className = "myposts"/>
                <img src = "https://images.unsplash.com/photo-1494510669218-6174f28694b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt = "profile-posts" className = "myposts"/>
                <img src = "https://images.unsplash.com/photo-1494510669218-6174f28694b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt = "profile-posts" className = "myposts"/>
            </div>
            {/* ---------------gallery-------------------------- */}
            </div>
            </div>
        )
    }
} 

export default connect()(Profile) 