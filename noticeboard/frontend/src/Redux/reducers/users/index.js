import {
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
    ADD_USER_SUCCESS,
    ADD_USER_FAILED,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED
} from '../../constants/actionTypes';

const initialState = {
    loadingUsers: false,
    users: [],
    addUserErrors: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.users
            };
        case GET_USERS_FAILED:
            return {
                ...state,
                users: []
            };
        case ADD_USER_SUCCESS:
            return {
                ...state,
                users: [...state.users, action.user]
            };
        case ADD_USER_FAILED:
        case UPDATE_USER_FAILED:
            return {
                ...state,
                addUserErrors: action.error
            };
        case UPDATE_USER_SUCCESS:
            return [
                ...state.filter(user => user.id !== action.user.id),
                Object.assign({}, action.user)
            ];

        default:
            return state
    }
}