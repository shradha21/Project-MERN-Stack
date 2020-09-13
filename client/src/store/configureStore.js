import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import postReducer from '../reducers/postReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        post: postReducer

    }),applyMiddleware(thunk))
    return store
}

export default configureStore