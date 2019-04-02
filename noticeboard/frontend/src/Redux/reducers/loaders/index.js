import {START_LOADING, FINISH_LOADING} from '../../constants/actionTypes';

const initialState = {
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true
            };
        case FINISH_LOADING:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}