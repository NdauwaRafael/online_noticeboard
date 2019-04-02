import React from 'react';
import {Link} from 'react-router-dom';

export default ({logoutUser, auth: {user}, Fragment}) => {
    let canAddPost = user.role === 'Administrator' || user.role === 'HOD' || user.role === 'student_leader' || parseInt(user.id)===1;
    return (
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"
                       id="download">Categories <span className="caret"> </span>
                    </a>

                    <div className="dropdown-menu" aria-labelledby="download">
                        <strong style={{opacity: .5}} className="dropdown-item"
                        >Posts Categories</strong>
                        <div className="dropdown-divider"/>
                        <Link to="/posts/public" className="dropdown-item"
                        >Public Posts</Link>
                        <Link to="/posts/departmental" className="dropdown-item"
                        >Departmental Posts</Link>
                        <div className="dropdown-divider"/>
                        <a className="dropdown-item" href="#"
                        >Other Posts</a>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Help</a>
                </li>

                {
                    canAddPost ?

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"
                               id="download">Admin Actions <span className="caret"> </span>
                            </a>

                            <div className="dropdown-menu" aria-labelledby="download">
                                <strong style={{opacity: .5}} className="dropdown-item"
                                >Utility Links</strong>
                                <div className="dropdown-divider"/>
                                <Link to="/addpost"
                                      className="dropdown-item">Add a post</Link>
                                {user.role === 'Administrator' || parseInt(user.id)===1?
                                    <Fragment>
                                        <div className="dropdown-divider"/>
                                        <Link className="dropdown-item" to="/user/add"
                                        >Add Users</Link>
                                        <Link className="dropdown-item" to="/users"
                                        >View Users</Link>
                                        <div className="dropdown-divider"/>
                                        <Link className="dropdown-item" to="/departments/add"
                                        >Add Department</Link>
                                        <Link className="dropdown-item" to="/departments"
                                        >View Departments</Link>
                                        <div className="dropdown-divider"/>
                                        <a className="dropdown-item" href="#"
                                        >Manage Users</a>
                                    </Fragment>

                                    : null}

                            </div>
                        </li>
                        : null
                }

            </ul>

            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"
                       id="download">{user ? `${user.first_name} ${user.last_name}` : 'User Account'} <span
                        className="caret"> </span></a>
                    <div className="dropdown-menu" aria-labelledby="download">
                        <a className="dropdown-item"
                           href="#">Profile</a>
                        <div className="dropdown-divider"/>
                        <button className="dropdown-item"
                        >Help
                        </button>
                        <button className="dropdown-item"
                        >FAQS
                        </button>
                        <div className="dropdown-divider"/>
                        <button className="dropdown-item"
                        >Account Terms
                        </button>
                        <button className="dropdown-item" onClick={logoutUser}
                        >Account Logout
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}
