import { GET_ERRORS } from '../../constants/actionTypes';

const initialState = {
    msg: '',
    status: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return {
                ...state,
                msg: action.msg
            };
        default:
            return state;
    }
}