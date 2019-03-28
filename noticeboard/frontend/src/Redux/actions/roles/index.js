import {
    GET_ROLES_SUCCESS,
    GET_ROLES_FAILED
} from '../../constants/actionTypes';
import * as rolesAPI from '../../constants/API/roles';
import {tokenConfig} from "../auth";


//GET ROLES
export const getRolesSuccess = (resp) => {
    return {
        type: GET_ROLES_SUCCESS,
        roles: resp
    }
};


export const getRolesFailed = (error) => {
    return {
        type: GET_ROLES_FAILED,
        error: error
    }
};

export const getRoles = () => (dispatch, getState) => {
    rolesAPI.getRolessApi(tokenConfig(getState))
        .then(resp=>{
            return dispatch(getRolesSuccess(resp.data));
        })
        .catch(error=>{
            return dispatch(getRolesFailed(error.response.data));
        })
};