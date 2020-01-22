import {combineReducers} from 'redux';
import authReducer from "./auth";
import studentReducer from "./students";
import {reducer as formReducer} from "redux-form";
const reducers = combineReducers({
    auth: authReducer,
    students: studentReducer,
    form: formReducer
})

export default reducers;