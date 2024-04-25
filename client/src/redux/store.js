import { legacy_createStore as createStore} from 'redux'

const initialState = {
    user: '',
    email:''
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER': return {...state, user: action.payload};
        case 'SET_EMAIL': return {...state,email:action.payload};
        default: return state;
    }
};

const store = createStore(reducer);

export default store;