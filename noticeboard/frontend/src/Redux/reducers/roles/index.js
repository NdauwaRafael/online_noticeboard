import {
    GET_ROLES_SUCCESS,
    GET_ROLES_FAILED
} from '../../constants/actionTypes';

const initialState = {
    loadingRoles: false,
    roles: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ROLES_SUCCESS:
            return {
                ...state,
                roles: action.roles
            };
        case GET_ROLES_FAILED:
            return {
                ...state,
                roles: []
            };
        default:
            return state
    }
}