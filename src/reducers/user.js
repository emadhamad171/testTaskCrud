import {
    FETCH_USERS_PENDING,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER
} from '../actions';

const initialState = {
    pending: false,
    error: null,
    arrayOfUsers: []
}

export function usersReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_USER:
            return {
                ...state,
                arrayOfUsers: [...state.arrayOfUsers, action.userObject]
            }
        case FETCH_USERS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                pending: false,
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case UPDATE_USER:
            return {
                ...state,
                arrayOfUsers: state.arrayOfUsers.map(user => {
                    if(user.id === action.userObject.id) {
                     return {...user, ...action.userObject}

                    } else return user
                })
            }
        case DELETE_USER:
            return {
                ...state,
                arrayOfUsers: [
                    ...state.items.slice(0, action.action.userObject.id),
                    ...state.items.slice(action.userObject.id + 1)
                ]
            }
        default:
            return state;
    }
}

export const getUsers = state => state.arrayOfUsers;
export const getUsersPending = state => state.pending;
export const getUsersError = state => state.error;