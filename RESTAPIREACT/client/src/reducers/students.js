import _ from 'lodash';

import {FETCH_STUDENTS, EDIT_STUDENT, DELETE_STUDENT, FETCH_STUDENT} from '../actions/type';

// const init = {
//     students: [],
//     student: null
// }

export default (state = {}, action) => {
    switch(action.type) {

        case FETCH_STUDENT: {
            return {...state, [action.payload.id]: action.payload}
        }

        case FETCH_STUDENTS: {
            return {...state, ..._.mapKeys(action.payload, 'id')}
        }
        
        case EDIT_STUDENT: {
            return {...state, [action.payload.id]: action.payload}
        }

        case DELETE_STUDENT: {
            return _.omit(state, action.payload)
        }

        default : return state;
    }
} 