import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllPosts, deletePost } from '../../Redux/actions/posts';
import PostsTable from './partials/PostsTable'
class Posts extends Component {
    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);
    }
    componentDidMount() {
        this.props.getPosts('public');
    }

    deletePost(id) {
        this.props.deleteThisPost(id)
    }

    render() {
        const { posts: {posts}, auth } = this.props;

        return (
            <Fragment>
                <h1>Public Posts </h1>
                <PostsTable posts={posts} auth={auth} deletePost={this.deletePost} />
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