import axios from '../config/axios'

//set user
export const setUser = (user) => {
    return { type: 'SET_USER', payload: user}
}

//get user
export const startGetUser = () => {
    return(dispatch) => {
        axios.get('/users/account', {
            headers: {
                'authorization': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const user = response.data
            dispatch(setUser(user))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

//-------start register user---------
export const startSignupUser = (formData,redirect) => {
    return(dispatch) => {
        //console.log('action generator',formData)
        axios.post('/users/signup', formData) 
          .then((response) => {
              if(response.data.hasOwnProperty('error')){
                  console.log(response.data.error)
              }else {
                  //alert('register successfully')
                  redirect()
              }
          }).catch((err) => {
              console.log(err)
          })
    }
}
//----------------------------------------

//-----start login user------------ 
export const startLoginUser = (formData,redirect) => {
    return(dispatch) => {
        //console.log('action generator', formData)
        axios.post('/users/login', formData)
          .then((response) => {
                if(response.data.hasOwnProperty('errors')) {
                    console.log(response.data.errors)
                }else {
                    //alert('successfully logged in')
                    console.log(response.data)
                    localStorage.setItem('authToken',response.data.token)
                    
                    axios.get('/users/account', {
                        headers: {
                            'authorization' : localStorage.getItem('authToken',response.data.token)
                        }
                    })
                    .then((response) => {
                        const user = response.data
                        dispatch(setUser(user))
                        redirect()
                    })
                 }
           }).catch((err) => {
              console.log(err)
          })
    }
}

//-----start logout user--------
export const startLogoutUser = () => {
    return (dispatch) => {
        axios.delete('/users/logout', {
            headers: {
                'authorization' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.message) {
                localStorage.removeItem('authToken')
                dispatch(setUser({}))
                window.location.href = "/users/login"
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}