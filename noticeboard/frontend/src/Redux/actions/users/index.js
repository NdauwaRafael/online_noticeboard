import {
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
    ADD_USER_SUCCESS,
    ADD_USER_FAILED
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