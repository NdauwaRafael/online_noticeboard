import {
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
    ADD_USER_SUCCESS,
    ADD_USER_FAILED,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED
} from '../../constants/actionTypes';
import * as userAPI from '../../constants/API/users';
import {tokenConfig} from "../auth";

//GET
export const getUsersSuccess = (resp) => {
    return {
        type: GET_USERS_SUCCESS,
        users: resp
    }
};

export const getUsersFailed = (error) => {
    return {
        type: GET_USERS_FAILED,
        error
    }
};

export const getUsers = () => (dispatch, getState) => {
    userAPI.getUsersApi(tokenConfig(getState))
        .then(resp => {
            return dispatch(getUsersSuccess(resp.data))
        })
        .catch(error => {
            return dispatch(getUsersFailed(error.response.data))
        })
};
//UPDATE
export const updateUserSuccess = (resp) => {
    return {
        type: UPDATE_USER_SUCCESS,
        user: resp
    }
};

export const updateUserFailed = (error) => {
    return {
        type: UPDATE_USER_FAILED,
        error
    }
};

//ADD

export const addUsersSuccess = (resp) => {
    return {
        type: ADD_USER_SUCCESS,
        user: resp
    }
};

export const addUsersFailed = (error) => {
    return {
        type: ADD_USER_FAILED,
        error
    }
};

export const addUser = (user) => (dispatch, getState) => {
    if (user.id) {
        userAPI.updateUserApi(user, tokenConfig(getState))
            .then(resp => {
                return dispatch(updateUserSuccess(resp.data))
            })
            .catch(error => {
                console.log(error);
                if(error.response){
                    return dispatch(updateUserFailed(error.response.data))
                }
            })
    } else {
        userAPI.addUserApi(user, tokenConfig(getState))
            .then(resp => {
                return dispatch(addUsersSuccess(resp.data))
            })
            .catch(error => {
                if(error.response){
                    return dispatch(addUsersFailed(error.response.data))
                }
            })
    }
};