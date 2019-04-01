import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

export default ({posts, auth: {user}, deletePost}) =>
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
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{post.title}</td>
                    <td>{post.description}</td>
                    <td style={{display: 'flex', justifyContent: 'space-between'}}>
                        <button type="button" style={{marginRight: 20}} className="btn btn-outline-success">View
                        </button>
                        {
                            post.owner === user.id ?
                                <Fragment>
                                    <Link to={'/posts/edit/'+post.id} style={{marginRight: 20}}
                                            className="btn btn-outline-success">Edit
                                    </Link>
                                    < button type="button" className="btn btn-outline-danger"
                                             onClick={() => deletePost(post.id)}>Delete
                                    </button>
                                </Fragment>
                                : null
                        }
                    </td>
                </tr>
            ))
        }

        </tbody>
    </table>