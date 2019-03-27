import {
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILED,
    ADD_POST_SUCCESS,
    ADD_POST_FAILED,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILED,
} from '../../constants/actionTypes';
import * as postApi from '../../constants/API/posts';
import {getMessages, getErrors} from '../messages';
import {tokenConfig} from '../auth'


//CREATE POST
export const addPostSuccess = (resp) => {
    return {
        type: ADD_POST_SUCCESS,
        post: resp
    }
};

export const addPostFailed = (resp) => {
    return {
        type: ADD_POST_FAILED,
        errors: resp
    }
};

export const addPost = (post) => (dispatch, getState) => {
    postApi.addPostApi(post, tokenConfig(getState))
        .then(resp => {
            return dispatch([
                addPostSuccess(resp.data),
                getMessages('Post was added successfully')
            ])
        })
        .catch(error => {
            if (error.response) {
                return dispatch([
                    addPostFailed(error.response.data),
                    getErrors(error.response.data.join())
                ])
            } else {
                return dispatch(getErrors(error.toString()));
            }
        })
}

//GET POSTs
export const getPostsSuccess = (resp) => {
    return {
        type: GET_POSTS_SUCCESS,
        posts: resp
    }
};

export const getPostsFailed = (resp) => {
    return {
        type: GET_POSTS_FAILED,
        error: resp
    }
}

export const getAllPosts = (category) => (dispatch, getState) => {
    postApi.getPosts(category, tokenConfig(getState))
        .then(resp => {
            return dispatch(getPostsSuccess(resp.data));
        })
        .catch(error => {
            if (error.response) {
                return dispatch([
                    getPostsFailed(error.response.data),
                    getErrors(error.response.data.detail)
                ])
            } else {
                return dispatch(getErrors(error.toString()));
            }
        })
}

//DELETE POST
export const deletePostSuccess = (resp) => {
    return {
        type: DELETE_POST_SUCCESS,
        id: resp
    }
};

export const deletePostFailed = (resp) => {
    console.log(resp, 'error')
    return {
        action: DELETE_POST_FAILED,
        error: resp
    }
}

export const deletePost = (data) => (dispatch, getState) => {
    postApi.DELETE_POST(data, tokenConfig(getState))
        .then(resp => {
            return dispatch([
                deletePostSuccess(id),
                getMessages('Post have been deleted successfully!!')
            ]);
        })
        .catch(error => {
            return dispatch(deletePostFailed(error.toString()))
        })
}