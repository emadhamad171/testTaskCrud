import {useDispatch, useSelector} from "react-redux";
import {reduxForm} from "redux-form";
import EditForm from "../../components/EditForm";
import {addUser, fetchUsersError, fetchUsersSuccess, updateUser} from "../../actions";
import {validate} from "../../mock";
import {useHistory} from "react-router-dom";
import {updateUserFetch} from "../../api";
import Header from "../../components/Header";

const UserInfo = () => {
    const dispatch = useDispatch()
    const addUserProcess = useSelector(state => state.usersReducer.arrayOfUsers)
const history = useHistory()
    const UpdateUserForm = reduxForm({form: 'edit', validate})(EditForm)
    const handleSubmit = async (formData) => {
        const res = await updateUserFetch(formData)
        const user = await res.json()
        console.log(res, user);
        if (res.status === 201) {
            dispatch(updateUser(formData))
            history.push('/')

            return
        }
        dispatch(fetchUsersError('something went wrong'))
    }

    const renderUsers = () => {
        return addUserProcess.map((user) => {
            return (
                <div>
                    <UpdateUserForm onSubmit={handleSubmit} initialValues={user} submitTitle={'Edit'} userObject={user}/>
                </div>
            )
        })
    }
    return (
        <>
            <Header/>
            {renderUsers()}
        </>
    )
}
export default UserInfo