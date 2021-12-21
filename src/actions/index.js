
export const FETCH_USERS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const UPDATE_USER = 'UPDATE_USER'
export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'
export function fetchUsersPending() {
    return {
        type: FETCH_USERS_PENDING,
    }
}
export function addUser(userObject) {
    return {
        type: ADD_USER,
        userObject
    }
}
export function fetchUsersSuccess() {
    return {
        type: FETCH_USERS_SUCCESS,
    }
}

export function fetchUsersError(error) {
    return {
        type: FETCH_USERS_ERROR,
        error: error
    }
}
export function updateUser(userObject) {
    return {
        type: UPDATE_USER,
        userObject
    }
}
export function deleteUser(userObject) {
    return {
        type: DELETE_USER,
        userObject
    }
}