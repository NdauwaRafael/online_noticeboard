import {
    GET_POSTS_SUCCESS,
    ADD_POST_SUCCESS,
    DELETE_POST_SUCCESS,
    ADD_POST_FAILED,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILED
} from '../../constants/actionTypes';

const initialState = {
    posts: [],
    errors: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_SUCCESS:
            return {
                ...state,
                posts: [...state.posts, action.post]
            };
        case ADD_POST_FAILED:
        case UPDATE_POST_FAILED:
            return {
                ...state,
                errors: action.errors
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts
            };
        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                posts: [
                    ...state.posts.filter(post => post.id !== action.post.id),
                    Object.assign({}, action.post)
                ]
            };

        case DELETE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            };

        default:

            return state;
    }
}