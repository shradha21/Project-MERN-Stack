import axios from '../config/axios'

//set
export const setPost = (post) => {
    return { type: 'SET_POST', payload: post}
}

//get
export const startGetPosts = () => {
    return(dispatch) => {
        axios.get('/allposts', {
            headers: {
                'authorization' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const posts = response.data
            dispatch(setPost(posts))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

//add post
export const startAddPosts = (formData,redirect) => {
    return(dispatch) => {
        axios.post('/post/create', formData, {
            headers: {
                'authorization' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            //console.log(response.data)
            if(response.data.hasOwnProperty('error')) {
                console.log(response.data.error)
            }else {
                redirect()
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const myPosts = (posts) => {
    return { type: 'MY_POSTS', payload: posts}
} 

//mypost
export const startGetMyPosts = () => {
    return(dispatch) => {
        axios.get('posts/my', {
            headers: {
                'authorization' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const posts = response.data
            dispatch(myPosts(posts))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}


export const deletePost = (id) => {
    return { type: 'DELETE_POST' , payload: id}
}

//delete post
export const startDeletePost = (postId) => {
    return(dispatch) => {
        axios.delete(`/post/${postId}`, {
            headers: {
                authorization: localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            //console.log(response.data)
            const post = response.data
            dispatch(deletePost(post._id))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

//like post
// export const startAddLikes = () => {
//     return(dispatch) => {
//         axios
//         // axios.put(`/postlike/${postId}`, {
//         //     headers: {
//         //         authorization: localStorage.getItem('authToken')
//         //     }
//         // })
//         // .then((response) => {
//         //     console.log(response.data)

//         // })
//     }
// }