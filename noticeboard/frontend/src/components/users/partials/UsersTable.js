import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

export default ({users, auth: {user}, deleteUser}) =>
    <table className="table">
        <thead className="thead-dark">
        <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Registration Number</th>
        </tr>
        </thead>
        <tbody>
        {
            users.map((user, index) => (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.registration_no}</td>
                    <td>{user.last_name}</td>
                    <td style={{display: 'flex', justifyContent: 'space-between'}}>
                        {
                            user.role === 'Administrator' ?
                                <Fragment>
                                    <Link to="/users" params={{id: user.id}} type="button" style={{marginRight: 20}}
                                          className="btn btn-outline-success">Edit
                                    </Link>
                                    < button type="button" className="btn btn-outline-danger"
                                             onClick={() => deleteUser(user.id)}>Delete
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