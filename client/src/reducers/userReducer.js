const userInitialState = []

const userReducer = (state = userInitialState,action) => {
    switch(action.type) {
        case 'SET_USER': {
            return state.concat(action.payload)
        }

        default: {
            return [].concat(state)
        }
    }
}

export default userReducer