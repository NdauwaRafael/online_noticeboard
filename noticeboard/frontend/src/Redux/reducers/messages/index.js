import { SUCCESS_MESSAGE } from '../../constants/actionTypes';

const initialState = {
    msg: '',
    status: 'success'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_MESSAGE:
            return {
                ...state,
                msg: action.msg
            };
        default:
            return state;
    }
}