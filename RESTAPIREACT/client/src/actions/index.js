import history from '../history';
import students from '../api/students';
import credential from '../credential';

import {
    FETCH_STUDENTS, 
    FETCH_STUDENT, 
    EDIT_STUDENT, 
    CREATE_STUDENT, 
    DELETE_STUDENT, 
    LOGIN,
    LOGOUT 
} from './type';

//*********************** */
// Authentication Actions
//********************** */

export const fetchStudents = () => async dispatch => {
    const response = await students.get('/students');
    
    dispatch({
        type: FETCH_STUDENTS, 
        payload: response.data
    });
};

export const fetchStudent = (id) => async dispatch => {
    const response = await students.get(`/students/${id}`);

    dispatch({
        type: FETCH_STUDENT,
        payload: response.data
    })
}

export const editStudent = (id, formValues) => async dispatch => {
    const response = await students.put(`/students/${id}`, formValues);
    
    dispatch({
        type: EDIT_STUDENT,
        payload: response.data
    })

    history.push('/students');
}

export const createStudent = (formValues) => async dispatch => {
    const response = await students.post(`/students`, formValues)

    dispatch({
        type: CREATE_STUDENT,
        payload: response.data
    })

    history.push('/students');

}

export const deleteStudent = (id) => async dispatch => {
    console.log(id)
    await students.delete(`/students/${id}`);
    // just return the id of deleted so it will be possible to remove the document inside reducer
    dispatch({
        type: DELETE_STUDENT,
        payload: id
    }) 
}


//*********************** */
// Authentication Actions
//********************** */
export const login = (authValue) => async dispatch => {
    console.log(authValue)
    if(authValue.email==='vijay@gmail.com' && authValue.password === '1234'){
        dispatch({
            type: LOGIN,
            payload: authValue
        })
        history.push('/students');
    }
}

export const logout = () => async dispatch => {

    return {
        type: LOGOUT
    }
}