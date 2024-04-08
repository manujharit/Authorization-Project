import { legacy_createStore as createStore} from 'redux'

const initialState = {
    loggedIn: false,
    username: ''
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGGEDIN': return {...state, loggedIn : action.payload};
        case 'SET_USERNAME': return {...state, username: action.payload};
        default: return state;
    }
};

const store = createStore(reducer);

export default store;