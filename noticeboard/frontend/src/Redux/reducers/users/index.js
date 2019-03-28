import {
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
} from '../../constants/actionTypes';

const initialState = {
    loadingUsers: false,
    users: []
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
        default:
            return state
    }
}