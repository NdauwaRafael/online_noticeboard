import {
    GET_DEPARTMENTS_SUCCESS,
    GET_DEPARTMENTS_FAILED
} from '../../constants/actionTypes';

import * as departmentsApi from '../../constants/API/departments';

import {tokenConfig} from '../auth';

export const getDepartmentsSuccess = (resp) => {
    return {
        type: GET_DEPARTMENTS_SUCCESS,
        departments: resp
    }
};

export const getDepartmentsFailed = (error) => {
    return {
        type: GET_DEPARTMENTS_FAILED,
        departments: error
    }
};

export const getDepartments = () => (dispatch, getState)  => {
    departmentsApi.getDepartmentsApi(tokenConfig(getState))
        .then(resp=>{
            return dispatch(getDepartmentsSuccess(resp.data))
        })
        .catch(error=>{
            return dispatch(getDepartmentsFailed(error.response.data))
        })
};