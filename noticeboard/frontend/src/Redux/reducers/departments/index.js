import {
    GET_DEPARTMENTS_SUCCESS,
    ADD_DEPARTMENT_SUCCESS,
    ADD_DEPARTMENT_FAILED
} from '../../constants/actionTypes';

const initialState = {
    departments: [],
    addDepartmentErrors: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DEPARTMENTS_SUCCESS:
            return {
                ...state,
                departments: action.departments
            };
        case ADD_DEPARTMENT_SUCCESS:
            return {
                ...state,
                departments: [...state.departments, action.department]
            };
        case ADD_DEPARTMENT_FAILED:
            return {
                ...state,
                addDepartmentErrors: action.error
            };
        default:
            return state;
    }
}