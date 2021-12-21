
export const addUserFetch = async (formData) => {
    return  await fetch('https://gorest.co.in/public/v1/users', {body:JSON.stringify(formData), method: "POST", headers: {
            'Authorization': 'Bearer ' + '565acfdd976012bf4225ced92e8be8afdfb51807ddf4d8bba2a38be18dd0b016',
            'Content-Type': 'application/json'
        }})
}
export const updateUserFetch = async (formData) => {
    return  await fetch(`https://gorest.co.in/public/v1/users/${formData.id}`, {body:JSON.stringify(formData), method: "PUT", headers: {
            'Authorization': 'Bearer ' + '565acfdd976012bf4225ced92e8be8afdfb51807ddf4d8bba2a38be18dd0b016',
            'Content-Type': 'application/json'
        }})
}
export const deleteUserFetch = async (formData) => {
    return  await fetch(`https://gorest.co.in/public/v1/users/${formData.id}`, {body:JSON.stringify(formData), method: "DELETE", headers: {
            'Authorization': 'Bearer ' + '565acfdd976012bf4225ced92e8be8afdfb51807ddf4d8bba2a38be18dd0b016',
            'Content-Type': 'application/json'
        }})
}