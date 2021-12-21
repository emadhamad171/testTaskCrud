import Header from "../../components/Header";
import {reduxForm} from "redux-form";
import {addForm, validate} from "../../mock";
import React from "react";
import Form from "../../components/Form";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersError, fetchUsersSuccess, fetchUsersPending, addUser} from '../../actions'
import {addUserFetch} from "../../api";

const Home = () => {
    const dispatch = useDispatch()
    const AddUserForm = reduxForm({form: 'add', validate})(Form)
    const addUserProcess = useSelector(state => state.usersReducer)
    console.log(addUserProcess);
    const handleSubmit = async (formData) => {
        dispatch(fetchUsersPending())
        const res = await addUserFetch(formData, dispatch)
        const user = await res.json()
        if (res.status === 201) {
            dispatch(addUser(user.data))
            dispatch(fetchUsersSuccess())
            return
        }
        dispatch(fetchUsersError('something went wrong'))
    }

    return (
        <>
            <Header/>
            <AddUserForm onSubmit={handleSubmit} fields={addForm} submitTitle='Add'/>
        </>
    )
}
export default Home