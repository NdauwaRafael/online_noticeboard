import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../../Redux/actions/posts';
import { bindActionCreators } from 'redux';
import { getAllPosts, deletePost } from '../../../Redux/actions/posts/index';
import Posts from './partials/post'
class Posts extends Component {
    constructor(props) {
        super(props)
        this.deletePost = this.deletePost.bind(this);
    }
    componentDidMount() {
        this.props.getPosts();
    }

    deletePost(id) {
        this.props.deleteThisPost(id)
    }

    render() {
        const { posts, auth } = this.props.posts;

        return (
            <Fragment>
                <h1>Public Posts </h1>
                <Posts posts={posts} auth={auth} />
            </Fragment>
        )
    }
}

const mapStateToProps = ({ posts, auth }) => {
    return {
        posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: bindActionCreators(getAllPosts, dispatch),
        deleteThisPost: bindActionCreators(deletePost, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);