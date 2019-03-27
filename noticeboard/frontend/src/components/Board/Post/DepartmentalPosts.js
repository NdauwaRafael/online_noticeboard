import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllPosts, deletePost } from '../../../Redux/actions/posts/index';
import PostsTable from './partials/PostsTable'
class Posts extends Component {
    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);
    }
    componentDidMount() {
        this.props.getPosts();
    }

    deletePost(id) {
        let data = {
            id,
            category: 'departmental'
        };
        this.props.deleteThisPost(data)
    }

    render() {
        const { posts: {posts}, auth } = this.props;

        return (
            <Fragment>
                <h1>Departmental Posts </h1>
                <PostsTable posts={posts} auth={auth} />
            </Fragment>
        )
    }
}

const mapStateToProps = ({ posts, auth }) => {
    return {
        posts,
        auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: bindActionCreators(getAllPosts, dispatch),
        deleteThisPost: bindActionCreators(deletePost, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);