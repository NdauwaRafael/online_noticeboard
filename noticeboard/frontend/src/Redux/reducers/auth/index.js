import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAILED
} from '../../constants/actionTypes';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    authError: {},
    registrationErrors: {},
    canAddPost: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {...state, isLoading: true};
        case USER_LOADED:
            let userCanPost = false;
            if (action.user.payload.role === 'Administrator' || action.payload.user.role === 'HOD' || action.payload.user.role === 'student_leader') {
                userCanPost = true;
            }
            return {...state, isLoading: false, isAuthenticated: true, user: action.user, canAddPost: userCanPost };
        case AUTH_ERROR:
        case LOGIN_FAILED:
            localStorage.removeItem('token')
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                token: null,
                user: null,
                authError: action.error,
                canAddPost: false
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            let canPost = false;
            if (action.payload.user.role === 'Administrator' || action.payload.user.role === 'HOD' || action.payload.user.role === 'student_leader') {
                canPost = true;
            }
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                ...action.payload,
                canAddPost: canPost
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return {...state, isLoading: false, isAuthenticated: false, token: null, user: null, canAddPost: false}
        case REGISTER_FAILED:
            localStorage.removeItem('token')
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                token: null,
                user: null,
                registrationErrors: action.errors,
                canAddPost: false
            };

        default:
            return state;
    }
}