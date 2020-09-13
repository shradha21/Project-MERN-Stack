import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {FaHome,FaUserCircle,FaTrashAlt } from 'react-icons/fa'

import { startLogoutUser } from '../../actions/userAction'
//import { startGetMyPosts, startDeletePost } from '../../actions/postAction'
import { startGetPosts, startDeletePost } from '../../actions/postAction'
//import { findUserName } from '../../selectors/userSelector'
//import { findPost } from '../../selectors/postSelector'

class Account extends React.Component {

   componentDidMount() {
      //this.props.dispatch(startGetMyPosts())
      this.props.dispatch(startGetPosts())
   }

   handleLogout = () => {
      // localStorage.removeItem('authToken')
      // window.location.href = '/users/login'
      this.props.dispatch(startLogoutUser())
   }

    render() {
       return (
               //----Header(navbar)--------------------------
            <div className = "container-fluid">
               <div className = "row">
                  <div className = "col-md-12">
                     <nav className = "navbar navbar-dark bg-light">
                        <div className = "col-md-4 Home-account-left-side">
                         <big className = "instagram-name">Instagram</big>
                        </div>
                        <div className = "col-md-4 Home-account-middle-side">
                           <input type = "text" placeholder = "Search" className = "search-box" />
                        </div>
                        <div className = "col-md-4 Home-account-right-side">
                           <Link to = "/users/account" ><FaHome /></Link> | 
                           {Object.keys(this.props.user).length !== 0 ? (
                                 <div>
                                    <Link to = "/users/logout" onClick = {this.handleLogout}>logout</Link> | &nbsp;
                                    <Link to = "/posts">Create Post</Link> | &nbsp;
                                    <Link to = "/users/profile"><FaUserCircle /></Link>
                                 </div>
                              ) : (
                                 <div>
                                    <Link to = "/users/signup">Sign up</Link> | &nbsp;
                                    <Link to = "/users/login">Log in</Link> | &nbsp;
                                 </div>
                              )}
                        </div>
                     </nav>
                  </div>
               </div>
            
            {/* -----Header(navbar)-------------------------- */}
   
            {/*---------------POSTS--------------------------  */}
                           
            {this.props.post.map(post => {
               return ( 
                  <div key = {this.props.post._id} className = "posts">
                  <div className = "post-header">
                    {/* <button onClick = {() => {this.}}>edit</button> */}
                    <button onClick = {() => {this.props.dispatch(startDeletePost(post._id))}} className = "post-icon"><FaTrashAlt size = "20px" /></button>
                        <h5>{this.props.user.name}</h5>
                  </div>
                     
                  <div className = "post-image">
                     <img src = {post.image} 
                           alt = "posts-img" 
                           width = "690px" 
                           height = "400px" 
                           margin-left = "10px"  
                     />
                  </div>
                  <div className = "post-thumbs">
               {/* <button onClick = {() => {this.props.dispatch(startAddLikes(post._id))}} className = "like-button"><FaRegThumbsUp size = "25px" />{post.likes.length}</button>  */}
               {/* <button  className = "unlike-button"><FaRegThumbsDown size = "25px" />{post.unlikes.length}</button> */}
                  </div>
                  <div className = "post-content">
                        <h6>{post.caption}</h6>
                        {/* <p className = "body-text">{post.body}</p><br /><br /> */}
                     <input type = "text" placeholder = "Add a comment" className = "post-comment"/>
                  </div>
               </div>
               )})}
             {/* --------------POSTS----------------------------  */}
         </div>
         )}
}


// const mapStateToProps = (state,props) => {
//   const post = findPost(state.post, props.match.params.id)
//    return {
//       post,
//       user: findUserName(state.user, post.userId)
//    }
// }

const mapStateToProps = (state) => {
   return {
      user: state.user,
      post: state.post
   }
}

export default connect(mapStateToProps)(Account) 