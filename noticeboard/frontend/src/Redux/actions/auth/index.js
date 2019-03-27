import * as authApi from '../../constants/API/auth';
import {getMessages, getErrors} from '../messages';
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

//CHECK AUTH STATE
export const loadUserSuccess = (resp) => {
    return {
        type: USER_LOADED,
        user: resp
    }
};

export const loadUserFailed = (resp) => {
    return {
        type: AUTH_ERROR,
        error: resp
    }
};

export const userLoading = () => {
    return {
        type: USER_LOADING
    }
};

export const loadUser = () => (dispatch, getState) => {
    dispatch(userLoading());
    authApi.loadUserApi(tokenConfig(getState))
        .then(resp => {
            return dispatch([
                loadUserSuccess(resp.data),
                getMessages('Login Success')
            ])
        })
        .catch(error => {
            return dispatch([
                loadUserFailed(error.response.data),
                // getErrors(error.response.data.details)
            ])
        })
};

//LOGIN 
export const loginSuccess = (resp) => {
    return {
        type: LOGIN_SUCCESS,
        payload: resp
    }
};

export const loginFailed = (resp) => {
    return {
        type: LOGIN_FAILED,
        error: resp
    }
};

export const loginUser = (username, password) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    let body = JSON.stringify({username, password})
    authApi.loginUserApi(body, config)
        .then(resp => {
            dispatch([
                loginSuccess(resp.data),
                getMessages('Login Success. Welcome!')
            ])
        })
        .catch(error => {
            if (error.response) {
                return dispatch([
                    getErrors('Login failed!!'),
                    loginFailed(error.response.data),
                ])
            } else {
                return dispatch([
                    loginFailed(error.response.data),
                    getErrors('Login Failed')
                ])
            }
        })
};

//LOGOUT USER
export const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
};

export const logoutUser = () => (dispatch, getState) => {
    authApi.logoutUserApi(tokenConfig(getState))
        .then(resp => {
            return dispatch([
                logoutSuccess(),
                getMessages('logout Success')
            ])
        })
        .catch(error => {
            return dispatch([
                getErrors('Logout Failed')
            ])
        })
};

//REGISTER USER 
export const registerUserSuccess = (resp) => {
    return {
        type: REGISTER_SUCCESS,
        payload: resp
    }
};

export const registerUserFailed = (errors) => {
    return {
        type: REGISTER_FAILED,
        errors: errors
    }
};

export const registerUser = ({username, email, first_name, last_name, password, bio, registration_no, role_id, department_id}) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    let user = JSON.stringify({username, email, first_name, last_name, password, bio, registration_no, role_id, department_id});
    authApi.registerUserApi(user, config)
        .then(resp => {
            return dispatch([
                registerUserSuccess(resp.data),
                getMessages('Registration Success. Welcome!')
            ])
        })
        .catch(error => {
            return dispatch([
                getErrors('User Registration Failed'),
                registerUserFailed(error.response.data)
            ])
        })
};

//HELPER CONFIG FOR TOKKEN ROUTES
export const tokenConfig = (getState) => {
    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config
};
