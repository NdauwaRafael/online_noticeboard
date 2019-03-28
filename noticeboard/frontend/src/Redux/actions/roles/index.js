import {
    GET_ROLES_SUCCESS,
    GET_ROLES_FAILED
} from '../../constants/actionTypes';

export const getRolesSuccess = (resp)=>{
    return {
        type: GET_ROLES_SUCCESS,
        roles: resp
    }
};


export const getRolesFailes = (error)=>{
    return {
        type: GET_ROLES_FAILED,
        error: error
    }
};