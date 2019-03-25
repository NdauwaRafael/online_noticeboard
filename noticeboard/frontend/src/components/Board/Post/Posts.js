import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../../Redux/actions/posts';
import { bindActionCreators } from 'redux';
import { getAllPosts, deletePost } from '../../../Redux/actions/posts/index';

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
        const { posts } = this.props.posts;

        return (
            <Fragment>
                <h1>Posts </h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post, index) => (
                                <tr key={post.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{post.title}</td>
                                    <td>{post.description}</td>
                                    <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <button type="button" style={{ marginRight: 20 }} className="btn btn-outline-success">View</button>
                                        <button type="button" className="btn btn-outline-danger" onClick={() => this.deletePost(post.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ posts }) => {
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