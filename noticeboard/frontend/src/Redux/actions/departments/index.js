import {
    GET_DEPARTMENTS_SUCCESS,
    GET_DEPARTMENTS_FAILED,
    ADD_DEPARTMENT_SUCCESS,
    ADD_DEPARTMENT_FAILED,
    DELETE_DEPARTMENT_SUCCESS,
    DELETE_DEPARTMENT_FAILED,
    UPDATE_DEPARTMENT_SUCCESS,
    UPDATE_DEPARTMENT_FAILED
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

//UPDATE
export const updateDepartmentSuccess = (resp) => {
    return {
        type: UPDATE_DEPARTMENT_SUCCESS,
        department: resp
    }
};

export const updateDepartmentFailed = (error) => {
    return {
        type: UPDATE_DEPARTMENT_FAILED,
        error
    }
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
    if (department.id) {
        departmentsApi.updateDepartmentApi(department, tokenConfig(getState))
            .then(resp => {
                return dispatch([
                    updateDepartmentSuccess(resp.data),
                    getMessages('Department Updated successfully')
                ])
            })
            .catch(error => {
                if (error.response) {
                    return dispatch([
                        updateDepartmentFailed(error.response.data),
                        getErrors('Department Update failed!')
                    ])
                } else {
                    return dispatch(getErrors('Department Update failed!'))
                }

            })
    } else {
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
    }
};

//DELETE
export const deleteDepartmentSuccess = (id) => {
    return {
        type: DELETE_DEPARTMENT_SUCCESS,
        id
    }
};

export const deleteDepartmentFailed = (error) => {
    return {
        type: DELETE_DEPARTMENT_FAILED,
        error
    }
};

export const deleteDepartment = (id) => (dispatch, getState) => {
    departmentsApi.deleteDepartmentsApi(id, tokenConfig(getState))
        .then(resp => {
            dispatch([
                deleteDepartmentSuccess(id),
                getMessages('Department Deleted Successfully!')
            ])
        })
        .catch(error => {
            dispatch(getErrors('Department delete failed with error ' + error.toString()));
        })
};