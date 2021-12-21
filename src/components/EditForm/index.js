import React, {useState} from 'react';
import Button from "../Button";
import {Field} from "redux-form";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {renderField} from "../../utils/renderInput";
import {deleteUser, fetchUsersError, updateUser} from "../../actions";
import {useDispatch} from "react-redux";
import {deleteUserFetch} from "../../api";
import {useHistory} from "react-router-dom";

const EditForm = ({objectValues, submitTitle, handleSubmit, invalid}) => {
        const [disabled, setDisabled] = useState(true)
        const dispatch = useDispatch()
    const history = useHistory()

        const handleDelete = async () => {
            const res = await deleteUserFetch(formData)
            const user = await res.json()
            console.log(res, user);
            if (res.status === 201) {
                dispatch(deleteUser(objectValues.id))
                history.push('/')

                return
            }
            dispatch(fetchUsersError('something went wrong'))
        }
        const renderFields = () => {
            const keys = Object.keys(objectValues)
            console.log(keys);
            return keys.slice(1).map((k) => {
                return <Field disabled={disabled}
                              value={objectValues[k]} name={k} component={renderField}/>
            })
        }


        return (
            <>
                <form className='' onSubmit={handleSubmit}>
                    {renderFields()}
                    <Button
                        disabled={!!invalid || disabled}
                        title={submitTitle}
                    />
                    <EditIcon onClick={() => setDisabled(!disabled)}/>
                    <DeleteIcon onClick={handleDelete}/>
                </form>
            </>
        );
    }
;

export default EditForm;
