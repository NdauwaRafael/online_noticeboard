import {
    GET_DEPARTMENTS_SUCCESS,
    GET_DEPARTMENTS_FAILED,
    ADD_DEPARTMENT_SUCCESS,
    ADD_DEPARTMENT_FAILED
} from '../../constants/actionTypes';

import * as departmentsApi from '../../constants/API/departments';

import {tokenConfig} from '../auth';
import {getErrors, getMessages} from "../messages";

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

export const getDepartments = () => (dispatch, getState) => {
    departmentsApi.getDepartmentsApi(tokenConfig(getState))
        .then(resp => {
            return dispatch(getDepartmentsSuccess(resp.data))
        })
        .catch(error => {
            return dispatch(getDepartmentsFailed(error.response.data))
        })
};

//ADD
export const addDepartmentSuccess = (resp) => {
    return {
        type: ADD_DEPARTMENT_SUCCESS,
        department: resp
    }
};

export const addDepartmentFailed = (error) => {
    return {
        type: ADD_DEPARTMENT_FAILED,
        error
    }
};

export const addDepartment = (department) => (dispatch, getState) => {
    departmentsApi.addDepartmentApi(department, tokenConfig(getState))
        .then(resp => {
            return dispatch([
                addDepartmentSuccess(resp.data),
                getMessages('Department Added successfully')
            ])
        })
        .catch(error => {
            if (error.response) {
                return dispatch([
                    addDepartmentFailed(error.response.data),
                    getErrors('Department Add failed!')
                ])
            } else {
                return dispatch(getErrors('Department Add failed!'))
            }

        })
};