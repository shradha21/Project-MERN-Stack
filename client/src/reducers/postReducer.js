const postInitialState = []

const postReducer = (state = postInitialState,action) => {
    switch(action.type) {
        case 'SET_POST': {
            return state.concat(action.payload)
        }
        case 'MY_POST': {
            return state.concat(action.payload)
        }
        case 'DELETE_POST': {
            return state.filter(post => post._id !== action.payload)
        }
        
        default: {
            return [...state]
        }
    }
}

export default postReducer