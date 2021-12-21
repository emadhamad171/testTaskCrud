export const addForm = [
    {
        placeholder: 'name',
        name: 'name',
    },
    {
        placeholder: 'email',
        name: 'email',
    },
    {
        placeholder: 'gender',
        name: 'gender',
    },
    {
        placeholder: 'status',
        name: 'status',
    }
]
export const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.gender) {
        errors.gender = 'Required'
    }
    if (!values.status) {
        errors.status = 'Required'
    }
    if (values.status !== 'active') {
        errors.status = 'Value must be active'
    }

    return errors
}