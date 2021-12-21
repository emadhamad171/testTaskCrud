import React from 'react';
import Button from "../Button";
import {Field} from "redux-form";
import {renderField} from "../../utils/renderInput";


const Form = ({fields, submitTitle, handleSubmit, invalid}) => {
    const renderFields = () => {
        return fields.map((field) => {
            return (
                <>
                    <Field key={field.name} label={field.placeholder} name={field.name} component={renderField}/>
                </>
            )
        })
    }
    return (
        <>
            <form className='' onSubmit={handleSubmit}>
                {renderFields()}
                <Button
                    disabled={!!invalid}
                    title={submitTitle}/>
            </form>
        </>
    );
};

export default Form;
