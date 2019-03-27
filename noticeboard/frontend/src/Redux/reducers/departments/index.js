import {GET_DEPARTMENTS_SUCCESS} from '../../constants/actionTypes';

const initialState = {
    departments: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DEPARTMENTS_SUCCESS:
            return {
                ...state,
                departments: action.departments
            }
    }
}