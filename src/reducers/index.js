import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'
import {usersReducer} from "./user";

const rootReducer = combineReducers({
    usersReducer,
    form: formReducer
})
export default rootReducer;