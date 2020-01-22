import {LOGIN, LOGOUT} from '../actions/type';

const init = {
    userName: '',
    password: ''
}

export default (state = init, action) => {
    switch(action.type) {
        case LOGIN:
            return {...state, userName: action.payload.email, password: action.payload.password}
        case LOGOUT: 
            return {...state, userName: '', password: ''}
        default: {
            return state;
        }
    }
    
} 